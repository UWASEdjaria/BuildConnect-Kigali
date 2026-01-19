"use client";
import { useState, useEffect } from "react";
import techniciansData from "@/data/technicians.json";
import TechCard from "";

export default function FindPage() {
  const [list, setList] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // We simulate a 1-second delay to act like a real database
    const timer = setTimeout(() => {
      setList(techniciansData);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh]">
        <div className="w-12 h-12 border-4 border-zinc-300 border-t-orange-600 rounded-full animate-spin"></div>
        <p className="mt-4 font-black uppercase text-zinc-400 animate-pulse">Scanning Rwanda for Pros...</p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-black uppercase mb-8 border-l-8 border-orange-600 pl-4">
        Results for <span className="text-orange-600">All Rwanda</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {list.map((tech) => (
          <TechCard key={tech.id} {...tech} />
        ))}
      </div>
    </div>
  );
}