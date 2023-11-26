import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { AiFillCheckCircle } from 'react-icons/ai';
import { FiChevronDown } from 'react-icons/fi';
import OutSideClick from '@/hooks/OutSideClick';
import { BsGearWideConnected } from 'react-icons/bs';
import { MdDelete } from 'react-icons/md';

const Channel = () => {
  const [IsOpen, setIsOpen] = useState(false);
  const [channel, setChannel] = useState('');
  const [channelCardData, setChannelCardData] = useState([
    {
      icon: '/twitter.svg',
      name: 'Twitter',
      disabled: true,
    },
    {
      icon: '/discord.svg',
      name: 'discord',
      disabled: false,
    },
    {
      icon: '/linkedin.svg',
      name: 'linkedin',
      disabled: true,
    },
    {
      icon: '/slack.svg',
      name: 'slack',
      disabled: true,
    },
  ]);

  const handleToggleChannel = (selectedIndex: number) => {
    setChannelCardData((prevData) =>
      prevData.map((item, index) => {
        if (index === selectedIndex) {
          return { ...item, disabled: !item.disabled };
        }
        return item;
      })
    );
  };

  const handleDeleteChannel = (selectedChannel: number) => {
    const copyChannel = [...channelCardData];
    copyChannel.splice(selectedChannel, 1);
    setChannelCardData(copyChannel);
  };

  useEffect(() => {
    console.log(channelCardData);
  }, [channelCardData]);

  return (
    <div className='w-full flex flex-col items-start justify-start lg:px-8 lg:py-8 px-2 sm:px-4 py-8'>
      <div className='w-full max-w-[630px] flex flex-col gap-8'>
        <div className='flex flex-col items-start border-[1px] border-black/10 p-3 sm:p-6 rounded-md'>
          {/*  */}
          <div className='w-full flex flex-col gap-3'>
            {channelCardData.map((item, index) => {
              return (
                <div
                  key={index}
                  className='w-full grid grid-cols-[2fr,1fr] sm:grid-cols-2 justify-center items-center py-1'
                >
                  <div className='grid grid-cols-[1fr,1.3fr] justify-center items-center gap-2'>
                    <div className='flex justify-start items-center gap-1 sm:gap-2'>
                      <div className='w-[20px] sm:w-[23px] h-[20px] sm:h-[23px] relative'>
                        <Image src={item.icon} className='' fill alt='' />
                      </div>
                      <p className='text-black text-[14px] sm:text-[18px] font-medium'>
                        {item.name}
                      </p>
                    </div>
                    <p className='text-[12px] sm:text-[16px] text-black  font-normal'>
                      Username
                    </p>
                  </div>
                  {/* disabled + enable button -----> */}
                  {item.disabled ? (
                    <div className='w-full flex gap-2 justify-end items-center'>
                      <button
                        onClick={() => handleToggleChannel(index)}
                        className='text-[12px] sm:text-[14px] text-black border-[1px] border-black/10 rounded-md h-[27px] sm:h-[30px] w-[80px] sm:w-[100px] hover:bg-black/5'
                      >
                        Disabled
                      </button>
                      <MdDelete
                        onClick={() => handleDeleteChannel(index)}
                        className='text-black cursor-pointer text-[24px] hover:opacity-70'
                      />
                    </div>
                  ) : (
                    <div className='w-full flex gap-2 justify-end items-center'>
                      <button
                        onClick={() => handleToggleChannel(index)}
                        className='flex justify-center items-center gap-1 text-[12px] sm:text-[14px] text-white border-[1px] border-black/10 rounded-md h-[27px] sm:h-[30px] w-[80px] sm:w-[100px] bg-black hover:opacity-80'
                      >
                        <AiFillCheckCircle className='text-[16px] sm:text-[18px] text-white' />
                        Enabled
                      </button>
                      <MdDelete
                        onClick={() => handleDeleteChannel(index)}
                        className='text-black cursor-pointer text-[24px] hover:opacity-70'
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
        {/* select box + button -------------------> */}
        <div className='flex justify-start items-center gap-2 sm:gap-4'>
          {/* select the channel --->  */}
          <OutSideClick
            style='w-full max-w-[170px] sm:max-w-[240px] bg-black flex flex-col justify-center items-center relative'
            Event={() => setIsOpen(false)}
          >
            <div className='w-full flex justify-between items-center'>
              <input
                onClick={() => setIsOpen(!IsOpen)}
                className='w-full h-[40px] cursor-pointer sm:h-[45px] border-[1px] text-black border-black/10 dark:border-white/20 capitalize placeholder:text-[14px] sm:placeholder:text-[16px] placeholder:font-normal text-[14px] sm:text-[16px] font-inter font-medium px-3 rounded-md focus:outline-none select-none'
                type='text'
                id='select-state'
                value={channel}
                placeholder='Select Channel'
              />
              <FiChevronDown
                onClick={() => setIsOpen(!IsOpen)}
                className='text-[22px] cursor-pointer sm:text-[24px] text-[#afb4be] absolute right-3'
              />
            </div>
            {IsOpen && (
              <div className='w-full bg-white/90 flex flex-col gap-2 bg-white-main border-[1px] border-black/10 rounded-md p-2 sm:p-3 absolute top-12 z-30'>
                {/* select box items */}
                {channelSelectItems.map((item, index) => {
                  return (
                    <button
                      key={index}
                      onClick={() => {
                        setChannel(item.name);
                        setIsOpen(false);
                      }}
                      className={`w-full px-3 py-2 flex gap-2 justify-start items-center ${
                        channel === item.name
                          ? 'bg-[#E5E5E5]'
                          : 'bg-transparent'
                      } hover:bg-[#E5E5E5] hover:text-black rounded-md`}
                    >
                      <div className='w-[20px] sm:w-[23px] h-[20px] sm:h-[23px] relative'>
                        <Image src={item.icon} fill alt='' />
                      </div>
                      <p className='text-black/90 tracking-wider text-[14px] sm:text-[16px] font-medium capitalize'>
                        {item.name}
                      </p>
                    </button>
                  );
                })}
              </div>
            )}
          </OutSideClick>
          {/* connect channel button ----> */}
          <button className=' h-[40px] sm:h-[45px] flex gap-2 bg-black opacity-90 hover:opacity-75 rounded-md justify-center items-center px-2 sm:px-4'>
            <p className='text-[14px] sm:text-[16px] whitespace-nowrap text-white'>
              Connect Channel
            </p>
            <BsGearWideConnected className='text-[18px] sm:block hidden sm:text-[20px] text-white' />
          </button>
        </div>
      </div>
    </div>
  );
};

const channelSelectItems = [
  {
    icon: '/twitter.svg',
    name: 'Twitter',
    disabled: true,
  },
  {
    icon: '/discord.svg',
    name: 'discord',
    disabled: false,
  },
  {
    icon: '/linkedin.svg',
    name: 'linkedin',
    disabled: true,
  },
  {
    icon: '/slack.svg',
    name: 'slack',
    disabled: true,
  },
];

export default Channel;
