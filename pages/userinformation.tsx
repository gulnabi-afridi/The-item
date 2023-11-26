import React, { useState } from "react";
import Image from "next/image";
import IconWrapper from "@/components/UserInformation/IconWrapper";
import { MdSupervisorAccount } from "react-icons/md";
import { GrChannel } from "react-icons/gr";
import { IoMdSettings } from "react-icons/io";
import UserInformation from "@/components/UserInformation/UserInformation";
import Channel from "@/components/UserInformation/Channel";
import ApiKey from "@/components/UserInformation/ApiKey";

const UserInformationPage = () => {
  // states ----------------------->
  const [selectedComponent, setSelectedComponent] = useState({
    userInformation: true,
    channels: false,
    setting: false,
  });
  //   states ends here ------------------>

  // functions ------------------------>
  const handleIconClick = (component: string) => {
    setSelectedComponent({
      channels: false,
      setting: false,
      userInformation: false,
      [component]: true,
    });
  };

  //   functions ends here ------------------>

  return (
    <div className="w-full min-h-screen grid grid-cols-[60px,1fr] sm:grid-cols-[170px,1fr]">
      {/* left navigation -------------> */}
      <div className="w-full h-full flex flex-col gap-4 items-center py-8 border-r-[1px] border-black/10 dark:border-white/20">
        <div className="w-[80%]">
          <IconWrapper>
            <div className="w-full grid grid-cols-1 sm:grid-cols-[2fr,3fr] justify-center items-center">
              <div className="w-full flex justify-center items-center">
                <Image
                  src="/reachai.svg"
                  width={30}
                  height={30}
                  alt=""
                  className="dark:invert"
                />
              </div>
              <p className="sm:block hidden text-base text-slate-900 dark:text-white">
                Home
              </p>
            </div>
          </IconWrapper>
        </div>
        {/* profile icon */}
        <div className="w-[80%]">
          <IconWrapper
            state={selectedComponent.userInformation}
            event={() => handleIconClick("userInformation")}
          >
            <div className="w-full grid grid-cols-1 sm:grid-cols-[2fr,3fr] justify-center items-center">
              <div className="w-full flex justify-center items-center">
                <MdSupervisorAccount className="text-[26px] text-slate-900 dark:text-white" />
              </div>
              <p className="sm:block hidden text-base text-slate-900 dark:text-white">
                Profile
              </p>
            </div>
          </IconWrapper>
        </div>
        {/* channel icon */}
        <div className="w-[80%]">
          <IconWrapper
            state={selectedComponent.channels}
            event={() => handleIconClick("channels")}
          >
            <div className="w-full grid grid-cols-1 sm:grid-cols-[2fr,3fr] justify-center items-center">
              <div className="w-full flex justify-center items-center">
                <GrChannel className="text-[22px] text-slate-900 dark:text-[white]" />
              </div>
              <p className="sm:block hidden text-base text-slate-900 dark:text-white">
                Channels
              </p>
            </div>
          </IconWrapper>
        </div>
        <div className="w-[80%]">
          <IconWrapper
            state={selectedComponent.setting}
            event={() => handleIconClick("setting")}
          >
            <div className="w-full grid grid-cols-1 sm:grid-cols-[2fr,3fr] justify-center items-center">
              <div className="w-full flex justify-center items-center">
                <IoMdSettings className="text-[22px] text-slate-900 dark:text-white" />
              </div>
              <p className="sm:block hidden text-base text-slate-900 dark:text-white">
                Setting
              </p>
            </div>
          </IconWrapper>
        </div>
      </div>
      {/* right portion ---------------->  */}
      {selectedComponent.userInformation && <UserInformation />}
      {selectedComponent.channels && <Channel />}
      {selectedComponent.setting && <ApiKey />}
    </div>
  );
};

export default UserInformationPage;
