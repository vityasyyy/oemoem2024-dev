"use client";
import Image from "next/image";
import Link from "next/link";
import react, { useState } from "react";

const Navbar = () => {
    const [isClick, setisClick] = useState(false);

    const toggleNavbar = () => {
        setisClick(!isClick);
    };

    return (
        <nav className="bg-transparent z-50 sticky top-0">
            <div className={`flex items-center justify-between relative mx-auto py-8 px-6 sm:px-8 3xl:px-0 bg-basicBlack-10 h-12 ${isClick ? '' : 'rounded-b-lg'}`}>
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
                        <button className="flex items-center p-2 rounded justify-center gap-3 bg-basicRed-10 text-white border-basicRed-10" type='login'>
                            <label className="cursor-pointer">Masuk</label>
                        </button>
                        <button className="flex items-center p-2 justify-center gap-3 border-2 border-basicRed-10 bg-basicWhite-10 text-basicRed-10 rounded" type='login'>
                            <label className="cursor-pointer">Daftar</label>
                        </button>
                    </div>
                </div>

                <button onClick={toggleNavbar} className="md:hidden">
                    {isClick ? (
                        <svg className="h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="white"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={3}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    ) : (
                        <Image
                            src="/menu.svg"
                            alt="menu"
                            width={24}
                            height={24}
                            className="inline-block cursor-pointer"
                        />
                    )}
                </button>
            </div>

            {isClick && (
                <div className="absolute z-[51] w-screen md:hidden bg-basicWhite-10 rounded-b-lg">
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

                </div>
            )}
        </nav>
    );
}

export default Navbar;
