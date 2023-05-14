"use client";
import Image from "next/image";
import React, { FC, useState } from "react";
import { GoUnmute } from "react-icons/go";
import { IoMdVolumeOff } from "react-icons/io";
import { IoVolumeHigh } from "react-icons/io5";

interface MenuProps {}

const Menu: FC<MenuProps> = ({}) => {
  const [mute, setmute] = useState(false);
  return (
    <div>
      <div
        id="coming-soon-container"
        className="bg-black relative"
        data-v-32c065f4=""
      >
        <div className="video-overlay " data-v-32c065f4="">
          <div
            className=" cursor-pointer absolute bottom-5 left-5 flex-col flex h-11 w-11 items-center justify-center rounded-full border-2 border-[gray] bg-[#2e2e2e]/60 transition hover:border-r-white hover:bg-white/10 "
            data-v-32c065f4=""
            onClick={() => setmute(!mute)}
          >
            {mute ? (
              <IoMdVolumeOff className="h-4 w-4 text-white" />
            ) : (
              <IoVolumeHigh className="h-4 w-4 text-white" />
            )}
          </div>
        </div>
        <div id="wrapper" data-v-32c065f4=""></div>
        <video
          src="/movie.mp4"
          autoPlay
          playsInline
          loop
          muted={mute}
          className="fs-vid w-full"
          onClick={() => setmute(!mute)}
        />
      </div>
    </div>
  );
};

export default Menu;
