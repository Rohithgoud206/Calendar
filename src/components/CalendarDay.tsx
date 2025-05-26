import React from 'react';
import { format } from 'date-fns';
import { useEvents } from '../context/EventContext';
import EventCard from './EventCard';

interface CalendarDayProps {
  date: Date;
  dateStr: string;
  inCurrentMonth: boolean;
  isCurrentDay: boolean;
}

const CalendarDay: React.FC<CalendarDayProps> = ({
  date,
  dateStr,
  inCurrentMonth,
  isCurrentDay,
}) => {
  const { getEventsForDate } = useEvents();
  const events = getEventsForDate(dateStr);
  
  const dayClasses = `
    relative min-h-[120px] border-b border-r border-gray-200 p-1
    ${!inCurrentMonth ? 'bg-gray-50' : ''}
    ${isCurrentDay ? 'bg-blue-50' : ''}
  `;
  
  const dayNumberClasses = `
    text-sm font-medium h-6 w-6 flex items-center justify-center
    ${!inCurrentMonth ? 'text-gray-400' : 'text-gray-700'}
    ${isCurrentDay ? 'bg-blue-500 text-white rounded-full' : ''}
  `;
  
  return (
    <div className={dayClasses}>
      <div className="flex justify-between items-start mb-1">
        <span className={dayNumberClasses}>
          {format(date, 'd')}
        </span>
      </div>
      
      <div className="space-y-1 overflow-y-auto max-h-[calc(100%-1.5rem)]">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default CalendarDay;