import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import slide1 from "@/assets/slide-1.png";
import slide2 from "@/assets/slide-2.png";
import slide3 from "@/assets/slide-3.png";
import slide4 from "@/assets/slide-4.png";
import slide5 from "@/assets/slide-5.png";
import slide6 from "@/assets/slide-6.png";
import { Counter } from "./Counter";

const slides = [
  { img: slide1, kicker: "Why Choose Us", title: "RESULTS. TRAINERS. VIBE.", sub: "Step inside the arena built for athletes who refuse average." },
  { img: slide2, kicker: "Premium Equipment", title: "INTERNATIONAL GRADE MACHINES", sub: "Engineered for serious training and real, measurable results." },
  { img: slide3, kicker: "Expert Trainers", title: "CERTIFIED. PERSONAL. PROVEN.", sub: "Coaching that adapts to your body, goals, and tempo." },
  { img: slide4, kicker: "Power-Packed Ambience", title: "TRAIN HARDER. STAY MOTIVATED.", sub: "Feel the energy. Move with intention. Build your forma." },
  { img: slide5, kicker: "Strength Lab", title: "WHERE STEEL MEETS DISCIPLINE", sub: "A space designed around performance, not aesthetics alone." },
  { img: slide6, kicker: "Ready To Transform", title: "BUILD WITH THE BEST.", sub: "Join the RDX Forma community and rewrite your limits." },
];

const stats = [
  { value: 5000, suffix: "+", label: "Active Members" },
  { value: 25, suffix: "+", label: "Expert Trainers" },
  { value: 24, suffix: "/7", label: "Smart Access" },
  { value: 100, suffix: "+", label: "Premium Equipment" },
];

export function Hero() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % slides.length), 5500);
    return () => clearInterval(t);
  }, []);

  const go = (delta: number) => setIdx((i) => (i + delta + slides.length) % slides.length);

  return (
    <section id="top" className="relative min-h-screen overflow-hidden bg-background">
      {/* Slides */}
      {slides.map((s, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-[1400ms] ease-in-out"
          style={{ opacity: i === idx ? 1 : 0 }}
          aria-hidden={i !== idx}
        >
          <img src={s.img} alt={s.title} className="h-full w-full object-cover scale-105 animate-[float_18s_ease-in-out_infinite]" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-background/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
          <div className="absolute inset-0 bg-grid opacity-20" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pt-28 pb-20">
        <div key={idx} className="max-w-3xl animate-fade-up">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full glass-red px-4 py-2 text-xs font-medium uppercase tracking-[0.3em] text-primary">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
            {slides[idx].kicker}
          </div>
          <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl lg:text-8xl">
            <span className="text-gradient-red">{slides[idx].title}</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">{slides[idx].sub}</p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#membership" className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-105">
              Join RDX FORMA <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a href="#dashboard" className="inline-flex items-center gap-2 rounded-full glass px-7 py-4 text-sm font-semibold transition-colors hover:bg-white/10">
              Explore Smart Pass
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 gap-4 md:mt-20 md:grid-cols-4 md:gap-6">
          {stats.map((s) => (
            <div key={s.label} className="rounded-2xl glass p-5 transition-all hover:border-primary/40 hover:bg-primary/5">
              <div className="font-display text-3xl font-bold text-gradient-red md:text-5xl">
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-2 text-xs uppercase tracking-wider text-muted-foreground md:text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Arrows */}
      <button onClick={() => go(-1)} aria-label="Previous slide" className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full glass p-3 transition hover:bg-primary/20 hover:border-primary/50 md:left-8">
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button onClick={() => go(1)} aria-label="Next slide" className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full glass p-3 transition hover:bg-primary/20 hover:border-primary/50 md:right-8">
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-1.5 rounded-full transition-all ${i === idx ? "w-10 bg-primary shadow-glow" : "w-4 bg-white/30 hover:bg-white/60"}`}
          />
        ))}
      </div>
    </section>
  );
}
