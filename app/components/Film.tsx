import Image from "next/image";
import React, { FC } from "react";

interface FilmProps {}

const Film: FC<FilmProps> = ({}) => {
  return (
    <div className="w-full relative" data-v-0fa46892="">
      <div
        className="container mx-auto flex flex-col md:flex-row justify-between items-center w-full flex-grow p-10 lg:p-20"
        data-v-0fa46892=""
      >
        <div
          className="film-img-container pb-16 md:pb-0 lg:w-1/2 lg:mr-36 md:mr-28"
          data-v-0fa46892=""
        >
          <div data-v-0fa46892="" className="perspective-1000">
            <div
              data-v-0fa46892=""
              className="transition-transform duration-1000 transform-origin-center transition-ease-out-cubic transform scale-113.237"
            >
              <div className="video" data-v-0fa46892="">
                <div className="video__action" data-v-0fa46892="">
                  <div
                    className="video__action-buttons overlay-text flex flex-col"
                    data-v-0fa46892=""
                  >
                    <Image
                      className="h-2"
                      src="/mute.png"
                      data-v-0fa46892=""
                      alt="h"
                      width={10}
                      height={10}
                    />
                  </div>
                </div>
                <video
                  src="/movie.mp4"
                  autoPlay
                  playsInline
                  loop
                  muted
                  data-v-0fa46892=""
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className="w-full lg:w-1/2 lg:text-left text-center mx-auto"
          data-v-0fa46892=""
        >
          <h4
            className="text-white font-medium text-[45px] mx-auto"
            data-v-0fa46892=""
          >
            Film
          </h4>
          <div
            className="text-white font-normal block text-info leading-[22px] text-base pb-[30px] mx-auto lg:mx-0"
            data-v-0fa46892=""
          >
            Creating long-awaited Web3 solutions for TV and Film, Gala Film will
            empower emerging artists and fans, while bringing to life some
            incredible creative work. <br data-v-0fa46892="" />{" "}
            <br data-v-0fa46892="" />
            There will be abundant reward and ownership opportunities in the
            Gala Film Ecosystem.
          </div>
          <a
            href="https://film.gala.com/"
            className="inline-block rounded-[47px] border-2 py-2 px-6 border-[#268AEF] text-[#268AEF] text-[14px] mx-auto"
            data-v-0fa46892=""
          >
            Visit Film
          </a>
          <div
            className="text-white flex items-start pt-[35px] mx-auto"
            data-v-0fa46892=""
          >
            <div
              className="pl-[13px] pr-[37px] border-l border-l-[#6A6A6A]"
              data-v-0fa46892=""
            >
              <span
                className="text-[#6A6A6A] text-[9px] uppercase"
                data-v-0fa46892=""
              >
                Launching
              </span>
              <div
                className="text-white text-[27px] font-medium"
                data-v-0fa46892=""
              >
                2022
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Film;
