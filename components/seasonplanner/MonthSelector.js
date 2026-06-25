export default function MonthSelector({ months, month, onSelect, count }) {
  return (
    <>
      <h3 className="mb-4 text-center font-serif text-2xl font-black">
        PICK YOUR MONTH
      </h3>

      <div className="grid grid-cols-3 gap-3">
        {months.map((item) => (
          <button
            key={item}
            onClick={() => onSelect(item)}
            className={`rounded-xl border px-3 py-4 font-serif text-xl font-black transition hover:-translate-y-1 ${
              month === item
                ? "border-[#a95d2b] bg-[#b9652d] text-white shadow-lg"
                : "border-[#d2b77f] bg-[#f8eacd] text-[#594125]"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="mt-6 rounded-2xl bg-[#ead4a9] p-4">
        <p className="text-center text-sm font-bold uppercase tracking-widest">
          Destinations Found
        </p>
        <p className="mt-2 text-center font-serif text-5xl font-black">
          {count}
        </p>
      </div>
    </>
  );
}