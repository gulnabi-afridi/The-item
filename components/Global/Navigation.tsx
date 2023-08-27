import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { BiLockAlt } from "react-icons/bi";
import { Spin as Hamburger } from "hamburger-react";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";
// import component 👇
import Drawer from "react-modern-drawer";

//import styles 👇
import "react-modern-drawer/dist/index.css";

const Navigation: React.FC = () => {
  // states
  const [signIn, setSignIn] = useState<boolean>(false);
  const [signUp, setSignUp] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <>
      <div className={`w-full h-[64px] bg-white`}>
        <div
          className={`w-full h-full max-w-[1380px] m-auto sm:px-10 px-5 flex justify-between items-center`}
        >
          {/* Logo */}
          <Link href={"/"} className={`h-full w-full max-w-[110px] relative `}>
            <Image
              src={"/logo.png"}
              alt="img"
              fill
              className={"object-contain"}
            />
          </Link>

          {/* Auth Button */}
          <div className="md:flex hidden justify-center items-center">
            <button
              onClick={() => {
                setSignIn(!signIn);
              }}
              className="bg-white border-none text-[14px] text-[#6d737a] font-medium font-inter flex justify-center items-center"
            >
              <Image
                src={"/lock.png"}
                width={17}
                height={17}
                alt="lock"
                className="mr-1"
              />
              Login
            </button>
            <button
              onClick={() => {
                setSignUp(!signUp);
              }}
              className="w-[74px] h-[36px] text-white rounded-[4px] border-none font-inter text-[14px] font-medium flex justify-center items-center transition-all duration-300 ml-5 Custom-SignUp "
            >
              Sign up
            </button>
          </div>
          <div className="md:hidden block">
            <Hamburger
              color="#0127B8"
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
        direction="bottom"
        className="drawer"
      >
        <div className="w-full h-full flex justify-center flex-col items-center px-5">
          <button
            onClick={() => {
              setSignIn(!signIn);
            }}
            className="w-[100%] h-[40px] text-white rounded-[4px] border-none font-inter text-[14px] leading-[26px] font-medium flex justify-center items-center transition-all duration-300 Custom-SignUp "
          >
            Login
          </button>
          <button
            onClick={() => {
              setSignUp(!signUp);
            }}
            className="w-[100%] h-[40px] text-white rounded-[4px] border-none font-inter text-[14px] leading-[26px] font-medium flex justify-center items-center transition-all duration-300 Custom-SignUp mt-4 "
          >
            Sign up
          </button>
        </div>
      </Drawer>

      {/* ===========sign in=========== */}

      {signIn && <Login Open={signIn} setOpen={setSignIn} />}

      {/* ===========sign up=========== */}

      {signUp && <SignUp Open={signUp} setOpen={setSignUp} />}
    </>
  );
};

export default Navigation;
