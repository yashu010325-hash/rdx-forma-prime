import logo from "@/assets/rdx-logo.jpg";

export function IntroVideo() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex flex-col items-center text-center">
          <img src={logo} alt="RDX Forma logo" className="mb-6 h-20 w-20 rounded-2xl object-cover ring-2 ring-primary/40 shadow-glow" />
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Inside RDX Forma</span>
          <h2 className="mt-4 max-w-3xl font-display text-4xl font-bold md:text-6xl">
            Step inside the <span className="text-gradient-red">arena</span>.
          </h2>
        </div>
        <div className="relative overflow-hidden rounded-3xl glass-red shadow-glow">
          <video
            src="/videos/rdx-intro.mp4"
            autoPlay
            muted
            loop
            playsInline
            controls
            className="aspect-video w-full object-cover"
          />
          <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-primary/30" />
        </div>
      </div>
    </section>
  );
}
