import { useAuthStore } from "@hooks/zustand/useAuthStore";
import { useLocalStorage } from "@uidotdev/usehooks";
import axios from "axios";
import React, { useCallback } from "react";
import Auth from "../components/Auth";
import Loading from "../components/Loading";

export const BeforeAuth: React.FC = () => {
  const [identificationId, setIdentificationId] = useLocalStorage(
    "identificationId",
    ""
  );

  const serviceId = useAuthStore((state) => state.serviceId);

  const onAuth = useCallback(
    async (phoneNumber: string) => {
      console.log(
        "import.meta.env.VITE_ALIMTALK_TOKEN",
        serviceId,
        import.meta.env.VITE_ALIMTALK_TOKEN
      );

      try {
        const response = await axios.post(
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
    setIdentificationId("");
  }, [setIdentificationId]);

  const onConfirm = useCallback(async () => {
    try {
      const response = await axios.get(
        `/member/api-safe/pass-identifications/${identificationId}/token`,
        {
          headers: {
            "DRP-SERVICE-ID": serviceId,
          },
        }
      );

      console.log(response.data);
      const accessToken = response.data?.data?.accessToken;
      const accessTokenExpiresIn = response.data?.data?.accessTokenExpiresIn;
      const refreshToken = response.data?.data?.refreshToken;
      const refreshTokenExpiresIn = response.data?.data?.refreshTokenExpires;
      const memberId = response.data?.data?.memberId;

      if (!accessToken) {
        alert("인증해 주세요");
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
  }, [identificationId, serviceId, setIdentificationId]);

  return (
    <>
      {identificationId ? (
        <Loading onCancel={onCancel} onConfirm={onConfirm} />
      ) : (
        <Auth onAuth={onAuth} />
      )}
    </>
  );
};
