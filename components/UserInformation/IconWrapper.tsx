import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  event?: any;
  state?: boolean;
}

const IconWrapper = ({ children, event = () => {}, state }: Props) => {
  return (
    <div
      onClick={event}
      className={`w-full h-[40px] cursor-pointer flex justify-center rounded-md ${
        state ? "bg-black/10 dark:bg-white/20" : "bg-transparent"
      } hover:bg-black/10 dark:hover:bg-white/20 items-center`}
    >
      {children}
    </div>
  );
};

export default IconWrapper;
