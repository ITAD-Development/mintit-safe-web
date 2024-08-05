import { FC, ReactNode } from "react";
import nl2br from "react-nl2br";

type Props = {
  step: number;
  title?: ReactNode | string;
  headerDescription?: ReactNode | string;
  footerDescription?: ReactNode | string;
  body?: ReactNode;
};

const InstallStep: FC<Props> = ({
  step,
  title,
  headerDescription,
  footerDescription,
  body,
}) => {
  return (
    <div>
      <div className="flex mb-[16px] items-start">
        <div className="w-10 mr-2.5 text-teal-400 text-[11px] font-extrabold leading-[20px] ">
          STEP {step}
        </div>
        {typeof title === "string" && (
          <div className="flex-1">
            <div className=" text-zinc-800 text-base font-extrabold">
              {title}
            </div>
          </div>
        )}
        {typeof title !== "string" && <div className="flex-1">{title}</div>}
      </div>
      {typeof headerDescription === "string" && (
        <div className="text-zinc-500 text-xs font-normal leading-none">
          {nl2br(headerDescription)}
        </div>
      )}
      {typeof headerDescription !== "string" && headerDescription}
      {body && <div className="flex felx-col justify-center">{body}</div>}
      {typeof footerDescription === "string" && (
        <div className="text-zinc-500 text-xs font-normal leading-4 mt-2">
          {nl2br(footerDescription)}
        </div>
      )}
      {typeof footerDescription !== "string" && footerDescription}
    </div>
  );
};

export default InstallStep;
