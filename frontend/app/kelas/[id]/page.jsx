'use client';

import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import axios from 'axios';
import NavbarKelas from "@/components/NavbarKelas";
import ClassDetail from "@/components/ClassDetail";

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
            <ClassDetail event={event} />
        </>
    );
}
