import React from 'react'
import { TfiQuoteLeft } from "react-icons/tfi";


function Cards({des, src, name,status}) {
  return (
    <div className='w-full md:w-[392px] rounded-[32px] bg-[#27322F]/24 px-3 md:px-6 md:py-12 py-6'>
        <div className="flex flex-col gap-y-8">
            <div className="bg-[#3D3F54] w-14 h-14 rounded-full flex justify-center items-center">
                <TfiQuoteLeft className='text-white text-2xl' />

            </div>
            <p className='text-[16px] font-poppins md:w-[344px] w-full flex-wrap text-white leading-6'>{des}</p>

            <div className="flex items-center gap-x-2">
                <div className="w-12 h-12 rounded-full">
                    <img src={src} alt="image" className='w-full h-full rounded-full object-center' />
                </div>
                <div className="flex flex-col gap-x-1">
                    <h5 className='font-medium text-[16px] text-white tracking-[-0.32px]'>{name}</h5>
                    <p className='text-secondary text-xs font-normal'>{status }</p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Cards