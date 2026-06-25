export default function BoardingPass({ active, month }) {
  return (
    <div className="overflow-hidden rounded-[2rem] bg-[#f4dfb8] shadow-xl">
      <div className="bg-[#21475a] p-5 text-[#f8e6bd]">
        <p className="tracking-[0.3em]">✈ BOARDING PASS</p>
      </div>

      <div className="grid grid-cols-[1fr_110px]">
        <div className="p-5">
          <Label title="Destination" value={active.name} />
          <Label title="Month" value={month} />
          <Label title="Adventure Class" value="Expedition" />

          <div className="mt-5 h-12 bg-[repeating-linear-gradient(90deg,#111_0_3px,transparent_3px_7px)]" />
        </div>

        <div className="flex items-center justify-center bg-[#21475a] text-center font-serif text-3xl font-black text-[#f8e6bd]">
          INDIA
        </div>
      </div>
    </div>
  );
}

function Label({ title, value }) {
  return (
    <div className="mb-4">
      <p className="text-xs font-bold uppercase tracking-widest text-[#8a522d]">
        {title}
      </p>
      <p className="font-serif text-2xl font-black">{value}</p>
    </div>
  );
}