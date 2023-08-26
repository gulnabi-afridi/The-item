// This is main file where all the Components will merge a make one complete section

import React from "react";
import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// Import Swiper React components
import { Autoplay, Pagination, Navigation } from "swiper";

const Index: React.FC = () => {
  return (
    <>
      <div className={`w-full bg-white`}>
        {/* Info bar */}
        <div className="w-full h-[30px] flex justify-center items-center bg-[#03a573]">
          <p className="text-[13px] text-white font-medium font-inter">
            {" "}
            5 MONTHS OF IT APPRENTICESHIP IN CLOUD
          </p>
        </div>

        {/* Bronchure bar */}
        <div className="w-full md:h-[37px] md:py-0 py-1.5 flex justify-center items-center md:flex-row flex-col Bronchure-gr-bg">
          <p className="text-[13px] text-white font-medium font-inter">
            {" "}
            Enjoy 2 weeks of FREE training before you make payment.
          </p>
          <a
            className="text-[18px] text-white font-semibold font-inter md:ml-1 md:mt-0 mt-1 animate-pulse underline "
            target={"_blank"}
            href="https://theitern.com/Course_Outline.html"
          >
            Download Brochure
          </a>
        </div>

        {/* Slider */}
        <div className="w-full lg:h-[calc(100vh-131px)] md:h-[50vh] sm:h-[40vh] h-[180px] ">
          <Swiper
            spaceBetween={10}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            // pagination={{
            //   clickable: true,
            // }}
            // navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
            style={{
              width: "100%",
              height: "100%",
            }}
          >
            {SliderImage?.map((item: any, index) => {
              return (
                <SwiperSlide
                  key={index}
                  style={{ width: "100%", height: "100%" }}
                >
                  <Image
                    src={item.Img}
                    alt="img"
                    fill
                    className="object-cover"
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>

        <div className="w-full relative z-10 md:mt-[-40px] md:py-0 py-6 ">
          <div
            className={`w-full h-full max-w-[1380px] m-auto sm:px-10 px-5 flex justify-between items-center`}
          >
            <div className="w-full grid md:grid-cols-5 grid-cols-1 md:grid-rows-1 grid-row-g lg:gap-x-4 md:gap-x-2 md:gap-y-0 gap-y-3 ">
              <div className="w-full bg-white h-[80px] drop-shadow-lg rounded-[6px] flex justify-center items-start flex-col p-4 ">
                <h4 className="text-[14px] text-[#000000de] font-medium font-inter leading-[24px] ">
                  Cloud Servers Administration with{" "}
                  <span className="font-bold text-[16px] text-[#000000de] ">
                    Linux
                  </span>
                </h4>
              </div>
              <div className="w-full bg-white h-[80px] drop-shadow-lg rounded-[6px] flex justify-center items-start flex-col p-4 ">
                <h4 className="text-[14px] text-[#000000de] font-medium font-inter leading-[24px] ">
                  Cloud Solution Architecting with{" "}
                  <span className="font-bold text-[16px] text-[#000000de] ">
                    AWS
                  </span>
                </h4>
              </div>
              <div className="w-full bg-white h-[80px] drop-shadow-lg rounded-[6px] flex justify-center items-start flex-col p-4 ">
                <h4 className="text-[14px] text-[#000000de] font-medium font-inter leading-[24px] ">
                  Cloud Infra Automation with{" "}
                  <span className="font-bold text-[16px] text-[#000000de]">
                    Terraform
                  </span>
                </h4>
              </div>
              <div className="w-full bg-white h-[80px] drop-shadow-lg rounded-[6px] flex justify-center items-start flex-col p-4 ">
                <h4 className="text-[14px] text-[#000000de] font-medium font-inter leading-[24px] ">
                  CI/CD Engineering with Jenkins{" "}
                  <span className="font-bold text-[16px] text-[#000000de] ">
                    pipeline
                  </span>
                </h4>
              </div>
              <div className="w-full bg-white h-[80px] drop-shadow-lg rounded-[6px] flex justify-center items-start flex-col p-4 ">
                <h4 className="text-[14px] text-[#000000de] font-medium font-inter leading-[24px] ">
                  DevOps Engineering with{" "}
                  <span className="font-bold text-[16px] text-[#000000de] ">
                    Kubernetes
                  </span>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;

const SliderImage: object[] = [
  {
    Img: "/Home/1.jpg",
  },
  {
    Img: "/Home/2.jpg",
  },
  {
    Img: "/Home/3.jpg",
  },
  {
    Img: "/Home/4.jpg",
  },
];

const Cards: object[] = [
  {
    Title: "Cloud Servers Administration with Linux",
  },
  {
    Title: "Cloud Solution Architecting with AWS",
  },
  {
    Title: "Cloud Infra Automation with Terraform",
  },
  {
    Title: "CI/CD Engineering with  Jenkins pipeline",
  },
  {
    Title: "DevOps Engineering with Kubernetes",
  },
];
