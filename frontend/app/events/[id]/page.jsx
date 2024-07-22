'use client'

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Loading from '@/components/Loading';
import EventDetail from '../../../components/EventDetail';
import api from '../../../lib/axios';

export default function EventPage() {
  const [event, setEvent] = useState(null);
  const [error, setError] = useState(null);
  const params = useParams();
  const id = params.id;

  useEffect(() => {
    console.log('ID from params:', id);
    if (id) {
      const fetchEvent = async () => {
        try {
          console.log('Fetching event with ID:', id);
          const response = await api.get(`/event/${id}`);
          console.log('API response:', response.data);
          setEvent(response.data);
        } catch (error) {
          console.error('Error fetching event:', error);
          setError(error.message);
        }
      };

      fetchEvent();
    }
  }, [id]);

  if (!id) {
    return <section>Loading...</section>;
  }

  if (error) {
    return <Loading />;
  }

  if (!event) {
    return <section>Loading event...</section>;
  }

  return (
    <section>
      <EventDetail event={event} />
    </section>
  );
}