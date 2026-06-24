import React from 'react'
import {Button} from "@heroui/react";
import { FaArrowRightLong } from "react-icons/fa6";
import Debit from '../assets/creditcard.svg'
import Pera from '../Components/Pera';

function DebitCard() {
  return (
   <section className='max-w-330 mx-auto mt-36 mb-42'>
   <div className="flex justify-between items-center">
      <div className="flex flex-col gap-y-7.5">
             <h1 className='text-[40px] font-bold  text-white'>Wern Debit Card</h1>

             <Pera text="More than just a card, it's a bridge to a new financial experience. Embrace the simplicity and security of spending your Cardano with the Wern Card."  className="text-[16px] leading-6 md:w-[424px]"/>

              <div className="flex flex-col gap-y-1">
                <Button  className="text-white font-medium text-[16px] bg-primary py-4 px-8">
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