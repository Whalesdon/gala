import Image from "next/image";
import React, { FC } from "react";

interface MusicProps {}

const Music: FC<MusicProps> = ({}) => {
  return (
    <div className="w-full" data-v-3db48752="">
      <div
        className="container mx-auto flex flex-col-reverse md:flex-row justify-between items-center w-full flex-grow p-10 lg:p-20"
        data-v-3db48752=""
      >
        <div
          className="lg:w-1/2 lg:text-left text-center mx-auto"
          data-v-3db48752=""
        >
          <h4
            className="text-white font-medium text-[45px] mx-auto"
            data-v-3db48752=""
          >
            Music
          </h4>
          <div
            className="text-white font-normal block leading-[22px] text-info text-base pb-[30px] mx-auto lg:mx-0"
            data-v-3db48752=""
          >
            By decentralizing music ownership in our new Web3 world of music,
            Gala has empowered artists, fans, and music lovers all over the
            world
          </div>
          <a
            href="https://music.gala.com"
            target="_blank"
            rel="noopener"
            className="inline-block rounded-[47px] border-2 py-2 px-6 border-[#268AEF] text-[#268AEF] text-[14px] mx-auto"
            data-v-3db48752=""
          >
            Visit Music
          </a>
          <div
            className="text-white flex items-start pt-[35px] mx-auto"
            data-v-3db48752=""
          >
            <div
              className="pl-[13px] pr-[37px] border-l border-l-[#6A6A6A]"
              data-v-3db48752=""
            >
              <span
                className="text-[#6A6A6A] text-[9px] uppercase"
                data-v-3db48752=""
              >
                Artists
              </span>
              <div
                className="text-white text-[27px] font-medium"
                data-v-3db48752=""
              >
                6
              </div>
            </div>
            <div
              className="pl-[13px] pr-[37px] border-l border-l-[#6A6A6A]"
              data-v-3db48752=""
            >
              <span
                className="text-[#6A6A6A] text-[9px] uppercase"
                data-v-3db48752=""
              >
                REWARDS DISTRIBUTED TO ARTISTS
              </span>
              <div
                className="text-white text-[27px] font-medium"
                data-v-3db48752=""
              >
                $15M +
              </div>
            </div>
          </div>
        </div>
        <div
          className="music-img-container w-full lg:w-1/2 lg:mb-0 mb-36 md:ml-28 sm:ml-0"
          data-v-3db48752=""
        >
          <div data-v-3db48752="" className="perspective-1000">
            <div
              data-v-3db48752=""
              className="transition-transform duration-1000 transform-origin-center transition-ease-out-cubic"
            >
              <Image
                src="/gg_snoop_music.png"
                alt="Gala Music"
                className="music-img imageOne object-cover w-full h-full transition relative"
                data-v-3db48752=""
                width={100}
                height={100}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Music;
