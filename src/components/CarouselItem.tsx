import { FC, ReactNode } from "react";

type Props = {
  content: ReactNode | string;
};
const CarouselItem: FC<Props> = ({ content }) => {
  return (
    <div
      style={{
        width: 390,
        height: 280,
      }}
    >
      <div
        style={{
          backgroundColor: "red",
        }}
        className="h-full "
      >
        <p>{content}</p>
      </div>
    </div>
  );
};

export default CarouselItem;
