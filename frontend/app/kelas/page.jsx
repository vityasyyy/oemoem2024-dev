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
        // Get the JWT from localStorage
        const token = localStorage.getItem('jwt');
        if (token) {
          const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/auth/validate`, {
            headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json'
            }
          });

          if (response.data.user) {
            console.log(response.data)
            setUser(response.data.user); // Set user state if authenticated
            fetchEvents(); // Fetch events if user is logged in
          } else {
            router.push('/auth/masuk'); // Redirect to login if user is not authenticated
          }
        } else {
          router.push('/auth/masuk'); // Redirect to login if no token is found
        }
      } catch (error) {
        console.error('Error checking authentication status:', error);
        router.push('/auth/masuk'); // Redirect to login on error
      }
    };

    const fetchEvents = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/event`, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
            'Content-Type': 'application/json'
          }
        });
        setEvents(response.data);
        setLoading(false); // Update loading state after fetching events
      } catch (error) {
        console.error('Error fetching events:', error);
        setLoading(false); // Ensure loading state is updated on error
      }
    };

    checkUserLoggedIn(); // Start user authentication check
  }, [router]); // Add router to dependencies to handle route changes

  if (loading) {
    return <Loading />; // Show a loading message while checking authentication and fetching data
  }

  return (
    <>
      <section>
        {user ? (
          <Class user={user} events={events} />
        ) : (
          <div className="flex flex-col items-center justify-center mt-8">
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
