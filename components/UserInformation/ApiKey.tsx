import React, { useEffect, useState } from "react";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { BsPlus } from "react-icons/bs";
import ModalWrapper from "./ModalWrapper";

const ApiKey = () => {
  //
  const [apiKeyData, setApiKeyData] = useState([
    {
      name: " secret key",
      key: "efekemdkemd23221l1mslmslxosxs4eex",
      created: "mar 6, 2023",
      lastUsed: "apr 20,2023",
    },

    {
      name: " secret key",
      key: "efekemdkemd23221l1mslmslxosxs4eex",
      created: "mar 6, 2023",
      lastUsed: "apr 20,2023",
    },
    {
      name: " secret key",
      key: "efekemdkemd23221l1mslmslxosxs4eex",
      created: "mar 6, 2023",
      lastUsed: "apr 20,2023",
    },
    {
      name: " secret key",
      key: "efekemdkemd23221l1mslmslxosxs4eex",
      created: "mar 6, 2023",
      lastUsed: "apr 20,2023",
    },
    {
      name: " secret key",
      key: "efekemdkemd23221l1mslmslxosxs4eex",
      created: "mar 6, 2023",
      lastUsed: "apr 20,2023",
    },
  ]);
  const [newKeyName, setNewKeyName] = useState("");
  const [selectedApiKeyData, setSelectedApiKeyData] = useState({
    name: "",
    id: -1,
  });

  const [newApiModal, setNewApiModal] = useState(false);
  const [editApiModal, setEditApiModal] = useState(false);

  //
  const formatApiKey = (apiKey: string) => {
    // Show the first 2 characters, then 5 dashes, then the last 3 characters
    return (
      apiKey.substring(0, 2) + "-----" + apiKey.substring(apiKey.length - 3)
    );
  };

  const handlCreateNewKey = () => {
    // Generate a random key (16 characters)
    const randomKey = Math.random().toString(36).substring(2, 18);
    // Get the current date in the format "Month Day, Year"
    const currentDate = new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    // Create the new key object
    const newApiKey = {
      name: newKeyName || "secret key",
      key: randomKey,
      created: currentDate,
      lastUsed: "not used yet",
    };
    setApiKeyData([...apiKeyData, newApiKey]);
    setNewApiModal(false);
  };

  const handleDeleteKey = (selectedKey: number) => {
    const updatedApiKeyData = [...apiKeyData];
    updatedApiKeyData.splice(selectedKey, 1);
    setApiKeyData(updatedApiKeyData);
  };

  const handleEditApiKey = () => {
    const copyApiData = [...apiKeyData];
    const updatedApiKeyData = copyApiData.map((item, index) => {
      if (index === selectedApiKeyData.id) {
        return {
          ...item,
          name: selectedApiKeyData.name || "secret key",
        };
      }
      return item;
    });
    setApiKeyData(updatedApiKeyData);
    setEditApiModal(false);
  };

  return (
    <React.Fragment>
      <div className="w-full flex flex-col gap-6 lg:px-8 lg:py-8 px-2 sm:px-4 py-8">
        {/* create a new Secret key button -----> */}
        <div className="w-full flex justify-end items-center">
          <button
            onClick={() => setNewApiModal(true)}
            className="flex justify-center items-center h-[35px] px-3 rounded-md bg-black hover:opacity-75"
          >
            <BsPlus className="text-[26px] text-white" />
            <p className="text-[14px] font-normal text-white">
              Create new secret key
            </p>
          </button>
        </div>
        {/* table -----------------> */}
        <div className="w-full flex flex-col border-[1px] border-black/10 px-4 rounded-md">
          {/* table column ------------> */}
          <div className="w-full overflow-auto">
            <div className="w-full min-w-[570px] grid grid-cols-[1.2fr,1fr,1fr,1fr,1fr] sm:grid-cols-[1.2fr,1.8fr,1fr,1fr,1fr] items-center justify-center h-[45px] border-b-[1px] border-black/10">
              {/* key name */}
              <div className="w-full flex justify-start">
                <p className="text-[12px] md:text-[14px] text-black/80  font-medium uppercase">
                  Name
                </p>
              </div>
              {/* secrete key */}
              <div className="w-full flex justify-start">
                <p className="text-[12px] md:text-[14px] text-black/80  font-medium uppercase">
                  Key
                </p>
              </div>
              {/* created at */}
              <div className="w-full flex justify-start">
                <p className="text-[12px] md:text-[14px] text-black/80  font-medium uppercase">
                  Created
                </p>
              </div>
              {/* last used */}
              <div className="w-full flex justify-start items-center gap-2">
                <p className="text-[12px] md:text-[14px] text-black/80  font-medium uppercase">
                  last used
                </p>
                <AiOutlineExclamationCircle className="text-[14px] text-black/80 " />
              </div>
              {/* edit + delete icon */}
              <div className="flex justify-center items-center gap-3">
                <MdModeEditOutline className="text-[18px] md:text-[20px] text-black/80 cursor-pointer hover:opacity-60" />
                <MdDelete className="text-[18px] md:text-[20px] text-black/80 cursor-pointer hover:opacity-60" />
              </div>
            </div>
          </div>

          {/* table rows --------------> */}
          <div className="w-full overflow-auto">
            {apiKeyData.map((item, index) => {
              return (
                <div
                  key={index}
                  className={`w-full min-w-[570px] grid grid-cols-[1.2fr,1fr,1fr,1fr,1fr] sm:grid-cols-[1.2fr,1.8fr,1fr,1fr,1fr] h-[45px] justify-center items-center border-b-[1px] ${
                    index + 1 === apiKeyData.length
                      ? "border-none"
                      : "border-black/10"
                  } `}
                >
                  {/* key name */}
                  <div className="w-full flex justify-start">
                    <p className="text-[12px] md:text-[14px] text-black/50 capitalize font-normal">
                      {item.name}
                    </p>
                  </div>
                  {/* key  */}
                  <div className="w-full flex justify-start">
                    <p className="text-[12px] md:text-[14px] text-black/50 capitalize font-normal">
                      {formatApiKey(item.key)}
                    </p>
                  </div>
                  {/* created it */}
                  <div className="w-full flex justify-start">
                    <p className="text-[12px] md:text-[14px] text-black/50  capitalize font-normal">
                      {item.created}
                    </p>
                  </div>
                  {/* last used */}
                  <div className="w-full flex justify-start">
                    <p className="text-[12px] md:text-[14px] text-black/50  capitalize font-normal">
                      {item.lastUsed}
                    </p>
                  </div>
                  {/* edit + delete icon */}
                  <div className="flex justify-center items-center gap-3">
                    <MdModeEditOutline
                      onClick={() => {
                        setSelectedApiKeyData({ name: item.name, id: index });
                        setEditApiModal(true);
                      }}
                      className="text-[16px] md:text-[20px] text-black/50 cursor-pointer hover:opacity-60"
                    />
                    <MdDelete
                      onClick={() => handleDeleteKey(index)}
                      className="text-[16px] md:text-[20px] text-black/50 cursor-pointer hover:opacity-60"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* create new secrete key ---------------> */}
      <ModalWrapper
        open={newApiModal}
        handleClose={() => setNewApiModal(false)}
        style="w-[550px]"
        title="Create new api key"
        headerHeight="h-[50px]"
      >
        <div className="w-full flex flex-col p-4">
          {/* key name input --> */}
          <div className="w-full flex flex-col gap-8">
            <div className="w-full flex flex-col gap-1">
              <label
                htmlFor="name"
                className="text-[14px] font-normal text-black  capitalize"
              >
                Name <span className="text-black/70">Optional</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                onChange={(e: any) => setNewKeyName(e.target.value)}
                className="w-full h-[42px] focus:outline-none border-[1px] bg-transparent border-black/10 rounded-md px-2 text-[16px] font-normal"
              />
            </div>
            {/* cancel + create secret key button -----> */}
            <div className="w-full flex justify-end items-center gap-2">
              <button
                onClick={() => setNewApiModal(false)}
                className="text-[14px] text-black bg-transparent border-[1px] border-black rounded-md px-4 h-[35px] leading-3 flex justify-center items-center hover:opacity-75 font-medium"
              >
                Cancel
              </button>
              <button
                onClick={handlCreateNewKey}
                className="text-[14px] text-white bg-black rounded-md px-3 h-[35px] flex justify-center items-center leading-3 hover:opacity-75 font-normal"
              >
                Create Secret Key
              </button>
            </div>
          </div>
        </div>
      </ModalWrapper>

      {/* edit api-key modal  ----------------->  */}
      <ModalWrapper
        open={editApiModal}
        handleClose={() => setEditApiModal(false)}
        style="w-[550px]"
        title="Edit your api key"
        headerHeight="h-[50px]"
      >
        <div className="w-full flex flex-col p-4">
          {/* key name input --> */}
          <div className="w-full flex flex-col gap-8">
            <div className="w-full flex flex-col gap-1">
              <label
                htmlFor="name"
                className="text-[14px] font-normal text-black  capitalize"
              >
                Name <span className="text-black/70">Optional</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={selectedApiKeyData.name}
                onChange={(e: any) =>
                  setSelectedApiKeyData({
                    ...selectedApiKeyData,
                    name: e.target.value,
                  })
                }
                className="w-full h-[42px] focus:outline-none border-[1px] bg-transparent border-black/10 rounded-md px-2 text-[16px] font-normal"
              />
            </div>
            {/* cancel + create secret key button -----> */}
            <div className="w-full flex justify-end items-center gap-2">
              <button
                onClick={() => setEditApiModal(false)}
                className="text-[14px] text-black bg-transparent border-[1px] border-black rounded-md px-4 h-[35px] leading-3 flex justify-center items-center hover:opacity-75 font-medium"
              >
                Cancel
              </button>
              <button
                onClick={handleEditApiKey}
                className="text-[14px] text-white bg-black rounded-md px-3 h-[35px] flex justify-center items-center leading-3 hover:opacity-75 font-normal"
              >
                Edit
              </button>
            </div>
          </div>
        </div>
      </ModalWrapper>
    </React.Fragment>
  );
};

export default ApiKey;
