"use client";

import { useState } from "react";
import { Playfair_Display, Cormorant_Garamond } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700", "800", "900"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["600", "700"],
});

const stories = [
  {
    id: "ladakh",
    stamp: "HIGH PASS",
    place: "Ladakh",
    date: "July 2025",
    title: "Riding Through The Clouds",
    image: "/image/ladakh.jpg",
    quote: "Crossing the high mountain passes felt like riding above the clouds.",
    story:
      "The road to Ladakh was not easy. Thin air, sharp turns and endless mountain passes tested every rider. But the moment the first light touched Pangong Lake, the whole journey felt worth it.",
    route: "Manali → Leh → Pangong",
    stats: ["1200 km", "7 Days", "3 Passes"],
  },
  {
    id: "meghalaya",
    stamp: "ROOT TRAIL",
    place: "Meghalaya",
    date: "October 2025",
    title: "Through The Living Roots",
    image: "/image/meghalaya.jpg",
    quote: "Every trail led to waterfalls, caves and forests that felt untouched.",
    story:
      "The trek began with mist, slippery stone steps and the sound of waterfalls hidden inside the forest. Every bridge, root and trail felt handmade by nature itself.",
    route: "Guwahati → Cherrapunji",
    stats: ["4 Days", "8 Trails", "5 Waterfalls"],
  },
  {
    id: "ranthambore",
    stamp: "WILD ZONE",
    place: "Ranthambore",
    date: "March 2025",
    title: "The Morning Tiger Trail",
    image: "/image/Ranthambore.jpg",
    quote: "For hours the jungle was silent, then the tiger appeared on the trail.",
    story:
      "The safari started before sunrise. For hours, the forest stayed silent. Then suddenly the guide raised his hand, the jeep stopped, and a tiger walked across the trail.",
    route: "Delhi → Sawai Madhopur",
    stats: ["2 Days", "3 Safaris", "1 Tiger Trail"],
  },
  {
    id: "andaman",
    stamp: "BLUE DEEP",
    place: "Andaman",
    date: "December 2025",
    title: "Under The Blue Silence",
    image: "/image/andaman.jpg",
    quote: "The moment I went underwater, the world became quiet and blue.",
    story:
      "The dive began with nervous breathing and blue water everywhere. A few meters below the surface, the noise disappeared and coral reefs opened like another world.",
    route: "Port Blair → Havelock",
    stats: ["5 Days", "2 Dives", "Coral Reefs"],
  },
];

export default function TravelStories() {
  const [activeStory, setActiveStory] = useState(stories[0]);

  return (
    <section className="relative min-h-screen bg-[#080604] text-[#F5E6C8] overflow-hidden py-28 px-6">
      <div
        key={activeStory.id}
        className="absolute inset-0 bg-cover bg-center opacity-45 scale-110 animate-bgFade"
        style={{ backgroundImage: `url(${activeStory.image})` }}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[#080604] via-[#080604]/85 to-[#080604]/45" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(212,180,131,0.22),transparent_45%)]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="uppercase tracking-[0.55em] text-sm mb-5 font-semibold text-[#D4B483]">
            Expedition Journal
          </p>

          <h2
            className={`${playfair.className} text-6xl md:text-8xl font-black leading-[0.9] tracking-[-0.03em]`}
          >
            <span className="text-[#F5E6C8]">Tales</span>

            <span
              className={`${cormorant.className} block italic font-semibold text-[#D4B483] text-7xl md:text-9xl`}
            >
              From The Wild
            </span>
          </h2>

          <div className="flex items-center gap-4 mt-7">
            <span className="h-[1px] w-24 bg-[#D4B483]/70" />
            <span
              className={`${cormorant.className} text-2xl text-[#E7D7B7] italic`}
            >
              handwritten moments from wild India
            </span>
          </div>
        </div>

        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-start">
          <div key={activeStory.id} className="animate-cardPop">
            <p className="uppercase tracking-[0.35em] text-xs mb-5 font-semibold text-[#D4B483]">
              {activeStory.place} • {activeStory.date}
            </p>

            <h3
              className={`${playfair.className} text-5xl md:text-7xl font-black leading-[0.95] tracking-[-0.02em] max-w-4xl text-[#F5E6C8]`}
            >
              {activeStory.title}
            </h3>

            <div
              className={`${playfair.className} text-[#D4B483] text-[140px] leading-none opacity-40 mt-8`}
            >
              “
            </div>

            <p
              className={`${cormorant.className} text-4xl md:text-6xl italic font-semibold text-[#F5E6C8] leading-[1.05] max-w-4xl -mt-10`}
            >
              {activeStory.quote}
            </p>

            <p
              className={`${cormorant.className} text-[#DDD6C7] text-2xl leading-[1.5] mt-8 max-w-3xl`}
            >
              {activeStory.story}
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              {activeStory.stats.map((item) => (
                <span
                  key={item}
                  className="px-5 py-2 rounded-full bg-[#F5E6C8]/10 border border-[#D4B483]/25 text-sm text-[#F5E6C8] backdrop-blur-md"
                >
                  {item}
                </span>
              ))}
            </div>

            <p className="text-[#C8BDAA] mt-6 text-sm">
              Route:{" "}
              <span className="text-[#F5E6C8] font-semibold">
                {activeStory.route}
              </span>
            </p>
          </div>

          <div className="rounded-[2rem] bg-[#080604]/55 border border-[#D4B483]/20 backdrop-blur-xl p-5 shadow-2xl">
            <p className="text-xs uppercase tracking-[0.35em] text-[#D4B483] mb-5">
              Story Chapters
            </p>

            <div className="space-y-4">
              {stories.map((story) => {
                const active = activeStory.id === story.id;

                return (
                  <button
                    key={story.id}
                    onClick={() => setActiveStory(story)}
                    className={`relative w-full text-left rounded-2xl border p-5 transition overflow-hidden ${
                      active
                        ? "bg-[#D4B483] text-[#080604] border-[#F5E6C8]"
                        : "bg-[#F5E6C8]/[0.06] text-[#F5E6C8] border-[#D4B483]/20 hover:bg-[#F5E6C8]/[0.1]"
                    }`}
                  >
                    <div
                      className={`absolute right-4 top-4 rotate-[-10deg] rounded-full border px-3 py-2 text-[10px] font-black tracking-[0.18em] ${
                        active
                          ? "border-[#080604]/50 text-[#080604]/80"
                          : "border-[#D4B483]/60 text-[#D4B483]"
                      }`}
                    >
                      {story.stamp}
                    </div>

                    <p className="text-xs uppercase tracking-[0.3em] opacity-70 mb-2">
                      {story.place}
                    </p>

                    <h4
                      className={`${playfair.className} text-3xl font-bold leading-tight mb-2 pr-24`}
                    >
                      {story.title}
                    </h4>

                    <p className="text-sm opacity-75">{story.route}</p>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}