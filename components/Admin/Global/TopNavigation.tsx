import React from "react";
import Image from "next/image";
import { BiLockAlt } from "react-icons/bi";
import { Spin as Hamburger } from "hamburger-react";
import Link from "next/link";
import NavItem from "./Common/NavItem";
import Drawer from "react-modern-drawer";

//import styles 👇
import "react-modern-drawer/dist/index.css";

interface props {
  navItems: object[];
}

const TopNavigation: React.FC<props> = ({ navItems }: props) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <>
      <div className={`w-full h-full bg-[#22282a]`}>
        <div
          className={`w-full h-full max-w-[1380px] m-auto sm:px-10 px-5 flex justify-between items-center`}
        >
          {/* Logo */}
          <Link href={"/"} className={`h-full w-full max-w-[110px] relative `}>
            <Image
              src={"/logo-footer.png"}
              alt="img"
              fill
              className={"object-contain"}
            />
          </Link>

          {/* Auth Button */}
          <div className="md:flex hidden justify-center items-center">
            <button className="w-[74px] h-[36px] bg-white text-[#22282a] rounded-[4px] border-none font-inter text-[14px] font-medium flex justify-center items-center transition-all duration-300 ml-5">
              Logout
            </button>
          </div>
          <div className="md:hidden block">
            <Hamburger
              color="white"
              rounded
              size={28}
              toggled={isOpen}
              toggle={setIsOpen}
            />
          </div>
        </div>
      </div>

      {/* Drawer */}
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="left"
        style={{ width: "70%" }}
      >
        <div className="w-full h-full flex justify-start flex-col gap-6 items-center p-5 bg-[black]">
          {/* Logo */}
          <Link
            href={"/"}
            className={`h-[60px] w-full max-w-[110px] relative `}
          >
            <Image
              src={"/logo-footer.png"}
              alt="img"
              fill
              className={"object-contain"}
            />
          </Link>

          {navItems?.map((item: any, index) => {
            return (
              <NavItem
                key={index}
                isExpandable={item.isExpandable}
                mainIcon={item.mainIcon}
                subIcon={item.subIcon}
                mainItem={item.mainItem}
                subItem={item.subItem}
                mainRoute={item.mainRoute}
                subRoute={item.subRoute}
                MobileMenuToggle={toggleDrawer}
              />
            );
          })}
        </div>
      </Drawer>
    </>
  );
};

export default TopNavigation;
