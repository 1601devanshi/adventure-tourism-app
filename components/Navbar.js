export default function Navbar() {
  return (
    <nav className="fixed top-5 left-1/2 z-50 w-[90%] max-w-7xl -translate-x-1/2 rounded-2xl bg-black/80 backdrop-blur-md">
      <div className="flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-500 text-white font-bold">
            A
          </div>

          <h1 className="text-xl font-bold tracking-wide text-white md:text-2xl">
            ADVENTURE
            <span className="text-red-500">.</span>
            TRAVEL
          </h1>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8 text-white">
          <a href="#" className="hover:text-red-400 transition">
            Destinations
          </a>

          <a href="#" className="hover:text-red-400 transition">
            Plan A Trip
          </a>

          <a href="#" className="hover:text-red-400 transition">
            About
          </a>

          <a href="#" className="hover:text-red-400 transition">
            Subscribe
          </a>
        </div>

        {/* Mobile Menu */}
        <button className="text-white md:hidden text-2xl">
          ☰
        </button>

      </div>
    </nav>
  );
}
