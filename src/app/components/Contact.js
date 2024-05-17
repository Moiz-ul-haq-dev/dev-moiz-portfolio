import React from 'react';
import Image from 'next/image';

export default function Contact() {
    return (
        <>
            <h1 id="contact" className="text-4xl text-purple-200 font-bold text-center mt-10 mb-5">Contact</h1>

            <div className="flex flex-col items-center justify-center">
                <p className="text-lg text-purple-400 font-semibold mb-5">Get in touch with me</p>
                <p className="text-lg text-purple-400 font-semibold mb-5">Email: <span className="text-purple-400">
                    <a href="mailto:moizulhaq472@gmail.com" className="hover:text-purple-400">
                        <span className="text-purple-400">moizulhaq472@gmail.com</span>
                    </a>
                </span></p>
                <p className="text-lg text-purple-400 font-semibold mb-5">Phone: <span className="text-purple-400">
                    <a href="tel:+923412968601" className="hover:text-purple-300">
                        <span className="text-purple-400">+92 (341) 2968601</span>
                    </a>
                </span></p>

                <div className="flex md:w-6/12 w-8/12 justify-between bg-gradient-to-r from-purple-950 to-purple-800 p-5 rounded-xl mx-auto mt-10 flex-col md:flex-row items-center md:justify-between gap-3">
                    <p className="text-xl font-semibold text-purple-200">Socials</p>
                    <div className="space-x-3 flex">
                        <a href="https://www.linkedin.com/in/moiz-ul-haq-dev" target="_blank" rel="noreferrer" className="text-purple-300 hover:text-purple-400">
                            <Image src="/images/linkedin-tile.svg" alt="linkedin" className="w-10 h-10" height={10} width={10}/>
                        </a>
                        <a href="https://github.com/Moiz-ul-haq-dev" target="_blank" rel="noreferrer" className="text-purple-300 hover:text-purple-400">
                            <Image src="/images/github-tile.svg" alt="github" className="w-10 h-10" height={10} width={10}/>
                        </a>
                        <a href="https://www.fiverr.com/moizulhaq472" target="_blank" rel="noreferrer" className="text-purple-300 hover:text-purple-400">
                            <Image src="/images/fiverr-icon.svg" alt="fiverr" className="w-10 h-10" height={10} width={10}/>
                        </a>
                    </div>
                </div>
            </div>

            <div className='w-full h-px bg-purple-200 mt-10 mb-2'></div>
        </>
    );
}
