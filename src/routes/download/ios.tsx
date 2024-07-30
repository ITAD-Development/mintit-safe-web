import React from "react";
import { Outlet } from "react-router-dom";
import { Button } from "../../components/Button";

export const Ios: React.FC = () => {
  return (
    <>
      <div className="px-6">
        <Button
          icon={<img src="/images/download/ios-download.svg" />}
          title="IOS 버전 다운로드"
          onClick={() => {
            location.href = import.meta.env.VITE_IOS_DOWNLOAD_URL;
          }}
        />
      </div>
      <Outlet />
    </>
  );
};
