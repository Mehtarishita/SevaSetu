export interface SkillCoverage {
  skill: string
  count: number
  coveragePercent: number
}

export interface ZoneUtilization {
  zoneId: string
  activeCount: number
  capacity: number
  utilizationPercent: number
}

export interface FatigueTrendPoint {
  date: string
  averageFatigue: number
}

export interface FatigueScore {
  volunteerId: string
  score: number
  riskLevel: "low" | "moderate" | "high" | "critical"
  lastUpdated: string
  factors: {
    hoursSinceLastRest: number
    consecutiveShifts: number
    recentAssignments: number
    subjectiveRating?: number
  }
}

export interface AnalyticsSnapshot {
  timestamp: string
  totalVolunteers: number
  availableVolunteers: number
  busyVolunteers: number
  offDutyVolunteers: number
  totalIncidents: number
  openIncidents: number
  resolvedIncidents: number
  averageResponseTimeMinutes: number
  activeAssignments: number
  skillCoverage: SkillCoverage[]
  zoneUtilization: ZoneUtilization[]
  incidentPriorityCounts: Record<string, number>
  fatigueTrend: FatigueTrendPoint[]
}
