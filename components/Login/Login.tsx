import React from "react";
import Modal from "@mui/material/Modal";
import { Typography } from "@mui/material";

interface props {
  Open: boolean;
  setOpen: (value: any) => void;
}

const Login: React.FC<props> = ({ Open, setOpen }: props) => {
  const handleClose = () => setOpen(false);

  //function
  const Handle_Form = (event: any) => {};

  return (
    <div className="w-full h-full flex justify-center items-center">
      <Modal
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          px: 2,
        }}
        open={Open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="w-[100%] max-w-[390px] min-h-[300px] flex flex-col gap-4 justify-center items-center bg-[white] rounded-md outline-none px-8 py-12">
          <p className="font-intel text-[24px] font-normal text-[#3d3b47] ">
            Sign In
          </p>
          <form
            typeof="sumbit"
            onSubmit={Handle_Form}
            action=""
            className="w-full h-full flex flex-col justify-center gap-4 items-center"
          >
            {/* =============== email address================ */}
            <div className="w-full flex flex-col gap-3 justify-center items-start">
              <div className="flex justify-center items-center">
                {" "}
                <label
                  className="text-[#3d3b47] font-inter text-[17px]"
                  htmlFor=""
                >
                  Email address
                </label>
              </div>
              <input
                required
                className="w-full h-[45px] border-[1px] border-solid border-[#f0ebe1] focus:outline-none rounded-xl focus:border-2 focus:border-solid focus:border-[#cb8882] px-3"
                placeholder="Enter email here"
                type="text"
                id="email"
                name="email"
              ></input>
            </div>
            {/* ==================password input================= */}
            <div className="w-full flex flex-col gap-3 justify-center items-start">
              <div className="flex justify-center items-center">
                {" "}
                <label
                  className="text-[#3d3b47] font-inter text-[17px]"
                  htmlFor=""
                >
                  Password
                </label>
              </div>
              <input
                required
                className="w-full h-[45px] border-[1px] border-solid border-[#f0ebe1] focus:outline-none rounded-xl focus:border-2 focus:border-solid focus:border-[#cb8882] px-3"
                placeholder="Enter password here"
                type="text"
                id="email"
                name="email"
              ></input>
            </div>

            {/* ---------- submit button ---------- */}
            <button
              type="submit"
              className="bg-[#2edba4] px-16 py-2 rounded-3xl font-inter mt-4 text-[white] text-[20px] font-semibold active:translate-y-1"
            >
              Sign In
            </button>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default Login;
