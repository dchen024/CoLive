'use client'

import Features from "@/components/ui/features";
import FeaturesBlocks from "@/components/ui/features-blocks";
import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";
import Hero from "@/components/ui/hero";



export default function Page() {
    return (
        <>
        <Header />
        <Hero />
        <Features />
        <FeaturesBlocks />
        <Footer />
        </>
    );
}