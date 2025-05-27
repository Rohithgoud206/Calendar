import React from 'react';
import { 
  startOfMonth, 
  endOfMonth, 
  startOfWeek, 
  endOfWeek,
  addDays,
  isSameMonth,
  isToday
} from 'date-fns';
import { CalendarGridProps } from '../types';
import Day from './Day';

const DAYS_OF_WEEK = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const CalendarGrid: React.FC<CalendarGridProps> = ({ 
  currentDate, 
  events, 
  onDateClick 
}) => {
  // Get the dates for the current month's calendar view
  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(monthStart);
  const calendarStart = startOfWeek(monthStart);
  const calendarEnd = endOfWeek(monthEnd);

  // Create array of dates to display
  const calendarDays = [];
  let day = calendarStart;

  while (day <= calendarEnd) {
    calendarDays.push(day);
    day = addDays(day, 1);
  }

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden">
      {/* Days of week header */}
      <div className="grid grid-cols-7 bg-gray-50/90">
        {DAYS_OF_WEEK.map((dayName) => (
          <div 
            key={dayName} 
            className="py-2 text-center text-sm font-medium text-gray-500"
          >
            {dayName}
          </div>
        ))}
      </div>

      {/* Calendar grid */}
      <div className="grid grid-cols-7">
        {calendarDays.map((date) => (
          <Day 
            key={date.toString()}
            date={date}
            isCurrentMonth={isSameMonth(date, currentDate)}
            isToday={isToday(date)}
            events={events}
            onDateClick={onDateClick}
          />
        ))}
      </div>
    </div>
  );
};

export default CalendarGrid;