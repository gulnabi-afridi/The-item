import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ReactStars from "react-stars";

const OurEarners: React.FC = () => {
  const ratingChanged = (newRating: any) => {
    console.log(newRating);
  };
  return (
    <div className="w-fll bg-[#faf4ff]">
      <div className="w-full max-w-[1380px] m-auto sm:px-10 px-5 py-12 flex justify-start items-center flex-col">
        {/* heading */}
        <p className="text-[20px] text-center md:text-[50px] font-bold font-inter">
          We Are Proud of Our Latest 6-figure Earners
        </p>
        {/* ============ swipper ============ */}
        <div className="w-[100%] mt-12 ">
          <Swiper
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1042: {
                slidesPerView: 3,
                spaceBetween: 28,
              },
              1400: {
                slidesPerView: 4,
                spaceBetween: 24,
              },
            }}
            slidesPerView={4}
            spaceBetween={28}
            slidesPerGroup={1}
            loop={true}
            loopFillGroupWithBlank={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            {CartData.map((value, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className=" drop-shadow-md w-full min-h-[400px] p-8 py-10 my-2 gap-2 flex flex-col justify-center md:justify-start items-center md:items-start rounded-lg bg-[white]">
                    <p className="font-inter h-full text-[24px] font-semibold ">
                      {value.name}
                    </p>
                    <p className="text-[#3d6e61] text-[18px] mt-6 font-medium">
                      {value.title}
                    </p>
                    <div className="w-full flex justify-center items-center">
                      <ReactStars
                        count={5}
                        value={2}
                        onChange={ratingChanged}
                        size={32}
                        color2={"#ffd700"}
                        className="stars"
                      />
                    </div>

                    <p className="w-full text-center md:text-left font-inter text-[16px]">
                      {value.des.slice(0, 140)}
                    </p>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

const CartData = [
  {
    name: "Haroon Abid",
    title: "How to setup a Local Area Network Course",
    des: "Satisfied with course.",
  },
  {
    name: "Haroon Abid",
    title: "How to setup a Local Area Network Course",
    des: "Akin Aregbesola is IT Coach, Mentor, and CEO at theITern Inc – a USA IT-Apprenticeship company – where he teaches Cloud Engineering courses to transfer skills gained through 25 years of progressively responsible exposure in Enterprise Network Environment, across all levels of the OSI from Cabling/Wireless, Switching & Routing, Installing & Configuring Servers, to Network Protocols mastery within Windows & Linux OSs; he is experienced in evaluating, architecting, implementing and administering Enterprise as well as Cloud Infrastructures, Assessing Customer Environments for Cloud Adoption, Gathering Requirements, Analyzing Cloud Policies and Architecting Strategies for Cloud Migration; Provisioning & Configuring Instances,",
  },
  {
    name: "Haroon Abid",
    title: "How to setup a Local Area Network Course",
    des: "Akin Aregbesola is IT Coach, Mentor, and CEO at theITern Inc – a USA IT-Apprenticeship company – where he teaches Cloud",
  },
  {
    name: "Haroon Abid",
    title: "How to setup a Local Area Network Course",
    des: "Satisfied with course",
  },
  {
    name: "Haroon Abid",
    title: "How to setup a Local Area Network Course",
    des: "Akin Aregbesola is IT Coach, Mentor, and CEO at theITern Inc – a USA IT-Apprenticeship company – where he teaches Cloud.",
  },
  {
    name: "Haroon Abid",
    title: "How to setup a Local Area Network Course",
    des: "Satisfied with course",
  },
  {
    name: "Haroon Abid",
    title: "How to setup a Local Area Network Course",
    des: "Satisfied with course",
  },
  {
    name: "Haroon Abid",
    title: "How to setup a Local Area Network Course",
    des: "Satisfied with course",
  },
];

export default OurEarners;
