import { it } from "node:test";
import React, { useState } from "react";
import NavItem from "./Common/NavItem";

interface props {
  navItems: object[];
}

const SideNavigation: React.FC<props> = ({ navItems }: props) => {
  // states
  const [Course, setCourse] = useState(false);

  return (
    <div className="w-full h-full flex flex-col justify-start items-start px-6 py-12 bg-[#e3e9e7]">
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
          />
        );
      })}
    </div>
  );
};

export default SideNavigation;
