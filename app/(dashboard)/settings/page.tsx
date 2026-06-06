"use client";

import { useState } from "react";
import { Settings, Bell, Shield, User, LogOut, Save } from "lucide-react";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { useTheme } from "@/context/ThemeContext";

export default function SettingsPage() {
  const { theme, setTheme } = useTheme();
  const [defaultView, setDefaultView] = useState("dashboard");
  const [refreshRate, setRefreshRate] = useState("5000");
  const [alertLevel, setAlertLevel] = useState("all");

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="rounded-2xl border border-orange-200 bg-gradient-to-br from-orange-50 via-white to-cream-50 p-6 md:p-8 shadow-soft">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.32em] font-semibold text-orange-600">
              ⚙️ Configuration
            </p>
            <h1 className="mt-3 text-3xl md:text-4xl font-bold text-slate-900">
              Settings & Preferences
            </h1>
            <p className="mt-2 md:mt-3 text-slate-600 max-w-2xl text-sm md:text-base">
              Manage your account settings, notifications, and dashboard preferences.
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {/* Account Settings */}
        <Card>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-blue-100 p-3">
                <User className="h-5 w-5 text-blue-600" />
              </div>
              <h3 className="font-semibold text-slate-900">Account</h3>
            </div>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-slate-600">Profile Name</p>
                <p className="mt-1 font-medium text-slate-900">Riya Coordinator</p>
              </div>
              <div>
                <p className="text-sm text-slate-600">Email</p>
                <p className="mt-1 font-medium text-slate-900">riya@sevaksetu.ai</p>
              </div>
              <Button size="sm" variant="outline" className="w-full">
                Edit Profile
              </Button>
            </div>
          </div>
        </Card>

        {/* Notification Settings */}
        <Card>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-orange-100 p-3">
                <Bell className="h-5 w-5 text-orange-600" />
              </div>
              <h3 className="font-semibold text-slate-900">Notifications</h3>
            </div>
            <div className="space-y-3">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  defaultChecked
                  className="h-4 w-4 rounded border-slate-300 text-orange-600"
                />
                <span className="text-sm text-slate-700">Critical Alerts</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  defaultChecked
                  className="h-4 w-4 rounded border-slate-300 text-orange-600"
                />
                <span className="text-sm text-slate-700">Incident Updates</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  defaultChecked
                  className="h-4 w-4 rounded border-slate-300 text-orange-600"
                />
                <span className="text-sm text-slate-700">Fatigue Alerts</span>
              </label>
            </div>
          </div>
        </Card>

        {/* Security Settings */}
        <Card>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-green-100 p-3">
                <Shield className="h-5 w-5 text-green-600" />
              </div>
              <h3 className="font-semibold text-slate-900">Security</h3>
            </div>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-slate-600">Last Login</p>
                <p className="mt-1 font-medium text-slate-900">Today at 9:45 AM</p>
              </div>
              <Button size="sm" variant="outline" className="w-full">
                Change Password
              </Button>
            </div>
          </div>
        </Card>
      </div>

      {/* Dashboard Preferences */}
      <Card>
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-purple-100 p-3">
              <Settings className="h-5 w-5 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900">
              Dashboard Preferences
            </h3>
          </div>

          <div className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Theme
                </label>
                <select className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-slate-900">
                  <option>Light (Default)</option>
                  <option>Dark</option>
                  <option>System</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Default View
                </label>
                <select className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-slate-900">
                  <option>Dashboard</option>
                  <option>Volunteers</option>
                  <option>Incidents</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Data Refresh Rate
                </label>
                <select className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-slate-900">
                  <option>Real-time</option>
                  <option>Every 5 seconds</option>
                  <option>Every 30 seconds</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Incident Alert Level
                </label>
                <select className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-slate-900">
                  <option>All</option>
                  <option>High & Critical</option>
                  <option>Critical Only</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Actions */}
      <div className="flex gap-3">
        <Button size="md" variant="primary">
          <Save className="h-4 w-4" />
          Save Changes
        </Button>
        <Button size="md" variant="ghost">
          Reset to Defaults
        </Button>
      </div>

      {/* Danger Zone */}
      <Card>
        <div className="space-y-4 border-t border-slate-200 pt-4">
          <h4 className="font-semibold text-slate-900">Danger Zone</h4>
          <p className="text-sm text-slate-600">
            Log out from this device or delete your account permanently.
          </p>
          <div className="flex gap-3">
            <Button size="md" variant="outline">
              <LogOut className="h-4 w-4" />
              Logout
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}