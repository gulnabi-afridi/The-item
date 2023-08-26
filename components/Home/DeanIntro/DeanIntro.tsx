import React from "react";
import Image from "next/image";
import bgImage from "../../../public/Dean/deanSectionbg.jpg";

const DeanDemo: React.FC = () => {
  return (
    <div className="w-full  deanIntro ">
      <div className="w-full h-full bg-[#3d6e61]/80 py-10 ">
        <div
          className={`w-full h-full max-w-[1380px] m-auto sm:px-10 px-5 flex justify-center items-center flex-col md:flex-row`}
        >
          {/* text portion */}
          <div className="w-[100%] md:w-[60%] flex flex-col justify-center items-start xs:0 md:mr-16 mb-14 md:mb-0">
            <p className="text-[36px] text-[white] font-normal font-inter">
              Akin Aregbesola
            </p>
            <p className="text-[36px] text-[#f4910a] font-semibold font-inter">
              Faculty Dean, theITern{" "}
            </p>
            <p className="text-[18px] text-[#f5f1f1] font-inter mb-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged. It was popularised
              in the 1960s with the release of Letraset sheets containing Lorem
              Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <p className="text-[18px] text-[#f5f1f1] font-inter mb-6">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
              Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
              BC. This book is a treatise on the theory of ethics, very popular
              during the Renaissance. The first line of Lorem Ipsum
            </p>
            <p className="text-[18px] text-[#f5f1f1] font-inter">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words
            </p>
          </div>
          {/* right image portion */}
          <div className="w-[100%] md:w-[40%] flex flex-col justify-center items-center relative">
            <div className="w-full max-w-[] h-[300px] relative ">
              <Image
                src="/Home/picture.png"
                fill
                alt="deanImage"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DeanDemo;
