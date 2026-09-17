import { QRCodeSVG } from "qrcode.react";
import { Crown, Zap, Home, Shield, Calendar, Activity } from "lucide-react";

const tiers = [
  {
    id: "RDX-ELITE-0001",
    name: "RDX FORMA ELITE",
    tag: "All-access · Personal coach",
    icon: Crown,
    accent: "from-primary via-primary to-accent",
    access: "All-access",
    perks: ["Unlimited 24/7 access", "1:1 elite coach", "BMI + diet plan", "Recovery suite"],
    bmi: "21.4",
    valid: "12 Dec 2026",
  },
  {
    id: "RDX-PRO-0042",
    name: "RDX FORMA PRO",
    tag: "Performance · Group coaching",
    icon: Zap,
    accent: "from-primary/80 via-primary/60 to-primary/30",
    access: "Performance",
    perks: ["Peak-hours access", "Group performance classes", "Quarterly BMI scan", "Workout analytics"],
    bmi: "22.8",
    valid: "08 Aug 2026",
  },
  {
    id: "RDX-HOME-0317",
    name: "RDX FORMA HOME",
    tag: "Hybrid · App-first",
    icon: Home,
    accent: "from-zinc-400/40 via-zinc-500/30 to-zinc-700/20",
    access: "Hybrid",
    perks: ["3 gym visits / week", "Home workout library", "Smart progress tracking", "Diet templates"],
    bmi: "24.1",
    valid: "20 Jun 2026",
  },
];

function MemberCard({ tier }: { tier: (typeof tiers)[number] }) {
  const Icon = tier.icon;
  return (
    <div className="group relative overflow-hidden rounded-3xl glass p-6 transition-all hover:-translate-y-1 hover:shadow-glow">
      <div className={`absolute inset-0 bg-gradient-to-br ${tier.accent} opacity-20 transition-opacity group-hover:opacity-40`} />
      <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full bg-primary/20 blur-3xl" />

      <div className="relative">
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-muted-foreground">
              <Icon className="h-3.5 w-3.5 text-primary" /> Digital Pass
            </div>
            <h3 className="mt-3 font-display text-2xl font-bold">{tier.name}</h3>
            <p className="text-xs text-muted-foreground">{tier.tag}</p>
          </div>
          <div className="rounded-xl bg-white p-2 ring-2 ring-primary/40 shadow-glow">
            <QRCodeSVG value={`https://rdxforma.app/m/${tier.id}`} size={68} bgColor="#ffffff" fgColor="#0a0a0a" level="M" />
          </div>
        </div>

        <div className="mt-6 grid grid-cols-3 gap-3 rounded-2xl border border-white/10 bg-black/30 p-3 text-center">
          <div>
            <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Member ID</div>
            <div className="mt-1 font-mono text-[11px] text-foreground">{tier.id}</div>
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-wider text-muted-foreground">BMI</div>
            <div className="mt-1 font-mono text-sm text-primary">{tier.bmi}</div>
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Valid</div>
            <div className="mt-1 font-mono text-[11px]">{tier.valid}</div>
          </div>
        </div>

        <ul className="mt-5 space-y-2 text-sm">
          {tier.perks.map((p) => (
            <li key={p} className="flex items-center gap-2 text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" /> {p}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex items-end justify-between">
          <div>
            <div className="font-display text-2xl font-bold text-gradient-red">{tier.access}</div>
            <div className="text-xs text-muted-foreground">Smart membership pass</div>
          </div>
          <button className="rounded-full bg-primary px-5 py-2 text-xs font-semibold uppercase tracking-wider text-primary-foreground shadow-glow transition hover:scale-105">
            Activate
          </button>
        </div>
      </div>
    </div>
  );
}

function ScannerGate() {
  return (
    <div className="relative overflow-hidden rounded-3xl glass-red p-8">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="relative grid items-center gap-8 md:grid-cols-2">
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">QR Entry Gate</span>
          <h3 className="mt-3 font-display text-3xl font-bold md:text-4xl">Scan. Verify. Enter.</h3>
          <p className="mt-3 text-sm text-muted-foreground">
            Touchless entry powered by RDX Forma Smart Pass. Real-time verification, attendance logging, and biometric-grade security — all in under 400ms.
          </p>
          <div className="mt-6 grid grid-cols-3 gap-3">
            {[
              { label: "Verified", value: "1,284", icon: Shield },
              { label: "Today", value: "412", icon: Calendar },
              { label: "Live", value: "87", icon: Activity },
            ].map((s) => (
              <div key={s.label} className="rounded-xl bg-black/40 p-3 text-center ring-1 ring-white/10">
                <s.icon className="mx-auto h-4 w-4 text-primary" />
                <div className="mt-1 font-display text-lg font-bold">{s.value}</div>
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto aspect-square w-full max-w-xs">
          <div className="absolute inset-0 rounded-3xl bg-black/60 ring-1 ring-primary/40" />
          <div className="absolute inset-6 rounded-2xl border-2 border-dashed border-primary/40" />
          {/* Corner brackets */}
          {["tl", "tr", "bl", "br"].map((c) => (
            <div
              key={c}
              className={`absolute h-8 w-8 border-primary ${
                c === "tl" ? "left-3 top-3 border-l-4 border-t-4" :
                c === "tr" ? "right-3 top-3 border-r-4 border-t-4" :
                c === "bl" ? "bottom-3 left-3 border-b-4 border-l-4" :
                "bottom-3 right-3 border-b-4 border-r-4"
              }`}
            />
          ))}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl bg-white p-2 shadow-glow">
            <QRCodeSVG value="https://rdxforma.app/gate/scan" size={120} fgColor="#0a0a0a" level="H" />
          </div>
          {/* Scan line */}
          <div className="pointer-events-none absolute inset-6 overflow-hidden rounded-2xl">
            <div className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent shadow-glow animate-[float_2.6s_ease-in-out_infinite]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function SmartPass() {
  return (
    <section id="dashboard" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Smart QR Ecosystem</span>
          <h2 className="mt-4 font-display text-4xl font-bold md:text-6xl">
            One pass. <span className="text-gradient-red">Total control.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Every RDX Forma member gets a unique smart QR pass — entry scanning, attendance, BMI, diet, workouts and analytics, unified in a single luxury fitness-tech ecosystem.
          </p>
        </div>

        {/* Membership Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {tiers.map((t) => <MemberCard key={t.id} tier={t} />)}
        </div>

        {/* Scanner */}
        <div className="mt-12">
          <ScannerGate />
        </div>
      </div>
    </section>
  );
}
