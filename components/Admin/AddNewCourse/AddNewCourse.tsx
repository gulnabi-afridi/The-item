import React, { useState, useRef } from "react";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";

const AddNewCourse: React.FC = () => {
  // states

  const inputRef: any = useRef(null);

  // form handling functions
  const Form_Handling = (event: any) => {
    console.log("hello");
    // event.preventDefault();
  };

  // file selection functions
  const handleClick = (event: any) => {
    inputRef.current.click();
  };

  const handleFileChange = (event: any) => {
    const fileObj = event.target.files && event.target.files[0];
    if (!fileObj) {
      return;
    }
  };

  return (
    <div className="w-full flex flex-col  justify-center items-start">
      <p className="text-[28px] font-normal font-inter">Add Course</p>
      {/* ------------form------------ */}
      <form
        typeof="submit"
        onClick={Form_Handling}
        className="w-full flex flex-col lg:flex-row gap-10 justify-start items-start"
      >
        <div className="w-full lg:w-[65%] flex flex-col gap-5 lg:gap-3 justify-center items-start">
          {/* ------Course title input--------- */}
          <div className="w-full gap-2 flex flex-col justify-center items-start mt-6">
            <label className="font-inter" htmlFor="">
              Course Title
            </label>
            <input
              required
              className="w-full h-[50px] px-2 font-inter bg-[#f2eeed] focus:outline-none rounded-md"
              type="text"
              id="courseTitle"
              name="courseTitle"
              placeholder=""
            />
          </div>

          {/* -------- description input----------- */}
          <div className="w-full flex gap-2 flex-col justify-center items-start">
            <label htmlFor="">Comment</label>
            <textarea
              required
              className="w-full h-[150px] bg-[#f2eeed] rounded-md  focus:outline-none p-4 font-inter"
              id="comment"
              name="comment"
            ></textarea>
          </div>

          {/* ------------- price + course type input----------- */}
          <div className="w-full flex-col sm:flex-row gap-5 sm:gap-6 flex justify-start items-center">
            {/* ------Price input--------- */}

            <div className="w-full sm:w-[50%] gap-2 flex flex-col justify-center items-start">
              <label className="font-inter" htmlFor="">
                Price
              </label>
              <input
                required
                className="w-full h-[50px] px-2 font-inter bg-[#f2eeed] focus:outline-none rounded-md"
                type="text"
                id="price"
                name="price"
                placeholder=""
              />
            </div>
            {/* ------------course type select box----------  */}
            <div className="w-full sm:w-[50%]  gap-2 flex flex-col justify-center items-start ">
              <label className="font-inter" htmlFor="">
                Course Type
              </label>
              <Select
                required
                placeholder=""
                className="w-full h-[50px] font-inter  bg-[#f2eeed] rounded-md"
                id="courseTypeSelect"
                //   value={age}
                // onChange={Set_Rating}
              >
                <MenuItem value="average">Average</MenuItem>
                <MenuItem value="good">Good</MenuItem>
                <MenuItem value="Excellent">Excellent</MenuItem>
              </Select>
            </div>
          </div>

          {/* ------------- date + time input----------- */}

          <div className="w-full flex flex-col sm:flex-row gap-5 sm:gap-6 justify-start items-center">
            {/* ------date input--------- */}

            <div className="w-full sm:w-[50%] gap-2 flex flex-col justify-center items-start">
              <label className="font-inter" htmlFor="">
                Date
              </label>
              <input
                required
                className="w-full h-[50px] px-2 font-inter bg-[#f2eeed] focus:outline-none rounded-md"
                type="text"
                id="date"
                name="date"
                placeholder=""
              />
            </div>
            {/* ------------time input----------  */}
            <div className="w-full sm:w-[50%] gap-2 flex flex-col justify-center items-start">
              <label className="font-inter" htmlFor="">
                Time
              </label>
              <input
                required
                className="w-full h-[50px] px-2 font-inter bg-[#f2eeed] focus:outline-none rounded-md"
                type="text"
                id="time"
                name="time"
                placeholder=""
              />
            </div>
          </div>

          {/* ------------- Free Link + Paid Link input----------- */}

          <div className="w-full flex flex-col sm:flex-row gap-5 sm:gap-6 justify-start items-center">
            {/* ------Free Link--------- */}

            <div className="w-full sm:w-[50%] gap-2 flex flex-col justify-center items-start">
              <label className="font-inter" htmlFor="">
                Free Link
              </label>
              <input
                required
                className="w-full h-[50px] px-2 font-inter bg-[#f2eeed] focus:outline-none rounded-md"
                type="text"
                id="freeLink"
                name="freeLink"
                placeholder=""
              />
            </div>
            {/* ------------paid Link----------  */}
            <div className="w-full sm:w-[50%] gap-2 flex flex-col justify-center items-start">
              <label className="font-inter" htmlFor="">
                Paid Link
              </label>
              <input
                required
                className="w-full h-[50px] px-2 font-inter bg-[#f2eeed] focus:outline-none rounded-md"
                type="text"
                id="paidLink"
                name="paidLink"
                placeholder=""
              />
            </div>
          </div>

          {/* ------------ image picker input------------ */}
          <div className="w-full min-h-[150px] flex lg:hidden justify-center items-center rounded-md mt-0 lg:mt-20 shadow-2xl">
            <input
              className="hidden"
              ref={inputRef}
              type="file"
              onChange={handleFileChange}
            />
            <button
              type="button"
              onClick={handleClick}
              className="flex justify-center items-center gap-2"
            >
              <AddCircleOutlineOutlinedIcon className="text-[30px]" />
              <p>Add Course image</p>
            </button>
          </div>

          {/* ---------- submit button ---------- */}
          <div className="w-full flex justify-start items-center">
            <button
              type="submit"
              className="bg-[#2edba4] px-10 py-3 rounded-md font-inter mt-4 text-[#2f2e2e] active:translate-y-1"
            >
              Add Course
            </button>
          </div>
        </div>

        {/* ------------ image picker input------------ */}
        <div className="w-[35%] min-h-[150px] hidden lg:flex  justify-center items-center rounded-md mt-0 lg:mt-20 addImageBoxShadow ">
          <input
            className="hidden"
            ref={inputRef}
            type="file"
            onChange={handleFileChange}
          />
          <button
            type="button"
            onClick={handleClick}
            className="flex justify-center items-center gap-2"
          >
            <AddCircleOutlineOutlinedIcon className="text-[30px]" />
            <p>Add Course image</p>
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddNewCourse;
