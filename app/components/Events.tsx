import Image from "next/image";
import React, { FC } from "react";

interface EventsProps {}

const Events: FC<EventsProps> = ({}) => {
  return (
    <div
      className="galaverse-banner w-full bg-[url('/gv-banner.jpeg')] bg-cover bg-center bg-transparent h-[480px] md:h-[694px] relative"
      data-v-53fc5828=""
    >
      <div
        className="galaverse-banner__content container py-20 mx-auto "
        data-v-53fc5828=""
      >
        <Image
          src="/galaverse-logo-white.svg"
          className="gv-mark px-10 mt-0 md:px-10"
          data-v-53fc5828=""
          alt="f"
          width={250}
          height={250}
        />
        <div className="absolute bottom-20 px-10 md:px-10" data-v-53fc5828="">
          <h2
            className="font-medium text-2xl lg:text-5xl pb-5 text-white"
            data-v-53fc5828=""
          >
            Events of a Lifetime
          </h2>
          <h4
            className="font-normal text-l lg:text-3xl pb-5 md:w-3/4 text-white"
            data-v-53fc5828=""
          >
            Bringing the Galaverse into reality with events that exceed the
            imagination
          </h4>
          <a
            href="/galaverse"
            className="inline-block rounded-[47px] border-2 py-2 px-6 border-white text-white text-[14px] cursor-pointer"
            data-v-53fc5828=""
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Events;
