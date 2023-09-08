import React, { ReactNode } from "react";
import Modal from "@mui/material/Modal";
import { RxCross2 } from "react-icons/rx";

interface Props {
  open: boolean;
  handleClose: any;
  children: ReactNode;
  style?: string;
  title: string;
}

const ModalWrapper = ({
  open,
  handleClose,
  children,
  title,
  style = "w-[400px] h-full p-4",
}: Props) => {
  return (
    <Modal open={open}>
      <div
        className={`absolute bg-white dark:bg-black top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-2xl rounded-md border-[1px] border-white dark:border-black ${style}`}
      >
        {/* top header */}
        <div className="w-full h-[60px] px-4 sm:px-8 flex justify-between items-center bg-black rounded-t-md">
          <p className="text-[16px] sm:text-[20px] text-white dark:text-black font-medium tracking-wide">
            {title}
          </p>
          <div className="w-[30px] h-[30px] flex justify-center items-center rounded-full hover:opacity-80 bg-white dark:bg-black">
            <RxCross2
              onClick={handleClose}
              className="text-white text-[26px] cursor-pointer"
            />
          </div>
        </div>
        {children}
      </div>
    </Modal>
  );
};

export default ModalWrapper;
