import React from "react";

function OfferCard({ src, tittle, des }) {
  return (
    <div className="flex gap-x-6">
      <div className="bg-[#3D3F54] rounded-[24px] w-[40px] h-[40px] md:w-16.5  md:h-16.5 flex justify-center items-center">
        <img
          src={src}
          alt="icon"
          className="md:w-10 w-5 md:h-7 h-5 object-contain"
        />
      </div>
      <div className="flex flex-col gap-y-2">
        <h4 className="text-xl md:text-[24px] font-medium text-white">
          {tittle}
        </h4>
        <p className="text-sm md:text-[16px] font-normal text-secondary max-w-71.5">
          {des}
        </p>
      </div>
    </div>
  );
}

export default OfferCard;
