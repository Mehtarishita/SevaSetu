"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function LoadingScreen() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/dashboard");
    }, 3000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div
      className="h-screen w-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: "url('/images/mahakumbh-banner.jpg')",
      }}
    >
      <div className="bg-black/60 p-10 rounded-3xl text-center text-white backdrop-blur-md">
        <h1 className="text-6xl font-bold mb-4">
          MAHAKUMBH 2028
        </h1>

        <h2 className="text-3xl font-semibold mb-6">
          SevakSetu AI
        </h2>

        <p className="text-lg mb-6">
          Initializing Volunteer Command Center...
        </p>

        <div className="w-80 h-3 bg-white/20 rounded-full overflow-hidden">
          <div className="h-full bg-orange-500 animate-pulse w-full" />
        </div>
      </div>
    </div>
  );
}