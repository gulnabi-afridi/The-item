import React, { ReactNode } from "react";
import Navigation from "@/components/Global/Navigation";
import Footer from "@/components/Global/Footer";
import { useRouter } from "next/router";

// icons
import BookOutlinedIcon from "@mui/icons-material/BookOutlined";
import AddToPhotosOutlinedIcon from "@mui/icons-material/AddToPhotosOutlined";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";

// Admin Panel imports

interface Props {
  children?: ReactNode;
}

export default function Layout({ children }: Props) {
  const Router = useRouter();

  return (
    <React.Fragment>
      <React.Fragment>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </React.Fragment>
    </React.Fragment>
  );
}
