"use client";

import { useMemo, useState } from "react";
import { months, places } from "./data";
import MonthSelector from "./MonthSelector";
import TravelMap from "./TravelMap";
import TravelBrief from "./TravelBrief";
import BoardingPass from "./BoardingPass";
import WeatherCard from "./WeatherCard";
import PackingChecklist from "./PackingChecklist";
import PolaroidStrip from "./PolaroidStrip";

export default function ExplorerDesk() {
  const [month, setMonth] = useState("Oct");
  const [active, setActive] = useState(places[0]);
  const [soundOn, setSoundOn] = useState(false);

  const filtered = useMemo(
    () => places.filter((place) => place.months.includes(month)),
    [month]
  );

  function playSound() {
    if (!soundOn) return;
    const audio = new Audio("/sounds/stamp.mp3");
    audio.volume = 0.35;
    audio.play().catch(() => {});
  }

  function changeMonth(selectedMonth) {
    setMonth(selectedMonth);
    const firstPlace = places.find((place) =>
      place.months.includes(selectedMonth)
    );
    if (firstPlace) setActive(firstPlace);
    playSound();
  }

  function selectPlace(place) {
    setActive(place);
    playSound();
  }

  return (
    <section className="relative overflow-hidden bg-[#2a1b10] px-4 py-20 text-[#2f2518] md:px-8">
      <style>{`
        @keyframes compassSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes routeMove {
          from { stroke-dashoffset: 600; }
          to { stroke-dashoffset: 0; }
        }
        @keyframes stampPop {
          0% { transform: scale(2.2) rotate(-25deg); opacity: 0; }
          100% { transform: scale(1) rotate(-8deg); opacity: 1; }
        }
        @keyframes pageFlip {
          0% { transform: rotateY(10deg); opacity: .3; }
          100% { transform: rotateY(0); opacity: 1; }
        }
        @keyframes pinDrop {
          0% { transform: translateY(-35px) scale(.6); opacity: 0; }
          100% { transform: translateY(0) scale(1); opacity: 1; }
        }
      `}</style>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#f6d99a_0%,transparent_35%),radial-gradient(circle_at_bottom_right,#315f62_0%,transparent_35%)] opacity-60" />

      <div className="relative z-10 mx-auto max-w-[1600px] overflow-hidden rounded-[2.5rem] border border-[#6b4a2c] bg-[#5a3a22] p-4 shadow-2xl md:p-6 xl:p-8">
        <div className="absolute left-6 top-6 hidden h-32 w-32 rounded-full border-4 border-[#caa76a] bg-[#3b2819] text-center text-6xl leading-[7.5rem] shadow-xl lg:block">
          <span style={{ display: "inline-block", animation: "compassSpin 18s linear infinite" }}>
            🧭
          </span>
        </div>

        <button
          onClick={() => setSoundOn(!soundOn)}
          className="absolute bottom-6 right-6 z-30 rounded-full border border-[#d4b171] bg-[#2e2116] px-4 py-3 text-xl text-[#f5d28a]"
        >
          {soundOn ? "🔊" : "🔇"}
        </button>

        <div className="mb-8 text-center text-[#f8e6bd]">
          <p className="font-serif text-3xl italic">Adventure</p>
          <h2 className="font-serif text-5xl font-black tracking-[0.08em] text-[#fff0c2] drop-shadow md:text-7xl">
            SEASON COMPASS
          </h2>
          <p className="mx-auto mt-3 max-w-2xl font-serif text-lg italic tracking-wide text-[#e8c88a]">
            Every month has a mood. Every route has a story.
          </p>
        </div>

        <div className="grid gap-5 xl:grid-cols-[260px_minmax(0,1fr)_340px]">
          <div className="rounded-[2rem] bg-[#f3dfb8] p-5 shadow-xl">
            <MonthSelector
              months={months}
              month={month}
              onSelect={changeMonth}
              count={filtered.length}
            />

            <TravelMap places={filtered} onSelect={selectPlace} />
          </div>

          <div className="rounded-[2rem] bg-[#cdb184] p-4 shadow-xl md:p-6">
            <TravelBrief active={active} month={month} />
            <WeatherCard active={active} />

            <button className="mt-5 w-full rounded-xl border border-[#e8c88a] bg-[#263b38] py-4 font-serif text-xl font-black text-[#f8e6bd] transition hover:scale-[1.01]">
              + ADD TO ADVENTURE PASSPORT
            </button>
          </div>

          <div className="min-w-0 space-y-5">
            <BoardingPass active={active} month={month} />
            <PackingChecklist active={active} month={month} />
          </div>
        </div>

        <PolaroidStrip
          places={places}
          active={active}
          onSelect={selectPlace}
        />
      </div>
    </section>
  );
}