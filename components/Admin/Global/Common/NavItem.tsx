import React from "react";
import Link from "next/link";
import BookOutlinedIcon from "@mui/icons-material/BookOutlined";
import BookmarkAddOutlinedIcon from "@mui/icons-material/BookmarkAddOutlined";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import { useRouter } from "next/router";

interface props {
  isExpandable: boolean;
  mainIcon: any;
  subIcon?: any;
  mainItem: string;
  subItem?: string;
  mainRoute: string;
  subRoute?: string;
  MobileMenuToggle?: () => void;
}

const NavItem: React.FC<props> = ({
  isExpandable,
  mainIcon,
  subIcon,
  mainItem,
  subItem,
  mainRoute,
  subRoute,
  MobileMenuToggle,
}: props) => {
  const Router = useRouter();

  return (
    <div className="w-full flex flex-col justify-center items-start">
      {/*  */}
      <Link
        onClick={MobileMenuToggle}
        href={mainRoute}
        className={`w-full h-[50px] pl-2 flex gap-1 justify-start items-center mainItem ${
          Router.pathname === mainRoute ? "bg-[#74d5b6]" : "bg-transparent"
        }`}
      >
        {mainIcon}
        <p className="text-[18px] font-inter text-[white] md:text-[#575c5c] ">
          {mainItem}
        </p>
      </Link>
      {/* ======== Sub category======== */}
      {isExpandable &&
        (Router.pathname === mainRoute || Router.pathname === subRoute) && (
          <Link
            onClick={MobileMenuToggle}
            href={subRoute || ""}
            className={`w-full flex gap-1 h-[50px] justify-start items-center pl-6 subItem ${
              Router.pathname === subRoute ? "bg-[#74d5b6]" : "bg-transparent"
            }`}
          >
            {subIcon}
            <p className="text-[18px] font-inter text-[white] md:text-[#575c5c]">
              {subItem}
            </p>
          </Link>
        )}
    </div>
  );
};

export default NavItem;
