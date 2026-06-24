import React from 'react'
import {Button} from "@heroui/react";
import { FaArrowRightLong } from "react-icons/fa6";
import Debit from '../assets/creditcard.svg'
import Pera from '../Components/Pera';

function DebitCard() {
  return (
   <section className='max-w-330 mx-auto mt-16 mb-16 md:mt-36 md:mb-42 px-4 md:px-0'>
   <div className="flex flex-col md:flex-row gap-y-10 md:justify-between items-center">
      <div className="flex flex-col gap-y-7.5">
             <h1 className='text-[30px] md:text-[40px] font-bold  text-white'>Wern Debit Card</h1>

             <Pera text="More than just a card, it's a bridge to a new financial experience. Embrace the simplicity and security of spending your Cardano with the Wern Card."  className="text-sm md:text-[16px] md:leading-6 md:w-[424px]"/>

              <div className="flex flex-col gap-y-1">
                <Button  className="text-white font-medium md:text-[16px] bg-primary py-3 px-5">
      Create New Card
        <FaArrowRightLong className='ml-2'/>

      </Button>
      <p className='text-[14px] font-bold text-primary ml-10'>Will be available soon</p>
              </div>
            </div>

            <div>
                <img src={Debit} alt="image"/>
            </div>
   </div>


   </section>
  )
}

export default DebitCard