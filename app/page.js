import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyIndia from "@/components/WhyIndia";
import IndiaAdventures from "@/components/IndiaAdventures";
import AdventureMap from "@/components/adventuremap/AdventureMap";
import TravelStories from "@/components/TravelStories";
import PassportStampCollection from "@/components/PassportStampCollection";

export default function Home() {
  return (
    <main>
      <Navbar />
<Hero />
<WhyIndia />
      < IndiaAdventures />
        <AdventureMap />
      <TravelStories />
<PassportStampCollection />
    </main>
  );
}