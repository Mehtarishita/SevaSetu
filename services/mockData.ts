import { Volunteer, VolunteerSkill, SkillLevel } from "../types/volunteer";
import { Incident, IncidentType, Priority, IncidentStatus } from "../types/incident";
import { Assignment } from "../types/assignment";

function rand(index: number, max: number) {
  return index % max;
}

const firstNames = [
  "Aarav","Vivaan","Aditya","Vihaan","Arjun","Saanvi","Aditi","Ananya","Ishaan","Karan",
  "Priya","Sneha","Rohit","Neha","Riya","Kavya","Siddharth","Manav","Deepak","Sunita",
  "Rahul","Pooja","Vikram","Meera","Karanveer","Bhavana","Ramesh","Geeta","Arjunesh","Lakshmi",
  "Shreya","Gaurav","Nisha","Anil","Ramesh","Tara","Sameer","Smita","Kunal","Ankita",
  "Mohit","Anu","Harsh","Divya","Sahil","Raj","Komal","Yash","Kiran","Pankaj"
];

const lastNames = [
  "Sharma","Patel","Singh","Gupta","Kumar","Joshi","Reddy","Mehta","Nair","Khan",
  "Desai","Ahuja","Iyer","Nanda","Chopra","Bhat","Verma","Saxena","Malhotra","Kapoor"
];

const sampleSkills: VolunteerSkill[] = [
  { name: "First Aid", level: "intermediate" as SkillLevel },
  { name: "Crowd Management", level: "advanced" as SkillLevel },
  { name: "Logistics", level: "beginner" as SkillLevel },
  { name: "Translator", level: "intermediate" as SkillLevel },
];

const languages = [
  "Hindi",
  "English",
  "Marathi",
  "Gujarati",
  "Bengali",
  "Tamil"
];

export function generateVolunteers(count = 50): Volunteer[] {
  const now = "2026-01-01T00:00:00.000Z";
  const list: Volunteer[] = [];

  for (let i = 0; i < count; i++) {
    const first = firstNames[i % firstNames.length];
    const last = lastNames[i % lastNames.length];

    list.push({
      id: `vol_${i + 1}`,
      firstName: first,
      lastName: last,
      phone: `+91987654${String(i).padStart(4, "0")}`,
      email: `${first.toLowerCase()}.${last.toLowerCase()}@example.com`,
      status: ["available", "busy", "off-duty"][i % 3] as any,

      skills: [sampleSkills[i % sampleSkills.length]],
      languages: [languages[i % languages.length]],

      location: {
        latitude: 21.1458 + i * 0.001,
        longitude: 79.0882 + i * 0.001,
        address: `Zone ${(i % 20) + 1}`,
        zoneId: `zone_${(i % 20) + 1}`,
      },

      availableUntil: null,
      lastAssignedAt: null,

      totalHoursToday: i % 8,
      totalHoursWeek: i % 40,
      fatigueScore: (i * 7) % 100,

      notes: "",

      createdAt: now,
      updatedAt: now,
    });
  }

  return list;
}

export function generateIncidents(count = 20): Incident[] {
  const now = "2026-01-01T00:00:00.000Z";

  const types = [
    "Medical",
    "Lost",
    "Crowd",
    "Fire",
    "Security"
  ];

  const list: Incident[] = [];

  for (let i = 0; i < count; i++) {
    list.push({
      id: `inc_${i + 1}`,

      title: `${types[i % types.length]} incident near Ghat ${i + 1}`,

      description: "Reported by public. Needs quick response.",

      type: [
        "medical",
        "crowd-control",
        "security",
        "fire",
        "lost-person"
      ][i % 5] as IncidentType,

      priority: ["low", "medium", "high"][i % 3] as Priority,

      status: ["open", "assigned", "closed"][i % 3] as IncidentStatus,

      reportedAt: now,
      reportedBy: "public",

      assignedVolunteerIds: [],
      tags: [],

      severityScore: (i * 5) % 100,

      location: {
        latitude: 21.14 + i * 0.001,
        longitude: 79.08 + i * 0.001,
        address: `Ghat ${i + 1}`,
      },

      createdAt: now,
      updatedAt: now,
    });
  }

  return list;
}

export function generateAssignments(count = 25): Assignment[] {
  const now = "2026-01-01T00:00:00.000Z";

  const list: Assignment[] = [];

  for (let i = 0; i < count; i++) {
    list.push({
      id: `asn_${i + 1}`,

      incidentId: `inc_${(i % 20) + 1}`,
      volunteerId: `vol_${(i % 50) + 1}`,

      assignedAt: now,

      status: ["pending", "active", "completed", "cancelled"][
        i % 4
      ] as any,

      matchScore: (i * 4) % 100,

      matchBreakdown: {
        skills: (i * 2) % 30,
        proximity: (i * 3) % 30,
        fatigue: (i * 4) % 30,
        availability: (i * 5) % 30,
        language: (i * 6) % 30,
        total: (i * 7) % 100,
      },

      reasoning: "AI matched volunteer based on skills and proximity.",

      fatigueImpact: i % 10,

      estimatedResponseMinutes: 5 + (i % 55),

      note: "",

      createdAt: now,
      updatedAt: now,
    });
  }

  return list;
}

export default {
  generateVolunteers,
  generateIncidents,
  generateAssignments,
};