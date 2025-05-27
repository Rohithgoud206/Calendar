import React from 'react';
import { format } from 'date-fns';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { CalendarHeaderProps } from '../types';

const CalendarHeader: React.FC<CalendarHeaderProps> = ({ 
  currentDate, 
  onPrevMonth, 
  onNextMonth 
}) => {
  return (
    <div className="flex items-center justify-between px-6 py-4">
      <h2 className="text-2xl font-semibold text-white">
        {format(currentDate, 'MMMM yyyy')}
      </h2>
      <div className="flex space-x-2">
        <button 
          onClick={onPrevMonth}
          className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors duration-200 text-white"
          aria-label="Previous month"
        >
          <ChevronLeft size={20} />
        </button>
        <button 
          onClick={onNextMonth}
          className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors duration-200 text-white"
          aria-label="Next month"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default CalendarHeader;