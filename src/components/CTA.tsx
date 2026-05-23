export function CTA() {
  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/20 via-background to-background p-10 text-center md:p-20">
          <div className="absolute inset-0 bg-grid opacity-20" />
          <div className="absolute -top-20 left-1/2 h-60 w-60 -translate-x-1/2 rounded-full bg-primary/40 blur-3xl" />
          <div className="relative">
            <h2 className="font-display text-4xl font-bold leading-tight md:text-6xl">
              Your <span className="text-gradient-red">forma</span> starts today.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
              Book a free intro session. Tour the facility, meet the coaches, lift heavy.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <a href="#membership" className="rounded-full bg-primary px-7 py-4 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-105">
                Book Free Trial
              </a>
              <a href="tel:+910000000000" className="rounded-full glass px-7 py-4 text-sm font-semibold transition hover:bg-white/10">
                Call +91 00000 00000
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
