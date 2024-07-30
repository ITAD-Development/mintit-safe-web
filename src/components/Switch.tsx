import { FC } from "react";

type SwitchProps = {
  checked: boolean;
  onChange: (checked: boolean) => void;
};

const Switch: FC<SwitchProps> = ({ checked, onChange }) => {
  const color = checked ? "#A0F0E0" : "#e6e6e6";

  return (
    <div
      className="p-0.5 rounded-[64px] justify-start items-start flex"
      style={{
        backgroundColor: color,
      }}
      onClick={() => {
        onChange(!checked);
      }}
    >
      {checked ? (
        <>
          <div
            className="w-6 h-6 rounded-full"
            style={{
              backgroundColor: color,
            }}
          />
          <div className="w-6 h-6 bg-white rounded-full" />
        </>
      ) : (
        <>
          <div className="w-6 h-6 bg-white rounded-full" />
          <div
            className="w-6 h-6 rounded-full"
            style={{
              backgroundColor: color,
            }}
          />
        </>
      )}
    </div>
  );
};

export default Switch;
