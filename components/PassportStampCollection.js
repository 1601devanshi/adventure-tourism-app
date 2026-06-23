"use client";

import { useMemo, useState } from "react";
import { stampCategories, stampData } from "@/data/stampData";
import { Bebas_Neue, Playfair_Display } from "next/font/google";

const bebas = Bebas_Neue({ subsets: ["latin"], weight: "400" });
const playfair = Playfair_Display({ subsets: ["latin"], weight: ["600", "700"] });

export default function PassportStampCollection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [selectedStamp, setSelectedStamp] = useState(stampData[0]);
  const [unlockedStamps, setUnlockedStamps] = useState(
    stampData.filter((item) => item.collected).map((item) => item.id)
  );

  const playStampSound = () => {
    const audio = new Audio("/sounds/stamp.mp3");
    audio.volume = 0.35;
    audio.play().catch(() => {});
  };

  const filteredStamps = useMemo(() => {
    return stampData.filter((stamp) => {
      const categoryMatch =
        activeCategory === "All" || stamp.category === activeCategory;

      const searchMatch =
        stamp.name.toLowerCase().includes(search.toLowerCase()) ||
        stamp.state.toLowerCase().includes(search.toLowerCase()) ||
        stamp.activity.toLowerCase().includes(search.toLowerCase());

      return categoryMatch && searchMatch;
    });
  }, [activeCategory, search]);

  const unlockStamp = (stamp) => {
    setSelectedStamp(stamp);
    playStampSound();

    if (!unlockedStamps.includes(stamp.id)) {
      setUnlockedStamps((prev) => [...prev, stamp.id]);
    }
  };

  const collectedCount = unlockedStamps.length;

  return (
    <section className="relative overflow-hidden bg-black px-5 py-28 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#351406_0%,#080808_45%,#000_100%)]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="text-center">
          <p className="mb-5 text-sm font-black uppercase tracking-[0.55em] text-orange-500">
            Collect. Explore. Remember.
          </p>

          <h2 className={`${bebas.className} text-6xl tracking-[0.12em] md:text-8xl`}>
            Explorer Passport
            <span className="block text-orange-500">Diary</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-zinc-300">
            Open your India adventure passport, unlock destination stamps and build your explorer journey.
          </p>
        </div>

        <div className="mx-auto mt-10 flex w-fit items-center gap-4 rounded-full border border-orange-700/50 bg-black/60 px-8 py-4">
          <span className="text-xs font-black uppercase tracking-[0.35em]">
            Stamps Collected
          </span>
          <span className="text-4xl font-black text-orange-500">
            {String(collectedCount).padStart(2, "0")}
          </span>
          <span className="text-zinc-500">/</span>
          <span className="text-zinc-400">{stampData.length}</span>
        </div>

        <div className="mt-14 rounded-[2.5rem] border border-yellow-900/30 bg-[#d9b77c] p-4 shadow-2xl md:p-8">
          <div className="grid overflow-hidden rounded-[2rem] bg-[#efd7a8] shadow-[inset_0_0_80px_rgba(92,52,16,0.35)] lg:grid-cols-2">
            
            {/* LEFT PAGE */}
            <div className="relative border-b border-black/20 p-6 md:p-8 lg:border-b-0 lg:border-r">
              <div className="absolute right-0 top-0 hidden h-full w-10 bg-gradient-to-l from-black/20 to-transparent lg:block" />

              <p className="text-xs font-black uppercase tracking-[0.45em] text-red-900">
                Republic of Adventures
              </p>

              <h3 className="mt-2 text-4xl font-black uppercase text-black">
                India Passport
              </h3>

              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search Ladakh, Goa, rafting, safari..."
                className="mt-6 w-full rounded-full border border-black/10 bg-white/50 px-5 py-4 text-sm font-bold text-black outline-none placeholder:text-black/40 focus:border-red-900"
              />

              <div className="mt-5 flex flex-wrap gap-2">
                {stampCategories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`rounded-full border px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] transition ${
                      activeCategory === category
                        ? "border-red-900 bg-red-900 text-white"
                        : "border-black/15 bg-white/30 text-black/70 hover:border-red-900"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              <div className="mt-8 grid max-h-[620px] gap-5 overflow-y-auto pr-2 sm:grid-cols-2">
                {filteredStamps.map((stamp, index) => {
                  const isUnlocked = unlockedStamps.includes(stamp.id);

                  return (
                    <button
                      key={stamp.id}
                      onClick={() => unlockStamp(stamp)}
                      className={`group relative rounded-2xl border bg-[#fff1cf] p-5 text-center shadow-lg transition duration-300 hover:-translate-y-2 ${
                        selectedStamp.id === stamp.id
                          ? "border-red-900 ring-4 ring-red-900/20"
                          : "border-black/10"
                      }`}
                      style={{
                        transform: `rotate(${index % 2 === 0 ? "-1deg" : "1deg"})`,
                      }}
                    >
                      <span
                        className={`absolute right-3 top-3 rounded-full px-3 py-1 text-[10px] font-black text-white ${
                          isUnlocked ? "bg-green-700" : "bg-black/50"
                        }`}
                      >
                        {isUnlocked ? "✓ Badge" : "Unlock"}
                      </span>

                      <div
                        className="mx-auto flex h-28 w-28 items-center justify-center rounded-full border-[5px] border-dashed transition group-hover:scale-105"
                        style={{ borderColor: stamp.color, color: stamp.color }}
                      >
                        <div>
                          <div className="text-3xl">{stamp.icon}</div>
                          <p className="mt-1 text-xs font-black uppercase">
                            {stamp.name}
                          </p>
                          <p className="text-[9px] uppercase tracking-widest">
                            India
                          </p>
                        </div>
                      </div>

                      <h4 className="mt-5 text-xl font-black uppercase text-black">
                        {stamp.name}
                      </h4>

                      <p className="mt-1 text-xs font-bold uppercase tracking-[0.18em] text-black/50">
                        {stamp.category}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* RIGHT PAGE */}
            <div className="relative p-6 md:p-8">
              <div className="absolute left-0 top-0 hidden h-full w-10 bg-gradient-to-r from-black/20 to-transparent lg:block" />

              <p className="text-xs font-black uppercase tracking-[0.45em] text-red-900">
                Selected Stamp
              </p>

              <div className="mt-8 rounded-[2rem] border border-black/10 bg-[#fff1cf] p-8 text-center text-black shadow-xl">
                <div
                  className="mx-auto flex h-48 w-48 items-center justify-center rounded-full border-[7px] border-dashed"
                  style={{
                    borderColor: selectedStamp.color,
                    color: selectedStamp.color,
                  }}
                >
                  <div>
                    <div className="text-6xl">{selectedStamp.icon}</div>
                    <p className="mt-2 text-lg font-black uppercase">
                      {selectedStamp.name}
                    </p>
                    <p className="text-xs uppercase tracking-[0.3em]">
                      India Pass
                    </p>
                  </div>
                </div>

                <p className="mt-8 text-xs font-black uppercase tracking-[0.45em] text-red-900">
                  Badge Unlocked
                </p>

                <h3 className={`${playfair.className} mt-4 text-5xl font-black uppercase`}>
                  {selectedStamp.name}
                </h3>

                <p className="mt-3 text-sm font-black uppercase tracking-[0.25em] text-black/45">
                  {selectedStamp.state}
                </p>

                <p className="mx-auto mt-6 max-w-md text-lg text-black/70">
                  “{selectedStamp.quote}”
                </p>

                <div className="mt-8 grid gap-4 text-left sm:grid-cols-2">
                  <Info label="Adventure Type" value={selectedStamp.category} />
                  <Info label="Experience" value={selectedStamp.activity} />
                </div>

                <button className="mt-8 rounded-full bg-red-900 px-10 py-4 text-sm font-black uppercase tracking-[0.3em] text-white transition hover:bg-black">
                  View On Map
                </button>
              </div>

              <div className="mt-6 rounded-2xl border border-red-900/20 bg-white/30 p-5 text-black">
                <p className="text-xs font-black uppercase tracking-[0.3em] text-red-900">
                  Explorer Rewards
                </p>

                <div className="mt-4 space-y-2 text-sm font-bold text-black/70">
                  <p>5 stamps → Beginner Explorer Badge</p>
                  <p>10 stamps → Free Travel Guide Badge</p>
                  <p>15 stamps → Adventure Discount Unlocked</p>
                  <p>25 stamps → Ultimate Explorer Pass</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

function Info({ label, value }) {
  return (
    <div className="rounded-2xl border border-black/10 bg-white/50 p-4">
      <p className="text-[10px] font-black uppercase tracking-[0.25em] text-black/45">
        {label}
      </p>
      <p className="mt-2 text-sm font-black text-black/80">{value}</p>
    </div>
  );
}