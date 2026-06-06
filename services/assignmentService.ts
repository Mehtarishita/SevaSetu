import mock from "./mockData";
import { Assignment } from "../types/assignment";

const assignments = mock.generateAssignments(25);

export function getAssignments(): Assignment[] {
  return assignments;
}

export function getAssignmentsForVolunteer(volunteerId: string) {
  return assignments.filter((a) => a.volunteerId === volunteerId);
}
