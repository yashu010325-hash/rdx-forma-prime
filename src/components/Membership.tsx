const plans = [
  { name: "Forma Core", price: "1,499", period: "/mo", desc: "Full access to floor, classes, and smart tracking.", features: ["24/7 smart access", "All group classes", "Locker & shower", "App fitness tracking"], featured: false },
  { name: "Forma Elite", price: "2,999", period: "/mo", desc: "1:1 coaching, personalized programming, and recovery zones.", features: ["Everything in Core", "Personal coach", "Custom programming", "Recovery & mobility lab", "InBody scans"], featured: true },
  { name: "Forma Athlete", price: "4,999", period: "/mo", desc: "Competition-level prep for powerlifters and athletes.", features: ["Everything in Elite", "Powerlifting team", "Sports physio access", "Nutrition planning", "Meet prep & coaching"], featured: false },
];

export function Membership() {
  return (
    <section id="membership" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Membership</span>
          <h2 className="mt-4 font-display text-4xl font-bold md:text-6xl">
            Pick your <span className="text-gradient-red">forma</span>.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Transparent pricing. No contracts. Cancel anytime — but you won't want to.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {plans.map((p) => (
            <article
              key={p.name}
              className={`relative flex flex-col rounded-3xl border p-8 transition-all hover:-translate-y-1 ${
                p.featured
                  ? "glass-red border-primary/50 shadow-glow lg:scale-105"
                  : "glass border-border"
              }`}
            >
              {p.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-primary-foreground">
                  Most Popular
                </span>
              )}
              <h3 className="font-display text-2xl font-bold">{p.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-sm text-muted-foreground">₹</span>
                <span className="font-display text-5xl font-bold text-gradient-red">{p.price}</span>
                <span className="text-muted-foreground">{p.period}</span>
              </div>
              <ul className="mt-6 space-y-3 text-sm">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="mt-1 inline-block h-1.5 w-1.5 flex-none rounded-full bg-primary" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`mt-8 inline-flex justify-center rounded-full px-6 py-3 text-sm font-semibold transition ${
                  p.featured
                    ? "bg-primary text-primary-foreground hover:scale-105"
                    : "glass hover:bg-white/10"
                }`}
              >
                Choose {p.name}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
