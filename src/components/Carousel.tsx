import Slider, { Settings } from "react-slick";
import CarouselItem from "./CarouselItem";

function Carousel() {
  const settings: Settings = {
    dots: false,
    infinite: true,
    centerMode: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    adaptiveHeight: true,
  };
  return (
    <div className="slider-container" style={{ height: 300, width: "98%" }}>
      <Slider {...settings}>
        <CarouselItem content={"100"} />
        <CarouselItem content={"200"} />
        <CarouselItem content={"300"} />
        <CarouselItem content={"400"} />
        <CarouselItem content={"500"} />
      </Slider>
    </div>
  );
}

export default Carousel;
