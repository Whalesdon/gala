import Image from "next/image";
import React, { FC } from "react";

interface JoinusProps {}

const Joinus: FC<JoinusProps> = ({}) => {
  return (
    <div className="bg-dark py-32">
      <div className="w-10/12 mx-auto">
        <div className="perspective-none md:perspective-1000">
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-5">
            <div className="">
              <div className="p-8 mt-8 md:mt-0 relative cursor-pointer bg-[#2682de]  rounded-2xl w-full text-4xl font-medium text-white">
                <Image
                  className="h-10 mb-6"
                  src="/discord.svg"
                  alt="h"
                  height={50}
                  width={50}
                />
                <label className="">Join Our Discord</label>
                <Image
                  className="arrow absolute right-8 bottom-11 max-w-3xl"
                  src="/arrow.svg"
                  alt="d"
                  height={30}
                  width={30}
                />
              </div>
            </div>
            <div>
              <div className="p-8 mt-8 md:mt-0 relative  cursor-pointer bg-[#011759] rounded-2xl w-full text-4xl font-medium text-white">
                <Image
                  className="h-10 mb-6"
                  src="/iso-gala.svg"
                  alt="ee"
                  height={50}
                  width={50}
                />
                <label>Careers</label>
                <Image
                  className="arrow absolute right-8 bottom-11 max-w-3xl"
                  src="/arrow.svg"
                  alt="e"
                  height={30}
                  width={30}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Joinus;
