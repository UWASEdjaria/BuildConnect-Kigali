"use client";
import { useState } from "react";

export default function JoinPage() {
  const [formData, setFormData] = useState({
    name: "",
    trade: "Electrician",
    district: "Gasabo",
    phone: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Technician Data Prepared:", formData);
    setSubmitted(true);

  };

  if (submitted) {
    return (
      <div className="max-w-md mx-auto mt-20 p-10 bg-white border-t-8 border-green-500 rounded-xl shadow-xl text-center">
        <div className="text-5xl mb-4">✅</div>
        <h2 className="text-2xl font-black uppercase">Application Received!</h2>
        <p className="text-zinc-500 mt-2">Thank you, {formData.name}. Our team will verify your profile soon.</p>
        <button 
          onClick={() => setSubmitted(false)}
          className="mt-6 text-orange-600 font-bold underline"
        >
          Register another pro
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto py-12 px-6">
      <header className="mb-10">
        <h2 className="text-4xl font-black uppercase text-zinc-900">
          Join the <span className="text-orange-600">Workforce</span>
        </h2>
        <p className="text-zinc-500 mt-2">Create your professional profile and get hired across Rwanda.</p>
      </header>

      <form onSubmit={handleSubmit} className="bg-white border-2 border-zinc-200 p-8 rounded-2xl shadow-sm space-y-6">
        {/* FULL NAME */}
        <div>
          <label className="block text-xs font-black uppercase text-zinc-400 mb-2">Full Name</label>
          <input 
            required
            type="text" 
            placeholder="e.g. Jean Paul"
            className="w-full p-4 bg-zinc-50 border-2 border-zinc-100 rounded-xl focus:border-orange-600 outline-none transition-all"
            onChange={(e) => setFormData({...formData, name: e.target.value})}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* TRADE SELECTION */}
          <div>
            <label className="block text-xs font-black uppercase text-zinc-400 mb-2">Primary Trade</label>
            <select 
              className="w-full p-4 bg-zinc-50 border-2 border-zinc-100 rounded-xl focus:border-orange-600 outline-none font-bold"
              onChange={(e) => setFormData({...formData, trade: e.target.value})}
            >
              <option>Electrician</option>
              <option>Plumber</option>
              <option>Mason (Bricklayer)</option>
              <option>Painter</option>
              <option>Carpenter</option>
              <option>Tiler</option>
            </select>
          </div>

          {/* DISTRICT SELECTION */}
          <div>
            <label className="block text-xs font-black uppercase text-zinc-400 mb-2">Your District</label>
            <select 
              className="w-full p-4 bg-zinc-50 border-2 border-zinc-100 rounded-xl focus:border-orange-600 outline-none font-bold"
              onChange={(e) => setFormData({...formData, district: e.target.value})}
            >
              <optgroup label="Kigali City">
                <option>Gasabo</option>
                <option>Kicukiro</option>
                <option>Nyarugenge</option>
              </optgroup>
              <optgroup label="Other Provinces">
                <option>Musanze</option>
                <option>Rubavu</option>
                <option>Huye</option>
                <option>Nyagatare</option>
                <option>Rwamagana</option>
              </optgroup>
            </select>
          </div>
        </div>

        {/* PHONE NUMBER */}
        <div>
          <label className="block text-xs font-black uppercase text-zinc-400 mb-2">Phone Number (MTN/Airtel)</label>
          <input 
            required
            type="tel" 
            placeholder="+250 78x xxx xxx"
            className="w-full p-4 bg-zinc-50 border-2 border-zinc-100 rounded-xl focus:border-orange-600 outline-none transition-all"
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
          />
        </div>

        <button 
          type="submit"
          className="w-full bg-zinc-900 text-white py-5 rounded-xl font-black uppercase tracking-widest hover:bg-orange-600 transition-all shadow-lg active:scale-95"
        >
          Submit Application
        </button>
      </form>
    </div>
  );
}