"use client"
import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form"


type Inputs = {
    name: string
    email: string
    subject:string
    message:string
  }
  

const Contact = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm<Inputs>()
      const onSubmit: SubmitHandler<Inputs> = (formData) => {
        window.location.href=`mailto:3676sanjeetkumargupta@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} .${formData.email}`;
      }
    return (
        <div className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center z-0'>
            <h3 className='absolut top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Contact</h3>
            <div
        className="w-full  flex space-x-5 p-10 snap-x snap-mandatory 
      scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 overflow-x-scroll"
      >
            <div className=' flex flex-col space-y-5 '>
                <h4 className='text-4xl font-semibold text-center'>
                    I have got just what you need.{" "}
                    <span className='decoration-[#F7AB0A]/50 underline'>Lets Talk</span>
                </h4>
                <div className='space-y-5'>
                    <div className='flex items-center space-x-5 justify-center '>
                        <PhoneIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
                        <p className='text-2xl '>8521748404</p>
                    </div>

                    <div className='flex items-center space-x-5 justify-center '>
                        <EnvelopeIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
                        <p className='text-2xl '>3676sanjeetkumargupta@gmail.com</p>
                    </div>

                    <div className='flex items-center space-x-5 justify-center '>
                        <MapPinIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
                        <p className='text-2xl '>masaurhi</p>
                    </div>

                </div>
                <form  onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto '>
                    <div className='flex space-x-2 '>
                        <input {...register('name')} className='contactInput 'placeholder="Name" type='text'/>
                        <input {...register('email')} className='contactInput' placeholder='Email' type='email'/>
                    </div>
                    <input {...register('subject')} className='contactInput' placeholder='Subject' type='text'/>
                    <textarea {...register('message')} className='contactInput'placeholder='Message' />
                    <button  className='bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg' type='submit'>Submit</button>
                </form>

            </div>
            </div>
        </div>
    )
}

export default Contact;
