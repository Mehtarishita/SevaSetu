import mock from "./mockData";
import { Volunteer } from "../types/volunteer";

const volunteers = mock.generateVolunteers(50);

export function getVolunteers(): Volunteer[] {
  return volunteers;
}

export function getVolunteerById(id: string): Volunteer | undefined {
  return volunteers.find((v) => v.id === id);
}

export function searchVolunteers(q: string): Volunteer[] {
  const term = q.toLowerCase();
  return volunteers.filter(
    (v) =>
      v.firstName.toLowerCase().includes(term) ||
      v.lastName.toLowerCase().includes(term) ||
      v.skills.some((s) => s.name.toLowerCase().includes(term))
  );
}
