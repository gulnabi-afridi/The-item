import React, { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import courseId from "../../../pages/courses/[courseid]";

const AddFeedBack: React.FC = () => {
  const [courseType, setCourseType] = useState("aa");
  const [userName, setUserName] = useState("");
  const [rating, setRating] = useState("");
  const [commit, setCommit] = useState("");

  const Form_Handling = (event: any) => {
    // event.preventDefault();
    console.log("hello");
  };

  return (
    <div className="lg:w-[60%] w-full flex flex-col justify-center items-start pl-0 lg:pl-4 py-4">
      <p className="text-[28px] font-normal font-inter">Add Feedback</p>
      {/* form */}
      <form
        typeof="submit"
        onClick={Form_Handling}
        className="w-full flex flex-col gap-5 justify-center items-start"
      >
        {/* ------user name input--------- */}

        <div className="w-full gap-2 flex flex-col justify-center items-start mt-6">
          <label className="font-inter" htmlFor="">
            User Name
          </label>
          <input
            onChange={(e) => setUserName(e.target.value)}
            required
            className="w-full h-[50px] px-2 font-inter bg-[#f2eeed] focus:outline-none rounded-md"
            type="text"
            id="name"
            value={userName}
            name="userName"
            placeholder="Enter your name"
          />
        </div>
        {/*------------- course type + rating select box---------- */}
        <div className="w-full flex-col xs:flex-row gap-5 xs:gap-6 flex justify-start items-center">
          {/* ------------course Type input--------- */}
          <div className="w-full xs:w-[50%] gap-2 flex flex-col justify-center items-start">
            <label className="font-inter" htmlFor="">
              Course Type
            </label>
            <Select
              onChange={(e: SelectChangeEvent) => setCourseType(e.target.value)}
              required
              className="w-full h-[50px] font-inter  bg-[#f2eeed] rounded-md"
              placeholder="select course type"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={courseType}
            >
              {CourseData.map((type, index) => {
                return (
                  <MenuItem key={type.label} value={type.value}>
                    {type.label}
                  </MenuItem>
                );
              })}
            </Select>
          </div>
          {/* ------------rating select box----------  */}
          <div className="w-full xs:w-[50%]  gap-2 flex flex-col justify-center items-start ">
            <label className="font-inter" htmlFor="">
              Rating
            </label>
            <Select
              onChange={(e: SelectChangeEvent) => setRating(e.target.value)}
              required
              placeholder="Rate it"
              className="w-full h-[50px] font-inter  bg-[#f2eeed] rounded-md"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={rating}
            >
              {RatingItem.map((type, index) => {
                return (
                  <MenuItem key={type.label} value={type.value}>
                    {type.label}
                  </MenuItem>
                );
              })}
            </Select>
          </div>
        </div>
        {/* -------- comment input----------- */}
        <div className="w-full flex gap-2 flex-col justify-center items-start">
          <label htmlFor="">Comment</label>
          <textarea
            onChange={(e) => setCommit(e.target.value)}
            required
            className="w-full h-[150px] bg-[#f2eeed] rounded-md  focus:outline-none p-4 font-inter"
            id="comment"
            name="comment"
            value={commit}
          ></textarea>
        </div>
        {/* ---------- submit button ---------- */}
        <button
          type="submit"
          className="bg-[#2edba4] px-10 py-3 rounded-md font-inter mt-4 text-[#2f2e2e] active:translate-y-1"
        >
          Add Feedback
        </button>
      </form>
    </div>
  );
};

const CourseData = [
  {
    value: "average",
    label: "average",
  },
  {
    value: "good",
    label: "good",
  },
  {
    value: "excellent",
    label: "excellent",
  },
];

const RatingItem = [
  {
    value: "1",
    label: "1",
  },
  {
    value: "2",
    label: "2",
  },
  {
    value: "3",
    label: "3",
  },
  {
    value: "4",
    label: "4",
  },
  {
    value: "5",
    label: "5",
  },
];

export default AddFeedBack;
