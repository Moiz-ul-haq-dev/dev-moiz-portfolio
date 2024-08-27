"use client";
import React from 'react';
import Image from 'next/image';
import TypewriterComponent from 'typewriter-effect';
import { Vortex } from './ui/vortex';

export default function Hero() {

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className='overflow-hidden' id="home">
        <Vortex
          backgroundColor="black"
          className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
        >
          <div className='w-full mx-auto'>
            <div className='row md:pt-32 pt-24 w-full flex'>
              <div className='w-full'>
                <h1 className='md:text-6xl text-2xl text-purple-200 font-bold text-center z-5'>
                  Hi 👋 I am <span className='text-purple-200'>Moiz-ul-haq</span>
                </h1>
                <div className='relative z-10 h-auto md:w-96 w-72 mx-auto mb-12'>
                  <Image
                    src='/images/Profile-removebg-preview.png'
                    alt='Description of the image'
                    objectFit='cover'
                    quality={100}
                    priority={true}
                    width={500}
                    height={500}
                    className='rounded-lg mx-auto'
                  />
                  {/* Overlay with border and transparent background */}
                  {/* <div className='absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent'></div> */}
                  <div className='absolute inset-0 bg-transparent'></div>
                </div>
                <h1 className='md:text-lg text-md text-purple-200 font-bold text-center z-5'>
                  <TypewriterComponent
                    options={{
                      strings: ['Web Developer & Game Developer', 'AR / VR Developer', 'Mobile App Developer', 'Desktop App Developer'],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </h1>
                <h5 className='md:text-lg text-md text-purple-200 md:px-24 px-5 w-full font-bold text-center z-20 hover: cursor-pointer'>
                  Based in Lahore, Pakistan.
                </h5>
                <div className='flex justify-center md:gap-7 gap-2 mt-4'>
                  <button onClick={scrollToContact} className='md:text-lg text-md text-center w-auto flex items-center hover:shadow-lg hover:shadow-black gap-1 md:gap-2 bg-gradient-to-r from-purple-950 to-purple-800 px-4 md:px-3 py-1 md:py-2 text-white rounded-lg hover:opacity-90 focus:outline-none focus:ring focus:border-blue-300'>
                    You need a website?
                  </button>
                  <button onClick={scrollToContact} className='md:text-lg text-md text-center w-auto flex items-center hover:shadow-lg hover:shadow-black gap-1 md:gap-2 bg-transparent border-purple-500 border-2 px-4 md:px-3 py-1 md:py-2 text-purple-500 rounded-lg hover:opacity-90 focus:outline-none focus:ring focus:border-blue-300'>
                    You need a game?
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Vortex>
        <div className='w-full h-px bg-purple-200 my-10'></div>
      </div>
    </>
  );
}
