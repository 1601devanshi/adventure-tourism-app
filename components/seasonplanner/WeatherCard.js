export default function WeatherCard({ active }) {
  return (
    <div className="mt-5 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
      <div className="rounded-2xl bg-[#f3dfb8] p-5 shadow">
        <p className="font-serif text-2xl font-black">Weather Overview</p>

        <div className="mt-4 flex items-center gap-4">
          <div className="text-5xl">🌦️</div>
          <div>
            <p className="font-serif text-5xl font-black">{active.weather}</p>
            <p className="italic">{active.weatherMood}</p>
          </div>
        </div>

        <div className="mt-5 grid grid-cols-3 gap-3 text-center">
          <Weather label="Rainfall" value={active.rainfall} />
          <Weather label="Humidity" value={active.humidity} />
          <Weather label="Wind" value={active.wind} />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Meter icon="👥" title="Crowd Level" value={active.crowd} />
        <Meter icon="💰" title="Budget Meter" value={active.budget} />
        <Meter icon="⚠️" title="Risk Alert" value={active.risk} />
      </div>
    </div>
  );
}

function Weather({ label, value }) {
  return (
    <div className="rounded-xl bg-[#fff0cc] p-3">
      <p className="text-xs">{label}</p>
      <p className="font-serif text-xl font-black">{value}</p>
    </div>
  );
}

function Meter({ icon, title, value }) {
  return (
    <div className="rounded-2xl bg-[#f3dfb8] p-4 shadow">
      <p className="text-3xl">{icon}</p>
      <p className="mt-2 text-sm font-bold">{title}</p>
      <p className="font-serif text-3xl font-black">{value}%</p>

      <div className="mt-3 h-3 overflow-hidden rounded-full bg-[#d0b27a]">
        <div
          className="h-full rounded-full bg-[#315f62] transition-all duration-700"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}