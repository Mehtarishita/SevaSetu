export type IncidentType =
  | "medical"
  | "crowd-control"
  | "security"
  | "fire"
  | "lost-person"
  | "infrastructure"
  | "weather"
  | "other"

export type Priority = "critical" | "high" | "medium" | "low"

export type IncidentStatus = "open" | "assigned" | "in-progress" | "resolved" | "closed"

export interface IncidentLocation {
  latitude: number
  longitude: number
  address?: string
  zoneId?: string
}

export interface Incident {
  id?: string
  title: string
  description: string
  type: IncidentType
  priority: Priority
  status: IncidentStatus
  location: IncidentLocation
  reportedAt: string
  reportedBy?: string
  assignedVolunteerIds: string[]
  tags?: string[]
  severityScore: number
  createdAt: string
  updatedAt: string
}
