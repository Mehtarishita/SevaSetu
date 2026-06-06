export type VolunteerStatus = "available" | "busy" | "off-duty" | "injured"

export type SkillLevel = "beginner" | "intermediate" | "advanced" | "expert"

export interface VolunteerSkill {
  name: string
  level: SkillLevel
}

export interface VolunteerLocation {
  latitude: number
  longitude: number
  address?: string
  zoneId?: string
}

export interface Volunteer {
  id?: string
  firstName: string
  lastName: string
  phone: string
  email: string
  status: VolunteerStatus
  skills: VolunteerSkill[]
  languages: string[]
  location: VolunteerLocation
  availableUntil?: string | null
  lastAssignedAt?: string | null
  totalHoursToday: number
  totalHoursWeek: number
  fatigueScore: number
  notes?: string
  createdAt: string
  updatedAt: string
}
