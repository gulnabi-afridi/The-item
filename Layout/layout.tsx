import React, { ReactNode } from "react";
import Navigation from "@/components/Global/Navigation";
import Footer from "@/components/Global/Footer";
import { useRouter } from "next/router";

// icons
import BookOutlinedIcon from "@mui/icons-material/BookOutlined";
import AddToPhotosOutlinedIcon from "@mui/icons-material/AddToPhotosOutlined";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";

// Admin Panel imports
import TopNavigation from "@/components/Admin/Global/TopNavigation";
import SideNavigation from "@/components/Admin/Global/SideNavigation";

interface Props {
  children?: ReactNode;
}

const adminPanelData: object[] = [
  {
    isExpandable: true,
    mainIcon: <BookOutlinedIcon />,
    subIcon: <AddToPhotosOutlinedIcon />,
    mainItem: "Courses",
    subItem: "Add Course",
    mainRoute: "/admin/courses",
    subRoute: "/admin/addcourse",
  },
  {
    isExpandable: false,
    mainIcon: <PersonAddAltOutlinedIcon />,
    mainItem: "Users",
    mainRoute: "/admin/users",
  },
  {
    isExpandable: true,
    mainIcon: <BookOutlinedIcon />,
    subIcon: <AddToPhotosOutlinedIcon />,
    mainItem: "Feedback",
    subItem: "Add Feedback",
    mainRoute: "/admin/feedback",
    subRoute: "/admin/addfeedback",
  },
];

export default function Layout({ children }: Props) {
  const Router = useRouter();
  const IsAdminPanel = () => {
    if (
      Router.pathname === "/admin/addcourse" ||
      Router.pathname === "/admin/addfeedback" ||
      Router.pathname === "/admin/courses" ||
      Router.pathname === "/admin/feedback" ||
      Router.pathname === "/admin/users"
      // Router.pathname === "/admin/login"
    ) {
      return true;
    } else {
      return false;
    }
  };
  return (
    <React.Fragment>
      {IsAdminPanel() ? (
        <div className="w-full h-screen">
          {/* Top Navigation bar */}
          <div className="w-full h-[64px]">
            <TopNavigation navItems={adminPanelData} />
          </div>
          <div className="w-full min-h-[calc(100%-64px)] grid md:grid-cols-[280px_calc(100%-280px)] grid-cols-1 grid-rows-1 ">
            {/* Side Navigation bar */}
            <div className="w-full h-full md:flex hidden ">
              <SideNavigation navItems={adminPanelData} />
            </div>
            {/* Main Content rendering */}
            <div className="w-full h-full p-3 lg:p-12">
              <main>{children}</main>
            </div>
          </div>
        </div>
      ) : (
        <React.Fragment>
          {/* {!(Router.pathname === "/admin/login") && <Navigation />} */}
          <main>{children}</main>
          {/* {!(Router.pathname === "/admin/login") && <Footer />} */}
        </React.Fragment>
      )}
    </React.Fragment>
  );
}
