import { Event } from '../types';
import { addDays, addMonths } from 'date-fns';


const today = new Date();


const formatDateToISO = (date: Date) => date.toISOString().split('T')[0];


export const sampleEvents: Event[] = [
  {
    id: '1',
    title: 'Team Meeting',
    date: formatDateToISO(today),
    startTime: '09:00',
    endTime: '10:00',
    duration: 60,
    description: 'Weekly team sync to discuss project progress',
    color: '#4F46E5' // indigo
  },
  {
    id: '2',
    title: 'Client Call',
    date: formatDateToISO(today),
    startTime: '11:00',
    endTime: '12:00',
    duration: 60,
    description: 'Discussion about new project requirements',
    color: '#10B981' // emerald
  },
  {
    id: '3',
    title: 'Lunch with Sarah',
    date: formatDateToISO(today),
    startTime: '12:30',
    endTime: '13:30',
    duration: 60,
    description: 'Discuss collaboration opportunities',
    color: '#F59E0B' // amber
  },
  {
    id: '4',
    title: 'Project Review',
    date: formatDateToISO(addDays(today, 1)),
    startTime: '14:00',
    endTime: '15:30',
    duration: 90,
    description: 'End of sprint review with stakeholders',
    color: '#EF4444' // red
  },
  {
    id: '5',
    title: 'Gym Session',
    date: formatDateToISO(addDays(today, 1)),
    startTime: '18:00',
    endTime: '19:00',
    duration: 60,
    description: 'Weekly workout routine',
    color: '#8B5CF6' // violet
  },
  {
    id: '6',
    title: 'Dinner Reservation',
    date: formatDateToISO(addDays(today, 2)),
    startTime: '19:30',
    endTime: '21:30',
    duration: 120,
    description: 'Anniversary dinner at Le Bernardin',
    color: '#EC4899' // pink
  },
  {
    id: '7',
    title: 'Conference Call',
    date: formatDateToISO(addDays(today, 2)),
    startTime: '10:00',
    endTime: '11:00',
    duration: 60,
    description: 'International team sync',
    color: '#0EA5E9' // sky
  },
  {
    id: '8',
    title: 'Doctor Appointment',
    date: formatDateToISO(addDays(today, 3)),
    startTime: '15:00',
    endTime: '16:00',
    duration: 60,
    description: 'Annual check-up',
    color: '#14B8A6' // teal
  },
  {
    id: '9',
    title: 'Design Workshop',
    date: formatDateToISO(addDays(today, 4)),
    startTime: '09:00',
    endTime: '12:00',
    duration: 180,
    description: 'UX/UI design principles workshop',
    color: '#F97316' // orange
  },
  {
    id: '10',
    title: 'Movie Night',
    date: formatDateToISO(addDays(today, 5)),
    startTime: '20:00',
    endTime: '22:30',
    duration: 150,
    description: 'Watching the new Marvel movie',
    color: '#8B5CF6' // violet
  },
  


  {
    id: '11',
    title: 'Freshers\' Orientation',
    date: formatDateToISO(addDays(today, 10)), // Approx. 10 days from today
    startTime: '09:00',
    endTime: '16:00',
    duration: 420, // 7 hours
    description: 'Welcome new students to the university! Campus tour, faculty introductions, and ice-breaking activities.',
    color: '#6366F1' // violet-600
  },
  {
    id: '12',
    title: 'Intro to Coding Workshop',
    date: formatDateToISO(addDays(today, 15)),
    startTime: '10:00',
    endTime: '13:00',
    duration: 180,
    description: 'Hands-on workshop for beginners to learn Python basics. No prior experience needed!',
    color: '#0EA5E9' // sky-500
  },
  {
    id: '13',
    title: 'Student Club Fair',
    date: formatDateToISO(addDays(today, 20)),
    startTime: '10:00',
    endTime: '16:00',
    duration: 360,
    description: 'Explore various student clubs and societies. Join to meet new people and pursue your interests.',
    color: '#EC4899' // pink-500
  },
  {
    id: '14',
    title: 'Career Guidance Seminar: Choosing Your Major',
    date: formatDateToISO(addDays(today, 25)),
    startTime: '14:00',
    endTime: '16:00',
    duration: 120,
    description: 'Panel discussion with academic advisors on selecting the right major for your future career.',
    color: '#F59E0B' // amber-500
  },

  // Month 2
  {
    id: '15',
    title: 'Study Skills Workshop: Time Management',
    date: formatDateToISO(addMonths(today, 1)),
    startTime: '10:00',
    endTime: '12:00',
    duration: 120,
    description: 'Learn effective time management techniques to balance academics and extracurriculars.',
    color: '#10B981' // emerald-500
  },
  {
    id: '16',
    title: 'Hackathon: Ideation Challenge',
    date: formatDateToISO(addDays(addMonths(today, 1), 7)),
    startTime: '09:00',
    endTime: '17:00',
    duration: 480, // 8 hours
    description: 'Brainstorm and pitch innovative solutions to real-world problems. Form teams and collaborate!',
    color: '
  },
  {
    id: '17',
    title: 'Guest Lecture: Sustainable Technologies',
    date: formatDateToISO(addDays(addMonths(today, 1), 14)),
    startTime: '14:00',
    endTime: '15:30',
    duration: 90,
    description: 'Insights from an industry expert on the latest advancements in sustainable technology.',
    color: '#0D9488' 
  },
  {
    id: '18',
    title: 'Inter-Departmental Sports Fest',
    date: formatDateToISO(addDays(addMonths(today, 1), 20)),
    startTime: '09:00',
    endTime: '18:00',
    duration: 540, // 9 hours
    description: 'Compete in various sports and cheer for your department! A day of fun and friendly competition.',
    color: '#6366F1' 
  },

 
  {
    id: '19',
    title: 'Resume Building & Interview Skills',
    date: formatDateToISO(addMonths(today, 2)),
    startTime: '10:00',
    endTime: '13:00',
    duration: 180,
    description: 'Workshop to help you craft a winning resume and ace your job interviews.',
    color: '#F97316' 
  },
  {
    id: '20',
    title: 'Coding Competition: Data Structures',
    date: formatDateToISO(addDays(addMonths(today, 2), 7)),
    startTime: '10:00',
    endTime: '16:00',
    duration: 360,
    description: 'Test your problem-solving skills in a competitive coding environment. Prizes for top performers!',
    color: '#0EA5E9'
  },
  {
    id: '21',
    title: 'Open Mic Night',
    date: formatDateToISO(addDays(addMonths(today, 2), 15)),
    startTime: '19:00',
    endTime: '22:00',
    duration: 180,
    description: 'Showcase your talents – singing, poetry, stand-up comedy, or anything creative!',
    color: '#EC4899'
  },
  {
    id: '22',
    title: 'Mental Wellness Session: Stress Management',
    date: formatDateToISO(addDays(addMonths(today, 2), 22)),
    startTime: '11:00',
    endTime: '12:30',
    duration: 90,
    description: 'Interactive session on coping with academic stress and maintaining mental well-being.',
    color: '#10B981'
  },

  // Month 4
  {
    id: '23',
    title: 'Research Paper Writing Workshop',
    date: formatDateToISO(addMonths(today, 3)),
    startTime: '09:30',
    endTime: '13:30',
    duration: 240,
    description: 'Guidance on structuring research papers, citation styles, and effective academic writing.',
    color: '#4F46E5'
  },
  {
    id: '24',
    title: 'Mock Placement Drives',
    date: formatDateToISO(addDays(addMonths(today, 3), 10)),
    startTime: '09:00',
    endTime: '17:00',
    duration: 480, // 8 hours
    description: 'Simulated interview and group discussion rounds to prepare for campus placements.',
    color: '#F59E0B' 
  },
  {
    id: '25',
    title: 'Cultural Fest: Ethnic Day',
    date: formatDateToISO(addDays(addMonths(today, 3), 18)),
    startTime: '10:00',
    endTime: '22:00',
    duration: 720, // 12 hours
    description: 'Celebrate diversity with traditional attire, food stalls, and cultural performances.',
    color: '#EF4444'
  },
  {
    id: '26',
    title: 'Alumni Connect: Mentorship Program Launch',
    date: formatDateToISO(addDays(addMonths(today, 3), 25)),
    startTime: '16:00',
    endTime: '18:00',
    duration: 120,
    description: 'Connect with successful alumni for career guidance and mentorship opportunities.',
    color: '#8B5CF6'
  },

  // Month 5
  {
    id: '27',
    title: 'Entrepreneurship Bootcamp',
    date: formatDateToISO(addMonths(today, 4)),
    startTime: '09:00',
    endTime: '17:00',
    duration: 480, // 8 hours
    description: 'Intensive workshop for aspiring entrepreneurs. Learn about business planning, funding, and marketing.',
    color: '#0D9488'
  },
  {
    id: '28',
    title: 'Sports Day Finale',
    date: formatDateToISO(addDays(addMonths(today, 4), 7)),
    startTime: '09:00',
    endTime: '16:00',
    duration: 420, // 7 hours
    description: 'Final matches, prize distribution, and closing ceremony of the annual sports day.',
    color: '#6366F1'
  },
  {
    id: '29',
    title: 'Guest Lecture: Emerging Technologies in AI',
    date: formatDateToISO(addDays(addMonths(today, 4), 14)),
    startTime: '14:00',
    endTime: '15:30',
    duration: 90,
    description: 'Deep dive into the latest trends and applications of Artificial Intelligence.',
    color: '#0EA5E9' 
  },
  {
    id: '30',
    title: 'University Fest: Main Event',
    date: formatDateToISO(addDays(addMonths(today, 4), 21)),
    startTime: '10:00',
    endTime: '23:00',
    duration: 780, // 13 hours
    description: 'Annual university festival with cultural performances, competitions, and celebrity guest!',
    color: '#EC4899'
  },

  // Month 6
  {
    id: '31',
    title: 'Project Submission Deadline',
    date: formatDateToISO(addMonths(today, 5)),
    startTime: '17:00',
    endTime: '17:00', // End time is the same as start time for a deadline
    duration: 0, // No duration for a deadline
    description: 'Final submission deadline for all semester projects. Ensure all reports and code are submitted.',
    color: '#EF4444' 
  },
  {
    id: '32',
    title: 'Exam Preparation Workshop: Study Techniques',
    date: formatDateToISO(addDays(addMonths(today, 5), 5)),
    startTime: '10:00',
    endTime: '12:00',
    duration: 120,
    description: 'Tips and strategies for effective exam preparation and managing exam stress.',
    color: '#F59E0B' 
  },
  {
    id: '33',
    title: 'Farewell Party for Graduating Students',
    date: formatDateToISO(addDays(addMonths(today, 5), 15)),
    startTime: '18:00',
    endTime: '22:00',
    duration: 240,
    description: 'A grand farewell to our graduating batch. Celebrate their achievements and wish them luck!',
    color: '#8B5CF6' 
  },
  {
    id: '34',
    title: 'Semester End Exams Begin',
    date: formatDateToISO(addDays(addMonths(today, 5), 20)),
    startTime: '09:00',
    endTime: '17:00', // Assuming a day range for exams
    duration: 480, // Representative duration
    description: 'Good luck with your semester-end examinations!',
    color: '#4F46E5' 
  },
];
