import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { RiContactsFill } from "react-icons/ri";
import { Spin as Hamburger } from "hamburger-react";
import Drawer from "react-modern-drawer";
import { RxCross2 } from "react-icons/rx";
import "react-modern-drawer/dist/index.css";
import { BiLogoDiscordAlt } from "react-icons/bi";

const Navibar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className="w-full max-w-5xl m-auto h-[110px] flex justify-between items-center xl:px-0 px-4">
      {/* logo ---------> */}
      <Link href="/learn" className="w-[100px] h-[60px] relative">
        <Image
          src="/reachai.svg"
          alt="Reach"
          fill
          className="dark:invert"
          priority
        />
      </Link>
      {/* links ------------> */}
      <div className="hidden md:flex justify-center items-center gap-8 lg:gap-10">
        {navigationData.map((item, index) => {
          return (
            <Link
              key={index}
              href={item.path}
              className="text-black dark:text-white text-[18px] lg:text-[20px] tracking-wide font-normal hover:text-blue-600 relative before:absolute before:bg-blue-600 before:bottom-0 before:left-0 before:h-[2px] before:-z-10 z-10 before:w-0 hover:before:w-full before:transition-all before:duration-500 ease-in-out"
            >
              {item.name}
            </Link>
          );
        })}
      </div>

      {/* join our discord ----------> */}
      <Link
        href="https://discord.gg/CJM2n42MGb"
        target="_blank"
        className="hidden md:flex gap-2 justify-center items-center bg-blue-600 rounded-md h-[40px] lg:h-[44px] px-2 lg:px-4 hover:opacity-75"
      >
        <p className="text-base lg:text-[18px] font-normal text-white/90">
          Join Our Discord
        </p>
        <BiLogoDiscordAlt className="text-[24px] sm:text-[26px] text-white/90" />
      </Link>
      {/* hamburger + drawer for small screen ------------> */}
      <div className="md:hidden w-full flex justify-end items-center ">
        <Hamburger
          color="black"
          rounded
          size={30}
          toggled={isOpen}
          toggle={setIsOpen}
        />
        <Drawer
          open={isOpen}
          onClose={toggleDrawer}
          direction="right"
          className="drawer"
        >
          <div className="flex flex-col p-6 justify-center items-center ">
            {/* =========>top bar */}
            <div className="w-full flex justify-between items-center">
              {/* logo  */}
              <Link href="/learn" className="w-[60px] h-[40px] relative">
                <Image
                  src="/reachai.svg"
                  alt="Reach"
                  fill
                  className="dark:invert"
                  priority
                />
              </Link>
              <RxCross2
                onClick={toggleDrawer}
                className="text-[30px] text-white-main "
              />
            </div>
            {/* ========> sections links */}
            <div className="flex flex-col justify-center items-center gap-8 mt-16">
              {navigationData.map((item, index) => {
                return (
                  <Link
                    key={index}
                    href={item.path}
                    className="text-black dark:text-white text-[20px] tracking-wide font-normal hover:text-blue-600 relative before:absolute before:bg-blue-600 before:bottom-0 before:left-0 before:h-[2px] before:-z-10 z-10 before:w-0 hover:before:w-full before:transition-all before:duration-500 ease-in-out"
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
            {/* join our discord ----------> */}
            <Link
              href="https://discord.gg/CJM2n42MGb"
              className="flex gap-2 justify-center items-center bg-blue-600 rounded-md h-[40px] lg:h-[44px] px-2 lg:px-4 hover:opacity-75 mt-8"
            >
              <p className="text-base lg:text-[18px] font-normal text-white/90">
                Join Our Discord
              </p>
              <BiLogoDiscordAlt className="text-[22px] sm:text-[24px] text-white" />
            </Link>
          </div>
        </Drawer>
      </div>
    </div>
  );
};

const navigationData = [
  {
    path: "/learn",
    name: "Learn AgentFocus",
  },
  {
    path: "/feature",
    name: "Feature Request",
  },
  {
    path: "/roadmap",
    name: "Live Roadmap",
  },
];

export default Navibar;
