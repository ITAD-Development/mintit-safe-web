import React from "react";
import { Button } from "../components/Button";
import DeletedItem from "../components/DeletedItem";
import Layout from "../components/Layout";
import { PageTitle } from "../components/PageTitle";

export const Histories: React.FC = () => {
  return (
    <Layout className="flex flex-col gap-10">
      <div>
        <PageTitle title="내 삭제 내역" />
        <div className="flex flex-col gap-2">
          <DeletedItem />
          <DeletedItem />
          <DeletedItem />
          <DeletedItem />
          <DeletedItem />
          <DeletedItem />
          <DeletedItem />
        </div>
        <p>유효하지 않은 페이지입니다. 휴대폰 본인 인증을 다시 진행해주세요.</p>
        <Button title="휴대폰 본인 인증 하기" />
      </div>
    </Layout>
  );
};
