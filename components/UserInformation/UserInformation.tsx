import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { FaUserEdit } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { GiConfirmed } from "react-icons/gi";
import ModalWrapper from "./ModalWrapper";

const UserInformation = () => {
  const [hasModal, setHasModal] = useState(false);
  const [profileImage, setProfileImage] = useState("");
  const fileInputRef = useRef(null);
  const [userDetail, setUserDetail] = useState({
    img: "/profile.jpg",
    userName: "gulnabi afridi",
    email: "gulnabifdi@gmail.com",
    firstName: "gulnabi",
    lastName: "afridi",
  });
  const [updatedUserDetail, setUpdatedUserDetail] = useState({
    img: "",
    userName: "",
    email: "",
    firstName: "",
    lastName: "",
  });

  // Function to handle file input change event
  const handleImageChange = (event: any) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setProfileImage(reader.result);
      };

      reader.readAsDataURL(selectedFile);
    }
  };

  const handleEditClick = () => {
    fileInputRef.current.click();
  };

  const handleOpenModal = () => {
    setUpdatedUserDetail(userDetail);
    setHasModal(true);
  };

  const handleUserDetailValue = (e: any) => {
    const name = e.target.name;
    const value = e.target.value;
    setUpdatedUserDetail({
      ...updatedUserDetail,
      [name]: value,
    });
  };

  const handleUpdateUserDetail = () => {
    setUserDetail(updatedUserDetail);
    setHasModal(false);
  };

  useEffect(() => {
    setUpdatedUserDetail({
      ...updatedUserDetail,
      img: profileImage,
    });
  }, [profileImage]);

  return (
    <>
      <div className="w-full flex flex-col lg:px-8 lg:py-8 px-4 py-8">
        {/* edit user-information button */}
        <div className="w-full flex justify-start sm:justify-end">
          <button
            onClick={handleOpenModal}
            className="flex w-[220px] h-[40px] sm:h-[44px] rounded-md justify-center items-center gap-2 bg-black hover:opacity-80"
          >
            <p className="text-[12px] sm:text-[16px] text-white font-medium whitespace-nowrap">
              Edit your Information
            </p>
            <FaUserEdit className="text-[18px] sm:text-[24px] text-white" />
          </button>
        </div>
        <div className="w-full grid grid-cols-1 gap-10 md:grid-cols-[1fr,5fr] justify-center items-start px-0 py-8 lg:px-8 lg:py-8">
          {/* profile picture -------->  */}
          <div className="w-full flex justify-center items-center">
            <div className="w-[100px] sm:w-[150px] h-[100px] sm:h-[150px] relative rounded-full outline outline-[1px] outline-offset-4 outline-black/10 ">
              <Image
                src={userDetail.img}
                fill
                className="object-cover rounded-full outline outline-2 outline-gray-dark outline-offset-4"
                alt="seo-text-here"
              />
            </div>
          </div>
          <div className="w-full max-w-[950px] h-full flex flex-col gap-4 sm:gap-6 items-start">
            {/* account information ----------------> */}
            <div className="w-full flex flex-col border-[1px] border-black/10 rounded-md p-3 sm:p-6">
              <p className="text-black text-[24px] font-normal h-[50px] flex justify-start items-center border-b-[1px] border-black/10">
                Account Information
              </p>
              {/* username   */}
              <div className="w-full py-3 grid grid-cols-2 sm:grid-cols-[1fr,3fr]">
                <p className="text-[18px] h-full text-black font-normal flex justify-start items-center">
                  Username
                </p>
                <div className="w-full text-[18px] font-normal text-black flex justify-start items-center">
                  {userDetail.userName}
                </div>
              </div>
              {/* email   */}
              <div className="w-full py-3 grid grid-cols-2 sm:grid-cols-[1fr,3fr]">
                <p className="text-[18px] text-black font-normal flex justify-start items-center">
                  Email
                </p>
                <p className="w-full text-[18px] font-normal text-black flex justify-start items-center">
                  {userDetail.email}
                </p>
              </div>
            </div>
            {/* profile information ----------------> */}
            <div className="w-full flex flex-col border-[1px] border-black/10 rounded-md p-3 sm:p-6">
              <p className="text-black text-[24px] font-normal h-[50px] flex justify-start items-center border-b-[1px] border-black/10">
                Profile
              </p>
              {/* first name   */}
              <div className="w-full py-3 grid grid-cols-2 sm:grid-cols-[1fr,3fr]">
                <p className="text-[18px] text-black font-normal flex justify-start items-center">
                  First name
                </p>
                <div className="w-full text-[18px] font-normal text-black flex justify-start items-center capitalize">
                  {userDetail.firstName}
                </div>
              </div>
              {/* last name   */}
              <div className="w-full py-3 grid grid-cols-2 sm:grid-cols-[1fr,3fr]">
                <p className="text-[18px] text-black font-normal flex justify-start items-center">
                  Last name
                </p>
                <div className="w-full text-[18px] font-normal text-black flex justify-start items-center capitalize">
                  {userDetail.lastName}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* edit the user-information modal --------------> */}
      <ModalWrapper
        open={hasModal}
        handleClose={() => setHasModal(false)}
        title="Edit user information"
        style="w-[350px] sm:w-[500px] md:w-[690px]"
      >
        <div className="w-full flex flex-col sm:grid gap-9 grid-cols-[0.8fr,3fr] px-4 sm:px-6 pt-4 sm:pt-6 pb-6 sm:pb-11 items-start">
          {/* update your profile image -----------> */}
          <div className="w-full flex justify-center items-center">
            <div className="w-[130px] h-[130px] relative rounded-full">
              <Image
                src={updatedUserDetail?.img}
                fill
                className="object-cover rounded-full outline outline-2 outline-gray-dark outline-offset-4"
                alt="seo-text-here"
              />
              <button
                onClick={handleEditClick}
                className="w-[30px] h-[30px] bg-black/90 dark:bg-white/80 flex justify-center items-center rounded-full absolute right-0 bottom-0"
              >
                <MdEdit className="text-white dark:text-black text-[20px] z-10" />
              </button>
              {/* Hidden file input */}
              <input
                type="file"
                ref={fileInputRef}
                style={{ display: "none" }}
                accept="image/*"
                onChange={handleImageChange}
              />
            </div>
          </div>
          {/* user detail inputs ---------->  */}
          <div className="w-full flex flex-col gap-6">
            {/* account information -------> */}
            <div className="w-full flex flex-col gap-3">
              <p className="text-[24px] capitalize text-black dark:text-white font-normal">
                account information
              </p>
              {/* user name */}
              <div className="w-full flex flex-col gap-1">
                <label
                  htmlFor="userName"
                  className="text-[16px] font-normal text-black dark:text-white capitalize"
                >
                  username
                </label>
                <input
                  type="text"
                  id="userName"
                  name="userName"
                  onChange={handleUserDetailValue}
                  value={updatedUserDetail?.userName}
                  className="w-full h-[44px] focus:outline-none border-[1px] bg-transparent border-black/10 rounded-md px-2 text-[16px] font-normal"
                />
              </div>
              {/* email */}
              <div className="w-full flex flex-col gap-1">
                <label
                  htmlFor="userName"
                  className="text-[16px] font-normal text-black dark:text-white capitalize"
                >
                  email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  onChange={handleUserDetailValue}
                  value={updatedUserDetail?.email}
                  className="w-full h-[44px] focus:outline-none border-[1px] border-black/10 px-2 text-[16px] font-normal"
                />
              </div>
            </div>
            {/* profile information --------> */}
            <div className="w-full flex flex-col gap-3">
              <p className="text-[24px] capitalize text-black dark:text-white font-normal">
                profile information
              </p>
              {/* user name */}
              <div className="w-full flex flex-col gap-1">
                <label
                  htmlFor="firstName"
                  className="text-[16px] font-normal text-black dark:text-white capitalize"
                >
                  firstname
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  onChange={handleUserDetailValue}
                  value={updatedUserDetail?.firstName}
                  className="w-full h-[44px] focus:outline-none border-[1px] border-black/10 px-2 text-[16px] font-normal"
                />
              </div>
              {/* email */}
              <div className="w-full flex flex-col gap-1">
                <label
                  htmlFor="userName"
                  className="text-[16px] font-normal text-black dark:text-white capitalize"
                >
                  lastname
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  onChange={handleUserDetailValue}
                  value={updatedUserDetail?.lastName}
                  className="w-full h-[44px] focus:outline-none border-[1px] border-black/10 px-2 text-[16px] font-normal"
                />
              </div>
            </div>
          </div>
          {/* cancel + confirm button ----------> */}
          <div className="w-full col-span-2 flex gap-3 justify-center items-center">
            <button
              onClick={() => setHasModal(false)}
              className="flex gap-1 justify-center items-center w-[130px] h-[43px] rounded-md border-[1px] border-black dark:border-white hover:opacity-80"
            >
              <MdCancel className="text-[26px]" />
              <p className="text-[16px] font-medium text-black dark:text-white">
                Cancel
              </p>
            </button>
            <button
              onClick={handleUpdateUserDetail}
              className="flex gap-1 justify-center items-center w-[130px] h-[43px] rounded-md bg-black dark:text-white hover:opacity-80"
            >
              <GiConfirmed className="text-[26px] text-white" />
              <p className="text-[16px] font-medium text-white hover:opacity-80">
                Confirm
              </p>
            </button>
          </div>
        </div>
      </ModalWrapper>
    </>
  );
};

export default UserInformation;
