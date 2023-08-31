import React from "react";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Link from "next/link";

const Login: React.FC = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="flex flex-col gap-2 w-full max-w-[400px] min-h-[300px] loginBoxShadow">
        <p className="w-full flex justify-center items-center font-semibold font-itern text-[36px] text-[#4affb7]">
          The<span className="text-[#ffa033]">IT</span>ern
        </p>
        <div className="flex flex-col justify-center items-center w-full h-full border-[1px] border-solid border-[#f0ebe1] rounded-lg">
          {/* form */}
          <form className="w-full h-full flex flex-col gap-4 justify-center items-center px-3 sm:px-7 py-10 sm:py-16">
            {/* email address */}
            <div className="w-full flex flex-col gap-4 justify-center items-start">
              <div className="flex justify-center items-center gap-2">
                {" "}
                <EmailOutlinedIcon className="text-[22px] text-[#2d2c2c]" />{" "}
                <label className="text-[#2d2c2c]" htmlFor="">
                  Email address
                </label>
              </div>
              <input
                className="w-full h-[40px] border-[1px] border-solid border-[#f0ebe1] focus:outline-none rounded-md px-3"
                type="text"
                id="email"
                name="email"
              ></input>
            </div>
            {/* password input */}
            <div className="w-full flex flex-col gap-4 justify-center items-start">
              <div className="flex justify-center items-center gap-2">
                {" "}
                <LockOutlinedIcon className="text-[22px] text-[#2d2c2c]" />{" "}
                <label className="text-[#2d2c2c]" htmlFor="">
                  Password
                </label>
              </div>
              <input
                className="w-full h-[40px] border-[1px] border-solid border-[#f0ebe1] focus:outline-none rounded-md px-3"
                type="password"
                id="password"
                name="password"
              ></input>
            </div>
            {/* buttons */}
            <div className="w-full flex justify-between items-center">
              {/* forgot password */}
              <Link href="/" className="text-[#879fce] text-[12px]">
                Forgot password?
              </Link>
              <button className="py-1 sm:py-2 px-6 sm:px-12 bg-[#2a4265] rounded-md text-[white]">
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
