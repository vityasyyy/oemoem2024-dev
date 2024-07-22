"use client"
import BackButton from "@/components/BackButton"; // Keep this from the original change
import LoginNavbar from "@/components/LoginNavbar";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from 'next/navigation';
import axios from 'axios';

export default function Daftar() {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [nim, setNim] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
    
        try {
            // Register the user
            const registerResponse = await axios.post('http://localhost:8080/auth/register', {
                email,
                username,
                password,
                nim,
                phoneNumber
            });
    
            if (registerResponse.data.message === "Register succesful") {
                console.log('Registration successful');
    
                // Automatically log in the user after registration
                const loginResponse = await axios.post('http://localhost:8080/auth/login', {
                    email,
                    password
                }, { withCredentials: true }); // Ensure cookies are included
    
                console.log('Login response:', loginResponse);
    
                if (loginResponse.status === 200) {
                    console.log('Login successful');
                    router.push('/'); // Redirect to home page after successful login
                } else {
                    console.log('Login failed:', loginResponse.data);
                }
            } else {
                console.log('Registration failed:', registerResponse.data);
            }
        } catch (error) {
            console.error('Error during registration or login:', error);
            setError(error.response?.data?.error || 'An error occurred during registration');
        }
    };

    return (
        <>
            <LoginNavbar />

            {/* Section */}
            <section className="bg-gradient-to-t from-basicBlack-10 to-basicLightGreen-10 px-[min(10%,512px)] pt-20 relative">

                {/* Back Button*/}
                <div className="flex gap-2 items-center">
                    <Link href="/">
                        <BackButton />
                    </Link>
                    <h2 className="font-bold text-black text-lg sm:text-xl sm:ml-2">Daftar</h2>
                </div>

                {/* Hero */}
                <div className="flex flex-col items-center gap-4 mt-8 z-30">
                    {/* Title */}
                    <h1 className="max-w-[24rem] text-3xl text-wrap text-center text-white drop-shadow-lg font-semibold z-30">Mulai Langkahmu Bersama <span className="text-basicLightBrown-10">OemOem</span></h1>

                    {/* Register Card */}
                    <form onSubmit={handleSubmit} className="bg-basicBlack-10 w-[min(32rem,100%)] z-30 text-sm sm:text-base flex flex-col gap-1 border-[1px] border-white rounded-xl px-6 py-4 mb-2 mx-6 sm:mx-8">
                        {error && <p className="text-red-500 text-xs mb-2">{error}</p>}
                        
                        <h2 className="text-basicLightBrown-10 font-medium sm:mt-4">Email</h2>
                        <input
                            type="email"
                            placeholder="Tuliskan Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="text-basicLightGrey-10 focus:text-basicBlack-10 focus:outline-none rounded-sm border-1 border-black font-medium mb-2 px-2 py-1 sm:py-2"
                            required
                        />

                        <h2 className="text-basicLightBrown-10 font-medium">Username</h2>
                        <input 
                            type="text"
                            placeholder="Tuliskan Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="text-basicLightGrey-10 focus:text-basicBlack-10 focus:outline-none rounded-sm border-1 border-black font-medium mb-1 px-2 py-1 sm:py-2"
                            required
                        />

                        <h2 className="text-basicLightBrown-10 font-medium">Password</h2>
                        <input 
                            type="password"
                            placeholder="Tuliskan Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="text-basicLightGrey-10 focus:text-basicBlack-10 focus:outline-none rounded-sm border-1 border-black font-medium mb-2 px-2 py-1 sm:py-2"
                            required
                        />

                        <h2 className="text-basicLightBrown-10 font-medium">NIM</h2>
                        <input
                            type="text"
                            placeholder="Tuliskan NIM"
                            value={nim}
                            onChange={(e) => setNim(e.target.value)}
                            className="text-basicLightGrey-10 focus:text-basicBlack-10 focus:outline-none rounded-sm border-1 border-black font-medium mb-2 px-2 py-1 sm:py-2"
                            required
                        />

                        <h2 className="text-basicLightBrown-10 font-medium">Nomor Telepon</h2>
                        <input
                            type="tel"
                            placeholder="Tuliskan Nomor Telepon"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            className="text-basicLightGrey-10 focus:text-basicBlack-10 focus:outline-none rounded-sm border-1 border-black font-medium mb-8 px-2 py-1 sm:py-2"
                            required
                        />

                        <button type="submit" className="bg-basicRed-10 text-white font-medium py-1 rounded-md border-[2px] border-basicDarkBrown-10 sm:py-2">Daftar</button>
                    </form>

                    {/* Belom punya akun? */}
                    <h1 className="text-white text-xl font-medium mb-12 z-30">Sudah punya akun? <Link href="/auth/masuk" className="text-basicLightBrown-10">Masuk</Link></h1>
                </div>

                {/* Card Background */}
                <div>
                    <Image 
                    src="heroCardsMD.svg"
                    height={500}
                    width={500}
                    className="absolute top-0 bottom-0 right-0 left-0 m-auto z-0 opacity-50"
                    alt="Hero Cards"
                    />
                </div>

                {/* Black Background */}
                <div className="bg-basicBlack-10 absolute z-10 bottom-0 left-0 right-0 top-[60%]"></div>

            </section>
        </>
    );
}