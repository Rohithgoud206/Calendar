import React from 'react';
import { format } from 'date-fns';
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon } from 'lucide-react';
import { nextMonth, prevMonth } from '../utils/dateUtils';

interface CalendarHeaderProps {
  currentDate: Date;
  setCurrentDate: (date: Date) => void;
}

const CalendarHeader: React.FC<CalendarHeaderProps> = ({ 
  currentDate, 
  setCurrentDate 
}) => {
  const handlePrevMonth = () => {
    setCurrentDate(prevMonth(currentDate));
  };

  const handleNextMonth = () => {
    setCurrentDate(nextMonth(currentDate));
  };

  const goToToday = () => {
    setCurrentDate(new Date());
  };

  return (
    <header className="px-6 py-4 border-b border-gray-200">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <h1 className="text-2xl font-semibold text-gray-800">
            {format(currentDate, 'MMMM yyyy')}
          </h1>
          <button 
            onClick={goToToday}
            className="px-3 py-1 text-sm bg-indigo-50 text-indigo-600 font-medium rounded-md hover:bg-indigo-100 transition-colors"
          >
            Today
          </button>
        </div>
        
        <div className="flex items-center gap-2">
          <button 
            onClick={handlePrevMonth}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Previous month"
          >
            <ChevronLeft size={20} className="text-gray-600" />
          </button>
          <button 
            onClick={handleNextMonth}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Next month"
          >
            <ChevronRight size={20} className="text-gray-600" />
          </button>
        </div>
      </div>
      
      <div className="flex items-center gap-2 mt-3">
        <CalendarIcon size={16} className="text-gray-500" />
        <span className="text-sm font-medium text-gray-500">
          {format(new Date(), "EEEE, MMMM d, yyyy")}
        </span>
      </div>
    </header>
  );
};

export default CalendarHeader;