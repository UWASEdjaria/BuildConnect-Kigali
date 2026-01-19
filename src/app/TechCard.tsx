interface TechProps {
  name: string;
  trade: string;
  district: string; 
  phone: string;
}

export default function TechCard({ name, trade, district, phone }: TechProps) {
  return (
    <div className="bg-white border-2 border-zinc-200 p-6 rounded-2xl shadow-sm hover:shadow-xl hover:border-orange-600 transition-all duration-300 group">
      {/* TRADE TAG */}
      <div className="flex justify-between items-start mb-4">
        <span className="text-[10px] font-black uppercase tracking-widest bg-orange-100 text-orange-700 px-3 py-1 rounded-full border border-orange-200">
          {trade}
        </span>
        <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" title="Available Now"></div>
      </div>

      {/* WORKER INFO */}
      <h3 className="text-xl font-black text-zinc-900 group-hover:text-orange-600 transition-colors">
        {name}
      </h3>
      
      <div className="flex items-center gap-2 mt-2 text-zinc-500 font-bold text-sm">
        <span className="text-lg">📍</span>
        <span className="uppercase tracking-tighter">{district} District</span>
      </div>

      <hr className="my-6 border-zinc-100" />

      {/* DYNAMIC CALL BUTTON */}
      <a 
        href={`tel:${phone}`} 
        className="flex items-center justify-center gap-3 w-full bg-zinc-900 text-white py-4 rounded-xl font-black uppercase text-xs tracking-widest hover:bg-orange-600 active:scale-95 transition-all shadow-lg"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 text-yellow-500">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
        </svg>
        Call Technician
      </a>
    </div>
  );
}