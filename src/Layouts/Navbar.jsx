import React from 'react'
import {Button} from "@heroui/react";
import Logo from '../assets/logo.png'

function Navbar() {
  return (
  <section className='max-w-330 mx-auto pt-6 md:pt-12 px-4 md:px-0'>

    <div className="flex justify-between items-center">
        <div className="">
            <img src={Logo} alt="" className='md:w-full w-50 object-cover'/>
        </div>

          <Button className="border-primary text-primary hover:bg-primary/15 duration-300" variant="outline">Outline</Button>
    </div>

  </section>
  )
}

export default Navbar