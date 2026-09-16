import { ArrowUpRight, Check, Dumbbell } from "lucide-react";
import pricingPoster from "@/assets/rdx-membership-pricing.png.asset.json";

const memberships = [
  { duration: "1 Month", price: "₹7,499" },
  { duration: "3 Months", price: "₹16,999", note: "Build momentum" },
  { duration: "6 Months", price: "₹22,999", note: "Commit stronger" },
  { duration: "12 Months", price: "₹33,999", note: "Best value", featured: true },
];

const personalTraining = [
  { sessions: "12 PT Sessions", price: "₹15,000" },
  { sessions: "24 PT Sessions", price: "₹24,000" },
];

export function Membership() {
  return (
    <section id="membership" className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-start gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div className="lg:sticky lg:top-28">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Official Membership Pricing</span>
            <h2 className="mt-4 font-display text-4xl font-bold leading-tight md:text-6xl">
              Choose the commitment.<br /><span className="text-gradient-red">Earn the result.</span>
            </h2>
            <p className="mt-5 max-w-xl text-muted-foreground">
              Straightforward access for every stage of your journey, backed by a facility built for serious progress.
            </p>
            <a
              href={pricingPoster.url}
              target="_blank"
              rel="noreferrer"
              className="group mt-8 block overflow-hidden rounded-2xl border border-primary/30 shadow-card transition hover:border-primary/70"
            >
              <img src={pricingPoster.url} alt="Official RDX Forma membership and personal training price list" loading="lazy" className="w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]" />
              <span className="flex items-center justify-between bg-secondary px-4 py-3 text-xs font-semibold uppercase tracking-wider">
                View full pricing poster <ArrowUpRight className="h-4 w-4 text-primary" />
              </span>
            </a>
          </div>

          <div>
            <div className="border-y border-border">
              {memberships.map((plan, index) => (
                <article key={plan.duration} className={`group relative grid grid-cols-[1fr_auto] items-center gap-4 border-b border-border px-1 py-6 last:border-b-0 md:px-5 ${plan.featured ? "bg-primary/10" : ""}`}>
                  <div className="flex min-w-0 items-center gap-4">
                    <span className="font-mono text-xs text-primary">0{index + 1}</span>
                    <div>
                      <h3 className="font-display text-xl font-bold md:text-2xl">{plan.duration}</h3>
                      {plan.note && <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{plan.note}</p>}
                    </div>
                  </div>
                  <div className="text-right font-display text-2xl font-bold text-gradient-red md:text-4xl">{plan.price}</div>
                </article>
              ))}
            </div>

            <div className="mt-10">
              <div className="flex items-center gap-3">
                <Dumbbell className="h-5 w-5 text-primary" />
                <h3 className="font-display text-2xl font-bold">Personal Training</h3>
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {personalTraining.map((plan) => (
                  <div key={plan.sessions} className="glass-red flex items-center justify-between rounded-xl p-5">
                    <span className="text-sm font-semibold">{plan.sessions}</span>
                    <span className="font-display text-xl font-bold text-primary">{plan.price}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 flex items-start gap-3 border-l-2 border-primary bg-primary/10 p-5">
              <Check className="mt-0.5 h-5 w-5 flex-none text-primary" />
              <div>
                <div className="font-display text-lg font-bold">5% GST applies to all membership plans.</div>
                <p className="mt-1 text-sm text-muted-foreground">Speak with the RDX Forma team to confirm availability and begin your membership.</p>
              </div>
            </div>

            <a href="#contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-105">
              Start Your Transformation <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
