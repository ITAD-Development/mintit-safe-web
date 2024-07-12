import { AdministratorApiAdminAdministratorsRefreshTokenPostMutation } from "@_generated/tanstack";
import { SystemToast } from "@classes/SystemToast";
import { useAuthStore } from "@hooks/zustand/useAuthStore";
import router from "@routes/index";
import axios, { AxiosError, AxiosRequestHeaders } from "axios";

let isTryingRefreshToken = false;
enum REFRESH_TOKEN_PROCESSING_STATUS {
  PROCESSING = "PROCESSING",
  SUCCESS = "SUCCESS",
  FAILURE = "FAILURE",
  NOT_EXPIRED = "NOT EXPIRED",
}

function waitForTokenRefresh(): Promise<void> {
  return new Promise((resolve) => {
    if (isTryingRefreshToken === false) {
      resolve();
    }

    // 토큰 리프레시가 완료될 때까지 최대 10초만 대기
    const waitStartTime = Date.now();
    const intervalTimer = setInterval(() => {
      console.log("waitForTokenRefresh", isTryingRefreshToken);
      if (Date.now() - waitStartTime! > 10000) {
        clearInterval(intervalTimer);
        isTryingRefreshToken = false;
        resolve();
      }

      if (isTryingRefreshToken === false) {
        clearInterval(intervalTimer);
        resolve();
      }
    }, 1000);
  });
}

async function refresh(): Promise<REFRESH_TOKEN_PROCESSING_STATUS> {
  console.log("isTryingRefreshToken", isTryingRefreshToken);
  if (isTryingRefreshToken) {
    console.log("토큰 리프레시중");
    await waitForTokenRefresh();
    return REFRESH_TOKEN_PROCESSING_STATUS.PROCESSING;
  }

  const { refreshToken } = useAuthStore.getState();
  console.log("refresh start", refreshToken);
  if (!refreshToken) {
    console.log("리프레시 토큰이 없습니다.");
    isTryingRefreshToken = false;
    return REFRESH_TOKEN_PROCESSING_STATUS.FAILURE;
  }

  // 요청이 전달되기 전에 작업 수행
  const { accessTokenExpiresIn, accessTokenCreatedAt } =
    useAuthStore.getState();

  const earlyAccessTokenExpiresIn = (accessTokenExpiresIn || 0) * 0.8;

  const isAccessTokenExpired = accessTokenCreatedAt
    ? Date.now() - accessTokenCreatedAt > earlyAccessTokenExpiresIn
    : true;

  console.log(
    "checkAndRefreshToken isAccessTokenExpired",
    isAccessTokenExpired
  );

  if (!isAccessTokenExpired) {
    isTryingRefreshToken = false;
    return REFRESH_TOKEN_PROCESSING_STATUS.NOT_EXPIRED;
  }

  try {
    isTryingRefreshToken = true;
    const response =
      await AdministratorApiAdminAdministratorsRefreshTokenPostMutation(
        {
          body: {
            refreshToken,
          },
        },
        {
          timeout: 5000,
        }
      );

    console.log("refresh response.data", response.data);

    if (response.data && response.code === "CM0000") {
      useAuthStore.getState().save({
        accessToken: response.data.accessToken,
        accessTokenExpiresIn: response.data.accessTokenExpiresIn,
        refreshToken: response.data.refreshToken,
        refreshTokenExpiresIn: response.data.refreshTokenExpiresIn,
        accessTokenCreatedAt: Date.now(),
        refreshTokenCreatedAt: Date.now(),
      });
      isTryingRefreshToken = false;
      return REFRESH_TOKEN_PROCESSING_STATUS.SUCCESS;
    } else {
      isTryingRefreshToken = false;
      return REFRESH_TOKEN_PROCESSING_STATUS.FAILURE;
    }
  } catch (error) {
    console.log("refresh token error", error);
  }
  isTryingRefreshToken = false;
  return REFRESH_TOKEN_PROCESSING_STATUS.FAILURE;
}

const axiosClient = axios.create({
  // withCredentials: true
  // 추가적으로 헤더나 타임아웃 등의 기본 설정을 추가할 수 있습니다.,
  baseURL:
    Boolean(import.meta.env.VITE_USE_PROXY) !== true
      ? import.meta.env.VITE_MAIN_API_URL
      : undefined,
});

axiosClient.interceptors.request.use(
  async (config) => {
    // console.log('isAccessTokenExpired', isAccessTokenExpired);
    // console.log(
    //   'isRefreshTokenExpired',
    //   Date.now() - refreshTokenCreatedAt,
    //   earlyRefreshTokenExpiresIn,
    //   isRefreshTokenExpired
    // );

    if (config.url?.includes("refresh-token") === false) {
      await refresh();
    }

    let accessToken = useAuthStore.getState().accessToken;
    const serviceId = useAuthStore.getState().serviceId;

    if (config.url?.includes("refresh-token")) {
      accessToken = undefined;
    }

    const { headers, ...rest } = config;
    return {
      headers: {
        "DRP-SERVICE-ID": serviceId,
        Authorization: accessToken ? `Bearer ${accessToken}` : undefined,
        ...headers,
      } as AxiosRequestHeaders & {
        "DRP-SERVICE-ID": string;
      },
      ...rest,
    };
  },
  function (error) {
    console.log(error);
    // 네트워크 오류?
    // 요청 오류가 있는 작업 수행
    return Promise.reject(error);
  }
);

// 응답 인터셉터 추가하기
axiosClient.interceptors.response.use(
  function (response) {
    // 2xx 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
    // 응답 데이터가 있는 작업 수행

    if (response.data.code !== "CM0000") {
      SystemToast.error(response.data.message);
      throw new AxiosError(
        response.data.message,
        response.data.code,
        undefined,
        undefined,
        response
      );
    }

    return response;
  },
  async function (error) {
    // 2xx 외의 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
    // 응답 오류가 있는 작업 수행

    if (error instanceof AxiosError) {
      // console.log('error', error.code);
      if (error.code === "FRONT0001") {
        // router.navigate('/login');
        SystemToast.error(error.code);
        return Promise.reject(error);
      }
    }

    if (error.response.status === 500) {
      SystemToast.error(error.response.data.message);
      return Promise.reject(error);
    }

    if (error.response.status === 401) {
      router.navigate("/login");
      return Promise.reject(error);
    }

    return Promise.reject(error);
  }
);

export default axiosClient;
