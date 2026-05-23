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

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "RDX Forma — Elite Strength & Performance Gym" },
      { name: "description", content: "Premium powerlifting, strength training, and smart fitness tracking under one ecosystem. Build strength. Build discipline. Build your forma." },
      { property: "og:title", content: "RDX Forma — Build Your Forma" },
      { property: "og:description", content: "Elite powerlifting, advanced strength training, and smart fitness tracking under one ecosystem." },
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
      <About />
      <Trainers />
      <Programs />
      <Membership />
      <CTA />
      <Footer />
    </main>
  );
}
