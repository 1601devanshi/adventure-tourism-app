export default function TravelBrief({ active, month }) {
  return (
    <div
      key={active.name}
      className="relative overflow-hidden rounded-[1.5rem] bg-cover bg-center p-6 shadow-inner"
      style={{
        animation: "pageFlip .45s ease",
        backgroundImage: `url(${active.image})`,
      }}
    >
      <div className="absolute inset-0 bg-[#f4dfb8]/90 backdrop-blur-[1px]" />

      <div className="relative z-10">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="font-serif text-5xl font-black">{active.name}</p>
            <p className="mt-1 text-xl italic text-[#8a522d]">
              {active.mood}
            </p>
          </div>

          <div
            key={active.name + month}
            className="rounded-full border-[5px] border-[#a24b2a] px-5 py-4 text-center font-serif text-xl font-black uppercase text-[#a24b2a]"
            style={{ animation: "stampPop .35s ease-out" }}
          >
            {active.name}
            <span className="block text-xs">{month} Adventure</span>
          </div>
        </div>

        <p className="mt-6 max-w-2xl border-l-4 border-[#8a522d] pl-4 font-serif text-2xl leading-9">
          {active.note}
        </p>

        <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
          <Tiny icon="👥" title="Best For" value={active.bestFor} />
          <Tiny icon="🚲" title="Adventure" value={active.activity} />
          <Tiny icon="⛰️" title="Altitude" value={active.altitude} />
          <Tiny icon="⏱️" title="Duration" value={active.duration} />
        </div>

        <div className="mt-6 rounded-2xl border border-[#c49d65] bg-[#fff0cc]/90 p-4">
          <p className="font-serif text-xl font-black">Explorer&apos;s Note</p>
          <p className="mt-3 overflow-hidden whitespace-nowrap font-serif text-xl italic text-[#5d4026]">
            Roads are open, weather is alive, and every turn has a story...
          </p>
        </div>
      </div>
    </div>
  );
}

function Tiny({ icon, title, value }) {
  return (
    <div className="rounded-xl border border-[#c49d65] bg-[#fff0cc]/90 p-3">
      <p className="text-2xl">{icon}</p>
      <p className="mt-1 text-xs font-bold">{title}</p>
      <p className="font-serif text-lg font-black">{value}</p>
    </div>
  );
}