import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Calendar from './components/Calendar';
import { Event } from './types';
import { sampleEvents } from './data/events';
 
function App() {
  const [events, setEvents] = useState<Event[]>(sampleEvents);

  const handleAddEvent = (newEvent: Omit<Event, 'id'>) => {
    const eventWithId = {
      ...newEvent,
      id: uuidv4(),
    };
    
    setEvents(prevEvents => [...prevEvents, eventWithId]);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Calendar 
        events={events}
        onAddEvent={handleAddEvent}
      />
    </div>
  );
}

export default App;
