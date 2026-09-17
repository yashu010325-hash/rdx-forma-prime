import { CalendarClock, CameraOff, Clock3, Dumbbell, Footprints, ShieldCheck, Sparkles, Users } from "lucide-react";

const standards = [
  { icon: Clock3, title: "Training hours", text: "Monday–Saturday: 5:30 AM–10:00 PM. Sunday: 6:00 AM–11:00 AM. Festive holiday updates will be shared." },
  { icon: Footprints, title: "Come prepared", text: "Outside footwear is not permitted. Wear dedicated gym shoes and bring a personal face towel." },
  { icon: Dumbbell, title: "Own your space", text: "Keep gym bags off the workout floor, re-rack every weight, and avoid unnecessary weight dropping." },
  { icon: Sparkles, title: "Keep it clean", text: "Maintain personal hygiene, care for shared equipment, and do not touch the mirrors." },
  { icon: CameraOff, title: "Train with focus", text: "No flexing or recording during peak hours. Day-pass members may not take photos or videos." },
  { icon: CalendarClock, title: "Use recovery well", text: "Three, six, and twelve-month members receive up to four steam baths monthly; book one to two days ahead." },
  { icon: ShieldCheck, title: "Know your membership", text: "Memberships are non-pausable and non-refundable. Personal-training sessions must be completed within their monthly duration." },
  { icon: Users, title: "Protect the culture", text: "Respect members and trainers. Freelance coaching, misconduct, and unauthorized training are not permitted on the premises." },
];

export function GymStandards() {
  return (
    <section id="standards" className="relative overflow-hidden border-y border-border py-24 md:py-32">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">The RDX Code</span>
          <h2 className="mt-4 font-display text-4xl font-bold leading-tight md:text-6xl">
            Train strong.<br /><span className="text-gradient-red">Train respectfully.</span>
          </h2>
          <p className="mt-5 max-w-2xl text-muted-foreground">
            Positive energy starts with discipline. These shared standards keep every session focused, safe, and worthy of the RDX Forma name.
          </p>
        </div>

        <div className="mt-12 grid gap-x-12 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
          {standards.map((item) => (
            <div key={item.title} className="border-t border-border pt-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/15 text-primary ring-1 ring-primary/30">
                <item.icon className="h-5 w-5" />
              </div>
              <div className="mt-5">
                <h3 className="font-display text-base font-bold uppercase">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}