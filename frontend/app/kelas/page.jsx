"use client";

import { useState, useEffect } from 'react';
import axios from 'axios';
import Class from '../../components/Class'; // Adjust the import path as needed
import { useRouter } from 'next/navigation'; // Import useRouter
import Loading from '@/components/Loading';
import Link from 'next/link'; // Import Link

export default function Events() {
  const [user, setUser] = useState(null);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state
  const router = useRouter(); // Initialize useRouter

  useEffect(() => {
    const checkUserLoggedIn = async () => {
      try {
        const response = await axios.get('http://localhost:8080/auth/validate', { withCredentials: true });
        if (response.data.user) {
          setUser(response.data.user);
        }
      } catch (error) {
        console.error('Error checking authentication status:', error);
      } finally {
        setLoading(false); // Set loading to false after checking
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

  useEffect(() => {
    if (!loading && !user) {
      router.push('/auth/masuk'); // Use router.push for navigation
    }
  }, [loading, user, router]);

  if (loading) {
    return <Loading />; // Show a loading message while checking authentication
  }

  return (
    <>
      <section>
        {user ? (
          <Class user={user} events={events} />
        ) : (
          <div className="flex flex-col items-center justify-center mt-8 bg-basicBlack-10">
            <h1 className="text-black text-lg mb-4">
              Kamu belum terdaftar, silakan{' '}
              <Link href="/auth/daftar">
                <p className="text-blue-500 underline">klik disini</p>
              </Link>{' '}
              untuk pergi ke pendaftaran.
            </h1>
          </div>
        )}
      </section>
    </>
  );
}
