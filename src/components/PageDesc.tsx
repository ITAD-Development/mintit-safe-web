import React, { ReactNode } from "react";
import nl2br from "react-nl2br";

type Props = {
  icon: ReactNode;
  content: string | ReactNode;
};
export const PageDesc: React.FC<Props> = ({ icon, content }) => {
  return (
    <div className="w-full px-4 py-3.5 bg-emerald-50 rounded-md flex-col justify-start items-start gap-2.5 inline-flex">
      <div className="justify-start items-center gap-1.5 flex">
        {icon}
        <div className="text-black text-xs font-normal leading-4">
          {typeof content === "string" ? nl2br(content) : content}
        </div>
      </div>
    </div>
  );
};
