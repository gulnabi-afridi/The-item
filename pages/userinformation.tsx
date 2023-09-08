import React, { useState } from "react";
import Image from "next/image";
import IconWrapper from "@/components/UserInformation/IconWrapper";
import { MdSupervisorAccount } from "react-icons/md";
import { GrChannel } from "react-icons/gr";
import { IoMdSettings } from "react-icons/io";
import UserInformation from "@/components/UserInformation/UserInformation";
import Channel from "@/components/UserInformation/Channel";

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
    <div className="w-full min-h-screen grid grid-cols-[60px,1fr]">
      {/* left navigation -------------> */}
      <div className="w-full h-full flex flex-col gap-4 items-center py-6 border-r-[1px] border-black/10">
        <IconWrapper>
          <Image src="/reachai.svg" width={30} height={30} alt="" />
        </IconWrapper>
        {/* profile icon */}
        <IconWrapper
          state={selectedComponent.userInformation}
          event={() => handleIconClick("userInformation")}
        >
          <MdSupervisorAccount className="text-[26px] text-black" />
        </IconWrapper>
        {/* channel icon */}
        <IconWrapper
          state={selectedComponent.channels}
          event={() => handleIconClick("channels")}
        >
          <GrChannel className="text-[22px] text-black" />
        </IconWrapper>
        <IconWrapper
          state={selectedComponent.setting}
          event={() => handleIconClick("setting")}
        >
          <IoMdSettings className="text-[22px] text-black" />
        </IconWrapper>
      </div>
      {/* right portion ---------------->  */}
      {selectedComponent.userInformation && <UserInformation />}
      {selectedComponent.channels && <Channel />}
    </div>
  );
};

export default UserInformationPage;
