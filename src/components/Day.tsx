import React from 'react';
import { format, isSameDay } from 'date-fns';
import { DayProps } from '../types';
import EventItem from './EventItem';

const Day: React.FC<DayProps> = ({ 
  date, 
  isCurrentMonth, 
  isToday, 
  events, 
  onDateClick 
}) => {
  const dayEvents = events.filter(event => {
    const eventDate = new Date(event.date);
    return isSameDay(eventDate, date);
  });

  const sortedEvents = dayEvents.sort((a, b) => {
    return a.startTime.localeCompare(b.startTime);
  });

  return (
    <div 
      onClick={() => onDateClick(date)}
      className={`
        min-h-[120px] p-1 border border-gray-200 transition-all duration-200
        ${isCurrentMonth ? 'bg-white/90' : 'bg-gray-100/80'} 
        ${isToday ? 'ring-2 ring-blue-500' : ''}
        hover:bg-blue-50/90 cursor-pointer relative group
      `}
    >
      <div className={`
        text-sm font-medium p-1 rounded-full w-7 h-7 flex items-center justify-center
        ${isToday ? 'bg-blue-500 text-white' : ''}
        ${!isCurrentMonth ? 'text-gray-400' : 'text-gray-700'}
        group-hover:bg-blue-500 group-hover:text-white transition-colors duration-200
      `}>
        {format(date, 'd')}
      </div>
      
      <div className="mt-1 space-y-1 overflow-y-auto max-h-[80px]">
        {sortedEvents.slice(0, 3).map((event) => (
          <EventItem key={event.id} event={event} />
        ))}
        
        {sortedEvents.length > 3 && (
          <div className="text-xs text-gray-500 italic">
            +{sortedEvents.length - 3} more
          </div>
        )}
      </div>
    </div>
  );
};

export default Day;