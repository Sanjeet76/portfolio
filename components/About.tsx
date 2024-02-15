"use client"
import React from 'react'
import { motion } from "framer-motion"

const About = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
            <h3 className='absolut top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
                About
            </h3>
            <motion.img
                initial={{
                    x: -200,
                    opacity: 0
                }}
                transition={{
                    duration: 1.2,
                }}
                whileInView={{
                    x: 0,
                    opacity: 1,
                }}

                src="https://ik.imagekit.io/z9w0mxr6v/sanjeetpic.jpeg?updatedAt=1707313035269" alt=""
                className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full  object-cover
                 md:rounded-lg md:w-64 md:h-95 xl:w-[-500px] xl:h-[600px]'/>

            <div className='space-y-10  mt-20 px-0 md:px-10 md:mt-0'>
                <h4 className=' text-4xl  font-semibold'>
                    Here is little {" "}<span className='text-[#F7AB0A]/50'>{"<Background />"}</span>{" "}

                </h4>
                <p className='text-sm '>

                    Hi! I'm Sanjeet Kumar. I'm a Computer Science undergraduate equipped with skills in React, Next.js, JavaScript, DevOps, AWS, and Tailwind CSS for modern web development. I excel in building dynamic and interactive user interfaces and web applications using React and Next.js. My expertise extends to crafting robust frontend and backend solutions with JavaScript. Additionally, my familiarity with DevOps practices ensures seamless integration, deployment, and maintenance of software projects on cloud platforms like AWS. With proficiency in Tailwind CSS, I create sleek and responsive designs, delivering intuitive user experiences across various devices and platforms.
                </p>
            </div>



        </motion.div>
    )
}

export default About;