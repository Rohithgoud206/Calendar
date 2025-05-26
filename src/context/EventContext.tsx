import React, { createContext, useContext, ReactNode, useState } from 'react';
import { Event, EventsByDate } from '../types';
import { events as initialEvents } from '../data/events';

interface EventContextType {
  events: Event[];
  eventsByDate: EventsByDate;
  addEvent: (event: Event) => void;
  getEventsForDate: (date: string) => Event[];
}

const EventContext = createContext<EventContextType | undefined>(undefined);

// Organize events by date for easier lookup
const organizeEventsByDate = (events: Event[]): EventsByDate => {
  return events.reduce((acc: EventsByDate, event) => {
    if (!acc[event.date]) {
      acc[event.date] = [];
    }
    acc[event.date].push(event);
    return acc;
  }, {});
};

export const EventProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [events, setEvents] = useState<Event[]>(initialEvents);
  const [eventsByDate, setEventsByDate] = useState<EventsByDate>(
    organizeEventsByDate(initialEvents)
  );

  const addEvent = (event: Event) => {
    setEvents(prevEvents => [...prevEvents, event]);
    setEventsByDate(prevEventsByDate => {
      const newEventsByDate = { ...prevEventsByDate };
      if (!newEventsByDate[event.date]) {
        newEventsByDate[event.date] = [];
      }
      newEventsByDate[event.date].push(event);
      return newEventsByDate;
    });
  };

  const getEventsForDate = (date: string): Event[] => {
    return eventsByDate[date] || [];
  };

  return (
    <EventContext.Provider value={{ events, eventsByDate, addEvent, getEventsForDate }}>
      {children}
    </EventContext.Provider>
  );
};

export const useEvents = (): EventContextType => {
  const context = useContext(EventContext);
  if (context === undefined) {
    throw new Error('useEvents must be used within an EventProvider');
  }
  return context;
};