import { FC, ReactNode } from "react";

type Props = {
  content: ReactNode | string;
};
const CarouselItem: FC<Props> = ({ content }) => {
  return (
    <div
      style={{
        width: 280,
        marginRight: 20,
        height: 280,
      }}
    >
      <div
        style={{
          border: "1px solid #000",
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
