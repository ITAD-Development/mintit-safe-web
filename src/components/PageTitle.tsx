import React, { ReactNode } from "react";

type Props = {
  icon: ReactNode;
  title: string;
  RightComponent?: ReactNode;
};
export const PageTitle: React.FC<Props> = ({ icon, title, RightComponent }) => {
  return (
    <div className="flex h-12 justify-start items-center gap-2">
      <div>{icon}</div>
      <div className="text-left text-zinc-800 text-base font-bold leading-tight flex-1">
        {title}
      </div>
      <div>{RightComponent}</div>
    </div>
  );
};
