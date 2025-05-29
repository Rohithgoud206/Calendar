export interface Event {
  id: string;
  title: string;
  date: string;
  startTime: string;
  endTime: string;
  duration: number;
  description?: string;
  color?: string;
}

export interface CalendarProps {
  events: Event[];
  onAddEvent: (event: Omit<Event, 'id'>) => void;
}

export interface CalendarHeaderProps {
  currentDate: Date;
  onPrevMonth: () => void;
  onNextMonth: () => void;
}

export interface CalendarGridProps {
  currentDate: Date;
  events: Event[];
  onDateClick: (date: Date) => void;
}

export interface DayProps {
  date: Date;
  isCurrentMonth: boolean;
  isToday: boolean;
  events: Event[];
  onDateClick: (date: Date) => void;
}

export interface EventItemProps {
  event: Event;
}

export interface EventFormProps {
  selectedDate: Date;
  onClose: () => void;
  onSubmit: (event: Omit<Event, 'id'>) => void;
}

export interface BackgroundImageMap {
  [key: number]: string;
}
