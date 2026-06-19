import { Playfair_Display } from "next/font/google";
<h3
  className={`${playfair.className} text-5xl md:text-6xl font-black text-white leading-none tracking-tight drop-shadow-[0_0_18px_rgba(239,68,68,0.25)]`}
></h3>
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700", "800", "900"],
});

export default function DestinationPopup({ selected }) {
  return (
    <div
      key={selected.id}
      className="relative rounded-[2rem] bg-black/55 border border-white/15 backdrop-blur-2xl shadow-2xl overflow-hidden animate-cardPop"
    >
      {/* Image Top */}
      <div
        className="h-52 bg-cover bg-center relative"
        style={{ backgroundImage: `url(${selected.image})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

        <div className="absolute bottom-5 left-6">
          <p className="text-red-300 uppercase tracking-[0.35em] text-xs mb-2 font-semibold">
            {selected.category}
          </p>

          <h3
            className={`${playfair.className} text-5xl font-black text-white leading-none`}
          >
            {selected.name}
          </h3>
        </div>
      </div>

      <div className="p-7">
        <div className="flex items-center justify-between mb-6">
          <p className="text-gray-300 text-sm">{selected.region}</p>

          <span className="px-4 py-2 rounded-full bg-red-500/15 border border-red-400/30 text-red-200 text-xs uppercase tracking-widest">
            {selected.state}
          </span>
        </div>

        <div className="rounded-3xl bg-white/[0.06] border border-white/10 p-5 mb-6">
          <p className="text-gray-400 text-sm mb-2">Signature Experience</p>
          <p className={`${playfair.className} text-2xl font-black text-white leading-snug`}>
            {selected.signatureExperience}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <Info title="Best Season" value={selected.bestSeason} />
          <Info title="Difficulty" value={selected.difficulty} />
          <Info title="Duration" value={selected.duration} />
          <Info title="Terrain" value={selected.terrain} />
        </div>

        <div className="mb-6">
          <div className="flex justify-between mb-3">
            <p className="text-gray-400 text-sm">Adventure Index</p>
            <p className="text-red-300 font-black">
              {selected.adventureIndex}%
            </p>
          </div>

          <div className="h-3 bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-to-r from-red-500 via-orange-400 to-yellow-400 transition-all duration-700"
              style={{ width: `${selected.adventureIndex}%` }}
            />
          </div>
        </div>

        <div className="mb-7">
          <p className="text-gray-400 text-sm mb-3">Highlights</p>

          <div className="flex flex-wrap gap-2">
            {selected.highlights.map((item) => (
              <span
                key={item}
                className="px-4 py-2 rounded-full bg-white/[0.07] border border-white/10 text-sm text-gray-200"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <button className="w-full py-4 rounded-full bg-red-500 hover:bg-red-600 transition font-black tracking-wide">
          Start Journey
        </button>
      </div>
    </div>
  );
}

function Info({ title, value }) {
  return (
    <div className="rounded-2xl bg-white/[0.06] border border-white/10 p-4 hover:bg-white/[0.09] transition">
      <p className="text-gray-400 text-xs mb-2">{title}</p>
      <p className="text-white font-black text-base tracking-wide">{value}</p>
    </div>
  );
}