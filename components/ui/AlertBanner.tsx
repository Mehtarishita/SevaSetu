"use client";

import { AlertCircle, AlertTriangle, AlertOctagon, Info, CheckCircle, X } from "lucide-react";
import { useState } from "react";

type AlertType = "info" | "success" | "warning" | "error" | "critical";

interface AlertBannerProps {
  type?: AlertType;
  title: string;
  message?: string;
  dismissible?: boolean;
  action?: {
    label: string;
    onClick: () => void;
  };
  icon?: React.ReactNode;
  onDismiss?: () => void;
}

const alertConfig = {
  info: {
    icon: Info,
    bg: "bg-blue-50",
    border: "border-blue-200",
    title: "text-blue-900",
    message: "text-blue-800",
    icon_color: "text-blue-600",
    action: "bg-blue-100 hover:bg-blue-200 text-blue-900",
  },
  success: {
    icon: CheckCircle,
    bg: "bg-emerald-50",
    border: "border-emerald-200",
    title: "text-emerald-900",
    message: "text-emerald-800",
    icon_color: "text-emerald-600",
    action: "bg-emerald-100 hover:bg-emerald-200 text-emerald-900",
  },
  warning: {
    icon: AlertTriangle,
    bg: "bg-amber-50",
    border: "border-amber-200",
    title: "text-amber-900",
    message: "text-amber-800",
    icon_color: "text-amber-600",
    action: "bg-amber-100 hover:bg-amber-200 text-amber-900",
  },
  error: {
    icon: AlertCircle,
    bg: "bg-red-50",
    border: "border-red-200",
    title: "text-red-900",
    message: "text-red-800",
    icon_color: "text-red-600",
    action: "bg-red-100 hover:bg-red-200 text-red-900",
  },
  critical: {
    icon: AlertOctagon,
    bg: "bg-red-100",
    border: "border-red-300",
    title: "text-red-900",
    message: "text-red-800",
    icon_color: "text-red-700",
    action: "bg-red-200 hover:bg-red-300 text-red-900",
  },
};

export default function AlertBanner({
  type = "info",
  title,
  message,
  dismissible = true,
  action,
  icon,
  onDismiss,
}: AlertBannerProps) {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  const config = alertConfig[type];
  const Icon = config.icon;

  const handleDismiss = () => {
    setIsVisible(false);
    onDismiss?.();
  };

  return (
    <div
      className={`rounded-xl border ${config.bg} ${config.border} p-4 md:p-5 shadow-soft`}
      role="alert"
    >
      <div className="flex gap-4">
        {/* Icon */}
        <div className="flex-shrink-0 pt-0.5">
          {icon ? (
            <div className={config.icon_color}>{icon}</div>
          ) : (
            <Icon className={`${config.icon_color} h-5 w-5 md:h-6 md:w-6`} />
          )}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <h3 className={`text-sm md:text-base font-semibold ${config.title}`}>
            {title}
          </h3>
          {message && (
            <p className={`mt-1 text-sm ${config.message}`}>{message}</p>
          )}

          {/* Action Button */}
          {action && (
            <button
              onClick={action.onClick}
              className={`mt-3 inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-colors ${config.action}`}
            >
              {action.label}
            </button>
          )}
        </div>

        {/* Close Button */}
        {dismissible && (
          <button
            onClick={handleDismiss}
            className={`flex-shrink-0 ${config.icon_color} hover:opacity-70 transition-opacity`}
            aria-label="Dismiss alert"
          >
            <X className="h-5 w-5" />
          </button>
        )}
      </div>
    </div>
  );
}
