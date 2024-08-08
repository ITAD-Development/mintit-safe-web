import React from "react";

export type DeletedItemProps = {
  isSelected?: boolean;
  petName: string;
  imei: string;
  model: string;
  date: string;
  onClick?: () => void;
  onMouseDown?: () => void;
};

const DeletedItem: React.FC<DeletedItemProps> = ({
  isSelected,
  petName,
  imei,
  model,
  date,
  onClick,
  onMouseDown,
}) => {
  if (!isSelected) {
    return (
      <div
        className="p-5 rounded border border-neutral-200 flex-col justify-start items-start gap-3 flex cursor-pointer"
        onClick={onClick}
        onMouseDown={onMouseDown}
      >
        <div className="text-zinc-600 text-sm leading-[18px]">{petName}</div>
        <div className="justify-start items-start gap-5 flex">
          <div className="text-zinc-600 text-sm leading-[18px]">
            IMEI
            <br />
            Model
            <br />
            Date
          </div>
          <div className="w-[147px] text-zinc-600 text-sm leading-[18px]">
            {imei}
            <br />
            {model}
            <br />
            {date}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`p-5 bg-teal-50 rounded border border-teal-300 flex-col justify-start items-start gap-3 flex`}
      onClick={onClick}
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
          {imei}
          <br />
          {model}
          <br />
          {date}
        </div>
      </div>
    </div>
  );
};

export default DeletedItem;
