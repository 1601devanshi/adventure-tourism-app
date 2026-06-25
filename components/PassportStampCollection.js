"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { stampCategories, stampData } from "@/data/stampData";
import { Bebas_Neue, Playfair_Display, Caveat } from "next/font/google";

const bebas = Bebas_Neue({ subsets: ["latin"], weight: "400" });
const playfair = Playfair_Display({ subsets: ["latin"], weight: ["700"] });
const caveat = Caveat({ subsets: ["latin"], weight: ["600", "700"] });

export default function PassportStampCollection() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedStamp, setSelectedStamp] = useState(stampData[0]);
  const [unlockedStamps, setUnlockedStamps] = useState(
    stampData.filter((item) => item.collected).map((item) => item.id)
  );
  const [toast, setToast] = useState(false);

  const collectedCount = unlockedStamps.length;
  const totalStamps = stampData.length;

  const progressPercent = Math.min(
    Math.round((collectedCount / totalStamps) * 100),
    100
  );

  const nextRewardLeft = Math.max(15 - collectedCount, 0);

  const filteredStamps = useMemo(() => {
    return stampData.filter((stamp) => {
      const matchSearch =
        stamp.name.toLowerCase().includes(search.toLowerCase()) ||
        stamp.state.toLowerCase().includes(search.toLowerCase()) ||
        stamp.category.toLowerCase().includes(search.toLowerCase()) ||
        stamp.activity.toLowerCase().includes(search.toLowerCase());

      const matchCategory =
        activeCategory === "All" || stamp.category === activeCategory;

      return matchSearch && matchCategory;
    });
  }, [search, activeCategory]);

  const playStampSound = () => {
    const audio = new Audio("/sounds/stamp.mp3");
    audio.volume = 0.45;
    audio.play().catch(() => {});
  };

  const unlockStamp = (stamp) => {
    setSelectedStamp(stamp);
    playStampSound();

    if (!unlockedStamps.includes(stamp.id)) {
      setUnlockedStamps((prev) => [...prev, stamp.id]);
    }

    setToast(true);
    setTimeout(() => setToast(false), 2500);
  };

  return (
    <section className="relative overflow-hidden bg-[#130b06] px-4 py-28 text-[#24160d]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#8a461c_0%,#321407_48%,#050201_100%)]" />

      <div className="absolute left-10 top-10 text-[120px] opacity-10">🧭</div>

      <div className="absolute right-16 top-20 rotate-12 rounded-xl border-4 border-dashed border-[#c98542]/30 px-8 py-4 text-3xl font-black uppercase text-[#c98542]/30">
        Departed
      </div>

      <div className="absolute left-20 top-36 h-[2px] w-[75%] border-t-2 border-dashed border-[#f0b35e]/25" />
      <div className="passport-plane">✈</div>

      <div className="relative z-10 mx-auto max-w-[1550px]">
        <div className="mb-14 text-center">
          <p className="passport-kicker">Collect. Explore. Remember.</p>

          <h2
            className={`${bebas.className} passport-title-3d`}
            style={{
              textShadow: `
                2px 2px 0 #7a3514,
                4px 4px 0 #5b230c,
                7px 7px 0 #351205,
                12px 16px 25px rgba(0,0,0,.65)
              `,
            }}
          >
            <span>Explorer</span>{" "}
            <span className="passport-gradient">Passport</span>{" "}
            <span>Diary</span>
          </h2>

          <p className={`${caveat.className} passport-subtitle`}>
            Search a destination, unlock its stamp, and build your India
            adventure collection.
          </p>
        </div>

        <div className="relative grid gap-7 xl:grid-cols-[0.72fr_1.28fr]">
          <div className="relative min-h-[780px] overflow-hidden rounded-[2rem] border-[8px] border-[#5d3218] shadow-2xl">
            <Image
              src="/image/coverpage.webp"
              alt="Travel scrapbook cover"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-white/5" />
          </div>

          <div className="relative rounded-[2.5rem] border-[10px] border-[#5d3218] bg-[#e4b875] p-4 shadow-2xl">
            <div className="grid min-h-[780px] overflow-hidden rounded-[1.8rem] bg-[#f8e6c5] shadow-[inset_0_0_80px_rgba(91,55,25,0.35)] lg:grid-cols-2">
              <div className="relative border-b border-[#7a5935]/30 p-8 lg:border-b-0 lg:border-r">
                <div className="absolute right-0 top-0 hidden h-full w-10 bg-gradient-to-l from-black/20 to-transparent lg:block" />

                <h3
                  className={`${bebas.className} text-6xl tracking-wide text-[#2b1a10]`}
                >
                  India Passport
                </h3>

                <p className="text-sm font-semibold text-[#6f5339]">
                  Search and select a destination to unlock its stamp.
                </p>

                <div className="mt-8 flex items-center rounded-2xl border border-[#9b6b3c]/40 bg-white/60 px-4">
                  <span className="text-xl">🔍</span>

                  <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search Goa, Ladakh, rafting, safari..."
                    className="w-full bg-transparent px-4 py-4 font-semibold outline-none placeholder:text-[#8d7359]"
                  />

                  {search && (
                    <button
                      onClick={() => setSearch("")}
                      className="text-2xl font-bold"
                    >
                      ×
                    </button>
                  )}
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {stampCategories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`rounded-full border px-4 py-2 text-xs font-black uppercase tracking-widest transition ${
                        activeCategory === cat
                          ? "border-[#9b261f] bg-[#9b261f] text-white"
                          : "border-[#8b6a48]/30 bg-white/40 text-[#513820] hover:border-[#9b261f]"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>

                <div className="mt-6 flex items-center justify-between text-sm font-semibold">
                  <p>{filteredStamps.length} places found</p>

                  <button
                    onClick={() => {
                      setSearch("");
                      setActiveCategory("All");
                    }}
                    className="font-black text-[#9b261f]"
                  >
                    Clear
                  </button>
                </div>

                <div className="mt-5 max-h-[500px] space-y-4 overflow-y-auto pr-2">
                  {filteredStamps.map((stamp) => {
                    const isUnlocked = unlockedStamps.includes(stamp.id);

                    return (
                      <button
                        key={stamp.id}
                        onClick={() => unlockStamp(stamp)}
                        className={`flex w-full items-center gap-4 rounded-2xl border p-4 text-left transition hover:-translate-y-1 ${
                          selectedStamp.id === stamp.id
                            ? "border-[#3f6b32] bg-[#fff8df] shadow-lg"
                            : "border-[#9b6b3c]/30 bg-white/35"
                        }`}
                      >
                        <Image
                          src={stamp.image || "/image/goa.jpg"}
                          alt={stamp.name}
                          width={120}
                          height={90}
                          className="h-24 w-32 rounded-xl object-cover"
                        />

                        <div className="flex-1">
                          <h4 className="text-2xl font-black text-[#21150e]">
                            {stamp.name}
                          </h4>

                          <p className="text-sm text-[#5f4935]">
                            {stamp.state}
                          </p>

                          <span className="mt-2 inline-block rounded-lg bg-[#ead4a4] px-3 py-1 text-sm font-black text-[#713b20]">
                            {stamp.icon} {stamp.category}
                          </span>
                        </div>

                        {isUnlocked ? (
                          <span className="grid h-8 w-8 place-items-center rounded-full bg-[#3f6b32] text-white">
                            ✓
                          </span>
                        ) : (
                          <span className="text-xl">🔒</span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="relative overflow-hidden p-8 text-center">
                <div className="absolute left-0 top-0 hidden h-full w-10 bg-gradient-to-r from-black/20 to-transparent lg:block" />

                <p className="text-sm font-black uppercase tracking-[0.25em] text-[#9b261f]">
                  ★ Stamp Unlocked ★
                </p>

                <div className="relative mx-auto mt-8 h-64 w-64">
                  <div
                    className="grid h-full w-full place-items-center rounded-full border-[8px] border-dashed bg-[#f8e6c5]/40"
                    style={{
                      borderColor:
                        selectedStamp.stampColor || selectedStamp.color,
                      color: selectedStamp.stampColor || selectedStamp.color,
                    }}
                  >
                    <div>
                      <div className="text-6xl">{selectedStamp.icon}</div>

                      <p className="mt-2 text-3xl font-black uppercase">
                        {selectedStamp.name}
                      </p>

                      <p className="text-xs font-black uppercase tracking-[0.25em]">
                        India Pass
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mx-auto mt-6 grid max-w-md gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl border-2 border-dashed border-[#8b6a48]/40 bg-[#fff5df]/80 px-5 py-4 shadow-md">
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#7a6348]">
                      Stamps Collected
                    </p>

                    <p className="mt-1 text-3xl font-black text-[#2f241a]">
                      {collectedCount}
                      <span className="mx-1 text-[#9b261f]">/</span>
                      {totalStamps}
                    </p>

                    <p className="mt-1 text-xs font-semibold text-[#6f5339]">
                      {progressPercent}% Completed
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#3f6b32] px-5 py-4 text-white shadow-md">
                    <p className="text-[10px] uppercase tracking-[0.2em]">
                      Next Reward
                    </p>

                    <p className="mt-2 text-xl font-black">
                      {nextRewardLeft > 0
                        ? `${nextRewardLeft} stamps left`
                        : "Reward Unlocked"}
                    </p>
                  </div>
                </div>

                <h3
                  className={`${playfair.className} mt-8 text-5xl uppercase text-black`}
                >
                  {selectedStamp.name}
                </h3>

                <p className="font-bold text-[#6f5339]">
                  {selectedStamp.state}
                </p>

                <p
                  className={`${caveat.className} mx-auto mt-5 max-w-md text-3xl text-[#3b2415]`}
                >
                  “{selectedStamp.quote}”
                </p>

                <div className="mx-auto mt-8 h-px max-w-md border-t border-dashed border-[#8b6a48]/50" />

                <div className="mt-8 grid gap-4 md:grid-cols-2">
                  <Info label="Adventure Type" value={selectedStamp.category} />
                  <Info label="Experience" value={selectedStamp.activity} />
                  <Info
                    label="Badge"
                    value={selectedStamp.badge || "Explorer"}
                  />
                  <Info
                    label="Reward Points"
                    value={`${selectedStamp.rewardPoints || 80} XP`}
                  />
                </div>

                <button className="mt-8 rounded-xl bg-[#2f6b2f] px-12 py-4 text-lg font-black uppercase tracking-widest text-white shadow-lg transition hover:bg-[#1d461d]">
                  🗺️ View On Map
                </button>
              </div>
            </div>

            {toast && (
              <div className="absolute bottom-12 left-1/2 z-40 flex -translate-x-1/2 items-center gap-4 rounded-2xl bg-black/85 px-8 py-5 text-white shadow-2xl">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-[#3f6b32] text-xl">
                  ✓
                </span>

                <div>
                  <p className="text-lg font-black">Stamp Added!</p>
                  <p className="text-sm text-zinc-300">
                    {selectedStamp.name} stamp has been added to your passport.
                  </p>
                </div>

                <span className="text-2xl">🔊</span>
              </div>
            )}
          </div>
        </div>

        <div className="mx-auto mt-8 rounded-[2rem] border border-[#d2ad74]/40 bg-[#f2d6a7] p-6 shadow-xl">
          <h3 className="text-lg font-black uppercase">
            Your Collection Rewards
          </h3>

          <div className="mt-5 grid gap-4 md:grid-cols-5">
            <Reward
              active={collectedCount >= 5}
              icon="🧭"
              stamps="5 Stamps"
              title="Beginner Explorer"
            />
            <Reward
              active={collectedCount >= 10}
              icon="🎖️"
              stamps="10 Stamps"
              title="Travel Enthusiast"
            />
            <Reward
              active={collectedCount >= 15}
              icon="🏆"
              stamps="15 Stamps"
              title="Adventure Seeker"
            />
            <Reward
              active={collectedCount >= 25}
              icon="🛡️"
              stamps="25 Stamps"
              title="Trail Master"
            />
            <Reward
              active={collectedCount >= 40}
              icon="👑"
              stamps="40 Stamps"
              title="Ultimate Explorer"
            />
          </div>

          <div className="mt-6">
            <div className="mb-2 flex items-center justify-between">
              <p className="text-sm font-black uppercase tracking-widest text-[#5b3218]">
                Collection Progress
              </p>

              <p className="text-lg font-black text-[#9b261f]">
                {progressPercent}%
              </p>
            </div>

            <div className="h-4 overflow-hidden rounded-full bg-black/20">
              <div
                className="h-full rounded-full bg-gradient-to-r from-[#9b261f] via-[#d98b32] to-[#3f6b32] transition-all duration-700"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Info({ label, value }) {
  return (
    <div className="rounded-xl border border-[#8b6a48]/25 bg-white/35 p-5 text-left">
      <p className="text-xs font-black uppercase tracking-widest text-[#7a6348]">
        {label}
      </p>
      <p className="mt-2 font-black">{value}</p>
    </div>
  );
}

function Reward({ active, icon, stamps, title }) {
  return (
    <div
      className={`rounded-2xl border p-4 ${
        active
          ? "border-[#3f6b32] bg-white/40"
          : "border-black/10 bg-white/20 opacity-60"
      }`}
    >
      <div className="flex items-center gap-4">
        <span className="grid h-14 w-14 place-items-center rounded-full bg-[#e3c27f] text-3xl">
          {icon}
        </span>

        <div>
          <p className="text-sm font-bold">{stamps}</p>
          <p className="font-black">{title}</p>
        </div>
      </div>
    </div>
  );
}