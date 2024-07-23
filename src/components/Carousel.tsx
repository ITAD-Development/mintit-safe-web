import { useRef, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
// appendDots: (dots) => <ul className="flex mt-[24px]"> {dots} </ul>,
// customPaging: () => (
//   <div className="w-[6px] h-[6px] bg-teal-300 rounded-[6px]" />
// ),

function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperRef>(null);
  return (
    <>
      <div style={{ height: 236, width: 372 }}>
        <Swiper
          id="carousel"
          modules={[Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          onSwiper={(swiper) => console.log(swiper)}
          ref={swiperRef}
        >
          <SwiperSlide>
            <img src="/images/main/swiper/01.png" alt="slide1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/main/swiper/02.png" alt="slide1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/main/swiper/03.png" alt="slide1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/main/swiper/04.png" alt="slide1" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="flex justify-center mt-[24px] gap-2 mb-[40px]">
        <div
          className={`w-[6px] h-[6px] ${
            activeIndex === 0 ? "bg-teal-300" : "bg-neutral-200"
          } rounded-[6px]`}
          onClick={() => swiperRef.current?.swiper.slideTo(0)}
        />
        <div
          className={`w-[6px] h-[6px] ${
            activeIndex === 1 ? "bg-teal-300" : "bg-neutral-200"
          } rounded-[6px]`}
          onClick={() => swiperRef.current?.swiper.slideTo(1)}
        />
        <div
          className={`w-[6px] h-[6px] ${
            activeIndex === 2 ? "bg-teal-300" : "bg-neutral-200"
          } rounded-[6px]`}
          onClick={() => swiperRef.current?.swiper.slideTo(2)}
        />
        <div
          className={`w-[6px] h-[6px] ${
            activeIndex === 3 ? "bg-teal-300" : "bg-neutral-200"
          } rounded-[6px]`}
          onClick={() => swiperRef.current?.swiper.slideTo(3)}
        />
      </div>
    </>
  );
}

export default Carousel;
