import React from "react";
import Link from "next/link";
import Image from "next/image";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer: React.FC = () => {
  return (
    <>
      <div className={`w-full py-6 bg-white Bronchure-gr-bg`}>
        <div
          className={`w-full h-full max-w-[1380px] m-auto sm:px-10 px-5 flex justify-center items-center flex-col`}
        >
          {/* Menus */}
          <div className="w-full grid md:grid-cols-4 grid-cols-1 md:grid-rows-1 grid-rows-4 md:gap-y-0 gap-y-6 ">
            <div className="flex justify-center items-center">
              <Link href={"/"} className={`h-[60px] w-[120px] relative `}>
                <Image
                  src={"/logo-footer.png"}
                  alt="img"
                  fill
                  className={"object-contain"}
                />
              </Link>
            </div>

            <div className="w-full flex justify-start items-center flex-col font-inter">
              {MenusList?.map((item: any, index) => {
                return (
                  <Link
                    key={index}
                    href={item.route}
                    className={`text-[white] text-[14px] font-[400] text-start hover:underline mt-2 w-full`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>

            <div className="w-full flex justify-start items-center flex-col font-inter">
              {SecondMenusList?.map((item: any, index) => {
                return (
                  <Link
                    key={index}
                    href={item.route}
                    className={`text-[white] text-[14px] font-[400] text-start hover:underline mt-2 w-full`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>

            <div className="w-full flex justify-start items-center flex-col font-inter">
              {ThirdMenusList?.map((item: any, index) => {
                return (
                  <Link
                    key={index}
                    href={item.route}
                    className={`text-[white] text-[14px] font-[400] text-start hover:underline mt-2 w-full`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>
          <hr className=" mt-5 mb-4 w-full" />
          <div className="w-full grid md:grid-cols-3 grid-cols-1 md:grid-rows-1 grid-rows-3 md:gap-y-0 gap-y-2 ">
            <div className="w-full flex justify-start items-center ">
              <p className="text-[14px] text-[white] font-[400] ">
                Copyright © 2022 theITern Inc
              </p>
            </div>
            <div className="w-full flex md:justify-center justify-start items-center ">
              <a href="" className="text-[14px] text-[white] font-[400] ">
                Privacy policy
              </a>
              <a href="" className="text-[14px] text-[white] font-[400] ml-3">
                Cookie policy
              </a>
            </div>
            <div className="flex md:justify-end justify-start items-center ">
              <a href="">
                <FacebookIcon
                  sx={{
                    color: "white",
                    cursor: "pointer",
                    "&:hover": { color: "#0224B0" },
                    ml: { md: 1.5 },
                    mr: { md: 0, xs: 1.5 },
                  }}
                />
              </a>
              <a href="">
                <TwitterIcon
                  sx={{
                    color: "white",
                    cursor: "pointer",
                    "&:hover": { color: "#0224B0" },
                    ml: { md: 1.5 },
                    mr: { md: 0, xs: 1.5 },
                  }}
                />
              </a>
              <a href="">
                <YouTubeIcon
                  sx={{
                    color: "white",
                    cursor: "pointer",
                    "&:hover": { color: "#0224B0" },
                    ml: { md: 1.5 },
                    mr: { md: 0, xs: 1.5 },
                  }}
                />
              </a>
              <a href="">
                <InstagramIcon
                  sx={{
                    color: "white",
                    cursor: "pointer",
                    "&:hover": { color: "#0224B0" },
                    ml: { md: 1.5 },
                    mr: { md: 0, xs: 1.5 },
                  }}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

const MenusList: object[] = [
  {
    name: "Network Administration",
    route: "",
  },
  {
    name: "Cloud Solution Architecture",
    route: "",
  },
  {
    name: "DevOps Engineering with Docker",
    route: "",
  },
];

const SecondMenusList: object[] = [
  {
    name: "Clinical Data Management",
    route: "",
  },
  {
    name: "Infrastructure as Code with Terraform",
    route: "",
  },
  {
    name: "Advance DevOps with Kubernetes",
    route: "",
  },
];

const ThirdMenusList: object[] = [
  {
    name: "Download Course Outline",
    route: "",
  },
  {
    name: "Register For Training",
    route: "",
  },
  {
    name: "Talk To Us",
    route: "",
  },
];
