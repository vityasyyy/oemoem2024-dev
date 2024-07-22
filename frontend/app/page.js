'use client'

import DiceAd from "@/components/DiceAd";
import Hero from "@/components/Hero";
import Information from "@/components/Information";
import Kelas from "@/components/Kelas";
import Navbar from "@/components/Navbar";
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Home() {
  const [user, setUser] = useState(null);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const checkUserLoggedIn = async () => {
      try {
        const response = await axios.get('http://localhost:8080/auth/validate', { withCredentials: true });
        console.log(response);
        if (response.data.user) {
          setUser(response.data.user);
        }
      } catch (error) {
        console.error('Error checking authentication status:', error);
      }
    };

    const fetchEvents = async () => {
      try {
        const response = await axios.get('http://localhost:8080/event');
        setEvents(response.data);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    checkUserLoggedIn();
    fetchEvents();
  }, []);

  return (
    <>
      <Navbar />
      <Hero user={user}/>
      <Kelas events={events} />
      <Information />
      <DiceAd />
    </>
  );
}