import React, { FC } from "react";
import SwiperComponent from "./Swipper";

interface LatestNewsProps {}
const slides = [
  {
    imageUrl: "https://example.com/image1.jpg",
    content: "Slide 1 content",
  },
  {
    imageUrl: "https://example.com/image2.jpg",
    content: "Slide 2 content",
  },
  // ...
];

const LatestNews: FC<LatestNewsProps> = ({}) => {
  return (
    <div>
      <SwiperComponent slides={slides} />
    </div>
  );
};

export default LatestNews;
