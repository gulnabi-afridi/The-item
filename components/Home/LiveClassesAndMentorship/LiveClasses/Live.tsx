import Link from "next/link";
import { useEffect, useState } from "react";

const Live: React.FC = () => {
  let randomColor = () => {
    let hexString = "0123456789abcdef";
    let hexCode = "#";
    let i: any;
    for (i = 0; i < 6; i++) {
      hexCode += hexString[Math.floor(Math.random() * hexString.length)];
    }
    return hexCode;
  };
  const str =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";
  return (
    <div className={`w-full h-full bg-[#f2f2f2]`}>
      <div
        className={`w-full h-full max-w-[1380px] m-auto px-8 pt-[120px] pb-10 flex-col justify-start items-center md:mt-[-40px]`}
      >
        {/* Heading */}
        <h6 className="text-[black] md:text-[30px] text-[22px] font-inter font-bold">
          Live Classes & Mentorship
        </h6>
        {/* end of Heading */}

        {/* Cards */}
        <div className="grid grid-col-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-4 lg:gap-y-8 lg:gap-x-8 mt-8">
          {/* Single Card */}
          {[1, 2, 3, 4, 5, 6, 7, 8].map((index): any => {
            return (
              <div
                key={index}
                className="grid grid-rows-[6.5fr_4.5fr_1fr] lg:grid-rows-[7fr_5.5fr_1fr] p-4 bg-[white]  w-full rounded-lg "
              >
                {/* Header */}
                <div
                  className={`font-inter rounded-xl text-[white] text-[22px] font-medium pt-2 pl-3 `}
                  style={{
                    background: `linear-gradient(to right, ${randomColor()} , ${randomColor()})`,
                  }}
                >
                  Cloud Solution <br /> Architect
                </div>
                {/* end of Header */}
                {/* text */}
                <div className="font-inter text-[14px] py-2">
                  {str.slice(0, 175)}...
                </div>
                {/* end of text */}
                {/* Footer */}
                <div className="flex justify-between items-center">
                  <h6 className="text-[black] font-semibold ">$500</h6>
                  <Link
                    href={"/courses/courseid"}
                    className="text-[blue] font-inter text-[14px]"
                  >
                    Learn More
                  </Link>
                </div>
                {/* end of Footer */}
              </div>
            );
          })}
          {/* end of Single Card */}
        </div>
        {/* end of Cards */}
      </div>
    </div>
  );
};

export default Live;
