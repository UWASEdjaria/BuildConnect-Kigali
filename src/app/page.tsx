"use client";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="flex flex-col items-center py-20 px-6">
      <div className="bg-zinc-900 text-white p-12 rounded-3xl border-b-8 border-yellow-500 w-full max-w-5xl text-center shadow-2xl">
        <h1 className="text-5xl font-black uppercase mb-6">
          Find the Right <span className="text-orange-600">Technician</span>
        </h1>
        
        {/* DYNAMIC SEARCH BAR */}
        <div className="relative max-w-2xl mx-auto">
          <input 
            type="text"
            placeholder="Search for 'Plumber' or 'Musanze'..."
            className="w-full p-5 rounded-xl text-zinc-900 font-bold outline-none border-4 border-transparent focus:border-orange-600 transition-all"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Link 
            href={`/find?query=${searchQuery}`}
            className="absolute right-3 top-3 bg-orange-600 px-6 py-2 rounded-lg font-black uppercase hover:bg-orange-700 transition"
          >
            Go
          </Link>
        </div>
        
        <p className="mt-6 text-zinc-400 font-medium italic">
          Covering all 30 Districts of Rwanda
        </p>
      </div>
    </div>
  );
}