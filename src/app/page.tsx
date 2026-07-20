import Navbar from "@/components/home/Navbar";
import Hero from "@/components/home/Hero";
import PromoBanner from "@/components/home/promoBanner";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <PromoBanner />
    </main>
  );
}