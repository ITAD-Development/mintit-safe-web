import { BeforeAuth } from "@components/BeforeAuth";
import { useAuthStore } from "@hooks/zustand/useAuthStore";
import React from "react";
import DeletedItem from "../components/DeletedItem";
import Layout from "../components/Layout";
import { PageTitle } from "../components/PageTitle";

export const Histories: React.FC = () => {
  const accessToken = useAuthStore((state) => state.accessToken);

  return (
    <Layout className="flex flex-col px-6 pb-[60px]">
      <PageTitle
        icon={<img src="/images/list/server.svg" />}
        title="내 삭제 내역"
      />
      {!accessToken ? (
        <BeforeAuth />
      ) : (
        <div className="flex flex-col gap-2">
          <DeletedItem />
          <DeletedItem />
          <DeletedItem />
          <DeletedItem />
          <DeletedItem />
          <DeletedItem />
          <DeletedItem />
        </div>
      )}
    </Layout>
  );
};
