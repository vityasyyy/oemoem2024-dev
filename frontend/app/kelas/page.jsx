"use client"

import { useState, useEffect } from 'react';
import axios from 'axios';
import Class from '../../components/Class'; // Adjust the import path as needed

export default function Events() {
  const [user, setUser] = useState(null); // Add state for user
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
  }, []);

  return (
    <section>
      {user ? (
        <Class user={user} />
      ) : (
        <p>Please log in to view your classes.</p>
      )}
    </section>
  );
}