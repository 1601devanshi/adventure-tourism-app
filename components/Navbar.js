
export default function Navbar() {
  return (
    <nav className="fixed left-1/2 top-5 z-50 w-[90%] max-w-7xl -translate-x-1/2 rounded-2xl bg-black px-6 py-5 text-white">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-500 text-xl font-bold">
            A
          </div>

          <h1 className="text-2xl font-extrabold tracking-wide">
            ADVENTURE<span className="text-red-500">.</span>TRAVEL
          </h1>
        </div>

        <div className="hidden items-center gap-8 text-lg md:flex">
          <a href="#" className="transition hover:text-red-400">
            Destinations
          </a>

          <a href="#" className="transition hover:text-red-400">
            Plan A Trip
          </a>

          <a href="#" className="transition hover:text-red-400">
            About
          </a>

          <a href="#" className="transition hover:text-red-400">
            Subscribe
          </a>
        </div>
      </div>
    </nav>
  );
}