"use client";
import Image from "next/image";
import React, { FC, useState } from "react";
import { GoUnmute } from "react-icons/go";

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
            className=" cursor-pointer absolute bottom-5 left-5 flex flex-col "
            data-v-32c065f4=""
            onClick={() => setmute(!mute)}
          >
            <Image src="/mute.png" alt="h" width={40} height={40} />
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
