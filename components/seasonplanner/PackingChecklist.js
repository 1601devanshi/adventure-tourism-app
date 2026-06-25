export default function PackingChecklist({ active, month }) {
  return (
    <>
      <div className="rounded-[2rem] bg-[#f4dfb8] p-5 shadow-xl">
        <p className="font-serif text-2xl font-black">Handwritten Notes</p>

        <p className="mt-4 font-serif text-2xl italic leading-9">
          Take the scenic route. Stop often. Every destination has a different
          rhythm in {month}.
        </p>
      </div>

      <div className="rounded-[2rem] bg-[#f4dfb8] p-5 shadow-xl">
        <p className="font-serif text-2xl font-black">Packing Checklist</p>

        <div className="mt-4 space-y-2">
          {active.pack.map((item, index) => (
            <div
              key={item}
              className="flex items-center gap-3 font-serif text-lg"
              style={{
                animation: `pinDrop .35s ease ${index * 0.08}s both`,
              }}
            >
              <span className="rounded bg-[#7b8f55] px-2 text-white">✓</span>
              {item}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}