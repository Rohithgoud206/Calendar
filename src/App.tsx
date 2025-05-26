import React from 'react';
import Calendar from './components/Calendar';
import { EventProvider } from './context/EventContext';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 font-sans antialiased">
      <div className="w-full max-w-6xl bg-white rounded-xl shadow-lg overflow-hidden">
        <EventProvider>
          <Calendar />
        </EventProvider>
      </div>
    </div>
  );
}

export default App;