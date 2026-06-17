"use client";

import { useState } from "react";

const destinations = [
  {
    name: "Leh Ladakh",
    code: "LEH",
    icon: "🏔️",
    type: "High Altitude",
    x: "48%",
    y: "18%",
  },
  {
    name: "Manali",
    code: "MNL",
    icon: "⛰️",
    type: "Mountain Escape",
    x: "40%",
    y: "30%",
  },
  {
    name: "Rishikesh",
    code: "RSK",
    icon: "🚣",
    type: "River Thrills",
    x: "44%",
    y: "42%",
  },
  {
    name: "Ranthambore",
    code: "RNB",
    icon: "🐅",
    type: "Wildlife Safari",
    x: "33%",
    y: "52%",
  },
  {
    name: "Bir Billing",
    code: "BIR",
    icon: "🪂",
    type: "Sky Adventure",
    x: "58%",
    y: "48%",
  },
  {
    name: "Goa",
    code: "GOA",
    icon: "🌴",
    type: "Beach Vibes",
    x: "34%",
    y: "78%",
  },
  {
    name: "Andaman",
    code: "AND",
    icon: "🐠",
    type: "Ocean Paradise",
    x: "78%",
    y: "84%",
  },
];

export default function AdventureMap() {
  const [stamped, setStamped] = useState(["Rishikesh", "Manali", "Ranthambore"]);

  const toggleStamp = (name) => {
    setStamped((prev) =>
      prev.includes(name)
        ? prev.filter((item) => item !== name)
        : [...prev, name]
    );
  };

  return (
    <section className="relative bg-black text-white py-24 px-5 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(220,38,38,0.35),transparent_35%)]"></div>

      <div className="relative max-w-7xl mx-auto text-center">
        <p className="text-red-500 tracking-[0.45em] text-sm font-bold mb-4">
          ADVENTURE PASSPORT
        </p>

        <h2 className="text-4xl md:text-6xl font-serif font-bold mb-4">
          Collect Adventures. Stamp Memories.
        </h2>

        <p className="text-gray-300 max-w-2xl mx-auto mb-14">
          Click on any destination to stamp your passport and build your India
          adventure map.
        </p>

        {/* Passport Book */}
        <div className="relative rounded-[2.5rem] bg-[#4a2118] p-3 md:p-5 shadow-[0_0_80px_rgba(220,38,38,0.25)]">
          <div className="grid lg:grid-cols-2 overflow-hidden rounded-[2rem] border border-red-900/50">
            {/* LEFT PAGE */}
            <div className="relative min-h-[620px] bg-[#111] p-6 md:p-10 overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(239,68,68,0.18),transparent_60%)]"></div>

              <div className="absolute left-8 top-8 rotate-[-8deg] border-2 border-[#b7865b] text-[#b7865b] px-5 py-3 rounded-lg opacity-70">
                <p className="text-sm tracking-widest font-bold">INDIA</p>
                <p className="text-xs">ADVENTURE EXPEDITION</p>
              </div>

              <div className="relative h-[520px] mt-12">
                <img
                  src="/image/india-map.png"
                  alt="India adventure map"
                  className="w-full h-full object-contain opacity-75 drop-shadow-[0_0_20px_rgba(239,68,68,0.35)]"
                />

                {/* Route Line */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                  <path
                    d="M48 90 C40 140, 42 180, 44 220 C50 260, 35 290, 33 330 C30 390, 34 430, 34 470 C50 480, 65 460, 78 500"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeDasharray="8 8"
                    opacity="0.7"
                  />
                </svg>

                {destinations.map((place) => {
                  const isStamped = stamped.includes(place.name);

                  return (
                    <button
                      key={place.name}
                      onClick={() => toggleStamp(place.name)}
                      className="absolute -translate-x-1/2 -translate-y-1/2 group"
                      style={{ left: place.x, top: place.y }}
                    >
                      <span
                        className={`flex h-14 w-14 items-center justify-center rounded-full border-2 transition-all duration-300 ${
                          isStamped
                            ? "bg-red-600 border-white scale-110 shadow-[0_0_25px_rgba(239,68,68,0.9)]"
                            : "bg-black border-white hover:scale-110"
                        }`}
                      >
                        <span className="text-2xl">{place.icon}</span>
                      </span>

                      <span className="absolute left-16 top-4 whitespace-nowrap text-xs font-bold opacity-0 group-hover:opacity-100 transition">
                        {place.name}
                      </span>

                      {isStamped && (
                        <span className="absolute -right-6 -top-5 rotate-[-15deg] text-red-500 text-xs font-black border-2 border-red-500 px-2 py-1 bg-black/80 animate-stamp">
                          STAMPED
                        </span>
                      )}
                    </button>
                  );
                })}

                <div className="absolute left-4 bottom-4 bg-black/70 border border-white/10 rounded-2xl p-5 text-left">
                  <p className="text-[#b7865b] text-xs tracking-widest mb-2">
                    YOUR PROGRESS
                  </p>
                  <p className="text-5xl font-bold text-red-500">
                    {stamped.length}
                    <span className="text-white text-3xl"> / {destinations.length}</span>
                  </p>
                  <p className="text-xs text-gray-300 mt-1">
                    ADVENTURES UNLOCKED
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT PAGE */}
            <div className="relative min-h-[620px] bg-[#eadcc8] text-black p-6 md:p-10 overflow-hidden">
              <div className="absolute inset-4 border border-[#b98b6b] rounded-2xl opacity-60"></div>

              <div className="relative">
                <h3 className="text-4xl font-serif font-bold tracking-widest mb-2">
                  YOUR STAMPS
                </h3>

                <p className="text-red-700 font-serif italic text-xl mb-8">
                  Every stamp, a new story!
                </p>

                <div className="h-px bg-red-800/40 mb-8"></div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
                  {destinations.map((place) => {
                    const isStamped = stamped.includes(place.name);

                    return (
                      <button
                        key={place.name}
                        onClick={() => toggleStamp(place.name)}
                        className={`h-40 border-2 rounded-xl p-4 flex flex-col items-center justify-center transition-all ${
                          isStamped
                            ? "border-red-700 text-red-700 rotate-[-2deg] bg-red-900/5"
                            : "border-black/30 text-black/50 grayscale"
                        }`}
                      >
                        <p className="text-xl font-black">{place.code}</p>
                        <p className="text-4xl my-3">{place.icon}</p>
                        <p className="text-xs font-bold uppercase">
                          {place.type}
                        </p>
                        <p className="text-[10px] mt-3 font-black">
                          {isStamped ? "STAMPED" : "NOT YET"}
                        </p>
                      </button>
                    );
                  })}
                </div>

                <p className="mt-10 text-center font-serif text-lg text-black/70">
                  “Not all those who wander are lost, some are just collecting
                  stamps.”
                </p>
              </div>
            </div>
          </div>
        </div>

        <p className="text-gray-300 mt-8">
          📍 Tip: Click the icons on the map to stamp your passport.
        </p>
      </div>

      <style jsx>{`
        @keyframes stamp {
          0% {
            transform: scale(2) rotate(-20deg);
            opacity: 0;
          }
          100% {
            transform: scale(1) rotate(-15deg);
            opacity: 1;
          }
        }

        .animate-stamp {
          animation: stamp 0.35s ease-out;
        }
      `}</style>
    </section>
  );
}