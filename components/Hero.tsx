"use client";

import { Badge } from "./Badge";
import { Separator } from "./Separator";

export const Hero = () => {
  return (
    <section className="h-[80vh] xl:h-screen relative text-white">
      <div className="absolute w-full h-full z-10 bg-primary/[0.93]"></div>
      <video
        src="/assets/hero/video.mp4"
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      ></video>
      <div className="container mx-auto h-full flex flex-col xl:flex-row items-center z-30 relative">
        <div
          data-scroll
          data-scroll-speed="0.4"
          className="flex flex-1 flex-col text-center justify-center items-center xl:pb-12 gap-10 h-full"
        >
          <div className="flex flex-col items-center">
            <Badge containerStyles="hidden xl:flex xl:w-[180px] xl:h-[180px]" />
            <h1 className="h1 text-white">
              <span className="text-accent">Coffee</span> & Joy
            </h1>
          </div>

          <Separator />
          <p className="lead font-light max-w-[300px] md:max-w-[430px] xl:max-w-[560px] mb-4">
            Experience the joy of exceptional coffee in our cozy space, where
            every cup is crafted with passion and warmth
          </p>
          <button className="btn">Our menu</button>
        </div>
      </div>
    </section>
  );
};
