import Image from "next/image";
import Hero from "@/components/ui/hero";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import FeaturesBlocks from "@/components/ui/features-blocks";
import Features from "@/components/ui/features";

export default function Home() {
  return (
    <main className=" flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">
      <Header />
      <Hero />
      <Features />
      <FeaturesBlocks />
      <Footer />
    </main>
  );
}
