import { BeforeAuth } from "@components/BeforeAuth";
import { useAuthStore } from "@hooks/zustand/useAuthStore";
import axiosClient from "@libs/axiosClient";
import React, { useEffect, useState } from "react";
import DeletedItem from "../components/DeletedItem";
import Layout from "../components/Layout";
import { PageTitle } from "../components/PageTitle";

type Data = {
  id: number;
  deviceId: number;
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
export const Histories: React.FC = () => {
  const accessToken = useAuthStore((state) => state.accessToken);
  const memberId = useAuthStore((state) => state.memberId);
  const [data, setData] = useState<Data[]>([]);

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
    <Layout className="flex flex-col px-6 pt-[140px] pb-[60px]">
      <PageTitle
        icon={<img src="/images/list/server.svg" />}
        title="내 삭제 내역"
      />
      {!accessToken ? (
        <BeforeAuth />
      ) : (
        <div className="flex flex-col gap-2">
          {data.map((row) => {
            return (
              <DeletedItem
                key={row.id}
                id={row.id}
                atmId={row.atmId}
                deletionAppTypeCode={row.deletionAppTypeCode}
                deletionAppVersion={row.deletionAppVersion}
                deletionMethodCode={row.deletionMethodCode}
                imei={row.imei || ""}
              />
            );
          })}
        </div>
      )}
    </Layout>
  );
};
