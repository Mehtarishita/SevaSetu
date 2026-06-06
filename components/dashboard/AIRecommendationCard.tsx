"use client";

import { TrendingUp, CheckCircle, AlertCircle } from "lucide-react";
import Button from "@/components/ui/Button";

interface AIRecommendation {
  id: string;
  title: string;
  description: string;
  volunteerId: string;
  volunteerName: string;
  action: string;
  confidence: number;
  impact: "high" | "medium" | "low";
}

interface AIRecommendationCardProps {
  recommendation: AIRecommendation;
  onApply?: (id: string) => void;
  onDismiss?: (id: string) => void;
  isLoading?: boolean;
}

export default function AIRecommendationCard({
  recommendation,
  onApply,
  onDismiss,
  isLoading = false,
}: AIRecommendationCardProps) {
  const getConfidenceColor = () => {
    if (recommendation.confidence >= 85) return "text-emerald-600";
    if (recommendation.confidence >= 70) return "text-orange-600";
    return "text-amber-600";
  };

  const getImpactBadge = () => {
    const colors = {
      high: "bg-red-100 text-red-700",
      medium: "bg-orange-100 text-orange-700",
      low: "bg-blue-100 text-blue-700",
    };
    return colors[recommendation.impact];
  };

  return (
    <div className="group rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-5 shadow-soft transition-all duration-300 hover:shadow-md">
      {isLoading ? (
        <div className="space-y-3">
          <div className="h-5 w-3/4 animate-pulse rounded bg-slate-200" />
          <div className="h-4 w-full animate-pulse rounded bg-slate-100" />
          <div className="h-3 w-2/3 animate-pulse rounded bg-slate-100" />
        </div>
      ) : (
        <>
          <div className="flex items-start justify-between gap-3">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-orange-600 flex-shrink-0" />
                <h4 className="font-semibold text-slate-900 truncate">
                  {recommendation.title}
                </h4>
              </div>
              <p className="mt-1 text-sm text-slate-600 line-clamp-2">
                {recommendation.description}
              </p>
            </div>
            <div
              className={`flex-shrink-0 text-right px-3 py-1 rounded-lg font-semibold text-sm ${getImpactBadge()}`}
            >
              {recommendation.impact.charAt(0).toUpperCase() +
                recommendation.impact.slice(1)}
            </div>
          </div>

          {/* Confidence Score */}
          <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4">
            <div>
              <p className="text-xs text-slate-500">Confidence Score</p>
              <div className="mt-1 flex items-center gap-2">
                <span
                  className={`text-lg font-bold ${getConfidenceColor()}`}
                >
                  {recommendation.confidence}%
                </span>
                <div className="h-2 w-24 overflow-hidden rounded-full bg-slate-100">
                  <div
                    className={`h-full ${
                      recommendation.confidence >= 85
                        ? "bg-emerald-500"
                        : recommendation.confidence >= 70
                        ? "bg-orange-500"
                        : "bg-amber-500"
                    } transition-all duration-500`}
                    style={{ width: `${recommendation.confidence}%` }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Action */}
          <div className="mt-4 rounded-lg bg-blue-50 p-3">
            <p className="text-xs font-medium text-blue-700">
              💡 {recommendation.action}
            </p>
          </div>

          {/* Buttons */}
          <div className="mt-4 flex gap-2">
            <Button
              size="sm"
              variant="primary"
              className="flex-1"
              onClick={() => onApply?.(recommendation.id)}
            >
              <CheckCircle className="h-4 w-4" />
              Apply
            </Button>
            <Button
              size="sm"
              variant="ghost"
              className="flex-1"
              onClick={() => onDismiss?.(recommendation.id)}
            >
              Dismiss
            </Button>
          </div>
        </>
      )}
    </div>
  );
}
