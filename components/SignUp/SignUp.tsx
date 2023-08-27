import React from "react";
import Modal from "@mui/material/Modal";
import { Typography } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

interface props {
  Open: boolean;
  setOpen: (value: any) => void;
}

const SignUp: React.FC<props> = ({ Open, setOpen }: props) => {
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
        <div className="w-full max-w-[390px] min-h-[300px] flex flex-col gap-3 justify-center items-center bg-[white] rounded-md outline-none px-8 py-6">
          <p className="font-intel text-[24px] font-normal text-[#3d3b47] ">
            Register New User
          </p>
          <form
            typeof="sumbit"
            onSubmit={Handle_Form}
            action=""
            className="w-full h-full flex flex-col justify-center gap-2 items-center"
          >
            {/* ===========name input============ */}
            <div className="w-full flex flex-col gap-1 justify-center items-start">
              <div className="flex justify-center items-center">
                {" "}
                <label className="text-[#3d3b47] font-inter" htmlFor="">
                  First Name
                </label>
              </div>
              <input
                required
                className="w-full h-[42px] border-[1px] border-solid border-[#f0ebe1] focus:outline-none rounded-xl focus:border-2 focus:border-solid focus:border-[#cb8882] px-3"
                type="text"
                id="firstName"
                name="firstName"
              ></input>
            </div>
            {/* =============Last Name input============= */}
            <div className="w-full flex flex-col gap-1 justify-center items-start">
              <div className="flex justify-center items-center">
                {" "}
                <label className="text-[#3d3b47] font-inter " htmlFor="">
                  Last Name
                </label>
              </div>
              <input
                required
                className="w-full h-[42px] border-[1px] border-solid border-[#f0ebe1] focus:outline-none rounded-xl focus:border-2 focus:border-solid focus:border-[#cb8882] px-3"
                type="text"
                id="lastName"
                name="lastName"
              ></input>
            </div>
            {/*============== Email Address input================ */}
            <div className="w-full flex flex-col gap-1 justify-center items-start">
              <div className="flex justify-center items-center">
                {" "}
                <label className="text-[#3d3b47] font-inter" htmlFor="">
                  Email Address
                </label>
              </div>
              <input
                required
                className="w-full h-[42px] border-[1px] border-solid border-[#f0ebe1] focus:outline-none rounded-xl focus:border-2 focus:border-solid focus:border-[#cb8882] px-3"
                type="email"
                id="email"
                name="email"
              ></input>
            </div>
            {/* ===============Phone Number input================= */}
            <div className="w-full flex flex-col gap-1 justify-center items-start">
              <div className="flex justify-center items-center">
                {" "}
                <label className="text-[#3d3b47] font-inter" htmlFor="">
                  Phone Number
                </label>
              </div>
              <input
                required
                className="w-full h-[42px] border-[1px] border-solid border-[#f0ebe1] focus:outline-none rounded-xl focus:border-2 focus:border-solid focus:border-[#cb8882] px-3"
                type="text"
                id="phoneNumber"
                name="phoneNumber"
              ></input>
            </div>
            {/*================ Password  input================= */}
            <div className="w-full flex flex-col gap-1 justify-center items-start">
              <div className="flex justify-center items-center">
                {" "}
                <label className="text-[#3d3b47] font-inter " htmlFor="">
                  Password
                </label>
              </div>
              <input
                required
                className="w-full h-[42px] border-[1px] border-solid border-[#f0ebe1] focus:outline-none rounded-xl focus:border-2 focus:border-solid focus:border-[#cb8882] px-3"
                type="password"
                id="password"
                name="password"
              ></input>
            </div>
            {/* =============Conform password input============= */}
            <div className="w-full flex flex-col gap-1 justify-center items-start">
              <div className="flex justify-center items-center">
                {" "}
                <label className="text-[#3d3b47] font-inter" htmlFor="">
                  Last Name
                </label>
              </div>
              <input
                required
                className="w-full h-[42px] border-[1px] border-solid border-[#f0ebe1] focus:outline-none rounded-xl focus:border-2 focus:border-solid focus:border-[#cb8882] px-3"
                type="password"
                id="conformPassword"
                name="conformPassword"
              ></input>
            </div>
            {/* ===================terms and policy================= */}
            <div className="w-full flex justify-start items-center pl-2">
              <FormControlLabel
                control={
                  <Checkbox
                    required
                    sx={{
                      color: "#2edba4",
                      "&.Mui-checked": {
                        color: "#2edba4",
                      },
                    }}
                    defaultChecked
                  />
                }
                label="I understand & agree with rules"
              />
            </div>
            {/* ---------- submit button ---------- */}
            <button
              type="submit"
              className="bg-[#2edba4] px-16 py-2 rounded-3xl font-inter mt-4 text-[white] text-[20px] font-semibold active:translate-y-1"
            >
              Register
            </button>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default SignUp;
