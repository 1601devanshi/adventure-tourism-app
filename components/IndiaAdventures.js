
import { FaPlane } from "react-icons/fa";
import { Dancing_Script } from "next/font/google";

const dancing = Dancing_Script({
  subsets: ["latin"],
  weight: ["700"],
});



const adventures = [
  {
    title: "Into The Wild",
    place: "Ranthambore, Rajasthan",
    image: "/image/Ranthambore.jpg",
    icon: "🐾",
  },
  {
    title: "Ride The Rapids",
    place: "Rishikesh, Uttarakhand",
    image: "/image/rishikesh.jpg",
    icon: "🌊",
  },
  {
    title: "Trek Beyond Limits",
    place: "Manali, Himachal Pradesh",
    image: "/image/manali.jpg",
    icon: "⛰️",
  },
  {
    title: "On The Road To Freedom",
    place: "Leh Ladakh, J&K",
    image: "/image/ladakh.jpg",
    icon: "🛣️",
  },
  {
    title: "Fly Above Everything",
    place: "Bir Billing, Himachal",
    image: "/image/bg.jpg",
    icon: "🪂",
  },
  {
    title: "Dive Into Blue Bliss",
    place: "Andaman Islands",
    image: "/image/andaman.jpg",
    icon: "🤿",
  },
];

export default function IndiaAdventures() {
  return (
    <section className="bg-black text-white px-6 md:px-12 py-24">
      <div className="text-center mb-16">
        <p className="text-red-500 uppercase tracking-[10px] text-sm font-bold mb-4">
          CURATED FOR EXPLORERS
        </p>

        <h2 className="text-4xl md:text-6xl font-extrabold mb-5">
  Experiences That{" "}
  <span
    className={`${dancing.className} text-red-500 text-6xl md:text-8xl font-bold`}
  >
    India
  </span>{" "}
  Was Made For{" "}
  <FaPlane className="inline-block text-red-500 text-3xl md:text-4xl ml-2 -rotate-12" />
</h2>

       


<p className="text-gray-400 max-w-3xl mx-auto text-lg">
From towering peaks to roaring rivers and endless coastlines,
          discover unforgettable adventures across{" "}
          <span className="text-yellow-400 font-semibold">
            Incredible India
          </span>
          .
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-5">
        {adventures.map((item, index) => (
          <div
            key={index}
            className="group relative h-[430px] rounded-3xl overflow-hidden border border-white/10 cursor-pointer transition-all duration-500 hover:-translate-y-3 hover:border-red-500/60"
          >
            <img
              src={item.image}
              alt={item.title}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-700"
            />

            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/50 transition duration-500"></div>

            <div className="absolute top-5 left-5 z-20 w-12 h-12 rounded-full bg-black/70 backdrop-blur-md flex items-center justify-center text-xl">
              {item.icon}
            </div>

            <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-all duration-500 bg-gradient-to-t from-black via-black/95 to-transparent p-5">
              <p className="text-sm text-gray-300 mb-2">📍 {item.place}</p>

              <h3 className="text-2xl font-bold mb-4 leading-tight">
                {item.title}
              </h3>

              <button className="w-11 h-11 rounded-full border border-red-500 text-red-500 flex items-center justify-center hover:bg-red-500 hover:text-white transition">
                →
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-14 bg-white/5 border border-white/10 rounded-3xl p-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="text-center">
          <div className="text-3xl mb-2 text-red-500">📍</div>
          <h4 className="font-bold">Handpicked Locations</h4>
          <p className="text-gray-400 text-sm">Curated best by explorers</p>
        </div>

        <div className="text-center">
          <div className="text-3xl mb-2 text-red-500">🛡️</div>
          <h4 className="font-bold">Safe & Trusted</h4>
          <p className="text-gray-400 text-sm">Your safety is our priority</p>
        </div>

        <div className="text-center">
          <div className="text-3xl mb-2 text-red-500">👨‍💼</div>
          <h4 className="font-bold">Expert Guides</h4>
          <p className="text-gray-400 text-sm">
            Local experts, real experiences
          </p>
        </div>

        <div className="text-center">
          <div className="text-3xl mb-2 text-red-500">📸</div>
          <h4 className="font-bold">Unforgettable Memories</h4>
          <p className="text-gray-400 text-sm">
            Stories you'll cherish forever
          </p>
        </div>
      </div>
    </section>
  );
}