"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="md:flex-row shadow-lg z-40 shadow-purple-800 items-center fixed justify-center w-full">
            <div className="py-3 md:px-10 px-5 text-white bg-transparent backdrop-filter backdrop-blur-lg border-b md:border border-black border-opacity-10 w-full mx-auto">
                {/* Desktop Version */}
                <div className="hidden md:flex items-center justify-between">
                    <Link href="/">
                        <div className="flex items-center space-x-2 cursor-pointer">
                            <Image src="/images/Profile.jpg" width={35} height={35} alt="logo" className="rounded-2xl" />
                            <span className="font-bold md:text-xl">Moiz-ul-haq</span>
                        </div>
                    </Link>

                    <div className="flex items-center font-bold space-x-5 gap-2 text-md">
                        <a href="#home" className="text-purple-500">Home</a>
                        <a href="#projects" className="hover:text-purple-500">Projects</a>
                        <a href="#home" className="hover:text-purple-500">Blogs</a>
                        <a href="#contact" className="hover:text-purple-500">Contact</a>
                    </div>

                    <div className="flex items-center">
                        <form className="flex justify-center" target="_blank" method="get" action={"/images/resume/MoizulhaqResume.pdf"}>
                            <button type="submit" className="bg-gradient-to-r from-purple-950 to-purple-800 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                                Download Resume
                            </button>
                        </form>
                    </div>
                </div>

                {/* Mobile Version */}
                <div className="md:hidden flex items-center justify-between">
                    <Link href="/">
                        <div className="flex items-center space-x-2 cursor-pointer">
                            <Image src="/images/Profile.jpg" width={35} height={35} alt="logo" className="rounded-2xl" />
                            <span className="font-bold text-xl">Moiz-ul-haq</span>
                        </div>
                    </Link>

                    <div className="flex items-center">

                        {/* Mobile Menu Button */}
                        <button
                            className="text-gray-600 focus:outline-none"
                            onClick={toggleMobileMenu}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="h-6 w-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16m-7 6h7"
                                />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <>
                        <div className="md:hidden mt-4">
                            <div className="flex flex-col items-center font-bold space-y-5 text-md">
                                <a href="#home" className="text-purple-500">Home</a>
                                <a href="#projects" className="hover:text-purple-500">Projects</a>
                                <a href="#home" className="hover:text-purple-500">Blogs</a>
                                <a href="#contact" className="hover:text-purple-500">Contact</a>
                            </div>
                        </div>
                        <div className="flex items-center justify-center mt-3">
                            <form className="flex justify-center" target="_blank" method="get" action={"/images/resume/MoizulhaqResume.pdf"}>
                                <button type="submit" className="bg-gradient-to-r from-purple-950 to-purple-800 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                                    Download Resume
                                </button>
                            </form>
                        </div>
                    </>
                )}
            </div>
        </nav>
    );
}
