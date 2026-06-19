"use client";

import { useState } from "react";
import { Playfair_Display } from "next/font/google";
import { destinations } from "./MapData";
import IndiaMapSVG from "./IndiaMapSVG";
import DestinationPopup from "./DestinationPopup";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700", "800", "900"],
});

export default function AdventureMap() {
  const [selected, setSelected] = useState(destinations[0]);

  return (
    <section className="relative min-h-screen text-white overflow-hidden pt-36 pb-24 px-6 bg-black">
      {/* Background Image */}
      <div
        key={selected.id}
        className="absolute inset-0 bg-cover bg-center opacity-70 scale-110 animate-bgFade"
        style={{
          backgroundImage: `url(${selected.image})`,
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/70 to-black/60" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(239,68,68,0.18),transparent_55%)]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-red-400 uppercase tracking-[0.45em] text-sm mb-5 font-semibold">
            Interactive Explorer
          </p>

          <h2
            className={`${playfair.className} text-5xl md:text-7xl font-black tracking-tight`}
          >
            <span className="bg-gradient-to-r from-white via-red-100 to-red-500 bg-clip-text text-transparent">
              India Adventure Atlas
            </span>
          </h2>

          <p className="text-gray-300 mt-5 max-w-2xl mx-auto text-base md:text-lg">
            Click a destination to unlock routes, terrain and unforgettable
            experiences.
          </p>
        </div>

        {/* Main Layout */}
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-start">
          <IndiaMapSVG
            destinations={destinations}
            selected={selected}
            setSelected={setSelected}
          />

          <DestinationPopup selected={selected} />
        </div>
      </div>
    </section>
  );
}