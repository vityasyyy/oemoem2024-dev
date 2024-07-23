'use client';

import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Image from "next/image";
import NavbarKelas from "@/components/NavbarKelas";
import ProgressBar from "@/components/ProgressBar";
import KelasButton from "@/components/KelasButton";
import ChallengesButton from "@/components/ChallengesButton";

export default function EventPage() {
    const params = useParams();
    const id = params.id;
    const [event, setEvent] = useState(null);

    useEffect(() => {
        if (id) {
            fetchEvent();
        }
    }, [id]);

    const fetchEvent = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/event/${id}`);
            setEvent(response.data);
        } catch (error) {
            console.error('Error fetching event:', error);
        }
    };

    if (!event) return <div>Loading...</div>;

    return (
        <>
            <NavbarKelas />

            <section className="h-fit bg-basicLightGreen-10 pt-24 ">
                
                {/* Bagian Hijau Atas */}
                <div className="px-[min(10%,512px)]">
                    <div className=" bg-basicBlack-10 max-w-xs flex p-3 rounded-lg z-10 relative">
                        <Image
                            src={event.image ? event.image.url : "/default-image.svg"}
                            alt={event.title}
                            width={54}
                            height={32}
                            className="mr-3"
                        />
                        <div className="text-white flex-grow">
                            <h1 className="font-semibold text-xl mb-2">
                                {event.title}
                            </h1>
                            <ProgressBar progress={10} maxProgress={20} />
                        </div>
                    </div>
    

                    {/* Button Kelas dan Challenges */}
                    <div className="flex gap-2 mt-6 z-10 relative">
                        <KelasButton />
                        <ChallengesButton />
                    </div>
                </div>
                

                {/* Main */}
                <div className="h-screen bg-basicBlack-10 mt-5 pt-5 z-50 px-[min(10%,512px)] flex flex-col gap-10">
                    
                    {/* Overview */}
                    <div className="flex flex-col gap-2 text-white">
                        <div className="bg-basicBlue-10 w-40 px-3 py-1 rounded-md">
                            Overview
                        </div>
                        <p>{event.description}</p>
                    </div>

                    {/* Tanggal dan Lokasi */}
                    <div className="flex flex-col gap-2 text-white">
                        <div className="bg-basicBlue-10 w-40 px-3 py-1 rounded-md">
                            Tanggal dan lokasi
                        </div>
                        <p>{new Date(event.date).toLocaleDateString()}</p>
                        <p>{event.location}</p>
                    </div>

                    {/* Kebutuhan */}
                    <div className="flex flex-col gap-2 text-white">
                        <div className="bg-basicBlue-10 w-40 px-3 py-1 rounded-md">
                            Kebutuhan
                        </div>
                        <p>{event.prerequisite}</p>
                    </div>
                    
                    {/* Kurikulum */}
                    <div className="flex flex-col gap-2 text-white">
                        <div className="bg-basicBlue-10 w-40 px-3 py-1 rounded-md">
                            Kurikulum
                        </div>
                        <p>{event.curriculum}</p>
                    </div>

                    {/* Mentor */}
                    <div className="flex flex-col gap-2 text-white">
                        <div className="bg-basicBlue-10 w-40 px-3 py-1 rounded-md">
                            Mentor
                        </div>
                        <div className="bg-basicLightBrown-10 rounded-md p-2">
                            {event.mentors}
                        </div>
                    </div>

                    {/* Contact Person */}
                    <div className="flex flex-col gap-2 text-white">
                        <div className="bg-basicBlue-10 w-40 px-3 py-1 rounded-md">
                            Contact Person
                        </div>
                        <p>{event.contactPerson}</p>
                    </div>

                </div>

            </section>
        </>
    );
}