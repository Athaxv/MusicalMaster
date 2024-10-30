"use client";
import React from "react";
import { BackgroundBeams } from "../components/ui/background-beams";

function page() {
  return (
    <div className='mx-auto text-center h-screen py-12  pt-36'>
      <div className=' grid grid-cols-1 pt-8'>
      <h1 className=' text-7xl font-bold'>Contact Us</h1>
      <p className='mt-12  justify-center flex  text-gray-400 text-center'>We're here to help with any questions about our courses, programs, or events. Reah out and let us khow how we can assist you in your musical journey.</p>
      </div>
      <div className='mt-8  text-center '>
        <input type="text" placeholder='Your email address' className='bg-black p-[1rem] w-[610px]'  />
        <div className='mt-4'>
        <textarea name="Your message" placeholder='Your message...' rows={5} className='bg-black p-[1rem] w-[610px]' id=""></textarea>
        </div>
        <button className='mt-4 items-center  w-[200px] p-[1rem] mr-96 rounded-md font-bold bg-slate-900 ' >Send message</button>
      </div>
      <BackgroundBeams/>
    </div>
  )
}

export default page
