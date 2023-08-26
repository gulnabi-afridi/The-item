import React from "react";
import Image from "next/image";

const Alumni: React.FC = () => {
  return (
    <div className="w-full max-w-[1380px] m-auto sm:px-10 px-5 py-12  bg-[white]">
      <div className="w-full flex flex-col justify-center items-center px-5 md:px-0 py-16">
        {/* heading */}
        <p className="text-[20px] text-center md:text-[65px] font-bold font-inter">
          Our Alumni Work at Top Companies
        </p>
        {/* grid */}
        <div className="w-[80%] md-w-[100%] grid gap-x-10  md:gap-x-16  grid-cols-2 sm:grid-cols-2 md:grid-cols-4   justify-center items-center ">
          {/* ist company */}
          <div className="w-full h-[140px] md-h-[300px] flex justify-center items-center relative imageFilter  ">
            <Image src="/ourAlumni/aws.png" fill alt="aws icon"></Image>
          </div>
          {/* 2nd comapny */}
          <div className="w-full h-[140px] md:h-[250px] flex justify-center items-center relative imageFilter ">
            <Image src="/ourAlumni/d.png" fill alt="d icon"></Image>
          </div>
          {/* 3rd comapany */}
          <div className="w-full h-[100px] md:h-[150px] flex justify-center items-center relative imageFilter ">
            <Image
              src="/ourAlumni/accenture.png"
              fill
              alt="accenture image"
            ></Image>
          </div>
          {/* 4th comapny */}
          <div className="w-full h-[40px] md:h-[100px] flex justify-center items-center relative imageFilter ">
            <Image src="/ourAlumni/ipnx.png" fill alt="ipnx image"></Image>
          </div>
          {/* 5th company */}
          <div className="w-full h-[150px] md:h-[200px] flex justify-center items-center relative imageFilter ">
            <Image
              src="/ourAlumni/infosys.png"
              fill
              alt="infosys image"
            ></Image>
          </div>
          {/* 6th company */}
          <div className="w-full h-[100px] md:h-[200px] flex justify-center items-center relative imageFilter ">
            <Image src="/ourAlumni/window.png" fill alt="window icon"></Image>
          </div>
          {/* 7th company */}
          <div className="w-full h-[100px] flex justify-center items-center relative imageFilter ">
            <Image
              src="https://theitern.com/wp-content/uploads/2021/12/America-Airline-logo.png"
              fill
              alt="americanAirlines icon"
            ></Image>
          </div>
          {/* 8th comapny */}
          <div className="w-full h-[100px] flex justify-center items-center relative imageFilter">
            <Image
              src="https://theitern.com/wp-content/uploads/2021/12/Bank-of-America-Logo-2048x1152.png"
              fill
              alt="bank of america icon"
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alumni;
