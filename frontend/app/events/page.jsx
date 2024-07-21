"use client"

import { useState, useEffect } from 'react';
import EventList from '../../components/EventList';
import api from '../../lib/axios';

export default function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await api.get('/event');
        setEvents(response.data);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <section>
      <h1>Events</h1>
      <EventList events={events} />
    </section>
  );
}