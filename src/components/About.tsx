import gym from "@/assets/gym-interior.jpg";

const pillars = [
  { title: "Strength", desc: "Powerlifting-grade racks, calibrated plates, competition platforms." },
  { title: "Discipline", desc: "Structured programming and weekly check-ins that compound results." },
  { title: "Transformation", desc: "Data-driven coaching from intake to peak — measurable progress only." },
  { title: "Recovery", desc: "Mobility zones, contrast therapy, and sports rehab on-site." },
];

export function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-br from-primary/20 to-transparent blur-3xl" />
            <img
              src={gym}
              alt="RDX Forma interior"
              loading="lazy"
              width={1600}
              height={1000}
              className="rounded-3xl border border-border object-cover shadow-card"
            />
          </div>
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">About RDX Forma</span>
            <h2 className="mt-4 font-display text-4xl font-bold leading-tight md:text-6xl">
              A training ecosystem<br />
              built for <span className="text-gradient-red">athletes</span>.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              RDX Forma is more than a gym — it's a high-performance ecosystem where
              powerlifters, athletes, and everyday warriors come to build the strongest
              version of themselves. Every square foot, every coach, every program is
              engineered around one outcome: real, measurable transformation.
            </p>
            <div className="mt-10 grid grid-cols-2 gap-4">
              {pillars.map((p) => (
                <div key={p.title} className="rounded-2xl glass p-5 transition-all hover:border-primary/40">
                  <div className="font-display text-xl font-bold text-foreground">{p.title}</div>
                  <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
