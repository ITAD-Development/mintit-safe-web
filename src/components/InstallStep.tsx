import { FC, ReactNode } from "react";
import nl2br from "react-nl2br";

type Props = {
  step: number;
  title?: ReactNode | string;
  headerDescription?: ReactNode | string;
  footerDescription?: ReactNode | string;
  imageSrc?: string;
};

const InstallStep: FC<Props> = ({
  step,
  title,
  headerDescription,
  footerDescription,
  imageSrc,
}) => {
  return (
    <div className="mb-8">
      <h3 className="text-sm text-blue-500 font-semibold mb-2">STEP 0{step}</h3>
      {typeof title === "string" && (
        <p className="text-gray-700 mb-4">{title}</p>
      )}
      {typeof title !== "string" && title}
      {typeof headerDescription === "string" && (
        <p className="text-md text-gray-400 mb-4">{nl2br(headerDescription)}</p>
      )}
      {typeof headerDescription !== "string" && headerDescription}
      <img src={imageSrc} alt="Profile Installation" className="mb-4 w-full" />
      {typeof footerDescription === "string" && (
        <p className="text-md text-gray-400">{nl2br(footerDescription)}</p>
      )}
      {typeof footerDescription !== "string" && footerDescription}
    </div>
  );
};

export default InstallStep;
