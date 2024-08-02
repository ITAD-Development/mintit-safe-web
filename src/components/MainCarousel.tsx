import axios from "axios";
import { useEffect, useRef, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
// appendDots: (dots) => <ul className="flex mt-[24px]"> {dots} </ul>,
// customPaging: () => (
//   <div className="w-[6px] h-[6px] bg-teal-300 rounded-[6px]" />
// ),

function MainCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperRef>(null);
  const [data, setData] = useState<
    {
      id: number;
      app_banner_img_path: string;
      mobile_web_banner_img_path: string;
      web_banner_img_path: string;
      description: string;
      title: string;
      url: string;
      viewable: boolean;
    }[]
  >([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get("/rest/api/evt/list?is_valid=true", {
          baseURL:
            Boolean(import.meta.env.VITE_USE_PROXY) !== true
              ? import.meta.env.VITE_MINTIT_API_URL
              : undefined,
        });
        setData(response.data.dataset);
      } catch (error) {
        console.error(error);
      }
    };
    fetch();
  }, []);

  return (
    <>
      <div style={{ height: 453, width: 320 }} className="relative">
        <Swiper
          id="main-carousel"
          modules={[Pagination, Autoplay]}
          slidesPerView={1}
          spaceBetween={0}
          slidesPerGroup={1}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          loop={true}
          autoplay={{
            delay: 5000,
          }}
          ref={swiperRef}
        >
          {data
            .filter((row) => row.viewable)
            .map((row) => (
              <SwiperSlide key={row.id}>
                <a target="_blank" href={row.url}>
                  <img
                    src={row.web_banner_img_path}
                    alt={row.title}
                    style={{
                      borderRadius: 10,
                    }}
                  />
                </a>
              </SwiperSlide>
            ))}
        </Swiper>
        <div className="flex justify-center absolute z-10 bottom-3 right-3">
          <div className="self-stretch pl-0.5 pr-1 py-0.5 bg-zinc-800/opacity-40 rounded-sm flex-col justify-center items-center gap-2.5 inline-flex">
            <div className="justify-start items-center inline-flex">
              <div
                className="flex w-5 h-5 relative items-center justify-center"
                style={{
                  background: "rgba(51, 51, 51, 0.40)",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="16"
                  viewBox="0 0 20 16"
                  fill="none"
                >
                  <path d="M7.5 4V12" stroke="white" strokeWidth="1.2" />
                  <path d="M12.5 4V12" stroke="white" strokeWidth="1.2" />
                </svg>
              </div>
              <div
                className="justify-start items-center gap-1 flex px-1 h-5"
                style={{
                  background: "rgba(51, 51, 51, 0.40)",
                }}
              >
                <div className="w-2 text-center text-white text-[10px] font-extrabold leading-[18px]">
                  {activeIndex + 1}
                </div>
                <div className="w-[5px] text-neutral-200 text-[13px] leading-[18px]">
                  /
                </div>
                <div className="w-2 text-center text-neutral-200 text-[10px] leading-[18px]">
                  3
                </div>
              </div>
            </div>
          </div>
          <div className="grow shrink basis-0 self-stretch p-0.5 bg-zinc-800/opacity-40 rounded-sm justify-center items-center gap-2.5 flex">
            <div
              className="w-5 h-5 relative flex items-center justify-center"
              style={{
                background: "rgba(51, 51, 51, 0.40)",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path d="M8 4V12" stroke="white" strokeWidth="1.2" />
                <path d="M12 8L4 8" stroke="white" strokeWidth="1.2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainCarousel;
