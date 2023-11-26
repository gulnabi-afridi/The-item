import React, { ReactNode } from "react";
import Modal from "@mui/material/Modal";
import { RxCross2 } from "react-icons/rx";

interface Props {
  open: boolean;
  handleClose: any;
  children: ReactNode;
  style?: string;
  title: string;
  headerHeight?: string;
}

const ModalWrapper = ({
  open,
  handleClose,
  children,
  title,
  style = "w-[400px] h-full p-4",
  headerHeight = "h-[60px]",
}: Props) => {
  return (
    <Modal open={open}>
      <div
        className={`absolute bg-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-2xl rounded-md ${style}`}
      >
        {/* top header */}
        <div
          className={`w-full ${headerHeight} px-4 sm:px-8 flex justify-between items-center bg-black rounded-t-md`}
        >
          <p className="text-[16px] text-white font-normal tracking-wide">
            {title}
          </p>
          <div className="w-[25px] h-[25px] flex justify-center items-center rounded-full hover:opacity-80 bg-white dark:bg-black">
            <RxCross2
              onClick={handleClose}
              className="text-black text-[20px] cursor-pointer"
            />
          </div>
        </div>
        {children}
      </div>
    </Modal>
  );
};

export default ModalWrapper;
