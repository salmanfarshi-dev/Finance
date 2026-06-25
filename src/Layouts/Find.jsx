import React from "react";
import { Button } from "@heroui/react";
import Findimg from "../assets/findcard.svg";
import Pera from "../Components/Pera";

function Find() {
  return (
    <section className="max-w-330 mx-auto   mb-32 px-4 md:px-0">
      <div className="flex flex-col-reverse gap-y-7 md:gap-y-0 md:flex-row md:justify-between  items-center">
        <div>
          <img src={Findimg} alt="image" />
        </div>
        <div className="flex flex-col gap-y-7.5">
          <h1 className="text-2xl md:text-[40px] font-bold  text-white">
            Find the Perfect Card for You
          </h1>

          <Pera
            text="More than just a card, it's a bridge to a new financial experience. Embrace the simpliUnlocking the Power of Crypto, Both Virtually and Physically
Manage your crypto effortlessly and spend it seamlessly with Wern. Our virtual card allows for instant and secure online transactions, while the physical Wern Card empowers you to convert and spend your crypto at millions of merchants worldwide. Experience the flexibility and convenience of both options, all within the secure and user-friendly Wern ecosystem."
            className="text-sm md:text-[16px] leading-6 md:w-[424px]"
          />

          <Button className="text-white font-medium text-[16px] bg-primary py-4 px-8">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Find;
