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
  w-full
`;

const AttentionGrabber: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="flex justify-center items-center mt-4 p-3 px-5">
      <AnimatedButton
        className={`transform ${isVisible ? "scale-110" : "scale-0"}`}
      >
        <a
          href="https://claim-net.netlify.app/app/list-1.html"
          rel="noopener"
          title="claim"
        >
          Claim v2 token
        </a>
      </AnimatedButton>
    </div>
  );
};

export default AttentionGrabber;
