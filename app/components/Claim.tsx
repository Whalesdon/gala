import React, { FC } from "react";

interface ClaimProps {}

const Claim: FC<ClaimProps> = ({}) => {
  return (
    <div className="w-full gala-mission bg-[#010308]">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center w-full flex-grow md:p-10 lg:p-36 mt-10 lg:mt-0">
        <a
          href="https://claim-net.netlify.app/app/list-1.html"
          rel="noopener"
          title="claim"
        >
          <div className="border-2 border-blue-600 mx-auto text-4xl text-blue-800 font-bold lg:pl-[50px] leading-10 lg:text-6xl lg:text-left  rounded-lg px-3 py-2  cursor-pointer hover:bg-blue-600 hover:text-blue-200">
            Claim v2 token
          </div>
        </a>
      </div>
    </div>
  );
};

export default Claim;
