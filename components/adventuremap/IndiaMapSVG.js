
import Image from "next/image";
import RouteLine from "./RouteLine";

export default function IndiaMapSVG({ destinations, selected, setSelected }) {
  return (
    <div className="relative w-full rounded-[2rem] bg-black/45 backdrop-blur-xl border border-white/10 overflow-hidden shadow-2xl">
      <div className="relative h-[420px] md:h-[520px]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(239,68,68,0.12),transparent_65%)]" />

        <div className="absolute left-6 top-6 z-30">
          <p className="text-xs uppercase tracking-[0.35em] text-red-400 font-semibold">
            India Adventure Map
          </p>

          <h3 className="text-3xl md:text-4xl font-black mt-2 tracking-tight">
            <span className="bg-gradient-to-r from-white via-red-100 to-red-400 bg-clip-text text-transparent drop-shadow-[0_0_18px_rgba(239,68,68,0.35)]">
              Explore by Region
            </span>
          </h3>
        </div>

        <div className="absolute inset-0 flex items-center justify-center pt-16 pb-6">
          <div className="relative w-[88%] h-[88%]">
            <Image
              src="/image/map/india-map.jpg"
              alt="India map"
              fill
              className="object-contain invert opacity-70 drop-shadow-[0_0_35px_rgba(255,255,255,0.25)]"
            />
          </div>
        </div>

        <svg viewBox="0 0 500 620" className="relative w-full h-full z-20">
          <RouteLine selected={selected} />

          {destinations.map((place) => {
            const cx = place.x * 5;
            const cy = place.y * 6.2;
            const active = selected.id === place.id;

            return (
              <g
                key={place.id}
                onClick={() => setSelected(place)}
                className="cursor-pointer"
              >
                <line
                  x1={cx}
                  y1={cy}
                  x2={place.labelX}
                  y2={place.labelY}
                  stroke={active ? "#ef4444" : "rgba(255,255,255,0.28)"}
                  strokeWidth={active ? "1.6" : "1"}
                />

                {active && (
                  <circle
                    cx={cx}
                    cy={cy}
                    r="16"
                    fill="#ef4444"
                    opacity="0.2"
                  />
                )}

                <circle
                  cx={cx}
                  cy={cy}
                  r={active ? "7" : "5"}
                  fill={active ? "#ef4444" : "#ffffff"}
                  stroke="#ef4444"
                  strokeWidth="2"
                />

                <foreignObject
                  x={place.labelX - 5}
                  y={place.labelY - 16}
                  width="145"
                  height="34"
                >
                  <div
                    className={`inline-flex items-center rounded-full border px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] backdrop-blur-md transition ${
                      active
                        ? "bg-red-500 text-white border-red-300"
                        : "bg-black/60 text-white/75 border-white/10"
                    }`}
                  >
                    {place.name}
                  </div>
                </foreignObject>
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
}