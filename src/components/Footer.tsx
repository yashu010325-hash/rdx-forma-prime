import logo from "@/assets/rdx-logo.jpg";

export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-3">
            <img src={logo} alt="RDX Forma" className="h-10 w-10 rounded-lg object-cover ring-1 ring-primary/40" />
            <div>
              <div className="font-display font-bold">RDX <span className="text-gradient-red">FORMA</span></div>
              <div className="text-xs text-muted-foreground">Build strength. Build discipline. Build your forma.</div>
            </div>
          </div>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#about" className="hover:text-foreground">About</a>
            <a href="#trainers" className="hover:text-foreground">Trainers</a>
            <a href="#programs" className="hover:text-foreground">Programs</a>
            <a href="#membership" className="hover:text-foreground">Membership</a>
          </div>
          <div className="text-center text-xs text-muted-foreground md:text-right">
            <a href="mailto:getfit@rdxforma.com" className="block uppercase hover:text-foreground">getfit@rdxforma.com</a>
            <a href="tel:+919121211025" className="mt-1 block hover:text-foreground">+91 91212 11025</a>
            <span className="mt-2 block">© {new Date().getFullYear()} RDX Forma. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
