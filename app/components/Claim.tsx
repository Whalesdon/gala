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
          <div className="text-white mx-auto text-4xl lg:text-5xl lg:text-left lg:border-t-0 text-center font-normal block border-t lg:border-l border-blue-500 lg:pl-[50px] py-4 leading-10">
            Claim v2 token
          </div>
        </a>
      </div>
    </div>
  );
};

export default Claim;
