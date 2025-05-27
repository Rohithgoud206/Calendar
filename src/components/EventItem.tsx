import React from 'react';
import { format } from 'date-fns';
import { EventItemProps } from '../types';

const EventItem: React.FC<EventItemProps> = ({ event }) => {
  return (
    <div 
      className="text-xs p-1 rounded truncate" 
      style={{ 
        backgroundColor: `${event.color}20`,
        borderLeft: `3px solid ${event.color}` 
      }}
      title={`${event.title} (${event.startTime} - ${event.endTime}): ${event.description || ''}`}
    >
      <div className="font-medium" style={{ color: event.color }}>
        {format(new Date(`2000-01-01T${event.startTime}`), 'h:mm a')}
      </div>
      <div className="truncate text-gray-700">
        {event.title}
      </div>
    </div>
  );
};

export default EventItem;