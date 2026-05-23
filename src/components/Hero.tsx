import hero from "@/assets/hero-athlete.jpg";
import { Counter } from "./Counter";

const stats = [
  { value: 5000, suffix: "+", label: "Active Members" },
  { value: 25, suffix: "+", label: "Expert Trainers" },
  { value: 24, suffix: "/7", label: "Smart Access" },
  { value: 100, suffix: "+", label: "Premium Equipment" },
];

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden bg-hero pt-32 pb-20">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <img
        src={hero}
        alt="RDX Forma athlete deadlifting"
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover opacity-50 mix-blend-luminosity"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-4xl animate-fade-up">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full glass-red px-4 py-2 text-xs font-medium uppercase tracking-widest text-primary">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
            Elite Performance Center · Now Open
          </div>
          <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl lg:text-8xl">
            BUILD STRENGTH.<br />
            BUILD DISCIPLINE.<br />
            BUILD YOUR <span className="text-gradient-red">FORMA</span>.
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground md:text-xl">
            Elite powerlifting, advanced strength training, and smart fitness tracking — under one ecosystem engineered for athletes who refuse average.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#membership"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-105"
            >
              Join RDX FORMA
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#membership"
              className="inline-flex items-center gap-2 rounded-full glass px-7 py-4 text-sm font-semibold transition-colors hover:bg-white/10"
            >
              Explore Memberships
            </a>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 gap-4 md:mt-28 md:grid-cols-4 md:gap-6">
          {stats.map((s) => (
            <div key={s.label} className="rounded-2xl glass p-6 transition-all hover:border-primary/40 hover:bg-primary/5">
              <div className="font-display text-3xl font-bold text-gradient-red md:text-5xl">
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-2 text-xs uppercase tracking-wider text-muted-foreground md:text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
