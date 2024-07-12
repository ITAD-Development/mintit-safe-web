
import axiosClient from '@libs/axiosClient';
import { useQuery, useMutation, QueryOptions } from '@tanstack/react-query';
import { AxiosRequestConfig } from 'axios';
const isLoading: {
  [key: string]: boolean;
} = {};

const apiResponseCache: {
  [key: string]: any;
} = {};
      

export type ReuqestForCert = {
  // 본인인증 방식
  authType?: string;

  // 본인인증 종류
  popupGubun?: string;

  // 페이지 구분
  customize?: string;

  // 성별
  gender?: string;

  // 본인인증 성공 페이지 URL
  successRedirectUrl?: string;

  // 본인인증 실패 페이지 URL
  failRedirectUrl?: string;

  id?: string;
};


export type Result = {
  // 스마트비전 결과 ID
  RLTM_HNDL_OCUR_ID?: string;

  // 분류요청 Set ID
  SELL_ID?: string;

  // 결과코드
  REUSLT_CODE?: string;

  // 결과코드
  DESCRIPTION?: string;

  // AI 모델 버전
  AI_MODEL_VERSION?: string;

  // inference 타임 이미지 입력부터 전체 판정까지 걸린 시간
  INFERENCE_TIME?: string;

  // 이미지 집합
  CORNER?: any;

  // 전면 이미지 집합
  TOP?: any;

  // 측면 이미지 집합
  SIDE?: any;

  // 후면 이미지 집합
  BACK?: any;

  // LCD 이미지 집합
  LCD?: any;

  REPR_DEFT?: string;

  CLASSIFY_CODE?: string;

  // LCD Segmentation 모델 결과 등급
  SEG_GRADE?: string;

  // LCD Classification 모델 결과 등급
  CLF_GRADE?: string;

  // segGrade 결과와 clfGrade 결과가 동일한지 여부
  IS_EQ_GRADE?: string;

  // 코너필름 설치여부
  HAS_CORNER_FILM?: string;
};


export type SmartVisionImage = {
  // 이미지 아이디
  IMAGE_ID?: string;

  // 이미지 경로
  IMAGE_PATH?: string;

  // 예측 결과
  PREDICT_RESULT?: string;

  // 예측확률 아이디
  PROBABILITY_RESULT_ID?: string;

  // 예측확률 결과
  PROBABILITY_RESULT?: string;
};


export type Report = {
  messageType?: string;

  messageId?: string;

  resultCode?: string;

  reportTime?: string;

  errorText?: string;

  to?: string;

  rgsrId?: string;
};


export type Signup = {
  user?: User;

  userService?: UserService;

  // termsList
  termsList?: TermsList[];
};


export type TermsList = {
  // 약관동의 ID
  termsId?: string;

  // 약관동의 여부
  agreementYn?: string;
};


export type User = {
  // 사용자 이름
  name?: string;

  // 생년월일
  birth?: string;

  // 남성(1)/여성(2)
  gender?: string;

  // 전화번호
  mdn?: string;

  // 국적
  nationality?: string;

  // 연계정보
  ci?: string;
};


export type UserService = {
  // 회원 ID
  membershipId?: string;

  data01?: string;
};


export type Assets = {
  totalAmount?: string;

  incomeType?: string;

  incomeAmount?: string;

  totalYield?: string;

  baseTime?: string;
};


export type AssetsList = {
  assetsType?: string;

  totalConsumeAmount?: string;

  totalAmount?: string;

  totalWeight?: string;

  incomeType?: string;

  incomeAmount?: string;

  totalYield?: string;

  purchaseUnitPrice?: string;
};


export type CommonResponseCommonResponseSingle = {
  code?: string;

  message?: string;

  data?: CommonResponseSingle;
};


export type CommonResponseSingle = {
  code?: string;

  message?: string;

  data?: Single;
};


export type MemberInfo = {
  userKey?: string;

  newCengoldYn?: string;

  newLinkYn?: string;
};


export type Prices = {
  peg?: string;

  pes?: string;
};


export type Single = {
  memberInfo?: MemberInfo;

  assets?: Assets;

  prices?: Prices;

  assetsList?: AssetsList[];
};


export type CommonResponseObject = {
  code?: string;

  message?: string;

  data?: any;
};


export type FilterForStatistics = {
  // ATM 통계 타입
  statisticsType?: string;
};


export type CommonResponseListResponseForStatistics = {
  code?: string;

  message?: string;

  data?: ResponseForStatistics[];
};


export type ResponseForStatistics = {
  // 그룹 키
  groupKey?: string;

  // 매입 건수
  purchaseCount?: number;
};


export const LegacyApiNiceNiceCertReturnSuccessGetQuery = async (
  params: {},
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<string>(
    `/legacy/api-nice/nice-cert/return/success`,
    {
      method: "get",

      paramsSerializer: {
        indexes: null,
      },
      ...options,
    },
  );
  return response.data;
};


export const useLegacyApiNiceNiceCertReturnSuccessGetQuery = (
  params: {},
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<string>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["LegacyApiNiceNiceCertReturnSuccessGet"];

  return useQuery<string>({
    queryKey,
    queryFn: async () => {
      const response = await LegacyApiNiceNiceCertReturnSuccessGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const useLegacyApiNiceNiceCertReturnSuccessGetLazyQuery = (
  params: {},
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<string>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["LegacyApiNiceNiceCertReturnSuccessGet"];

  return useQuery<string>({
    queryKey,
    queryFn: async () => {
      const response = await LegacyApiNiceNiceCertReturnSuccessGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    enabled: false,
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const LegacyApiNiceNiceCertReturnSuccessPostMutation = async (
  params: {},
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<string>(
    `/legacy/api-nice/nice-cert/return/success`,
    {
      method: "post",

      ...options,
    },
  );
  return response.data;
};


export const useLegacyApiNiceNiceCertReturnSuccessPostMutation = () => {
  const mutationKey = "LegacyApiNiceNiceCertReturnSuccessPost";

  return useMutation<
    string,
    Error,
    {
      params: {};
      options?: AxiosRequestConfig<any>;
    }
  >({
    mutationKey: [mutationKey],
    mutationFn: async (configs) => {
      const response = await LegacyApiNiceNiceCertReturnSuccessPostMutation(
        configs.params,
        configs.options,
      );
      return response;
    },
    retry: false,
  });
};


export const LegacyApiNiceNiceCertRequestPageGetQuery = async (
  params: {
    query?: {
      param?: Partial<ReuqestForCert>;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<string>(
    `/legacy/api-nice/nice-cert/request/page`,
    {
      method: "get",
      params: params.query
        ? Object.values(params.query).reduce((acc, row) => {
            return { ...acc, ...row };
          }, {})
        : undefined,

      paramsSerializer: {
        indexes: null,
      },
      ...options,
    },
  );
  return response.data;
};


export const useLegacyApiNiceNiceCertRequestPageGetQuery = (
  params: {
    query?: {
      param?: Partial<ReuqestForCert>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<string>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["LegacyApiNiceNiceCertRequestPageGet"];

  return useQuery<string>({
    queryKey,
    queryFn: async () => {
      const response = await LegacyApiNiceNiceCertRequestPageGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const useLegacyApiNiceNiceCertRequestPageGetLazyQuery = (
  params: {
    query?: {
      param?: Partial<ReuqestForCert>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<string>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["LegacyApiNiceNiceCertRequestPageGet"];

  return useQuery<string>({
    queryKey,
    queryFn: async () => {
      const response = await LegacyApiNiceNiceCertRequestPageGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    enabled: false,
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const LegacyApiNiceNiceCertRequestPagePostMutation = async (
  params: {
    body: ReuqestForCert;
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<string>(
    `/legacy/api-nice/nice-cert/request/page`,
    {
      method: "post",
      data: params.body,
      ...options,
    },
  );
  return response.data;
};


export const useLegacyApiNiceNiceCertRequestPagePostMutation = () => {
  const mutationKey = "LegacyApiNiceNiceCertRequestPagePost";

  return useMutation<
    string,
    Error,
    {
      params: {
        body: ReuqestForCert;
      };
      options?: AxiosRequestConfig<any>;
    }
  >({
    mutationKey: [mutationKey],
    mutationFn: async (configs) => {
      const response = await LegacyApiNiceNiceCertRequestPagePostMutation(
        configs.params,
        configs.options,
      );
      return response;
    },
    retry: false,
  });
};


export const LegacyApiNiceNiceCertReturnFailGetQuery = async (
  params: {},
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<string>(
    `/legacy/api-nice/nice-cert/return/fail`,
    {
      method: "get",

      paramsSerializer: {
        indexes: null,
      },
      ...options,
    },
  );
  return response.data;
};


export const useLegacyApiNiceNiceCertReturnFailGetQuery = (
  params: {},
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<string>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["LegacyApiNiceNiceCertReturnFailGet"];

  return useQuery<string>({
    queryKey,
    queryFn: async () => {
      const response = await LegacyApiNiceNiceCertReturnFailGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const useLegacyApiNiceNiceCertReturnFailGetLazyQuery = (
  params: {},
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<string>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["LegacyApiNiceNiceCertReturnFailGet"];

  return useQuery<string>({
    queryKey,
    queryFn: async () => {
      const response = await LegacyApiNiceNiceCertReturnFailGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    enabled: false,
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const LegacyApiNiceNiceCertRequestRestGetQuery = async (
  params: {
    query?: {
      param?: Partial<ReuqestForCert>;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseObject>(
    `/legacy/api-nice/nice-cert/request/rest`,
    {
      method: "get",
      params: params.query
        ? Object.values(params.query).reduce((acc, row) => {
            return { ...acc, ...row };
          }, {})
        : undefined,

      paramsSerializer: {
        indexes: null,
      },
      ...options,
    },
  );
  return response.data;
};


export const useLegacyApiNiceNiceCertRequestRestGetQuery = (
  params: {
    query?: {
      param?: Partial<ReuqestForCert>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseObject>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["LegacyApiNiceNiceCertRequestRestGet"];

  return useQuery<CommonResponseObject>({
    queryKey,
    queryFn: async () => {
      const response = await LegacyApiNiceNiceCertRequestRestGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const useLegacyApiNiceNiceCertRequestRestGetLazyQuery = (
  params: {
    query?: {
      param?: Partial<ReuqestForCert>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseObject>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["LegacyApiNiceNiceCertRequestRestGet"];

  return useQuery<CommonResponseObject>({
    queryKey,
    queryFn: async () => {
      const response = await LegacyApiNiceNiceCertRequestRestGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    enabled: false,
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const LegacyApiAdminPurchaseStatisticsGetQuery = async (
  params: {
    query?: {
      filter?: Partial<FilterForStatistics>;
    };
  },
  options?: AxiosRequestConfig<any>,
) => {
  const response = await axiosClient<CommonResponseListResponseForStatistics>(
    `/legacy/api-admin/purchase/statistics`,
    {
      method: "get",
      params: params.query
        ? Object.values(params.query).reduce((acc, row) => {
            return { ...acc, ...row };
          }, {})
        : undefined,

      paramsSerializer: {
        indexes: null,
      },
      ...options,
    },
  );
  return response.data;
};


export const useLegacyApiAdminPurchaseStatisticsGetQuery = (
  params: {
    query?: {
      filter?: Partial<FilterForStatistics>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseListResponseForStatistics>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["LegacyApiAdminPurchaseStatisticsGet"];

  return useQuery<CommonResponseListResponseForStatistics>({
    queryKey,
    queryFn: async () => {
      const response = await LegacyApiAdminPurchaseStatisticsGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};


export const useLegacyApiAdminPurchaseStatisticsGetLazyQuery = (
  params: {
    query?: {
      filter?: Partial<FilterForStatistics>;
    };
  },
  axiosOptions?: AxiosRequestConfig<any>,
  queryOptions?: QueryOptions<CommonResponseListResponseForStatistics>,
) => {
  const queryKey = queryOptions?.queryKey
    ? queryOptions?.queryKey
    : ["LegacyApiAdminPurchaseStatisticsGet"];

  return useQuery<CommonResponseListResponseForStatistics>({
    queryKey,
    queryFn: async () => {
      const response = await LegacyApiAdminPurchaseStatisticsGetQuery(
        params,
        axiosOptions,
      );
      return response;
    },
    enabled: false,
    retry: false,
    refetchOnWindowFocus: false,
    gcTime: 1,
    ...queryOptions,
  });
};
