"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useTransition, animated } from 'react-spring';

const Navbar = () => {
    const [isClick, setisClick] = useState(false);

    const toggleNavbar = () => {
        setisClick(!isClick);
    };

    const transitions = useTransition(isClick, {
        from: { transform: 'translateY(-100%)', opacity: 0 },
        enter: { transform: 'translateY(0%)', opacity: 1 },
        leave: { transform: 'translateY(-100%)', opacity: 0 },
        config: { tension: 220, friction: 20 }
    });

    return (
        <>
            {/* Fill color behind navbar RUSAK */}
            {/* <div className="bg-basicLightGreen-10 absolute top-0 right-0 left-0 bottom-0"></div> */}

            {/* Navigation Bar */}
            <nav className="bg-transparent z-50 fixed w-screen top-0">
                <div className={`flex items-center justify-between relative z-30 mx-auto py-8 px-6 sm:px-8 3xl:px-0 bg-basicBlack-10 h-12 ${isClick ? '' : 'rounded-b-lg'}`}>
                    <Link href="/">
                        <h1 className="text-white text-xl sm:text-2xl font-semibold">
                            OemOem 
                        </h1>
                    </Link>

                    {/* Program dan Kelas & Button */}
                    <div className="hidden md:flex text-xl items-center space-x-5">
                        <h2 className="text-white px-4">
                            Program dan Kelas
                        </h2>   
                        <div className="flex items-center justify between gap-2">
                            <Link href="auth/login" className="flex items-center px-2 py-1 rounded justify-center gap-3 bg-basicRed-10 text-white border-basicRed-10" type='login'>
                                <label className="cursor-pointer font-medium">Masuk</label>
                            </Link>
                            <Link href="auth/daftar" className="flex items-center px-2 py-1 justify-center gap-3 border-basicWhite-10 bg-basicWhite-10 text-basicRed-10 rounded" type='login'>
                                <label className="cursor-pointer font-medium">Daftar</label>
                            </Link>
                        </div>
                    </div>

                    <button onClick={toggleNavbar} className="md:hidden focus:outline-none relative w-8 h-8">
                        <div className={`hamburger ${isClick ? 'open' : ''}`}>
                            <span className="block w-full h-1 bg-white transition-transform duration-300 rounded"></span>
                            <span className="block w-full h-1 bg-white mt-2 transition-transform duration-300 rounded"></span>
                            <span className="block w-full h-1 bg-white mt-2 transition-transform duration-300 rounded"></span>
                        </div>
                    </button>
                </div>

                {transitions((style, item) =>
                    item && (
                        <animated.div style={style} className="absolute z-[51] w-screen md:hidden bg-basicWhite-10 rounded-b-lg shadow-lg">
                            <div className="flex justify-center py-2">
                                <h2 className="text-basicBlack-10 font-semibold">
                                    Program dan Kelas
                                </h2>
                            </div>

                            <div className="flex justify-center flex-col">
                                <button className="flex items-center justify-center py-2 bg-basicRed-10 text-white border-basicRed-10 " type='login'>
                                    <label className="cursor-pointer">Masuk</label>
                                </button>
                                <button className="flex items-center py-2 justify-center border-basicWhite-10 bg-basicWhite-10 text-basicRed-10 rounded-lg" type='login'>
                                    <label className="cursor-pointer font-semibold">Daftar</label>
                                </button>
                            </div>
                        </animated.div>
                    )
                )}
            </nav>
        </>
    );
}

export default Navbar;
