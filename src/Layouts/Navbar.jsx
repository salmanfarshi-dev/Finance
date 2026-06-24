import React from 'react'
import {Button} from "@heroui/react";
import Logo from '../assets/logo.png'

function Navbar() {
  return (
  <section className='max-w-330 mx-auto pt-12'>

    <div className="flex justify-between items-center">
        <div className="">
            <img src={Logo} alt="" />
        </div>

          <Button className="border-primary text-primary hover:bg-primary/15 duration-300" variant="outline">Outline</Button>
    </div>

  </section>
  )
}

export default Navbar