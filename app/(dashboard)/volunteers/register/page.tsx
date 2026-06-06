"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import VolunteerCard from "@/components/volunteers/VolunteerCard";
export default function VolunteerRegisterPage(){
  const [name,setName] = useState("");
  const router = useRouter();

  function submit(e:any){
    e.preventDefault();
    // Mock: redirect to volunteers page
    router.push('/volunteers');
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Register Volunteer</h1>

      <form onSubmit={submit} className="bg-white p-6 rounded-2xl shadow max-w-xl">
        <input placeholder="Full name" className="w-full p-3 border rounded mb-3" value={name} onChange={e=>setName(e.target.value)} />
        <input placeholder="Phone" className="w-full p-3 border rounded mb-3" />
        <input placeholder="Skills (comma)" className="w-full p-3 border rounded mb-3" />
        <input placeholder="Languages (comma)" className="w-full p-3 border rounded mb-3" />

        <button className="bg-orange-500 text-white px-4 py-2 rounded">Create</button>
      </form>
    </div>
  )
}
