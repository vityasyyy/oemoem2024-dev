"use client";

import { useState, useEffect } from 'react';
import axios from 'axios';
import Class from '../../components/Class'; // Adjust the import path as needed
import { useRouter } from 'next/navigation'; // Import useRouter
import Loading from '@/components/Loading';

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
        <Loading />
      )}
    </section>
    </>
  );
}
