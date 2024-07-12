import React, { ReactNode } from "react";

type Props = {
  icon: ReactNode;
  title: string;
};
export const PageTitle: React.FC<Props> = ({ icon, title }) => {
  return (
    <div className="flex h-12 justify-start items-center gap-2">
      <div>{icon}</div>
      <div className="text-center text-zinc-800 text-base font-bold leading-tight">
        {title}
      </div>
    </div>
  );
};
