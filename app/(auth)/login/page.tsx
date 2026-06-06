"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, Lock, ArrowRight, Users, Zap, Shield } from "lucide-react";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
  e.preventDefault();

  setIsLoading(true);

  setTimeout(() => {
    window.location.href = "/loading-screen";
  }, 500);
};

const demoLogin = () => {
  setEmail("demo@sevaksetu.ai");
  setPassword("Volunteer123");

  setTimeout(() => {
    window.location.href = "/loading-screen";
  }, 300);
};

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fffaf5] via-[#fff7ed] to-orange-50 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-300/10 rounded-full blur-3xl -z-10" />

      <div className="min-h-screen flex lg:grid lg:grid-cols-2">
        {/* LEFT SECTION - HERO */}
        <div className="hidden lg:flex items-center justify-center p-12 relative">
          <div className="max-w-lg space-y-12">
            {/* Brand Intro */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-lg">
                  <span className="text-2xl font-bold text-white">S</span>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest font-semibold text-orange-600">
                    Mahakumbh 2028
                  </p>
                  <p className="text-2xl font-bold text-slate-900">SevakSetu AI</p>
                </div>
              </div>

              <div className="space-y-3">
                <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                  Smart Volunteer
                  <span className="bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
                    {" "}
                    Deployment
                  </span>
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed">
                  Intelligent workforce optimization for India's biggest cultural
                  celebration. Deploy, manage, and engage volunteers with AI-powered
                  precision.
                </p>
              </div>
            </div>

            {/* Feature Highlights */}
            <div className="space-y-4">
              {[
                {
                  icon: Users,
                  title: "Smart Deployment",
                  desc: "AI matches skills to needs",
                },
                {
                  icon: Zap,
                  title: "Fatigue Intelligence",
                  desc: "Real-time wellness monitoring",
                },
                {
                  icon: Shield,
                  title: "Mission Critical",
                  desc: "Built for scale and resilience",
                },
              ].map((feature, idx) => (
                <div key={idx} className="flex gap-4 items-start group">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center group-hover:bg-orange-200 transition">
                    <feature.icon className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">{feature.title}</p>
                    <p className="text-sm text-slate-600">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Mahakumbh Accent */}
            <div className="rounded-2xl bg-gradient-to-br from-orange-100 to-orange-50 border border-orange-200 p-6">
              <p className="text-sm text-orange-900 font-medium">
                🕉️ Powering volunteer coordination for Mahakumbh 2028 - a mission to
                serve 200+ million pilgrims across the holy convergence.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT SECTION - LOGIN */}
        <div className="flex items-center justify-center p-4 sm:p-8 lg:p-12">
          <div className="w-full max-w-sm space-y-8">
            {/* Mobile Header */}
            <div className="lg:hidden text-center space-y-3">
              <div className="flex items-center justify-center gap-2 mb-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-lg">
                  <span className="text-xl font-bold text-white">S</span>
                </div>
              </div>
              <h1 className="text-3xl font-bold text-slate-900">SevakSetu AI</h1>
              <p className="text-sm text-slate-600">
                Volunteer deployment platform for Mahakumbh 2028
              </p>
            </div>

            {/* Login Card */}
            <Card glass className="!bg-white/60 !border-white/40">
              <div className="space-y-8">
                {/* Header */}
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold text-slate-900">Welcome back</h2>
                  <p className="text-slate-600">
                    Sign in to manage volunteers and incidents from your command
                    center.
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleLogin} className="space-y-6">
                  <Input
                    label="Email Address"
                    type="email"
                    icon={Mail}
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    autoComplete="email"
                  />

                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <label className="text-sm font-medium text-slate-700">
                        Password
                      </label>
                      <Link
                        href="#"
                        className="text-xs text-orange-600 hover:text-orange-700 font-medium"
                      >
                        Forgot?
                      </Link>
                    </div>
                    <Input
                      type="password"
                      icon={Lock}
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      autoComplete="current-password"
                    />
                  </div>

                  {/* Login Button */}
                  <Button
                    type="submit"
                    className="w-full !py-3.5"
                    isLoading={isLoading}
                  >
                    {isLoading ? "Signing in..." : "Sign In"}
                    {!isLoading && <ArrowRight size={18} />}
                  </Button>
                </form>

                {/* Divider */}
                <div className="flex items-center gap-3">
                  <div className="flex-1 h-px bg-slate-200" />
                  <span className="text-xs text-slate-500 font-medium">OR</span>
                  <div className="flex-1 h-px bg-slate-200" />
                </div>

                {/* Demo Login */}
                <Button
                  type="button"
                  variant="outline"
                  className="w-full"
                  onClick={demoLogin}
                >
                  Try Demo Credentials
                </Button>

                {/* Demo Creds Card */}
                <div className="rounded-2xl bg-blue-50 border border-blue-100 p-4 space-y-2">
                  <p className="text-xs uppercase tracking-wide font-semibold text-blue-900">
                    📧 Demo Login Available
                  </p>
                  <div className="space-y-1 text-sm">
                    <p className="text-slate-700">
                      <span className="font-mono bg-blue-100 px-2 py-1 rounded text-xs">
                        demo@sevaksetu.ai
                      </span>
                    </p>
                    <p className="text-slate-700">
                      <span className="font-mono bg-blue-100 px-2 py-1 rounded text-xs">
                        Volunteer123
                      </span>
                    </p>
                  </div>
                </div>

                {/* Footer */}
                <div className="text-center space-y-3">
                  <p className="text-xs text-slate-500">
                    © 2028 SevakSetu AI. Built for Mahakumbh Mela.
                  </p>
                </div>
              </div>
            </Card>

            {/* Trusted By */}
            <div className="text-center space-y-3">
              <p className="text-xs uppercase tracking-widest font-semibold text-slate-600">
                Trusted for volunteer management
              </p>
              <div className="flex items-center justify-center gap-2 text-xs text-slate-500">
                <Shield size={14} />
                <span>Enterprise-grade security</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}