import React from 'react';
import Image from 'next/image';

export default function Contact() {
    return (
        <>
            <h1 id="contact" className="md:text-4xl text-2xl text-purple-200 font-bold text-center mt-10 mb-5">Contact</h1>

            <div className="flex flex-col items-center justify-center">
                <p className="md:text-lg text-md text-purple-400 font-semibold mb-5">Get in touch with me</p>
                <p className="md:text-lg text-md text-purple-400 font-semibold mb-5">Email: <span className="text-purple-400">
                    <a href="mailto:moizulhaq472@gmail.com" className="hover:text-purple-400">
                        <span className="text-purple-400">moizulhaq472@gmail.com</span>
                    </a>
                </span></p>
                <p className="md:text-lg text-md text-purple-400 font-semibold mb-5">Phone: <span className="text-purple-400">
                    <a href="tel:+923412968601" className="hover:text-purple-300">
                        <span className="text-purple-400">+92 (341) 2968601</span>
                    </a>
                </span></p>

                <div className="flex md:w-6/12 w-8/12 justify-between bg-gradient-to-r from-purple-950 to-purple-800 p-5 rounded-xl mx-auto mt-10 flex-col md:flex-row items-center md:justify-between gap-3">
                    <p className="md:text-xl text-md font-semibold text-purple-200">Socials</p>
                    <div className="md:space-x-3 space-x-8 flex">
                        <a href="https://www.linkedin.com/in/moiz-ul-haq-dev" target="_blank" rel="noreferrer" className="text-purple-300 hover:text-purple-400">
                            <Image src="/images/linkedin-tile.svg" alt="linkedin" className="md:w-10 w-6 md:h-10 h-6" height={10} width={10}/>
                        </a>
                        <a href="https://github.com/Moiz-ul-haq-dev" target="_blank" rel="noreferrer" className="text-purple-300 hover:text-purple-400">
                            <Image src="/images/github-tile.svg" alt="github" className="md:w-10 w-6 md:h-10 h-6" height={10} width={10}/>
                        </a>
                        <a href="https://www.fiverr.com/moizulhaq472" target="_blank" rel="noreferrer" className="text-purple-300 hover:text-purple-400">
                            <Image src="/images/fiverr-icon.svg" alt="fiverr" className="md:w-10 w-6 md:h-10 h-6" height={10} width={10}/>
                        </a>
                    </div>
                </div>
            </div>

            <div className='w-full h-px bg-purple-200 mt-10 mb-2'></div>
        </>
    );
}
