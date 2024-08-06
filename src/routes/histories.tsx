import Alert from "@components/Alert";
import { BeforeAuth } from "@components/BeforeAuth";
import {
  APP_HEADER_HEIGHT,
  APP_TOP_MENU_HEIGHT,
} from "@components/ContentHeader";
import styled from "@emotion/styled";
import { useScreenSize } from "@hooks/useScreenSize";
import { useAuthStore } from "@hooks/zustand/useAuthStore";
import axiosClient from "@libs/axiosClient";
import React, { useEffect, useState } from "react";
import DeletedItem from "../components/DeletedItem";
import Layout from "../components/Layout";
import { PageTitle } from "../components/PageTitle";
import usePopupStore from "../stores/usePopupStore";

type Data = {
  id: number;
  deviceId: number;
  device: {
    imei: string;
    deviceModel: {
      number: string;
      name: string;
    };
  };
  fileUrl: string;
  deletionRequestTypeCode: string;
  atmId: string | null;
  deletionAppTypeCode: string;
  deletionAppVersion: string;
  deletionMethodCode: string;
  deleteionCertificationFileId: string;
  inspectionId: string | null;
  purchaseId: string | null;
  progressRate: number;
  status: string;
  createdAt: string;
  createdBy: string;
  updatedAt: string;
  updatedBy: string;
};

const AgreementButton = styled.div`
  display: flex;
  padding: 6px 10px 6px 14px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border-radius: 50px;
  border: 1px solid #d5d5d5;
`;
const AgreementButtonTitle = styled.div`
  color: #333;
  text-align: center;
  font-feature-settings: "clig" off, "liga" off;
  font-family: SUIT;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const Histories: React.FC = () => {
  const accessToken = useAuthStore((state) => state.accessToken);
  const memberId = useAuthStore((state) => state.memberId);
  const [data, setData] = useState<Data[]>([]);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const { isXL } = useScreenSize();

  useEffect(() => {
    async function init() {
      if (!accessToken || !memberId) {
        return;
      }

      console.log("accessToken", accessToken, "memberId", memberId);

      try {
        const responseCode = await axiosClient.get(
          "/common/api-safe/common-codes?commonCodeTypeId=PTNR000000"
        );
        console.log("responseCode", responseCode.data.data);

        const responseData = await axiosClient.get(
          `/device/api-safe/device-deletions/user/${memberId}`
        );
        console.log("response", responseData.data.data);
        setData(responseData.data.data || []);
      } catch (e) {
        console.log(e);
      }
    }

    init();
  }, [accessToken, memberId]);

  return (
    <Layout
      className="flex flex-col px-6 pb-[60px]"
      style={{
        paddingTop: isXL ? APP_TOP_MENU_HEIGHT : APP_HEADER_HEIGHT,
      }}
    >
      <PageTitle
        icon={<img src="/images/list/server.svg" />}
        title="내 삭제 내역"
        RightComponent={
          <div>
            {accessToken && (
              <AgreementButton
                onClick={() => {
                  usePopupStore.getState().openAgreement();
                }}
              >
                <AgreementButtonTitle>약관 동의 내역</AgreementButtonTitle>
                <img src="/images/histories/right.svg" />
              </AgreementButton>
            )}
          </div>
        }
      />
      {!accessToken ? (
        <BeforeAuth />
      ) : (
        <div className="flex flex-col gap-2">
          {data.map((row) => {
            return (
              <DeletedItem
                key={row.id}
                petName={row.device.deviceModel.name}
                imei={row.device.imei}
                model={row.device.deviceModel.number}
                date={row.createdAt}
                isSelected={row.id === selectedId}
                onClick={() => {
                  setSelectedId(row.id);
                  if (row.status !== "C" || row.fileUrl.includes("null")) {
                    setIsProcessing(true);
                    return;
                  }

                  usePopupStore.getState().openCertification(row.fileUrl);
                }}
              />
            );
          })}
        </div>
      )}
      {isProcessing && (
        <Alert
          message="고객님의 삭제 인증서를 생성 중입니다."
          onConfirm={() => {
            setIsProcessing(false);
          }}
          onClose={() => {
            setIsProcessing(false);
          }}
        />
      )}
    </Layout>
  );
};
