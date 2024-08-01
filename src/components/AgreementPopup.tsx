import { useAuthStore } from "@hooks/zustand/useAuthStore";
import axiosClient from "@libs/axiosClient";
import React, { useCallback, useEffect, useState } from "react";
import usePopupStore from "../stores/usePopupStore";
import { Button } from "./Button";
import Popup from "./Popup";
import Switch from "./Switch";

const AgreementPopup: React.FC = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const saveAgreement = useCallback((checked: boolean) => {
    const memberId = useAuthStore.getState().memberId;
    axiosClient.post("/customer/api-safe/marketing-agreements", {
      memberId,
      termsId: "termsIdabc",
      agreementYn: checked ? "Y" : "N",
    });
  }, []);

  const fetchAgreement = useCallback(async () => {
    const memberId = useAuthStore.getState().memberId;
    const response = axiosClient.get(
      `/customer/api-safe/marketing-agreements?memberId=${memberId}&termsId=termsIdabc`
    );
    setIsChecked(response.data.data.agreementYn === "Y");
  }, []);

  useEffect(() => {
    fetchAgreement();
  }, [fetchAgreement]);

  return (
    <Popup
      title="서비스 동의 내역"
      onClose={() => {
        usePopupStore.getState().closeAgreement();
      }}
    >
      <div className="h-[92px] flex-col justify-start items-start gap-[19px] mt-[20px] mb-[60px]">
        <div className="text-[#8b8b8b] text-sm font-normal font-['SUIT'] leading-[18px] mb-[19px]">
          서비스 동의
        </div>
        <div className="self-stretch h-[55px] flex-col justify-start items-start gap-[11px] flex mb-[11px]">
          <div className="flex self-stretch justify-between items-center">
            <div className="flex flex-row">
              <span className="text-black text-base font-extrabold font-['SUIT'] leading-tight flex-1">
                마케팅 정보 수신:
              </span>
              <span className="text-[#b3b3b3] text-base font-extrabold font-['SUIT'] leading-tight">
                {isChecked ? "ON" : "OFF"}
              </span>
            </div>
            <Switch
              checked={isChecked}
              onChange={(checked) => {
                setIsChecked(checked);
              }}
            />
          </div>
          <div className="self-stretch text-[#5e5e5e] text-xs font-normal font-['SUIT'] leading-none">
            최근 변동 일시 : 2024-05-01 09:00:00
          </div>
        </div>
      </div>
      <Button
        title="변경 저장"
        onClick={() => {
          saveAgreement(isChecked);
        }}
      />
    </Popup>
  );
};

export default AgreementPopup;
