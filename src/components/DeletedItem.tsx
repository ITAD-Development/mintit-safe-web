import React from "react";
import usePopupStore from "../stores/usePopupStore";

const DeletedItem: React.FC = () => {
  return (
    <div
      className="rounded-md border-2 px-4 py-2"
      onClick={() => {
        usePopupStore.getState().openCertification();
      }}
    >
      <div className="text-sm font-bold">갤럭시 S24 Plus</div>
      <div className="flex">
        <div className="w-20">IMEI</div>
        <div className="flex-1">12345-67-89123231</div>
      </div>
      <div className="flex">
        <div className="w-20">Model</div>
        <div className="flex-1">SF-N124SH</div>
      </div>
      <div className="flex">
        <div className="w-20">Date</div>
        <div className="flex-1">2024-05-01</div>
      </div>
    </div>
  );
};

export default DeletedItem;
