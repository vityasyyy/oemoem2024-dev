// Class.jsx
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from 'react';
import axios from 'axios';

const Class = ({ user }) => {
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
                            <Link href={`/kelas/${cls._id}`} className="text-white py-2 mx-2 text-center rounded-xl mb-2" style={{backgroundColor: cls.color}}>
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
                            <Link href={`/kelas/${cls._id}`} className="text-white py-2 mx-2 text-center rounded-xl mb-2" style={{backgroundColor: cls.color}}>
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
};

export default Class;