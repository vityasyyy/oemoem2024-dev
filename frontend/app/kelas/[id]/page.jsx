'use client';

import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import axios from 'axios';
import NavbarKelas from "@/components/NavbarKelas";
import Loading from '@/components/Loading';
import ClassDetail from "@/components/ClassDetail";

export default function EventPage() {
    const params = useParams();
    const id = params.id;
    const [event, setEvent] = useState(null);
    const[user, setUser] = useState(null)
    useEffect(() => {
        if (id) {
            fetchEvent();
            fetchUser();
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

<<<<<<< Updated upstream
    if (!event) return <Loading />;
=======
    const fetchUser = async() => {
        try{
            const response = await axios.get('http://localhost:8080/auth/validate', {withCredentials: true})
            if(response.data.user) setUser(response.data.user)
        } catch(error) {
            console.error('error fetching user', error)
        }
    }

    if (!event) return <div>Loading...</div>;
>>>>>>> Stashed changes

    return (
        <>
            <NavbarKelas />
            <ClassDetail event={event} user={user} />
        </>
    );
}
