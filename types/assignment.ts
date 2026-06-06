export type AssignmentStatus = "pending" | "active" | "completed" | "cancelled"

export interface MatchScore {
  skills: number
  proximity: number
  fatigue: number
  availability: number
  language: number
  total: number
}

export interface Assignment {
  id?: string
  incidentId: string
  volunteerId: string
  assignedAt: string
  status: AssignmentStatus
  matchScore: number
  matchBreakdown: MatchScore
  reasoning?: string
  fatigueImpact: number
  estimatedResponseMinutes: number
  note?: string
  createdAt: string
  updatedAt: string
}

export interface AssignmentRecommendation {
  volunteerId: string
  score: number
  reason: string
  matchBreakdown: MatchScore
}
