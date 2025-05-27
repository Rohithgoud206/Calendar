import React, { useState } from 'react';
import { addMonths, subMonths, format } from 'date-fns';
import { CalendarProps } from '../types';
import CalendarHeader from './CalendarHeader';
import CalendarGrid from './CalendarGrid';
import EventForm from './EventForm';
import { backgroundImages } from '../data/backgroundImages';

const Calendar: React.FC<CalendarProps> = ({ events, onAddEvent }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [showEventForm, setShowEventForm] = useState(false);

  // Handle navigation
  const handlePrevMonth = () => {
    setCurrentDate(prevDate => subMonths(prevDate, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(prevDate => addMonths(prevDate, 1));
  };

  // Handle date click
  const handleDateClick = (date: Date) => {
    setSelectedDate(date);
    setShowEventForm(true);
  };

  // Get background image for current month
  const currentMonthIndex = currentDate.getMonth();
  const backgroundImage = backgroundImages[currentMonthIndex];
  const currentMonthText = format(currentDate, 'MMMM');

  return (
    <div 
      className="h-full min-h-screen transition-all duration-500 ease-in-out relative"
      style={{
        backgroundImage: `
          linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)),
          url(${backgroundImage})
        `,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Watermark */}
      <div 
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        aria-hidden="true"
      >
        <span 
          className="text-[20vw] font-bold text-white/5 select-none"
          style={{ letterSpacing: '0.1em' }}
        >
          {currentMonthText}
        </span>
      </div>

      <div className="max-w-[90rem] mx-auto px-4 py-8 relative z-10">
        <div className="flex gap-6">
          <div className="flex-1">
            <CalendarHeader 
              currentDate={currentDate}
              onPrevMonth={handlePrevMonth}
              onNextMonth={handleNextMonth}
            />
            
            <div className="mt-4 transition-all duration-300 transform">
              <CalendarGrid 
                currentDate={currentDate}
                events={events}
                onDateClick={handleDateClick}
              />
            </div>
          </div>

          {showEventForm && selectedDate && (
            <div className="w-96 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg h-fit sticky top-8">
              <EventForm 
                selectedDate={selectedDate}
                onClose={() => setShowEventForm(false)}
                onSubmit={onAddEvent}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Calendar;