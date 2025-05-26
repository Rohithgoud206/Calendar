import React, { useState } from 'react';
import { Event } from '../types';
import { formatTime } from '../utils/dateUtils';

interface EventCardProps {
  event: Event;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const startTimeFormatted = formatTime(event.startTime);
  const endTimeFormatted = formatTime(event.endTime);
  
  return (
    <div
      className="text-xs p-1 rounded cursor-pointer transition-all duration-200 overflow-hidden"
      style={{ 
        backgroundColor: `${event.color}20`, // Add transparency
        borderLeft: `3px solid ${event.color}`,
        transform: isHovered ? 'translateY(-1px)' : 'none',
        boxShadow: isHovered ? `0 2px 4px rgba(0,0,0,0.1), 0 0 0 1px ${event.color}40` : 'none'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="font-medium text-gray-800 truncate" style={{ color: event.color }}>
        {event.title}
      </div>
      <div className="text-gray-600">
        {startTimeFormatted} - {endTimeFormatted}
      </div>
    </div>
  );
};

export default EventCard;