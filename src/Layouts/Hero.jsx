import React from 'react'
import Pera from '../Components/Pera'
import {Button} from "@heroui/react";
import { FaArrowRightLong } from "react-icons/fa6";
import BannerImage from '../assets/bannerimage.png'





function Hero() {
  return (
    <section className='max-w-[1320px] mx-auto my-32'>
        <div className="flex justify-between items-start">
            <div className="flex flex-col gap-y-7.5">
             <h1 className='text-[56px] font-bold leading-16 tracking-[-2.5%] text-white md:w-[604px] w-full'>Spend your Cardano anywhere, anytime.</h1>

             <Pera text="Our user-friendly platform enables businesses and individuals to seamlessly convert and spend their crypto for everyday purchases."  className="text-[18px] leading-6 md:w-[498px]"/>

              <Button  className="text-white font-medium text-[16px] bg-primary py-4 px-8">
      Get Started
        <FaArrowRightLong className='ml-2'/>

      </Button>
            </div>

            <div className="absolute  right-0">
                <img src={BannerImage} alt="image" className=' top-0 right-0'/>
            </div>
        </div>

    </section>
  )
}

export default Hero