import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { IntroVideo } from "@/components/IntroVideo";
import { About } from "@/components/About";
import { Trainers } from "@/components/Trainers";
import { Programs } from "@/components/Programs";
import { SmartPass } from "@/components/SmartPass";
import { Membership } from "@/components/Membership";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { GymStandards } from "@/components/GymStandards";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "RDX Forma — Elite Strength & Performance Gym" },
      { name: "description", content: "Premium powerlifting, strength training, and smart fitness tracking under one ecosystem. Build strength. Build discipline. Build your forma." },
      { property: "og:title", content: "RDX Forma — Build Your Forma" },
      { property: "og:description", content: "Elite powerlifting, advanced strength training, and smart fitness tracking under one ecosystem." },
       { property: "og:type", content: "website" },
       { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-background text-foreground">
      <Navbar />
      <Hero />
      <IntroVideo />
      <div aria-label="RDX Forma motto" className="overflow-hidden border-y border-primary/30 bg-primary py-4 text-primary-foreground">
        <div className="flex min-w-max animate-marquee items-center gap-10 font-display text-xl font-bold uppercase md:text-3xl">
          {["Lift", "Move", "Evolve", "Lift", "Move", "Evolve", "Lift", "Move", "Evolve", "Lift", "Move", "Evolve"].map((word, index) => (
            <span key={`${word}-${index}`} className="flex items-center gap-10">
              {word}<span aria-hidden="true">✦</span>
            </span>
          ))}
        </div>
      </div>
      <About />
      <Trainers />
        <Programs />
        <Membership />
        <GymStandards />
        <SmartPass />
      <CTA />
      <Footer />
    </main>
  );
}
