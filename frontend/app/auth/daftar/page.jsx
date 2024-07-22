import LoginNavbar from "@/components/LoginNavbar";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useForm } from 'react-hook-form';

export default function Daftar() {
    return (
        <>
            {/* Navigation Bar */}
            <LoginNavbar />

            {/* Section */}
            <section className="bg-basicLightGreen-10 pt-20 relative">

                {/* Back Button*/}
                <div className="flex gap-2 items-center px-6 sm:px-8">
                    <Link href="/" className="flex items-center justify-center bg-white rounded-md py-0.5 px-2">
                        <Image
                            src="back.svg"
                            alt="back"
                            width={10}
                            height={10}
                        />
                    </Link>
                    <h2 className="font-bold text-black text-lg sm:text-xl sm:ml-2">Daftar</h2>
                </div>

                {/* Hero */}
                <div className="flex flex-col items-center gap-4 mt-8 bg-gradient-to-t px-6 sm:px-8 from-basicBlack-10 to-basicLightGreen-10 z-30">
                    {/* Title */}
                    <h1 className="max-w-[24rem] text-3xl text-wrap text-center text-white drop-shadow-lg font-semibold z-30">Selamat Datang Kembali di <span className="text-basicLightBrown-10">OemOem</span></h1>

                    {/* Login Card */}
                    <div className="bg-basicBlack-10 w-[min(100%,24rem)] z-30 text-sm sm:text-base flex flex-col gap-1 border-[1px] border-white rounded-lg p-4 mb-2 mx-6 sm:mx-8">
                        {/* Form */}
                        <h2 className="text-basicLightBrown-10 font-medium sm:mt-4">Nama</h2>
                        <input 
                            type="text"
                            placeholder="Tuliskan Namamu"
                            className="text-basicLightGrey-10 rounded-sm border-1 border-black font-medium mb-2 px-2 py-1 sm:py-2"/>

                        <h2 className="text-basicLightBrown-10 font-medium">Email</h2>
                        <input
                            type="text"
                            placeholder="Tuliskan Namamu"
                            className="text-basicLightGrey-10 rounded-sm border-1 border-black font-medium mb-2 px-2 py-1 sm:py-2"/>

                        <h2 className="text-basicLightBrown-10 font-medium">Password</h2>
                        <input 
                            type="password"
                            placeholder="Tuliskan Namamu"
                            className="text-basicLightGrey-10 rounded-sm border-1 border-black font-medium mb-2 px-2 py-1 sm:py-2"/>

                        <h2 className="text-basicLightBrown-10 font-medium">Konfirmasi Password</h2>
                        <input
                            type="password"
                            placeholder="Tuliskan Namamu"
                            className="text-basicLightGrey-10 rounded-sm border-1 border-black font-medium mb-8 px-2 py-1 sm:py-2"/>

                        <button type="submit" className="bg-basicRed-10 text-white font-medium py-1 rounded-md border-[2px] border-basicDarkBrown-10 sm:py-2">Daftar</button>
                    </div>

                    {/* Belom punya akun? */}
                    <h1 className="text-white text-xl font-medium mb-12 z-30">Sudah punya akun? <Link href="/auth/login" className="text-basicLightBrown-10">Masuk</Link></h1>
                </div>

                {/* Card Background */}
                <div>
                    <Image 
                    src="heroCardsMD.svg"
                    height={500}
                    width={500}
                    className="absolute top-0 bottom-0 right-0 left-0 m-auto z-0 opacity-50"
                    />
                </div>

                {/* Black Background */}
                <div className="bg-basicBlack-10 absolute z-10 bottom-0 left-0 right-0 top-[60%]"></div>

            </section>
        </>
    );
}