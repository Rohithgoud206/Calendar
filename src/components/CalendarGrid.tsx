import React from 'react';
import { format } from 'date-fns';
import { getCalendarDays, isCurrentMonth, isToday, getFormattedDateStr } from '../utils/dateUtils';
import CalendarDay from './CalendarDay';

interface CalendarGridProps {
  currentDate: Date;
}

const CalendarGrid: React.FC<CalendarGridProps> = ({ currentDate }) => {
  const days = getCalendarDays(currentDate);
  const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <div className="flex-1 overflow-hidden">
      {/* Weekday headers */}
      <div className="grid grid-cols-7 border-b border-gray-200">
        {weekdays.map((day) => (
          <div 
            key={day} 
            className="py-2 text-center text-sm font-medium text-gray-500"
          >
            {day}
          </div>
        ))}
      </div>

      {/* Calendar grid */}
      <div className="grid grid-cols-7 h-full auto-rows-fr">
        {days.map((day) => {
          const dayStr = getFormattedDateStr(day);
          const inCurrentMonth = isCurrentMonth(day, currentDate);
          const isCurrentDay = isToday(day);
          
          return (
            <CalendarDay 
              key={dayStr}
              date={day}
              dateStr={dayStr}
              inCurrentMonth={inCurrentMonth}
              isCurrentDay={isCurrentDay}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CalendarGrid;