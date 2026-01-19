"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-zinc-900 border-b-4 border-yellow-500 px-6 py-4 flex justify-between items-center shadow-md">
      <Link href="/" className="flex items-center gap-2">
        <div className="bg-orange-600 p-1 rounded">
          <span className="text-white font-black text-xl">BC</span>
        </div>
        <h1 className="text-orange-600 text-2xl font-black uppercase tracking-tighter">
          BuildConnect <span className="text-white">Kigali</span>
        </h1>
      </Link>

      <div className="flex gap-4 items-center">
        <Link href="/find" className="text-white font-bold text-xs uppercase hover:text-orange-500">
          Find Techs
        </Link>
        <Link href="/join" className="bg-orange-600 text-white font-bold text-xs uppercase px-4 py-2 rounded hover:bg-orange-700 transition">
          Join as Pro
        </Link>
      </div>
    </nav>
  );
}