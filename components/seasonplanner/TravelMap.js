export default function TravelMap({ places, onSelect }) {
  return (
    <div className="relative mt-6 h-72 overflow-hidden rounded-2xl border border-[#c9aa71] bg-[#e8d8b3] shadow-inner">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#fff6dc,transparent_45%),radial-gradient(circle_at_bottom_right,#b8c2a3,transparent_50%)]" />

      <svg viewBox="0 0 300 300" className="absolute inset-0 h-full w-full">
        <path
          d="M38 232 C70 180, 105 190, 125 150 C145 110, 185 125, 210 92 C228 68, 250 70, 270 42"
          fill="none"
          stroke="#9a4d2f"
          strokeWidth="4"
          strokeDasharray="9 10"
          strokeLinecap="round"
          style={{ animation: "routeMove 3s linear infinite" }}
        />

        <path
          d="M38 232 C70 180, 105 190, 125 150 C145 110, 185 125, 210 92 C228 68, 250 70, 270 42"
          fill="none"
          stroke="#f3c46d"
          strokeWidth="1.5"
          strokeDasharray="4 16"
          strokeLinecap="round"
        />
      </svg>

      <div className="absolute left-5 top-5 rounded-full border border-[#9a4d2f]/30 bg-[#fff3cf]/70 px-4 py-2 font-serif text-sm font-bold text-[#654324]">
        ✈ Live Route
      </div>

      {places.slice(0, 8).map((place, index) => (
        <button
          key={place.name}
          onClick={() => onSelect(place)}
          className="absolute group"
          style={{
            left: place.pin.x,
            top: place.pin.y,
            animation: `pinDrop .45s ease ${index * 0.06}s both`,
          }}
          title={place.name}
        >
          <span className="relative flex h-8 w-8 items-center justify-center">
            <span className="absolute h-8 w-8 animate-ping rounded-full bg-[#b9652d]/30" />
            <span className="relative grid h-7 w-7 place-items-center rounded-full border-2 border-white bg-[#b9652d] text-xs text-white shadow-lg">
              {place.icon}
            </span>
          </span>

          <span className="pointer-events-none absolute left-1/2 top-9 hidden -translate-x-1/2 whitespace-nowrap rounded-full bg-[#2f2518] px-3 py-1 text-xs font-bold text-[#f8e6bd] group-hover:block">
            {place.name}
          </span>
        </button>
      ))}

      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#d5bd8b] to-transparent p-5">
        <p className="font-serif text-2xl font-black text-[#2f2518]">
          India Route Board
        </p>
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#8a522d]">
          tap a pin to open brief
        </p>
      </div>
    </div>
  );
}