"use client";

import { useState } from "react";

export default function VolunteerForm() {
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    alert(`Volunteer Registered: ${name}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 rounded-2xl bg-white p-6 border"
    >
      <h2 className="text-xl font-semibold">
        Register Volunteer
      </h2>

      <input
        type="text"
        placeholder="Volunteer Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full border rounded-xl px-4 py-3"
      />

      <button
        type="submit"
        className="bg-orange-500 text-white px-5 py-3 rounded-xl"
      >
        Register
      </button>
    </form>
  );
}