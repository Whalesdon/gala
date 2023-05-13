import Image from "next/image";
import React, { FC } from "react";

interface OurpillarProps {}

const Ourpillar: FC<OurpillarProps> = ({}) => {
  return (
    <div className="w-full">
      <div className="container mx-auto p-10 lg:p-20">
        <h4 className="text-white text-3xl font-medium pb-[10px] block text-center lg:text-left mt-10">
          Our Pillars
        </h4>
        <h4 className="text-white text-l font-medium pb-[30px] block text-center lg:text-left">
          Together, we are a community-uplifting powerhouse defining new
          frontiers in Web3 entertainment.
        </h4>
        <div className="perspective-1000">
          <div className="welcome-container grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 gap-[25px] lg:gap-[75px]">
            <div>
              <div className="transition-transform duration-1000 transform-origin-center transition-ease-out-cubic">
                <a href="https://app.gala.games" title="d">
                  <Image
                    src="/games-thumb.png"
                    alt="Gala Games"
                    className="pillar-img object-cover w-full h-full transition"
                    width={500}
                    height={500}
                  />
                </a>
                <a
                  href="https://app.gala.games"
                  className="text-white pt-6 block text-base"
                >
                  Gala Games <span>→</span>
                </a>
              </div>
            </div>
            <div>
              <div className="transition-transform duration-1000 transform-origin-center transition-ease-out-cubic">
                <a href="https://film.gala.com/" title="r">
                  <Image
                    src="/film-thumb.png"
                    alt="Gala Film"
                    className="pillar-img object-cover w-full h-full transition"
                    width={500}
                    height={500}
                  />
                </a>
                <a
                  href="https://film.gala.com/"
                  className="text-white pt-6 block text-base"
                >
                  Gala Film <span>→</span>
                </a>
              </div>
            </div>
            <div>
              <div className="transition-transform duration-1000 transform-origin-center transition-ease-out-cubic">
                <a href="https://music.gala.com/" title="e">
                  <Image
                    src="/music-thumb.png"
                    alt="Gala Music"
                    className="pillar-img  object-cover 
              h-full 
              w-full 
              transition"
                    width={500}
                    height={500}
                  />
                </a>
                <a
                  href="https://music.gala.com/"
                  className="text-white pt-6 block text-base"
                >
                  Gala Music <span>→</span>
                </a>
              </div>
            </div>
            <div>
              <div className="transition-transform duration-1000 transform-origin-center ease-out-cubic">
                <a href="/galaverse" title="i">
                  <Image
                    src="/galaverse-thumb.png"
                    alt="Galaverse"
                    className="pillar-img object-cover w-full h-full 
              transition"
                    width={500}
                    height={500}
                  />
                </a>
                <a
                  href="/galaverse"
                  className="text-white pt-6 block text-base"
                >
                  Into the Galaverse <span>→</span>
                </a>
              </div>
            </div>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default Ourpillar;
