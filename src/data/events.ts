import { Event } from '../types';
import { v4 as uuidv4 } from '../utils/uuid';

// Get current date in YYYY-MM-DD format
const today = new Date();
const todayStr = today.toISOString().split('T')[0];

// Create tomorrow's date
const tomorrow = new Date(today);
tomorrow.setDate(tomorrow.getDate() + 1);
const tomorrowStr = tomorrow.toISOString().split('T')[0];

// Create day after tomorrow's date
const dayAfterTomorrow = new Date(today);
dayAfterTomorrow.setDate(dayAfterTomorrow.getDate() + 2);
const dayAfterTomorrowStr = dayAfterTomorrow.toISOString().split('T')[0];

export const events: Event[] = [
  {
    id: uuidv4(),
    title: "Daily Standup",
    date: todayStr,
    startTime: "09:00",
    endTime: "09:30",
    color: "#f6be23"
  },
  {
    id: uuidv4(),
    title: "Weekly Catchup",
    date: todayStr,
    startTime: "14:30",
    endTime: "15:30",
    color: "#f6501e"
  },
  {
    id: uuidv4(),
    title: "Product Review",
    date: todayStr,
    startTime: "16:00",
    endTime: "17:00",
    color: "#7be0ad"
  },
  {
    id: uuidv4(),
    title: "Design Meeting",
    date: tomorrowStr,
    startTime: "10:00",
    endTime: "11:30",
    color: "#6a7fdb"
  },
  {
    id: uuidv4(),
    title: "Tech Interview",
    date: tomorrowStr,
    startTime: "13:00",
    endTime: "14:00",
    color: "#8b5fbf"
  },
  {
    id: uuidv4(),
    title: "Project Planning",
    date: dayAfterTomorrowStr,
    startTime: "11:00",
    endTime: "12:30",
    color: "#f95959"
  }
];