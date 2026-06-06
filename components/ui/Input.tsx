import React from "react";
import { LucideIcon } from "lucide-react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  icon?: LucideIcon;
  error?: string;
  helperText?: string;
}

export default function Input({
  label,
  icon: Icon,
  error,
  helperText,
  className = "",
  ...props
}: InputProps) {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-slate-700 mb-2">
          {label}
        </label>
      )}
      <div className="relative">
        {Icon && (
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
            <Icon size={20} />
          </div>
        )}
        <input
          className={`
            w-full px-4 ${Icon ? "pl-12" : "px-4"} py-3.5
            bg-white/50 backdrop-blur-md
            border border-white/30 
            hover:border-orange-300/50 hover:bg-white/70
            focus:border-orange-500 focus:bg-white
            rounded-2xl
            text-slate-900 placeholder:text-slate-400
            transition-all duration-200
            focus:outline-none focus:ring-2 focus:ring-orange-500/20
            disabled:opacity-50 disabled:cursor-not-allowed
            ${error ? "border-red-500/50 focus:ring-red-500/20" : ""}
            ${className}
          `}
          {...props}
        />
      </div>
      {error && <p className="text-sm text-red-500 mt-1.5 font-medium">{error}</p>}
      {helperText && !error && (
        <p className="text-sm text-slate-500 mt-1.5">{helperText}</p>
      )}
    </div>
  );
}

