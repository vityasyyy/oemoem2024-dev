// Class.jsx
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from 'react';
import axios from 'axios';
import NavbarKelas from "./NavbarKelas";
import KelasButton from "./KelasButton";
import ChampionsButton from "./ChampionsButton";

const Class = ({ user }) => {
    const [activeView, setActiveView] = useState('kelas')
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
                    <div className="flex pb-8">

                        {/* Greeting dan Tombol */}
                        <div className="flex z-30 flex-col gap-5">

                            {/* Hello, User */}
                            <h1 className="text-basicBlack-10 text-3xl sm:text-4xl font-bold">Hello, {user.username}!</h1>

                            {/* Tombol Kelas dan Champions */}
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
                    </div>
            </section>
                    
            {/* Section Utama dipake Wrapper */}
            <div className="bg-basicDarkGreen-10 relative z-30">

                <section className="flex flex-col z-30 text-lg rounded-t-xl py-8 px-[min(10%,512px)] bg-basicBlack-10">

                    {/* Kelas Pilihanmu */}
                    <div className="flex">
                        <div className="bg-basicBlue-10 text-white rounded-md px-4 py-2">Kelas Pilihanmu</div>
                    </div>

                    {/* Galeri */}
                    <div className="flex flex-wrap pt-4 gap-4 mb-8">
                        {enrolledClasses.map((cls) => (
                            <div key={cls._id} className="border-[3px] rounded-xl w-44 h-56 pt-2 pr-2 pb-1 pl-2 flex flex-col justify-between" style={{borderColor: cls.color, backgroundColor: '#EDB465'}}>
                                <div>
                                    {cls.shape && cls.shape && (
                                        <Image
                                            src={cls.shape.url}
                                            alt="shape"
                                            width={25}
                                            height={32}
                                        />
                                    )}
                                    <div className="flex justify-center mt-2">
                                        {cls.image && cls.image && (
                                            <Image
                                                src={cls.imageWarna.url}
                                                alt="class logo"
                                                width={75}
                                                height={32}
                                            />
                                        )}
                                    </div>
                                    <h3 className="text-center font-medium text-base mt-1 text-black">
                                        {cls.title}
                                    </h3>
                                </div>
                                <Link href={`/kelas/${cls._id}`} className="text-white py-2 mx-2 text-center rounded-xl mb-2" style={{backgroundColor: cls.color}}>
                                    View Class
                                </Link>
                            </div>
                        ))}
                    </div>

                    {/* Program dan Kelas */}
                    <div className="flex">
                        <div className="bg-basicBlue-10 text-white rounded-md px-4 py-2">Program dan Kelas</div>
                    </div>

                    {/* Galeri */}
                    <div className="flex flex-wrap pt-4 gap-4">
                        {allClasses.map((cls) => (
                            <div key={cls._id} className="border-[3px] rounded-xl w-44 h-56 pt-2 pr-2 pb-1 pl-2 flex flex-col justify-between" style={{borderColor: cls.color, backgroundColor: '#EDB465'}}>
                                <div>
                                    {cls.shape && cls.shape && (
                                        <Image
                                            src={cls.shape.url}
                                            alt="shape"
                                            width={25}
                                            height={32}
                                        />
                                    )}
                                    <div className="flex justify-center mt-2">
                                        {cls.image && cls.image && (
                                            <Image
                                                src={cls.imageWarna.url}
                                                alt="class logo"
                                                width={75}
                                                height={32}
                                            />
                                        )}
                                    </div>
                                    <h3 className="text-center font-medium text-base mt-1 text-black">
                                        {cls.title}
                                    </h3>
                                </div>
                                <Link href={`/kelas/${cls._id}`} className="text-white py-2 mx-2 text-center rounded-xl mb-2" style={{backgroundColor: cls.color}}>
                                    View Class
                                </Link>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </>
    );
};

export default Class;