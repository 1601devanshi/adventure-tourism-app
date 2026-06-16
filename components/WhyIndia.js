
"use client";

const cards = [
  {
    title: "Himalayan Adventures",
    tag: "Mountains • Treks • Roads",
    image: "/whyindia/himalaya.jpg",
    description:
      "Walk through snow valleys, ride on dramatic mountain roads and experience the raw beauty of India’s Himalayas.",
    points: ["Trekking trails", "Bike expeditions", "Camping nights"],
  },
  {
    title: "Wildlife Experiences",
    tag: "Forests • Safaris • Tigers",
    image: "/whyindia/jungle.jpg",
    description:
      "India’s forests are not just scenic — they are alive with tigers, elephants, rhinos and unforgettable safari moments.",
    points: ["Tiger safaris", "National parks", "Rare wildlife"],
  },
  {
    title: "Water Adventures",
    tag: "Rivers • Islands • Ocean",
    image: "/whyindia/water.jpg",
    description:
      "From river rafting in Rishikesh to scuba diving in Andaman, India gives every water lover a reason to dive in.",
    points: ["Rafting", "Scuba diving", "Surfing"],
  },
  {
    title: "Culture & Heritage",
    tag: "Stories • Food • Traditions",
    image: "/whyindia/heritage.jpg",
    description:
      "Every adventure in India comes with local food, ancient places, colorful festivals and stories you remember forever.",
    points: ["Local culture", "Historic places", "Food experiences"],
  },
];

export default function WhyIndia() {
  return (
    <section className="bg-black text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-red-500 uppercase tracking-[0.3em] text-sm mb-4">
            Why India?
          </p>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Why Every Adventure Begins Here
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto">
            India is not just one destination — it is mountains, forests,
            rivers, islands, culture and thrill packed into one unforgettable journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card) => (
            <div key={card.title} className="group h-[460px] [perspective:1200px]">
              <div className="relative h-full w-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                
                {/* Front */}
                <div className="absolute inset-0 rounded-3xl overflow-hidden [backface-visibility:hidden]">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="h-full w-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/10"></div>

                  <div className="absolute bottom-0 p-7">
                    <p className="text-red-400 text-sm font-semibold mb-3">
                      {card.tag}
                    </p>

                    <h3 className="text-3xl font-bold leading-tight">
                      {card.title}
                    </h3>
                  </div>
                </div>

                {/* Back */}
                <div className="absolute inset-0 rounded-3xl overflow-hidden bg-zinc-950 border border-red-500/40 p-8 flex flex-col justify-between [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <div>
                    <p className="text-red-500 uppercase tracking-[0.25em] text-xs mb-4">
                      Why it matters
                    </p>

                    <h3 className="text-3xl font-bold mb-5">
                      {card.title}
                    </h3>

                    <p className="text-gray-300 leading-relaxed mb-6">
                      {card.description}
                    </p>

                    <div className="space-y-3">
                      {card.points.map((point) => (
                        <div
                          key={point}
                          className="flex items-center gap-3 text-sm text-gray-300"
                        >
                          <span className="h-2 w-2 rounded-full bg-red-500"></span>
                          {point}
                        </div>
                      ))}
                    </div>
                  </div>

                  <button className="mt-8 w-full py-3 rounded-full bg-red-600 font-semibold hover:bg-red-700 transition">
                    Explore This Side
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}