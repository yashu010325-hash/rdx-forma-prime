import { ArrowUpRight, Clock3, Dumbbell, HeartPulse, ShieldCheck, Sparkles, Users } from "lucide-react";
import sopPoster from "@/assets/rdx-gym-sop.png.asset.json";

const standards = [
  { icon: Clock3, title: "Train on time", text: "5:30 AM–10:00 PM Monday to Saturday; 6:00 AM–11:00 AM Sundays." },
  { icon: Dumbbell, title: "Own your space", text: "Re-rack every weight, avoid unnecessary drops, and keep gym bags off the floor." },
  { icon: HeartPulse, title: "Move safely", text: "Wear proper training shoes, bring a face towel, and follow all floor safety guidance." },
  { icon: Sparkles, title: "Keep it clean", text: "Protect shared equipment, mirrors, and workout areas with high hygiene standards." },
  { icon: Users, title: "Respect the crew", text: "Support fellow members and coaches. Strong communities are built on mutual respect." },
  { icon: ShieldCheck, title: "Protect the culture", text: "Train responsibly and help keep RDX Forma focused, safe, and positive for everyone." },
];

export function GymStandards() {
  return (
    <section id="standards" className="relative overflow-hidden border-y border-border py-24 md:py-32">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">The RDX Code</span>
            <h2 className="mt-4 font-display text-4xl font-bold leading-tight md:text-6xl">
              Train strong.<br /><span className="text-gradient-red">Train respectfully.</span>
            </h2>
            <p className="mt-5 max-w-2xl text-muted-foreground">
              Positive energy starts with discipline. These shared standards keep every session focused, safe, and worthy of the RDX Forma name.
            </p>

            <div className="mt-10 grid gap-x-8 gap-y-7 sm:grid-cols-2">
              {standards.map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-primary/15 text-primary ring-1 ring-primary/30">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-bold uppercase">{item.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <a href={sopPoster.url} target="_blank" rel="noreferrer" className="group relative mx-auto block w-full max-w-lg overflow-hidden rounded-2xl border border-primary/30 shadow-card transition hover:border-primary/70">
            <img src={sopPoster.url} alt="Official RDX Forma standard operating system and gym rules" loading="lazy" className="w-full object-cover transition-transform duration-500 group-hover:scale-[1.015]" />
            <span className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-background/95 px-5 py-4 text-xs font-semibold uppercase tracking-wider backdrop-blur-xl">
              Read the complete gym SOP <ArrowUpRight className="h-4 w-4 text-primary" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}