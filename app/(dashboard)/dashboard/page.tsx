"use client";

import { useState, useEffect } from "react";
import {
  Users,
  UserCheck,
  AlertCircle,
  Zap,
  TrendingUp,
  Loader2,
} from "lucide-react";
import KPICard from "@/components/dashboard/KPICard";
import ZoneHeatmapCard from "@/components/dashboard/ZoneHeatmapCard";
import AIRecommendationCard from "@/components/dashboard/AIRecommendationCard";
import IncidentOverview from "@/components/dashboard/IncidentOverview";
import ActivityFeed, { ActivityItem } from "@/components/dashboard/ActivityFeed";
import Button from "@/components/ui/Button";
import {
  KPISkeletons,
  HeatmapSkeleton,
  RecommendationSkeleton,
  IncidentSkeleton,
  ActivitySkeleton,
} from "@/components/dashboard/LoadingSkeleton";

// Dummy Data
const ZONE_DATA = [
  {
    id: "zone_1",
    name: "Zone 1 - North Ghat",
    totalVolunteers: 142,
    activeVolunteers: 98,
    incidents: 2,
    capacity: 120,
  },
  {
    id: "zone_2",
    name: "Zone 2 - Central",
    totalVolunteers: 167,
    activeVolunteers: 112,
    incidents: 5,
    capacity: 150,
  },
  {
    id: "zone_3",
    name: "Zone 3 - South Ghat",
    totalVolunteers: 134,
    activeVolunteers: 87,
    incidents: 1,
    capacity: 130,
  },
  {
    id: "zone_4",
    name: "Zone 4 - East Bank",
    totalVolunteers: 156,
    activeVolunteers: 124,
    incidents: 3,
    capacity: 140,
  },
  {
    id: "zone_5",
    name: "Zone 5 - West Bank",
    totalVolunteers: 148,
    activeVolunteers: 95,
    incidents: 0,
    capacity: 135,
  },
  {
    id: "zone_6",
    name: "Zone 6 - Camp Area",
    totalVolunteers: 180,
    activeVolunteers: 156,
    incidents: 7,
    capacity: 180,
  },
];

const AI_RECOMMENDATIONS = [
  {
    id: "rec_1",
    title: "Reallocate from Zone 1",
    description:
      "Move 8 volunteers with crowd management skills from Zone 1 to Zone 2 due to emerging crowd density.",
    volunteerId: "vol_1",
    volunteerName: "Arjun Singh",
    action: "Suggest reassignment to better balance zone capacity and reduce fatigue",
    confidence: 87,
    impact: "high" as const,
  },
  {
    id: "rec_2",
    title: "Fatigue Alert - Zone 6",
    description:
      "3 volunteers in Zone 6 have exceeded 8-hour limit. Recommend break rotation.",
    volunteerId: "vol_2",
    volunteerName: "Komal Verma",
    action: "Rotate 3 fatigued volunteers out for 2-hour wellness break",
    confidence: 94,
    impact: "high" as const,
  },
  {
    id: "rec_3",
    title: "Medical Skill Match",
    description:
      "Critical shortage of medical personnel in Zone 2 incident response. 2 medical volunteers available in Zone 3.",
    volunteerId: "vol_3",
    volunteerName: "Priya Kumar",
    action: "Fast-track medical volunteer deployment to Zone 2 incident",
    confidence: 91,
    impact: "high" as const,
  },
];

const SAMPLE_ACTIVITIES: ActivityItem[] = [
  {
    id: "act_1",
    type: "assignment",
    volunteer: { name: "Raj Patel", avatar: "RP" },
    description: "Assigned to Medical Team - Zone 2 Ghat",
   timestamp: new Date("2026-01-01T10:00:00"),
    metadata: { zone: "Zone 2", status: "Medical" },
  },
  {
    id: "act_2",
    type: "checkin",
    volunteer: { name: "Anjali Sharma", avatar: "AS" },
    description: "Checked in for morning shift",
    timestamp: new Date("2026-01-01T09:48:00"),
    metadata: { zone: "Zone 1", duration: "8h" },
  },
  {
    id: "act_3",
    type: "alert",
    volunteer: { name: "Vikram Singh", avatar: "VS" },
    description: "Fatigue score exceeded threshold (8.2/10)",
    timestamp: new Date("2026-01-01T09:35:00"),
    metadata: { duration: "7h 45m" },
  },
  {
    id: "act_4",
    type: "checkout",
    volunteer: { name: "Meera Reddy", avatar: "MR" },
    description: "Completed shift and checked out",
  timestamp: new Date("2026-01-01T09:15:00"),
    metadata: { zone: "Zone 3", duration: "8h 15m" },
  },
  {
    id: "act_5",
    type: "completion",
    volunteer: { name: "Ashok Kumar", avatar: "AK" },
    description: "Completed crowd control task",
    timestamp: new Date("2026-01-01T09:00:00"),
    metadata: { zone: "Zone 4" },
  },
];

export default function DashboardPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedZone, setSelectedZone] = useState<string | null>(null);

  useEffect(() => {
    // Simulate data loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handleRecommendationApply = (id: string) => {
    console.log("Applied recommendation:", id);
    // Implement API call here
  };

  const handleRecommendationDismiss = (id: string) => {
    console.log("Dismissed recommendation:", id);
    // Implement API call here
  };

  const totalIncidents = 18;
  const criticalIncidents = 3;
  const highIncidents = 5;
  const mediumIncidents = 7;
  const lowIncidents = 3;

  return (
    <div className="space-y-8">
      {/* HERO SECTION */}
      <div className="rounded-2xl border border-orange-200 bg-gradient-to-br from-orange-50 via-white to-cream-50 p-6 md:p-8 shadow-soft">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.32em] font-semibold text-orange-600">
              🚀 Real-time Dashboard
            </p>
            <h1 className="mt-3 text-3xl md:text-4xl font-bold text-slate-900">
              Volunteer Operations Intelligence
            </h1>
            <p className="mt-2 md:mt-3 text-slate-600 max-w-2xl text-sm md:text-base">
              AI-powered deployment orchestration, fatigue intelligence, and incident
              response coordination for Mahakumbh 2028. All systems live.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 items-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700 animate-pulse">
              <span className="h-2 w-2 rounded-full bg-emerald-600" />
              Live Monitoring
            </div>
            <Button size="sm" variant="outline">
              <TrendingUp className="h-4 w-4" />
              View Analytics
            </Button>
          </div>
        </div>
      </div>

      {/* KPI CARDS SECTION */}
      <div>
        <h2 className="mb-4 text-xl font-semibold text-slate-900">
          Key Performance Indicators
        </h2>
        {isLoading ? (
          <KPISkeletons />
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <KPICard
              label="Total Volunteers"
              value="2,847"
              icon={Users}
              color="orange"
              trend={{ value: 12, isPositive: true }}
            />
            <KPICard
              label="Active Volunteers"
              value="1,924"
              icon={UserCheck}
              color="emerald"
              trend={{ value: 8, isPositive: true }}
            />
            <KPICard
              label="Open Incidents"
              value={totalIncidents}
              icon={AlertCircle}
              color="red"
              trend={{ value: 3, isPositive: false }}
            />
            <KPICard
              label="AI Assignments Today"
              value="412"
              icon={Zap}
              color="sky"
              trend={{ value: 15, isPositive: true }}
            />
          </div>
        )}
      </div>

      {/* MAIN GRID SECTION */}
      <div className="grid gap-8 xl:grid-cols-[1fr_1fr]">
        {/* LEFT COLUMN - HEATMAP + RECOMMENDATIONS */}
        <div className="space-y-8">
          {/* VOLUNTEER DEPLOYMENT HEATMAP */}
          <div>
            <div className="mb-4 flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold text-slate-900">
                  Zone Deployment Heatmap
                </h2>
                <p className="mt-1 text-sm text-slate-600">
                  Real-time volunteer allocation and capacity monitoring
                </p>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-700">
                <span className="h-1.5 w-1.5 rounded-full bg-orange-600 animate-pulse" />
                Live
              </div>
            </div>

            {isLoading ? (
              <HeatmapSkeleton />
            ) : (
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {ZONE_DATA.map((zone) => (
                  <div
                    key={zone.id}
                    onClick={() =>
                      setSelectedZone(selectedZone === zone.id ? null : zone.id)
                    }
                    className={`transition-all duration-300 ${
                      selectedZone === zone.id ? "ring-2 ring-orange-500" : ""
                    }`}
                  >
                    <ZoneHeatmapCard zone={zone} />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* AI RECOMMENDATIONS PANEL */}
          <div>
            <div className="mb-4 flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold text-slate-900">
                  AI Recommendations
                </h2>
                <p className="mt-1 text-sm text-slate-600">
                  Smart deployment suggestions based on real-time data
                </p>
              </div>
              <span className="inline-flex items-center gap-1 rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
                <Zap className="h-3 w-3" />
                {AI_RECOMMENDATIONS.length} Active
              </span>
            </div>

            {isLoading ? (
              <RecommendationSkeleton />
            ) : (
              <div className="space-y-3">
                {AI_RECOMMENDATIONS.map((rec) => (
                  <AIRecommendationCard
                    key={rec.id}
                    recommendation={rec}
                    onApply={handleRecommendationApply}
                    onDismiss={handleRecommendationDismiss}
                  />
                ))}
              </div>
            )}
          </div>
        </div>

        {/* RIGHT COLUMN - INCIDENTS + ACTIVITY */}
        <div className="space-y-8">
          {/* INCIDENT OVERVIEW */}
          {isLoading ? (
            <IncidentSkeleton />
          ) : (
            <IncidentOverview
              stats={{
                critical: criticalIncidents,
                high: highIncidents,
                medium: mediumIncidents,
                low: lowIncidents,
              }}
            />
          )}

          {/* ACTIVITY FEED */}
          {isLoading ? (
            <ActivitySkeleton />
          ) : (
            <ActivityFeed activities={SAMPLE_ACTIVITIES} />
          )}
        </div>
      </div>

      {/* FOOTER CTA SECTION */}
      <div className="rounded-2xl border border-slate-200 bg-gradient-to-r from-slate-50 to-slate-100 p-6 md:p-8 shadow-soft">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-lg font-semibold text-slate-900">
              Need Advanced Analytics?
            </h3>
            <p className="mt-1 text-sm text-slate-600">
              Access detailed volunteer performance metrics, predictive fatigue
              analysis, and incident trend forecasting.
            </p>
          </div>
          <Button size="md" variant="primary" className="md:whitespace-nowrap">
            <TrendingUp className="h-4 w-4" />
            View Full Analytics
          </Button>
        </div>
      </div>
    </div>
  );
}
