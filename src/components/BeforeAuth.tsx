import { useAuthStore } from "@hooks/zustand/useAuthStore";
import axiosClient from "@libs/axiosClient";
import { useLocalStorage } from "@uidotdev/usehooks";
import React, { useCallback, useState } from "react";
import Auth from "../components/Auth";
import Loading from "../components/Loading";
import Alert from "./Alert";

export const BeforeAuth: React.FC = () => {
  const [identificationId, setIdentificationId] = useLocalStorage(
    "identificationId",
    ""
  );
  const [alert, setAlert] = useState<
    | {
        message: string;
        onCancel?: () => void;
        onConfirm?: () => void;
      }
    | undefined
  >();

  const serviceId = useAuthStore((state) => state.serviceId);

  const onAuth = useCallback(
    async (phoneNumber: string) => {
      console.log(
        "import.meta.env.VITE_ALIMTALK_TOKEN",
        serviceId,
        import.meta.env.VITE_ALIMTALK_TOKEN
      );

      try {
        const response = await axiosClient.post(
          `/member/api-safe/pass-identifications`,
          {
            channelCode: "CHNLMINWEB",
            menuCode: "mintit-web-safe-identification",
            authType: "M",
            popupGubun: "",
            customize: "Mobile",
            gender: "",
            successRedirectUrl: import.meta.env.VITE_SUCCESS_REDIRECT_URL,
            failRedirectUrl: import.meta.env.VITE_FAIL_REDIRECT_URL,
            mobileNum: phoneNumber,
          },
          {
            headers: {
              "DRP-SERVICE-ID": serviceId,
              Authorization: `Bearer ${import.meta.env.VITE_ALIMTALK_TOKEN}`,
            },
          }
        );

        const id = response.data?.data?.id;
        setIdentificationId(id || "");
      } catch (e) {
        console.log(e);
      }
    },
    [serviceId, setIdentificationId]
  );

  const onCancel = useCallback(() => {
    setAlert({
      message: "본인 인증을 취소 하시겠습니까?",
      onConfirm() {
        setIdentificationId("");
        setAlert(undefined);
      },
      onCancel() {
        setAlert(undefined);
      },
    });
  }, [setIdentificationId]);

  const onConfirm = useCallback(async () => {
    try {
      const response = await axiosClient.get(
        `/member/api-safe/pass-identifications/${identificationId}/token`
      );

      console.log(response.data);
      const accessToken = response.data?.data?.accessToken;
      const accessTokenExpiresIn = response.data?.data?.accessTokenExpiresIn;
      const refreshToken = response.data?.data?.refreshToken;
      const refreshTokenExpiresIn = response.data?.data?.refreshTokenExpires;
      const memberId = response.data?.data?.memberId;

      if (!accessToken) {
        setAlert({
          message: "본인 인증이 아직 완료되지\n않았습니다.",
          onConfirm() {
            setAlert(undefined);
          },
        });
      } else {
        useAuthStore.getState().save({
          accessToken,
          accessTokenExpiresIn,
          refreshToken,
          refreshTokenExpiresIn,
          accessTokenCreatedAt: Date.now(),
          refreshTokenCreatedAt: Date.now(),
        });
        useAuthStore.getState().setMemberId(memberId);
        setIdentificationId("");
      }
    } catch (e) {
      setIdentificationId("");
      console.log(e);
    }
  }, [identificationId, setIdentificationId]);

  return (
    <>
      {identificationId ? (
        <Loading onCancel={onCancel} onConfirm={onConfirm} />
      ) : (
        <Auth onAuth={onAuth} />
      )}
      {alert && (
        <Alert
          message={alert?.message}
          onConfirm={alert?.onConfirm}
          onCancel={alert?.onCancel}
          onClose={() => setAlert(undefined)}
        />
      )}
    </>
  );
};
