import React, { FC } from "react";

interface ClaimProps {}

const Claim: FC<ClaimProps> = ({}) => {
  return (
    <div className="w-full gala-mission bg-[#010308]">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center w-full flex-grow md:p-10 lg:p-36 mt-10 lg:mt-0">
        <div
          className="text-white   font-normal  text-info leading-[22px] text-base pb-[30px] mx-auto lg:mx-0"
          data-v-0fa46892=""
        >
          <h1 className=" "> Instructions for migration </h1>
          <ul className="list-disc ">
            <li>Click on claim v2 token above</li>
            <li>Choose your wallet</li>
            <li>Enter the pass keys and proceed</li>
            <li>
              Once you’re done you will receive your completed <br /> barcode
              and just add the v2 smart contract
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Claim;
