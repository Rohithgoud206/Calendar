import React, { useState } from 'react';
import CalendarHeader from './CalendarHeader';
import CalendarGrid from './CalendarGrid';

const Calendar: React.FC = () => {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());

  return (
    <div className="flex flex-col h-full">
      <CalendarHeader 
        currentDate={currentDate} 
        setCurrentDate={setCurrentDate} 
      />
      <CalendarGrid 
        currentDate={currentDate} 
      />
    </div>
  );
};

export default Calendar;