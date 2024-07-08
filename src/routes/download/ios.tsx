import React from "react";
import { Outlet } from "react-router-dom";
import { Button } from "../../components/Button";

export const Ios: React.FC = () => {
  return (
    <>
      <Button title="IOS 버전 다운로드" />
      <Outlet />
    </>
  );
};
