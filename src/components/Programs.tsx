import squat from "@/assets/action-squat.jpg";
import grip from "@/assets/action-grip.jpg";
import ropes from "@/assets/action-ropes.jpg";

const programs = [
  { img: squat, tag: "Strength", title: "Powerlifting Academy", desc: "Squat, bench, deadlift — programmed by national-level coaches with weekly intensity tracking.", h: "lg:row-span-2" },
  { img: grip, tag: "Hybrid", title: "Strength & Conditioning", desc: "Athlete-grade conditioning to build engine and explosive output." },
  { img: ropes, tag: "Performance", title: "Functional Athletic", desc: "Movement, mobility, and metabolic work fused into one daily session." },
];

export function Programs() {
  return (
    <section id="programs" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Programs</span>
          <h2 className="mt-4 font-display text-4xl font-bold md:text-6xl">
            Train with <span className="text-gradient-red">intent</span>.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Six signature programs. One ecosystem. Pick your protocol — we'll handle the science.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3 lg:grid-rows-2">
          {programs.map((p, i) => (
            <article
              key={p.title}
              className={`group relative overflow-hidden rounded-3xl border border-border ${p.h ?? ""} ${i === 0 ? "min-h-[420px] lg:min-h-0" : "min-h-[280px]"}`}
            >
              <img src={p.img} alt={p.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
              <div className="relative flex h-full flex-col justify-end p-7">
                <span className="mb-3 inline-flex w-fit rounded-full glass-red px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary">{p.tag}</span>
                <h3 className="font-display text-2xl font-bold md:text-3xl">{p.title}</h3>
                <p className="mt-2 max-w-md text-sm text-muted-foreground">{p.desc}</p>
                <div className="mt-4 inline-flex w-fit items-center gap-2 text-sm font-semibold text-primary transition-transform group-hover:translate-x-1">
                  Explore program →
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
