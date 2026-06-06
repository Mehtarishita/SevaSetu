"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function NewIncidentPage(){
  const [title,setTitle] = useState("");
  const [desc,setDesc] = useState("");
  const router = useRouter();

  function submit(e:any){
    e.preventDefault();
    router.push('/incidents');
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Report Incident</h1>

      <form onSubmit={submit} className="bg-white p-6 rounded-2xl shadow max-w-xl">
        <input placeholder="Title" className="w-full p-3 border rounded mb-3" value={title} onChange={e=>setTitle(e.target.value)} />
        <textarea placeholder="Description" className="w-full p-3 border rounded mb-3" value={desc} onChange={e=>setDesc(e.target.value)} />

        <button className="bg-orange-500 text-white px-4 py-2 rounded">Create</button>
      </form>
    </div>
  )
}
