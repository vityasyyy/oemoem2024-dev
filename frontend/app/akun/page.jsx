"use client";
import LoginNavbar from "@/components/LoginNavbar";
import { a } from "react-spring"
import Link from "next/link";
import Image from "next/image";
import BackButton from "@/components/BackButton";

export default function Akun() {
    return (
        <>
            {/* Navigation Bar */}
            <LoginNavbar />

            {/* Main Section */}
            <section className="bg-gradient-to-t from-basicBlack-10 to-basicLightGreen-10 px-[min(10%,512px)] pt-20 relative">

                {/* Back Button*/}
                <div className="flex gap-2 items-center">
                    <Link href="/">
                        <BackButton />
                    </Link>
                    <h2 className="font-bold text-black text-lg sm:text-xl sm:ml-2">Akun</h2>
                </div>

                {/* Hero */}
                <div className="flex flex-col items-center gap-4 mt-8 pb-24 sm:pb-42 z-30">
                    {/* Title */}
                    <h1 className="max-w-[24rem] text-3xl text-wrap text-center text-white drop-shadow-lg font-semibold z-30">Informasi Akun</h1>

                    {/* Card */}
                    <div className="bg-basicBlack-10 w-[min(100%,32rem)] z-30 text-sm sm:text-xl flex flex-col gap-1 border-[1px] border-white rounded-xl px-6 py-4 mb-2 mx-6 sm:mx-8">
                        {/* Form */}
                        <h2 className="text-basicLightBrown-10 font-medium sm:mt-4">Nama</h2>
                        <h2 className="text-white font-medium sm">Fahmi Shampoerna</h2>

                        <h2 className="text-basicLightBrown-10 font-medium">Email</h2>
                        <h2 className="text-white font-medium">andhiki28@gmail.com</h2>

                        <Link href="/kelas" className="flex justify-center items-center bg-basicRed-10 text-white font-medium py-1 mt-4 rounded-md border-[2px] border-basicDarkBrown-10 sm:py-2">Keluar</Link>
                    </div>

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