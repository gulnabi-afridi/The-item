import React, { useEffect, useState } from "react";
import Image from "next/image";
import { AiFillCheckCircle } from "react-icons/ai";

const Channel = () => {
  const [channelCardData, setChannelCardData] = useState([
    {
      icon: "/twitter.svg",
      name: "Twitter",
      disabled: true,
    },
    {
      icon: "/discord.svg",
      name: "discord",
      disabled: false,
    },
    {
      icon: "/linkedin.svg",
      name: "linkedin",
      disabled: true,
    },
    {
      icon: "/slack.svg",
      name: "slack",
      disabled: true,
    },
  ]);

  //

  const handleToggleChannel = (selectedIndex: number) => {
    setChannelCardData((prevData) =>
      prevData.map((item, index) => {
        if (index === selectedIndex) {
          return { ...item, disabled: !item.disabled };
        }
        return item;
      })
    );
  };

  useEffect(() => {
    console.log(channelCardData);
  }, [channelCardData]);

  return (
    <div className="w-full flex flex-col items-start justify-start lg:px-8 lg:py-8 px-2 sm:px-4 py-8">
      <div className="w-full max-w-[630px] flex flex-col items-start border-[1px] border-black/10 p-3 sm:p-6 rounded-md">
        {/*  */}
        <div className="w-full flex flex-col gap-3">
          {channelCardData.map((item, index) => {
            return (
              <div className="w-full grid grid-cols-[2fr,1fr] sm:grid-cols-2 justify-center items-center py-1">
                <div className="grid grid-cols-[1fr,1.3fr] justify-center items-center gap-2">
                  <div className="flex justify-start items-center gap-1 sm:gap-2">
                    <div className="w-[20px] sm:w-[23px] h-[20px] sm:h-[23px] relative">
                      <Image src={item.icon} className="" fill alt="" />
                    </div>
                    <p className="text-black dark:text-white text-[14px] sm:text-[18px] font-medium">
                      {item.name}
                    </p>
                  </div>
                  <p className="text-[12px] sm:text-[16px] text-black dark:text-white font-normal">
                    Username
                  </p>
                </div>
                {/* disabled + enable button -----> */}
                {item.disabled ? (
                  <div className="w-full flex justify-end">
                    <button
                      onClick={() => handleToggleChannel(index)}
                      className="text-[12px] sm:text-[14px] text-black dark:text-white border-[1px] border-black/10 rounded-md h-[27px] sm:h-[30px] w-[80px] sm:w-[100px] hover:bg-black/5"
                    >
                      Disabled
                    </button>
                  </div>
                ) : (
                  <div className="w-full flex justify-end">
                    <button
                      onClick={() => handleToggleChannel(index)}
                      className="flex justify-center items-center gap-1 text-[12px] sm:text-[14px] text-white border-[1px] border-black/10 rounded-md h-[27px] sm:h-[30px] w-[80px] sm:w-[100px] bg-black hover:opacity-80"
                    >
                      <AiFillCheckCircle className="text-[16px] sm:text-[18px] text-white" />
                      Enabled
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Channel;
