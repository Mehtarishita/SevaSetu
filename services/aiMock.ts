import { Volunteer } from "../types/volunteer";

export function scoreVolunteerForIncident(vol: Volunteer, incidentText: string) {
  // Simple mock scoring: language match + inverse fatigue + random
  const text = incidentText.toLowerCase();
  let score = 30;

  if (vol.languages.some((l) => text.includes(l.toLowerCase()))) score += 30;
  score += Math.max(0, 30 - Math.floor(vol.fatigueScore / 3));
  score += Math.floor(Math.random() * 10);

  return Math.min(100, Math.max(0, score));
}
