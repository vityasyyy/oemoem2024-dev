// Class.jsx
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from 'react';
import axios from "axios";
import NavbarKelas from "./NavbarKelas";
import KelasButton from "./KelasButton";
import Champions from "./Champions";
import ChampionsBelom from "./ChampionsBelom";
import ChampionsButton from "./ChampionsButton";
import DiceAd from "./DiceAd";
import GabungGrupMini from "./GabungGrupMini";

const Class = ({ user }) => {
    const [activeView, setActiveView] = useState('kelas');
    const [enrolledClasses, setEnrolledClasses] = useState([]);
    const [allClasses, setAllClasses] = useState([]);

    useEffect(() => {
        if (user) {
            fetchEnrolledClasses();
            fetchAllClasses();
        }
    }, [user]);

    const fetchEnrolledClasses = async () => {
        try {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/auth/${user._id}/enrolled`, { withCredentials: true });
            setEnrolledClasses(response.data);
        } catch (error) {
            console.error('Error fetching enrolled classes:', error);
        }
    };

    const fetchAllClasses = async () => {
        try {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/event`, { withCredentials: true });
            setAllClasses(response.data);
        } catch (error) {
            console.error('Error fetching all classes:', error);
        }
    };
    return (
        <>
            {/* Navigation Bar */}
            <NavbarKelas />

            {/* Main Section */}
            <section className="bg-gradient-to-t from-basicDarkGreen-10 to-basicLightGreen-10 px-[min(10%,512px)] pt-20 relative">
                {/* Dice Background */}
                <Image 
                    src="diceloading.svg"
                    width={300}
                    height={300}
                    alt="dice"
                    className="absolute opacity-50 z-0 right-[min(10%,512px)]"
                />

                {/* Header */}
                <div className="flex pb-6">

                    {/* Greeting and Buttons */}
                    <div className="flex z-30 flex-col gap-5">

                        {/* Hello, User */}
                        <h1 className="text-basicBlack-10 text-3xl sm:text-4xl font-bold">Hello, {user.username}!</h1>

                        {/* Kelas and Champions Buttons */}
                        <div className="flex gap-2">
                            <KelasButton 
                                onClick={() => setActiveView('kelas')}
                                isActive={activeView === 'kelas'}
                            />
                            <ChampionsButton
                                onClick={() => setActiveView('champions')}
                                isActive={activeView === 'champions'}
                            />
                        </div>
                    </div>

                    {/* Whatsapp */}
                    <GabungGrupMini />
                </div>
            </section>

            {/* Main Content */}
            <div className="bg-basicDarkGreen-10 relative z-30">
                    {activeView === 'kelas' ? (
                        <>
                            <section className="flex flex-col z-30 text-lg rounded-t-3xl py-8 px-[min(10%,512px)] bg-basicBlack-10">
                                {/* Kelas Pilihanmu */}
                                <div className="flex">
                                    <div className="bg-basicBlue-10 text-white rounded-md px-4 py-2">Kelas Pilihanmu</div>
                                </div>

                                {/* Gallery */}
                                <div className="flex flex-wrap pt-4 gap-4 mb-8">
                                    {enrolledClasses.map((cls) => (
                                        <div key={cls._id} className="relative border-[3px] rounded-xl w-44 h-56 py-2 px-2 flex flex-col items-center justify-end" style={{borderColor: cls.color, backgroundColor: '#EDB465'}}>
                                            {/* Logo Kiri Atas (heart, spade, dll) */}
                                            {cls.shape && (
                                                <Image
                                                    src={cls.shape.url}
                                                    alt="shape"
                                                    width={25}
                                                    height={32}
                                                    className="absolute top-2 left-2"
                                                />
                                            )}
                                            {/* Kumpulin Logo, Nama, Tombol Join */}
                                            <div className="flex flex-col w-full gap-2 border-8 justify-end items-center">

                                                {/* Logo Kelas */}
                                                <div className="flex justify-center">
                                                    {cls.image && (
                                                        <Image
                                                        src={cls.imageWarna.url}
                                                            alt="class logo"
                                                            width={75}
                                                            height={32}
                                                        />
                                                    )}
                                                </div>

                                                {/* Nama Kelas */}
                                                <h1 className="text-center font-medium text-base" style={{ color: cls.color }}>
                                                    {cls.title}
                                                </h1>

                                                {/* Tombol Lihat Kelas */}
                                                <Link href={`/kelas/${cls._id}`} className="text-white w-[90%] py-1.5 text-center rounded-xl cursor-pointer" style={{backgroundColor: cls.color}}>
                                                    Lihat Kelas
                                                </Link>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Program dan Kelas */}
                                <div className="flex">
                                    <div className="bg-basicBlue-10 text-white rounded-md px-4 py-2">Program dan Kelas</div>
                                </div>

                                {/* Gallery */}
                                <div className="flex flex-wrap mt-4 gap-4">
                                    {allClasses.map((cls) => (
                                        <div key={cls._id} className="relative border-[3px] rounded-xl w-44 h-56 py-2 px-2 flex flex-col items-center justify-end" style={{borderColor: cls.color, backgroundColor: '#EDB465'}}>
                                            {/* Logo Kiri Atas */}
                                            {cls.shape && (
                                                <Image
                                                    src={cls.shape.url}
                                                    alt="shape"
                                                    width={25}
                                                    height={32}
                                                    className="absolute top-2 left-2"
                                                />
                                            )}

                                            {/* Kumpulin gambar, nama, dan tombol */}
                                            <div className="flex flex-col w-full gap-2 justify-end items-center">
                                            
                                                {/* Logo Kelas */}
                                                <div className="flex justify-center">
                                                    {cls.image && (
                                                        <Image
                                                        src={cls.imageWarna.url}
                                                        alt="class logo"
                                                        width={75}
                                                        height={32}
                                                        className="w-20"
                                                        />
                                                    )}
                                                </div>

                                                {/* Nama Kelas */}
                                                <h3 className="text-center font-medium text-base" style={{color: cls.color}}>
                                                    {cls.title}
                                                </h3>

                                                {/* Tombol Lihat Kelas */}
                                                <Link href={`/kelas/${cls._id}`} className="text-white w-[90%] py-1.5 text-center rounded-xl cursor-pointer" style={{backgroundColor: cls.color}}>
                                                    Lihat Kelas
                                                </Link>

                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </>
                    ) : (
                        <>
                            {/* Champions Section */}
                            <section className="flex flex-col z-30 text-lg rounded-t-3xl py-8 pb-32 px-[min(10%,512px)] bg-basicBlack-10">
                                {/* <Champions /> */}
                                <ChampionsBelom />
                            </section>
                            <DiceAd />
                        </>
                    )}
            </div>
        </>
    );
};

export default Class;
