import { useEffect, useRef, useState } from "react";
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
  const contentRef = useRef<HTMLDivElement>(null);

  const [width, setWidth] = useState(200);

  useEffect(() => {
    // congtentRef를 observe하여 height를 조절 화면의 높이에 맞게 조절, 브라우저의 크기 변경시에도 조절 될것
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setWidth(entry.contentRect.width);
      }
    });
    if (contentRef.current) {
      resizeObserver.observe(contentRef.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <>
      <div
        style={{ height: 236, width: "100%" }}
        ref={contentRef}
        className="flex items-center justify-center"
      >
        <div style={{ width }}>
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
              <img
                src="/images/main/swiper/01.png"
                alt="slide1"
                style={{ width }}
              />
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
