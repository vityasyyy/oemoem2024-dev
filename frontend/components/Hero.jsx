import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from 'react';
import axios from 'axios';


const Hero = ({user}) => {
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
            const response = await axios.get(`http://localhost:8080/auth/${user._id}/enrolled`, { withCredentials: true });
            setEnrolledClasses(response.data);
        } catch (error) {
            console.error('Error fetching enrolled classes:', error);
        }
    };

    const fetchAllClasses = async () => {
        try {
            const response = await axios.get('http://localhost:8080/event', { withCredentials: true });
            setAllClasses(response.data);
        } catch (error) {
            console.error('Error fetching all classes:', error);
        }
    };
    if(!user){
        return (
            <>
                <section className="flex flex-col relative md:pt-24 md:pb-4 py-4 px-4 items-center w-screen h-fit bg-gradient-to-t from-basicBlack-10 to-basicLightGreen-10">
                    {/* White Shine */}
                    <Image 
                        src="heroShine.svg"
                        height={500}
                        width={500}
                        className="z-0 absolute top-0 left-0"
                    />

                    {/* Cards on Large Screens */}
                    <Image 
                        src="heroCards.svg"
                        height={1000}
                        width={1000}
                        className="hidden lg:block absolute z-0 bottom-0 opacity-50"
                    />

                    {/* Cards on Medium Screens */}
                    <Image 
                        src="heroCardsMD.svg"
                        height={800}
                        width={800}
                        className="absolute block lg:hidden z-0 bottom-1/2 opacity-50 min-[400px]:bottom-24 min-[590px]:bottom-0"
                    />

                    {/* Penutupan Pendaftaran */}
                    <div className="p-2 sm:p-4 w-fit text-white bg-basicBlue-10 rounded-lg text-base md:text-xl lg:mb-72 md:mb-64 sm:mb-56 mb-48 z-30 text-center">Penutupan Pendaftaran: &nbsp; 
                        <span className="font-bold">  00:00:00</span>
                    </div>

                    {/* div kelompokin konten hero */}
                    <div className="flex flex-col mb-14 items-center gap-3 z-30">
                        {/* Headers */}
                        <h1 className="text-white lg:text-5xl md:text-4xl text-3xl text-center font-bold">Hadirkan IT Untuk Semua!</h1>
                        <h2 className="text-white lg:text-2xl md:text-xl text-lg text-center">Pelatihan hardskill komputer gratis dan offline bersama Ilmu Komputer Universitas Gadjah Mada</h2>

                        {/* Tombol Daftar Sekarang */}
                        <Link href="/auth/daftar" className="sm:rounded-2xl rounded-md bg-basicRed-10 text-white md:text-2xl text-lg text-center sm:px-28 px-16 md:py-3 py-1 mb-5 border-4 border-basicDarkBrown-10">Daftar Sekarang</Link>
                        
                        {/* Presented By */}
                        <Image
                            src="presented.svg"
                            alt="menu"
                            width={320}
                            height={32}
                        />

                    </div>
                </section>
            </>
        );
    }
    return (
        <section className="bg-gradient-to-t from-basicBlack-10 to-basicLightGreen-10 px-[min(10%,512px)] pt-20 relative">
            <div className="text-white z-30 relative">
                <h1 className="text-2xl font-bold mb-4">Welcome, {user.username}!</h1>
                
                <h2 className="text-xl font-semibold mb-2">Your Enrolled Classes:</h2>
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
                            <Link href={`/events/${cls._id}`} className="text-white py-2 mx-2 text-center rounded-xl mb-2" style={{backgroundColor: cls.color}}>
                                View Class
                            </Link>
                        </div>
                    ))}
                </div>

                <h2 className="text-xl font-semibold mb-2">All Available Classes:</h2>
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
                            <Link href={`/events/${cls._id}`} className="text-white py-2 mx-2 text-center rounded-xl mb-2" style={{backgroundColor: cls.color}}>
                                View Class
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
            <Image 
                src="/heroCardsMD.svg"
                height={500}
                width={500}
                alt="Hero background"
                className="absolute top-0 bottom-0 right-0 left-0 m-auto z-0 opacity-50"
            />
            <div className="bg-basicBlack-10 absolute z-10 bottom-0 left-0 right-0 top-[60%]"></div>
        </section>
    );
}

export default Hero;