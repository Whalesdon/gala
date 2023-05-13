import Image from "next/image";
import React, { FC } from "react";

interface GamesProps {}

const Games: FC<GamesProps> = ({}) => {
  return (
    <div className="w-full" data-v-6d5b0b30="">
      <div
        className="container mx-auto flex flex-col md:flex-row md:gap-24 justify-between items-center w-full flex-grow p-10 lg:p-24"
        data-v-6d5b0b30=""
      >
        <div
          className="games-img-container lg:w-1/2 mb-36 lg:mb-0 lg:mr-36 md:mr-28"
          data-v-6d5b0b30=""
        >
          <div data-v-6d5b0b30="" className="perspective-1000">
            <div
              data-v-6d5b0b30=""
              className="transition-transform duration-1000 transform-origin-center transition-ease-out-cubic transform translate-x-25 translate-y-25 w-full px-4 lg:p-10"
            >
              <Image
                src="/grit.svg"
                alt="Gala Games"
                className="games-img imageOne relative  object-cover 
                h-full 
                w-full 
                group-hover:scale-110 
                transition"
                data-v-6d5b0b30=""
                width={100}
                height={100}
              />
              <Image
                src="/spider.svg"
                alt="Gala Games"
                className="games-img imageTwo absolute top-24 left-16 lg:left-44  object-cover 
                h-full 
                w-full 
                group-hover:scale-110 
                transition  p-10 md:p-6"
                data-v-6d5b0b30=""
                width={100}
                height={100}
              />
            </div>{" "}
          </div>
        </div>
        <div
          className="w-full lg:w-1/2 lg:text-left text-center mx-auto"
          data-v-6d5b0b30=""
        >
          <h4
            className="text-white font-medium text-[45px] mx-auto"
            data-v-6d5b0b30=""
          >
            Games
          </h4>
          <div
            className="text-white font-normal block leading-[22px] text-info text-base pb-[30px] mx-auto lg:mx-0"
            data-v-6d5b0b30=""
          >
            We are all gamers at heart, and Web3 allows us to reconnect with a
            sense of play that is crucial to our humanity.
            <br data-v-6d5b0b30="" />
            <br data-v-6d5b0b30="" />
            Own your gaming experience in a way that gamers have never known,
            and empower yourself with more freedom, more control, and more
            rewards. Welcome to Web3 gaming.
          </div>
          <a
            href="https://app.gala.games"
            target="_blank"
            rel="noopener"
            className="inline-block rounded-[47px] border-2 py-2 px-6 border-[#268AEF] text-[#268AEF] text-[14px] mx-auto"
            data-v-6d5b0b30=""
            title="r"
          >
            Visit Games
          </a>
          <div
            className="text-white flex items-start pt-[35px] mx-auto"
            data-v-6d5b0b30=""
          >
            <div
              className="pl-[13px] pr-[37px] border-l border-l-[#6A6A6A]"
              data-v-6d5b0b30=""
            >
              <span
                className="text-[#6A6A6A] text-[9px] uppercase"
                data-v-6d5b0b30=""
              >
                Games
              </span>
              <div
                className="text-white text-[27px] font-medium"
                data-v-6d5b0b30=""
              >
                28
              </div>
            </div>
            <div
              className="pl-[13px] pr-[37px] border-l border-l-[#6A6A6A]"
              data-v-6d5b0b30=""
            >
              <span
                className="text-[#6A6A6A] text-[9px] uppercase"
                data-v-6d5b0b30=""
              >
                REWARDS DISTRIBUTED TO PLAYERS
              </span>
              <div
                className="text-white text-[27px] font-medium"
                data-v-6d5b0b30=""
              >
                $2.2 billion
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Games;
