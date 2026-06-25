import React from "react";
import Logo from "../assets/footerlogo.png";
import Pera from "../Components/Pera";

function Footer() {
  return (
    <section className="mt-32 mb-32 md:mt-10 md:mb-10 bg-[#292834]/30 backdrop-blur">
      <div className="max-w-330 mx-auto px-4 md:px-0">
        <div className="pt-16 pb-33.5 grid grid-cols-12 gap-8 justify-between">
          <div className="md:col-span-4 col-span-12">
            <img src={Logo} alt="image" />
            <p className="mt-3 text-[16px] text-secondary font-normal max-w-71.5 w-full flex-wrap">
              Discover the power of our secure and rewarding credit cards
            </p>
          </div>
          <div className="md:col-span-2 col-span-6">
            <h4 className="text-[16px] font-bold text-white">About us</h4>
            <div className="flex flex-col mt-4 gap-y-2">
              <Pera text="Investors" />
              <Pera text="Features" />
              <Pera text="Book a demo" />
              <Pera text="Security " />
            </div>
          </div>
          <div className="md:col-span-2 col-span-6">
            <h4 className="text-[16px] font-bold text-white">Products</h4>
            <div className="flex flex-col mt-4 gap-y-2">
              <Pera text="Credits Cards" />
              <Pera text="Gift Cards" />
              <Pera text="Savings accounts" />
              <Pera text="NFT " />
            </div>
          </div>
          <div className="md:col-span-2 col-span-6">
            <h4 className="text-[16px] font-bold text-white">Useful Links</h4>
            <div className="flex flex-col mt-4 gap-y-2">
              <Pera text="Free rewards" />
              <Pera text="Documentation" />
              <Pera text="Affiliate program" />
            </div>
          </div>
          <div className="md:col-span-2 col-span-6">
            <h4 className="text-[16px] font-bold text-white">Social</h4>
            <div className="flex flex-col mt-4 gap-y-2">
              <Pera text="Changelog" />
              <Pera text="License" />
              <Pera text="Site Maps" />
              <Pera text="News " />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
