import React, { useEffect } from "react";
import { useRouter } from "next/router";

const index: React.FC = () => {
  const Router = useRouter();
  useEffect(() => {
    Router.push("/admin/courses");
  }, []);

  return <></>;
};

export default index;
