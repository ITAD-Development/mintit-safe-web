import React from "react";
import usePopupStore from "../stores/usePopupStore";

export type DeletedItemProps = {
  isSelected?: boolean;
};

const DeletedItem: React.FC<DeletedItemProps> = ({ isSelected }) => {
  if (!isSelected) {
    return (
      <div className="p-5 rounded border border-neutral-200 flex-col justify-start items-start gap-3 flex">
        <div className="text-zinc-600 text-sm leading-[18px]">
          갤럭시 S24 Plus
        </div>
        <div className="justify-start items-start gap-5 flex">
          <div className="text-zinc-600 text-sm leading-[18px]">
            IMEI
            <br />
            Model
            <br />
            Date
          </div>
          <div className="w-[147px] text-zinc-600 text-sm leading-[18px]">
            12345-67-89123231
            <br />
            SF-N124SH
            <br />
            2024-05-01
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`p-5 bg-teal-50 rounded border border-teal-300 flex-col justify-start items-start gap-3 flex`}
      onClick={() => {
        usePopupStore.getState().openCertification();
      }}
    >
      <div className="text-black text-sm font-bold leading-[18px]">
        갤럭시 S24 Plus
      </div>
      <div className="justify-start items-start gap-5 flex">
        <div className="text-black text-sm font-bold leading-[18px]">
          IMEI
          <br />
          Model
          <br />
          Date
        </div>
        <div className=" text-black text-sm font-bold leading-[18px]">
          12345-67-89123231
          <br />
          SF-N124SH
          <br />
          2024-05-01
        </div>
      </div>
    </div>
  );
};

export default DeletedItem;
