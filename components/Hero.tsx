"use client"
import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import Link from 'next/link'



const Hero = () => {
  const [text, count] = useTypewriter({
    words: [
      "Hi! I'm Sanjeet Kumar ",
      "I'm a Developer",
      "And a Coder"
    ],
    loop: true,
    delaySpeed: 2000
  })
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
      <BackgroundCircles />
      <img className='relative rounded-full h-32 w-32 mx-auto object-cover'
        src="https://ik.imagekit.io/z9w0mxr6v/sanjeetpic.jpeg?updatedAt=1707313035269" alt="" />
      <div className='z-20'>
        <h2 className=' text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>
          Software Engineer
          </h2>

        <h1 className='text-5xl lg:text-6xl font-semibold scroll-px-10'>
          <span>{text}</span>
          <Cursor cursorColor='#F7AB0A' />
        </h1>
        <div className='pt-5'>
         <Link href="#about">
          <button className='heroButton'>About</button></Link> 
         <Link href="#experience"> 
          <button className='heroButton'>Experience</button></Link> 
         <Link href="#skills"> 
         <button className='heroButton'>Skills</button></Link> 
         <Link href="#project">
         <button className='heroButton'>Project</button></Link>
         <Link href="#contact">
         <button className='heroButton'>Contact</button></Link>  
        </div>
      </div>
    </div>
  )
}

export default Hero;