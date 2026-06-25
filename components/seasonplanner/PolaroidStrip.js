export default function PolaroidStrip({ places, active, onSelect }) {
  return (
    <div className="mt-6 flex gap-4 overflow-x-auto pb-2">
      {places.map((place) => (
        <button
          key={place.name}
          onClick={() => onSelect(place)}
          className={`min-w-[120px] rounded-xl bg-[#f3dfb8] p-2 shadow transition hover:-translate-y-2 ${
            active.name === place.name ? "ring-4 ring-[#f5c76b]" : ""
          }`}
        >
          <img
            src={place.image}
            alt={place.name}
            className="h-20 w-full rounded-lg object-cover"
          />

          <p className="mt-2 text-center font-serif text-sm font-black">
            {place.name}
          </p>
        </button>
      ))}
    </div>
  );
}