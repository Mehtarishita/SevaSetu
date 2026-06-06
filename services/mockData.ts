import { Volunteer, VolunteerSkill, SkillLevel } from "../types/volunteer";
import { Incident, IncidentType, Priority, IncidentStatus } from "../types/incident";
import { Assignment } from "../types/assignment";

function rand(n: number) {
  return Math.floor(Math.random() * n);
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

const languages = ["Hindi","English","Marathi","Gujarati","Bengali","Tamil"];

export function generateVolunteers(count = 50): Volunteer[] {
  const now = new Date().toISOString();
  const list: Volunteer[] = [];

  for (let i = 0; i < count; i++) {
    const first = firstNames[rand(firstNames.length)];
    const last = lastNames[rand(lastNames.length)];
    const id = `vol_${i + 1}`;

    const v: Volunteer = {
      id,
      firstName: first,
      lastName: last,
      phone: `+91${Math.floor(9000000000 + Math.random()*900000000)}`,
      email: `${first.toLowerCase()}.${last.toLowerCase()}@example.com`,
      status: ["available","busy","off-duty"][rand(3)] as any,
      skills: [sampleSkills[rand(sampleSkills.length)]],
      languages: [languages[rand(languages.length)]],
      location: {
        latitude: 21.1458 + Math.random() * 0.1,
        longitude: 79.0882 + Math.random() * 0.1,
        address: `Zone ${1 + rand(20)}`,
        zoneId: `zone_${1 + rand(20)}`,
      },
      availableUntil: null,
      lastAssignedAt: null,
      totalHoursToday: Math.floor(Math.random()*8),
      totalHoursWeek: Math.floor(Math.random()*40),
      fatigueScore: Math.floor(Math.random()*100),
      notes: "",
      createdAt: now,
      updatedAt: now,
    };

    list.push(v);
  }

  return list;
}

export function generateIncidents(count = 20): Incident[] {
  const now = new Date().toISOString();
  const types = ["Medical","Lost","Crowd","Fire","Security"];
  const list: Incident[] = [];

  for (let i = 0; i < count; i++) {
    const id = `inc_${i + 1}`;
    const type = ["medical","crowd-control","security","fire","lost-person"][rand(5)] as IncidentType;
    const priority = ["low","medium","high"][rand(3)] as Priority;
    const status = ["open","assigned","closed"][rand(3)] as IncidentStatus;

    list.push({
      id,
      title: `${types[rand(types.length)]} incident near Ghat ${1 + rand(50)}`,
      description: "Reported by public. Needs quick response.",
      type,
      priority,
      status,
      reportedAt: now,
      reportedBy: "public",
      assignedVolunteerIds: [],
      tags: [],
      severityScore: rand(100),
      location: { latitude: 21.14 + Math.random()*0.1, longitude: 79.08 + Math.random()*0.1, address: `Ghat ${1+rand(200)}` },
      createdAt: now,
      updatedAt: now,
    });
  }

  return list;
}

export function generateAssignments(count = 25) : Assignment[] {
  const now = new Date().toISOString();
  const list: Assignment[] = [];
  for (let i=0;i<count;i++){
    list.push({
      id: `asn_${i+1}`,
      incidentId: `inc_${1 + Math.floor(Math.random()*20)}`,
      volunteerId: `vol_${1 + Math.floor(Math.random()*50)}`,
      assignedAt: now,
      status: ["pending","active","completed","cancelled"][rand(4)] as any,
      matchScore: Math.floor(Math.random()*100),
      matchBreakdown: { skills: rand(30), proximity: rand(30), fatigue: rand(30), availability: rand(30), language: rand(30), total: rand(100) },
      reasoning: "Mock assignment",
      fatigueImpact: rand(10),
      estimatedResponseMinutes: 5 + rand(55),
      note: "",
      createdAt: now,
      updatedAt: now,
    })
  }

  return list;
}

export default {
  generateVolunteers,
  generateIncidents,
  generateAssignments,
};
