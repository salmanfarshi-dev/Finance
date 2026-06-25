import React from "react";
import OfferCard from "../Components/OfferCard";
import Security from "../assets/security.png";
import Ramp from "../assets/ramp.png";
import Analytics from "../assets/analytics.png";

function Offer() {
  return (
    <section className="max-w-330 mx-auto px-4 md:px-0">
      <h4 className="text-3xl md:text-[40px] font-bold text-center text-white">
        What do we offer?
      </h4>
      <div className="flex flex-col md:flex-row md:gap-y-0 gap-y-5 md:justify-between  md:mt-16 mt-10">
        <OfferCard
          src={Security}
          tittle="Cardano Debit-Cards"
          des="Cardano, simplified. The debit card that makes crypto spending easy."
        />
        <OfferCard
          src={Ramp}
          tittle="On & Off Ramp"
          des="Fiat meets crypto, effortlessly buy, sell, and manage."
        />
        <OfferCard
          src={Analytics}
          tittle="Solutions for business"
          des="Empowering businesses with effortless crypto payments and seamless fiat solutions."
        />
      </div>
    </section>
  );
}

export default Offer;
