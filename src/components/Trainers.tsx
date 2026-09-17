import { useRef } from "react";

const trainers = [
  { name: "Aarav Rana", expertise: "Powerlifting Coach", years: 12, certs: ["IPF L3", "NSCA-CSCS"], specs: ["Powerlifting", "Strength & Conditioning"] },
  { name: "Maya Sehgal", expertise: "Women's Fitness & Fat Loss", years: 8, certs: ["ACE-CPT", "PN L2"], specs: ["Fat Loss", "Women's Fitness"] },
  { name: "Kabir Malhotra", expertise: "Sports Rehabilitation", years: 10, certs: ["DPT", "FRC"], specs: ["Rehab", "Mobility & Recovery"] },
  { name: "Riya Kapoor", expertise: "Bodybuilding Prep", years: 9, certs: ["IFBB Pro", "ISSA"], specs: ["Bodybuilding Prep", "Functional"] },
];

export function Trainers() {
  const scroller = useRef<HTMLDivElement>(null);
  const scroll = (dir: number) => {
    scroller.current?.scrollBy({ left: dir * 360, behavior: "smooth" });
  };
  return (
    <section id="trainers" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between gap-6">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Coaches</span>
            <h2 className="mt-4 font-display text-4xl font-bold md:text-6xl">
              Meet the <span className="text-gradient-red">specialists</span>.
            </h2>
            <p className="mt-4 max-w-xl text-muted-foreground">
              Internationally certified coaches behind every transformation that walks out of our doors.
            </p>
          </div>
          <div className="hidden gap-2 md:flex">
            <button onClick={() => scroll(-1)} aria-label="Previous" className="flex h-12 w-12 items-center justify-center rounded-full glass transition hover:bg-primary/20">←</button>
            <button onClick={() => scroll(1)} aria-label="Next" className="flex h-12 w-12 items-center justify-center rounded-full glass transition hover:bg-primary/20">→</button>
          </div>
        </div>

        <div
          ref={scroller}
          className="mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {trainers.map((t) => (
            <article
              key={t.name}
              className="group relative w-[300px] flex-none snap-start overflow-hidden rounded-3xl border border-border glass transition-all hover:border-primary/50 hover:-translate-y-1"
            >
              <div className="p-6">
                <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-full border border-primary/40 bg-primary/10 font-display text-lg font-bold text-primary">
                  {t.name.split(" ").map((part) => part[0]).join("")}
                </div>
                <h3 className="font-display text-xl font-bold">{t.name}</h3>
                <div className="mt-1 text-sm text-primary">{t.expertise}</div>
                <div className="mt-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">{t.years}+ years experience</div>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {t.specs.map((s) => (
                    <span key={s} className="rounded-full bg-secondary px-2.5 py-1 text-[11px] text-muted-foreground">
                      {s}
                    </span>
                  ))}
                </div>
                <div className="mt-4 border-t border-border pt-4 text-[11px] uppercase tracking-wider text-muted-foreground">
                  {t.certs.join(" · ")}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
