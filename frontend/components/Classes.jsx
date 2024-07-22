"use client";
import Image from "next/image";
import { useRouter } from 'next/navigation';

const Classes = ({ events }) => {
    const router = useRouter();

    const handleClick = (id) => {
        router.push(`/events/${id}`);
    };

    return (
        <section className="bg-basicBlack-10 py-10">
            <div className="w-fit text-lg bg-basicBlue-10 px-4 py-2 rounded-md text-white mb-4">
                Program dan Kelas
            </div>
            
            {/* Scrollable Gallery */}
            <div className="overflow-x-auto">
                <div className="flex gap-4 pb-4" style={{ width: `${events.length * 188}px` }}>
                    {events.map((event, index) => (
                        <div 
                            key={index} 
                            className="flex-shrink-0 border-[3px] rounded-xl w-44 h-56 pt-2 pr-2 pb-1 pl-2 flex flex-col justify-between" 
                            style={{ borderColor: event.color, backgroundColor: '#EDB465' }}
                        >
                            {/* Upper part: Shape and Class Logo */}
                            <div>
                                {/* Logo Kiri Atas */}
                                {event.shape && event.shape[0] && (
                                    <Image
                                        src={event.shape[0].url}
                                        alt="shape"
                                        width={25}
                                        height={32}
                                        className=""
                                    />
                                )}

                                {/* Logo Kelas */}
                                <div className="flex justify-center mt-2">
                                    {event.image && event.image[0] && (
                                        <Image
                                            src={event.image[0].url}
                                            alt="class logo"
                                            width={75}
                                            height={32}
                                            className=""
                                        />
                                    )}
                                </div>

                                {/* Nama Kelas */}
                                <h1 className="text-center font-medium text-base mt-1">
                                    {event.title}
                                </h1>
                            </div>

                            <button 
                                onClick={() => handleClick(event._id)} 
                                className="text-white py-2 mx-2 text-center rounded-xl mb-2 cursor-pointer" 
                                style={{ backgroundColor: event.color }}
                            >
                                Lihat Kelas
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Classes;