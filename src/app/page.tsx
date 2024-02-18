import Image from "next/image";
import { UserButton, SignOutButton } from "@clerk/nextjs";
import { createClient } from "@/utils/supabase/client";
import Header from "@/components/ui/header";
import Hero from "@/components/ui/hero";
import Features from "@/components/ui/features";
import FeaturesBlocks from "@/components/ui/features-blocks";
import Footer from "@/components/ui/footer";

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-between p-20">
      <Header />
      <Hero />
      <Footer />
    </main>
  );
}
