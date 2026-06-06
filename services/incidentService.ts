import mock from "./mockData";
import { Incident } from "../types/incident";

const incidents = mock.generateIncidents(20);

export function getIncidents(): Incident[] {
  return incidents;
}

export function getIncidentById(id: string): Incident | undefined {
  return incidents.find((i) => i.id === id);
}
