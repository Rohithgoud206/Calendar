import {
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
  format,
  isSameMonth,
  isSameDay,
  parseISO,
  addMonths,
  subMonths
} from 'date-fns';

// Get all days to be displayed on the calendar
export const getCalendarDays = (date: Date) => {
  const monthStart = startOfMonth(date);
  const monthEnd = endOfMonth(date);
  const calendarStart = startOfWeek(monthStart);
  const calendarEnd = endOfWeek(monthEnd);

  return eachDayOfInterval({ start: calendarStart, end: calendarEnd });
};

// Format date to display in calendar
export const formatDate = (date: Date, formatString: string) => {
  return format(date, formatString);
};

// Check if a date is in the current month
export const isCurrentMonth = (date: Date, currentMonth: Date) => {
  return isSameMonth(date, currentMonth);
};

// Check if a date is today
export const isToday = (date: Date) => {
  return isSameDay(date, new Date());
};

// Format time from "HH:MM" to "h:mm a" (e.g., "9:00 AM")
export const formatTime = (time: string) => {
  const [hours, minutes] = time.split(':').map(part => part.trim());
  const date = new Date();
  date.setHours(parseInt(hours, 10));
  date.setMinutes(parseInt(minutes, 10));
  
  return format(date, 'h:mm a');
};

// Navigate to next month
export const nextMonth = (date: Date) => {
  return addMonths(date, 1);
};

// Navigate to previous month
export const prevMonth = (date: Date) => {
  return subMonths(date, 1);
};

// Convert date string to Date object
export const parseDate = (dateString: string) => {
  return parseISO(dateString);
};

// Get formatted date string for events (YYYY-MM-DD)
export const getFormattedDateStr = (date: Date) => {
  return format(date, 'yyyy-MM-dd');
};