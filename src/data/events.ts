import { Event } from '../types';
import { v4 as uuidv4 } from '../utils/uuid';

const today = new Date();

function getDateAfterDays(days: number): string {
  const date = new Date(today);
  date.setDate(date.getDate() + days);
  return date.toISOString().split('T')[0];
}

export const events: Event[] = [
  // Today
  {
    id: uuidv4(),
    title: "Daily Standup",
    date: getDateAfterDays(0),
    startTime: "09:00",
    endTime: "09:30",
    color: "#f6be23"
  },
  {
    id: uuidv4(),
    title: "Weekly Catchup",
    date: getDateAfterDays(0),
    startTime: "14:30",
    endTime: "15:30",
    color: "#f6501e"
  },
  {
    id: uuidv4(),
    title: "Product Review",
    date: getDateAfterDays(0),
    startTime: "16:00",
    endTime: "17:00",
    color: "#7be0ad"
  },

  // Tomorrow
  {
    id: uuidv4(),
    title: "Design Meeting",
    date: getDateAfterDays(1),
    startTime: "10:00",
    endTime: "11:30",
    color: "#6a7fdb"
  },
  {
    id: uuidv4(),
    title: "Tech Interview",
    date: getDateAfterDays(1),
    startTime: "13:00",
    endTime: "14:00",
    color: "#8b5fbf"
  },

  // Day after tomorrow
  {
    id: uuidv4(),
    title: "Project Planning",
    date: getDateAfterDays(2),
    startTime: "11:00",
    endTime: "12:30",
    color: "#f95959"
  },

  // Upcoming Creative Student Events (original)
  {
    id: uuidv4(),
    title: "Hackathon Kickoff",
    date: getDateAfterDays(10),
    startTime: "10:00",
    endTime: "18:00",
    color: "#20c997"
  },
  {
    id: uuidv4(),
    title: "Resume Workshop",
    date: getDateAfterDays(15),
    startTime: "15:00",
    endTime: "16:30",
    color: "#17a2b8"
  },
  {
    id: uuidv4(),
    title: "AI & ML Seminar",
    date: getDateAfterDays(22),
    startTime: "11:00",
    endTime: "13:00",
    color: "#6610f2"
  },

  // Events for the next 6 months (June 2025 - November 2025)
  // June 2025
  {
    id: uuidv4(),
    title: "GITA FOR YOUTH | Personality Enrichment",
    date: getDateAfterDays(5), // Roughly June 1st, 2025
    startTime: "18:00",
    endTime: "20:00",
    color: "#e67e22"
  },
  {
    id: uuidv4(),
    title: "Hyderabad Language Exchange",
    date: getDateAfterDays(8), // Roughly June 4th, 2025
    startTime: "19:00",
    endTime: "21:00",
    color: "#3498db"
  },
  {
    id: uuidv4(),
    title: "PAP EXPO 2025",
    date: getDateAfterDays(11), // Roughly June 7th, 2025
    startTime: "09:00",
    endTime: "17:00",
    color: "#9b59b6"
  },
  {
    id: uuidv4(),
    title: "The Giggle Fest",
    date: getDateAfterDays(12), // Roughly June 8th, 2025
    startTime: "18:00",
    endTime: "22:00",
    color: "#e74c3c"
  },
  {
    id: uuidv4(),
    title: "Heartfulness Retreat (Telugu & Hindi)",
    date: getDateAfterDays(18), // Roughly June 14th, 2025
    startTime: "09:00",
    endTime: "18:00",
    color: "#2ecc71"
  },
  {
    id: uuidv4(),
    title: "Hyderabad's Biggest Business & Tech Professional Networking Soiree",
    date: getDateAfterDays(21), // Roughly June 17th, 2025
    startTime: "18:00",
    endTime: "21:00",
    color: "#f1c40f"
  },
  {
    id: uuidv4(),
    title: "AI Implementation in Business Workshop",
    date: getDateAfterDays(29), // Roughly June 25th, 2025
    startTime: "10:30",
    endTime: "16:30",
    color: "#8e44ad"
  },

  // July 2025
  {
    id: uuidv4(),
    title: "Gaurav Kapoor LIVE (Comedy Show)",
    date: getDateAfterDays(41), // Roughly July 7th, 2025
    startTime: "19:00",
    endTime: "21:00",
    color: "#1abc9c"
  },
  {
    id: uuidv4(),
    title: "Heartfulness Retreat (Telugu & English)",
    date: getDateAfterDays(46), // Roughly July 12th, 2025
    startTime: "09:00",
    endTime: "18:00",
    color: "#34495e"
  },
  {
    id: uuidv4(),
    title: "Graduation, Placement and Alumni Day",
    date: getDateAfterDays(48), // Roughly July 14th, 2025
    startTime: "10:00",
    endTime: "16:00",
    color: "#95a5a6"
  },
  {
    id: uuidv4(),
    title: "Session on Accelerators / Incubation",
    date: getDateAfterDays(66), // Roughly August 1st, 2025
    startTime: "14:00",
    endTime: "16:00",
    color: "#d35400"
  },

  // August 2025
  {
    id: uuidv4(),
    title: "13th CNC Expo 2025",
    date: getDateAfterDays(72), // Roughly August 7th, 2025
    startTime: "10:00",
    endTime: "18:00",
    color: "#2980b9"
  },
  {
    id: uuidv4(),
    title: "Independence Day Celebrations",
    date: getDateAfterDays(81), // Roughly August 16th, 2025
    startTime: "09:00",
    endTime: "13:00",
    color: "#27ae60"
  },
  {
    id: uuidv4(),
    title: "Whale Tank 2.0 (Biotech Startup Event)",
    date: getDateAfterDays(82), // Roughly August 17th, 2025
    startTime: "10:00",
    endTime: "17:00",
    color: "#f39c12"
  },
  {
    id: uuidv4(),
    title: "Eco Sustain Expo 2025",
    date: getDateAfterDays(89), // Roughly August 24th, 2025
    startTime: "09:30",
    endTime: "17:30",
    color: "#c0392b"
  },

  // September 2025
  {
    id: uuidv4(),
    title: "College with HIGHEST number of ideas selected for Innovation, Design and Entrepreneurship bootcamp",
    date: getDateAfterDays(107), // Roughly September 10th, 2025
    startTime: "10:00",
    endTime: "12:00",
    color: "#3498db"
  },
  {
    id: uuidv4(),
    title: "International Roundtable",
    date: getDateAfterDays(108), // Roughly September 11th, 2025
    startTime: "09:00",
    endTime: "17:00",
    color: "#9b59b6"
  },
  {
    id: uuidv4(),
    title: "Freshers' Welcome Party",
    date: getDateAfterDays(115), // Roughly September 18th, 2025
    startTime: "18:00",
    endTime: "22:00",
    color: "#e74c3c"
  },
  {
    id: uuidv4(),
    title: "Tech Fest 'InnovateX' Day 1",
    date: getDateAfterDays(120), // Roughly September 23rd, 2025
    startTime: "09:00",
    endTime: "17:00",
    color: "#2ecc71"
  },
  {
    id: uuidv4(),
    title: "Tech Fest 'InnovateX' Day 2",
    date: getDateAfterDays(121), // Roughly September 24th, 2025
    startTime: "09:00",
    endTime: "17:00",
    color: "#2ecc71"
  },

  // October 2025
  {
    id: uuidv4(),
    title: "Spectra Contest by Photography Club",
    date: getDateAfterDays(127), // Roughly October 2nd, 2025
    startTime: "10:00",
    endTime: "16:00",
    color: "#1abc9c"
  },
  {
    id: uuidv4(),
    title: "Annual Sports Meet Day 1",
    date: getDateAfterDays(135), // Roughly October 10th, 2025
    startTime: "08:00",
    endTime: "18:00",
    color: "#f1c40f"
  },
  {
    id: uuidv4(),
    title: "Annual Sports Meet Day 2",
    date: getDateAfterDays(136), // Roughly October 11th, 2025
    startTime: "08:00",
    endTime: "18:00",
    color: "#f1c40f"
  },
  {
    id: uuidv4(),
    title: "Industrial Visit to NRSC",
    date: getDateAfterDays(149), // Roughly October 24th, 2025
    startTime: "09:00",
    endTime: "15:00",
    color: "#2ecc71"
  },
  {
    id: uuidv4(),
    title: "39th Annual Conference on Agricultural Marketing",
    date: getDateAfterDays(154), // Roughly October 29th, 2025
    startTime: "09:00",
    endTime: "17:30",
    color: "#f1c40f"
  },
  {
    id: uuidv4(),
    title: "Halloween Campus Party",
    date: getDateAfterDays(156), // Roughly October 31st, 2025
    startTime: "19:00",
    endTime: "23:00",
    color: "#8e44ad"
  },

  // November 2025
  {
    id: uuidv4(),
    title: "Invited Talk on 'National Entrepreneurship Day'",
    date: getDateAfterDays(165), // Roughly November 9th, 2025
    startTime: "10:00",
    endTime: "12:00",
    color: "#8e44ad"
  },
  {
    id: uuidv4(),
    title: "Webinar on Entrepreneurship in the Digital Economy",
    date: getDateAfterDays(166), // Roughly November 10th, 2025
    startTime: "14:00",
    endTime: "16:00",
    color: "#e67e22"
  },
  {
    id: uuidv4(),
    title: "Session on Problem Solving and Ideation Workshop",
    date: getDateAfterDays(179), // Roughly November 23rd, 2025
    startTime: "10:00",
    endTime: "13:00",
    color: "#34495e"
  },
  {
    id: uuidv4(),
    title: "Guest Lecture: 'Future of AI in Healthcare'",
    date: getDateAfterDays(185), // Roughly November 29th, 2025
    startTime: "11:00",
    endTime: "12:30",
    color: "#5f27cd"
  },
  {
    id: uuidv4(),
    title: "Inter-College Debate Competition",
    date: getDateAfterDays(187), // Roughly December 1st, 2025
    startTime: "09:30",
    endTime: "16:00",
    color: "#ff6b6b"
  },

  // December 2025
  {
    id: uuidv4(),
    title: "Coding Marathon 'CodeSprint'",
    date: getDateAfterDays(195), // Roughly December 9th, 2025
    startTime: "09:00",
    endTime: "20:00",
    color: "#1dd1a1"
  },
  {
    id: uuidv4(),
    title: "Christmas Cultural Program",
    date: getDateAfterDays(210), // Roughly December 24th, 2025
    startTime: "18:00",
    endTime: "22:00",
    color: "#eb3b5a"
  },
  {
    id: uuidv4(),
    title: "New Year's Eve Campus Celebration",
    date: getDateAfterDays(217), // Roughly December 31st, 2025
    startTime: "20:00",
    endTime: "23:59",
    color: "#fd9644"
  },

  // January 2026
  {
    id: uuidv4(),
    title: "Orientation for Spring Semester Internships",
    date: getDateAfterDays(225), // Roughly January 8th, 2026
    startTime: "10:00",
    endTime: "12:00",
    color: "#4b6584"
  },
  {
    id: uuidv4(),
    title: "Career Fair 2026",
    date: getDateAfterDays(232), // Roughly January 15th, 2026
    startTime: "09:00",
    endTime: "17:00",
    color: "#2d98da"
  },
  {
    id: uuidv4(),
    title: "Republic Day Celebrations",
    date: getDateAfterDays(242), // Roughly January 25th, 2026
    startTime: "09:00",
    endTime: "12:00",
    color: "#a55eea"
  },
];
