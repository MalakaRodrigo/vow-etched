import { useCallback, useEffect, useState, type FormEvent } from "react";
import { ChevronLeft, ChevronRight, Heart, MapPin, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { wedding } from "@/data/wedding";

const navItems = [
  ["Home", "home"], ["Story", "story"], ["Details", "details"],
  ["Gallery", "gallery"], ["RSVP", "rsvp"], ["Venue", "venue"],
] as const;

function Monogram() {
  return <span className="font-display text-2xl italic" aria-label={`${wedding.couple.first} and ${wedding.couple.second}`}>R<span className="mx-1 text-accent">&</span>M</span>;
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="mb-5 font-sans text-[0.65rem] uppercase tracking-[0.28em] text-primary">{children}</p>;
}

function SectionHeading({ eyebrow, children, light = false }: { eyebrow: string; children: React.ReactNode; light?: boolean }) {
  return (
    <div className="reveal text-center">
      <p className={`mb-5 font-sans text-[0.65rem] uppercase tracking-[0.28em] ${light ? "text-champagne" : "text-primary"}`}>{eyebrow}</p>
      <h2 className={`font-display text-4xl font-normal leading-tight sm:text-5xl ${light ? "text-ivory" : "text-foreground"}`}>{children}</h2>
    </div>
  );
}

export function WeddingInvitation() {
  const [opened, setOpened] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!opened) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")),
      { threshold: 0.12 },
    );
    document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [opened]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <main className="overflow-x-clip bg-background text-foreground">
      <WeddingCover opened={opened} onOpen={() => setOpened(true)} />
      <div className={opened ? "invitation-open" : "invitation-closed"} aria-hidden={!opened}>
        <FloatingNavigation menuOpen={menuOpen} setMenuOpen={setMenuOpen} scrollTo={scrollTo} />
        <HeroSection />
        <Countdown />
        <OurStory />
        <WeddingDetails />
        <WeddingSchedule />
        <PhotoGallery />
        <Venue />
        <Rsvp />
        <ClosingSection />
      </div>
    </main>
  );
}

function WeddingCover({ opened, onOpen }: { opened: boolean; onOpen: () => void }) {
  return (
    <section className={`cover ${opened ? "cover-open" : ""}`} aria-label="Wedding invitation cover">
      <div className="cover-paper">
        <div className="cover-rule" />
        <p className="font-sans text-[0.6rem] uppercase tracking-[0.34em] text-muted-foreground">The wedding of</p>
        <div className="my-10 font-display text-[clamp(3.6rem,17vw,6.5rem)] leading-[0.74] text-foreground">
          <span className="block">{wedding.couple.first}</span>
          <span className="my-5 block text-3xl italic text-primary">&</span>
          <span className="block">{wedding.couple.second}</span>
        </div>
        <p className="font-sans text-[0.68rem] uppercase tracking-[0.3em] text-foreground">{wedding.date.display}</p>
        <Button variant="ghost" className="mt-14 border-b border-primary pb-2" onClick={onOpen} aria-label="Open the wedding invitation">
          Open invitation <span aria-hidden="true">↓</span>
        </Button>
        <div className="cover-rule" />
      </div>
    </section>
  );
}

function FloatingNavigation({ menuOpen, setMenuOpen, scrollTo }: { menuOpen: boolean; setMenuOpen: (open: boolean) => void; scrollTo: (id: string) => void }) {
  return (
    <>
      <div className="fixed inset-x-0 top-0 z-40 flex h-20 items-center justify-between px-5 text-ivory mix-blend-difference sm:px-8">
        <Monogram />
        <Button variant="ghost" className="h-12 w-12 p-0 text-inherit" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen}>
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </Button>
      </div>
      <div className={`fixed inset-0 z-30 grid place-items-center bg-foreground text-background transition duration-500 ${menuOpen ? "visible opacity-100" : "invisible opacity-0"}`}>
        <nav aria-label="Invitation sections" className="flex flex-col items-center gap-5">
          {navItems.map(([label, id], index) => (
            <Button key={id} variant="ghost" onClick={() => scrollTo(id)} className="group h-auto min-h-12 font-display text-4xl normal-case tracking-normal text-background hover:text-champagne sm:text-5xl">
              <span className="mr-4 align-middle font-sans text-[0.55rem] tracking-[0.2em] text-champagne">0{index + 1}</span>
              <span className="border-b border-transparent transition group-hover:border-champagne">{label}</span>
            </Button>
          ))}
        </nav>
      </div>
    </>
  );
}

function HeroSection() {
  return (
    <section id="home" className="relative min-h-[100svh] bg-foreground">
      <img src={wedding.images.hero} alt="Randini and Malaka walking together in a sunlit garden" width={1408} height={1808} className="absolute inset-0 h-full w-full object-cover object-[52%_center] opacity-75" fetchPriority="high" />
      <div className="hero-shade absolute inset-0" />
      <div className="relative flex min-h-[100svh] flex-col items-center justify-between px-5 py-24 text-center text-ivory sm:py-28">
        <p className="font-sans text-[0.62rem] uppercase tracking-[0.3em]">Together with their families</p>
        <div className="my-auto pt-8">
          <h1 className="font-display text-[clamp(4.6rem,19vw,9rem)] font-normal leading-[0.72]">
            <span className="block">{wedding.couple.first}</span><span className="my-5 block text-4xl italic text-champagne">&</span><span className="block">{wedding.couple.second}</span>
          </h1>
          <p className="mx-auto mt-10 max-w-xs font-display text-xl italic leading-relaxed">We invite you to celebrate our wedding</p>
        </div>
        <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4 font-sans text-[0.6rem] uppercase tracking-[0.24em]">
          <span className="h-px w-10 bg-champagne/70" /><span>{wedding.date.display}<br />{wedding.venue.name}, Kegalle</span><span className="h-px w-10 bg-champagne/70" />
        </div>
      </div>
    </section>
  );
}

function Countdown() {
  const calculate = useCallback(() => {
    const difference = Math.max(0, new Date(wedding.date.iso).getTime() - Date.now());
    return { days: Math.floor(difference / 86400000), hours: Math.floor((difference / 3600000) % 24), minutes: Math.floor((difference / 60000) % 60), seconds: Math.floor((difference / 1000) % 60) };
  }, []);
  const [time, setTime] = useState(calculate);
  useEffect(() => { const timer = window.setInterval(() => setTime(calculate()), 1000); return () => window.clearInterval(timer); }, [calculate]);
  return (
    <section className="border-b border-border bg-ivory px-5 py-16 sm:py-20" aria-label="Countdown to our wedding">
      <p className="reveal mb-9 text-center font-display text-2xl italic">Until we say “I do”</p>
      <div className="reveal mx-auto grid max-w-2xl grid-cols-4 divide-x divide-border">
        {Object.entries(time).map(([label, value]) => <div key={label} className="px-1 text-center"><span className="block font-display text-3xl tabular-nums sm:text-5xl">{String(value).padStart(2, "0")}</span><span className="mt-2 block font-sans text-[0.48rem] uppercase tracking-[0.18em] text-muted-foreground sm:text-[0.6rem]">{label}</span></div>)}
      </div>
    </section>
  );
}

function OurStory() {
  return (
    <section id="story" className="px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-14 md:grid-cols-[1.05fr_.95fr] md:gap-20">
        <div className="reveal relative mx-auto w-[88%] max-w-md md:w-full">
          <div className="absolute -left-4 -top-4 h-full w-full border border-accent" />
          <img src={wedding.images.story} alt="Randini and Malaka together beside the manor windows" width={1408} height={1712} loading="lazy" className="relative aspect-[4/5] w-full object-cover" />
          <p className="absolute -bottom-7 -right-2 font-display text-7xl italic text-primary/20">R&M</p>
        </div>
        <div className="reveal text-center md:text-left">
          <Eyebrow>How it all began</Eyebrow>
          <h2 className="font-display text-5xl font-normal sm:text-6xl">Our story</h2>
          <p className="mx-auto mt-7 max-w-lg font-display text-lg italic leading-8 text-muted-foreground md:mx-0">{wedding.story}</p>
          <div className="mt-12 flex justify-center gap-16 border-t border-border pt-8">
            {wedding.timeline.map((item) => (
              <div key={item.label} className="text-center">
                <span className="block font-display text-2xl text-primary">
                  {item.value}
                </span>
                <span className="mt-1 block font-sans text-[0.55rem] uppercase tracking-[0.17em] text-muted-foreground">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function WeddingDetails() {
  return (
    <section id="details" className="bg-soft px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl"><SectionHeading eyebrow="Save the date">The celebration</SectionHeading>
        <div className="mt-16 grid overflow-hidden border border-border md:grid-cols-[1fr_.85fr_1fr]">
          {wedding.events.map((event, index) => <article key={event.name} className={`reveal px-7 py-12 text-center sm:px-10 ${index === 1 ? "md:order-3" : ""}`}><Eyebrow>{event.eyebrow}</Eyebrow><h3 className="font-display text-3xl">{event.name}</h3><p className="mt-7 font-display text-lg leading-8">{event.date}<br /><span className="italic text-muted-foreground">{event.time}</span></p><div className="mx-auto my-6 h-10 w-px bg-accent" /><p className="font-sans text-xs font-medium uppercase tracking-[0.14em]">{event.venue}</p><p className="mt-2 text-sm text-muted-foreground">{event.address}</p><a href={wedding.venue.mapUrl} target="_blank" rel="noreferrer" className="mt-7 inline-flex min-h-11 items-center gap-2 border-b border-primary font-sans text-[0.6rem] uppercase tracking-[0.16em] text-primary"><MapPin size={14} /> View on Google Maps</a></article>)}
          <img src={wedding.images.details} alt="Wedding flowers, rings, and handwritten vows" width={1408} height={1712} loading="lazy" className="reveal aspect-[4/5] h-full w-full object-cover md:order-2" />
        </div>
      </div>
    </section>
  );
}

function WeddingSchedule() {
  return <section className="bg-forest px-5 py-24 text-ivory sm:py-32"><div className="mx-auto max-w-3xl"><SectionHeading eyebrow="Order of the day" light>A day to remember</SectionHeading><ol className="mt-16 border-t border-ivory/20">{wedding.schedule.map((item, index) => <li key={item.title} className="reveal grid grid-cols-[4.5rem_1fr_auto] items-center border-b border-ivory/20 py-7 sm:grid-cols-[7rem_1fr_auto]"><time className="font-sans text-[0.62rem] tracking-[0.14em] text-champagne">{item.time}</time><div><h3 className="font-display text-2xl sm:text-3xl">{item.title}</h3><p className="mt-1 text-xs text-ivory/60">{item.note}</p></div><span className="font-display text-lg italic text-champagne">0{index + 1}</span></li>)}</ol></div></section>;
}

function PhotoGallery() {
  const [active, setActive] = useState<number | null>(null);
  const change = useCallback((step: number) => setActive((current) => current === null ? 0 : (current + step + wedding.images.gallery.length) % wedding.images.gallery.length), []);
  useEffect(() => {
    if (active === null) return;
    const onKey = (event: KeyboardEvent) => { if (event.key === "Escape") setActive(null); if (event.key === "ArrowLeft") change(-1); if (event.key === "ArrowRight") change(1); };
    document.body.style.overflow = "hidden"; window.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", onKey); };
  }, [active, change]);
  return (
    <section id="gallery" className="px-3 py-24 sm:px-8 sm:py-32"><SectionHeading eyebrow="Collected moments">The gallery</SectionHeading><div className="mx-auto mt-14 grid max-w-6xl grid-cols-2 gap-2 sm:gap-4 md:grid-cols-4">{wedding.images.gallery.map((image, index) => <Button key={image} variant="ghost" onClick={() => setActive(index)} className={`reveal group h-auto min-h-0 overflow-hidden border-0 p-0 ${index === 0 || index === 5 ? "row-span-2" : ""}`} aria-label={`Open wedding photograph ${index + 1}`}><img src={image} alt="" width={1000} height={1000} loading="lazy" className={`w-full object-cover transition duration-700 group-hover:scale-[1.03] ${index === 0 || index === 5 ? "h-full min-h-72" : "aspect-square"}`} /></Button>)}</div>
      {active !== null && <div className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/95 p-4" role="dialog" aria-modal="true" aria-label={`Wedding photograph ${active + 1} of ${wedding.images.gallery.length}`}><Button variant="ghost" onClick={() => setActive(null)} className="absolute right-3 top-3 z-10 h-12 w-12 p-0 text-ivory" aria-label="Close gallery"><X /></Button><Button variant="ghost" onClick={() => change(-1)} className="absolute left-2 h-14 w-12 p-0 text-ivory sm:left-6" aria-label="Previous photograph"><ChevronLeft /></Button><img src={wedding.images.gallery[active]} alt={`Wedding moment ${active + 1}`} className="max-h-[85vh] max-w-[82vw] object-contain" /><Button variant="ghost" onClick={() => change(1)} className="absolute right-2 h-14 w-12 p-0 text-ivory sm:right-6" aria-label="Next photograph"><ChevronRight /></Button><p className="absolute bottom-5 font-sans text-[0.6rem] tracking-[0.2em] text-ivory/70">{active + 1} / {wedding.images.gallery.length}</p></div>}
    </section>
  );
}

function Venue() {
  return <section id="venue" className="bg-soft px-5 py-24 sm:px-8 sm:py-32"><div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[1.25fr_.75fr]"><div className="reveal overflow-hidden"><img src={wedding.images.venue} alt="The Grand Walawwa garden set for the wedding ceremony" width={1600} height={1200} loading="lazy" className="aspect-[4/3] w-full object-cover transition duration-700 hover:scale-[1.02]" /></div><div className="reveal text-center md:text-left"><Eyebrow>The setting</Eyebrow><h2 className="font-display text-5xl">{wedding.venue.name}</h2><p className="mx-auto mt-5 max-w-md text-sm leading-7 text-muted-foreground md:mx-0">A timeless colonial villa surrounded by lush greenery in the heart of Kegalle, where old-world charm and quiet elegance set the scene for the beginning of our next chapter.  </p><address className="mt-7 font-display text-lg not-italic leading-8">{wedding.venue.address}</address><a href={wedding.venue.mapUrl} target="_blank" rel="noreferrer" className="mt-8 inline-flex min-h-12 items-center gap-3 border border-primary px-6 font-sans text-[0.62rem] uppercase tracking-[0.16em] text-primary transition hover:bg-primary hover:text-primary-foreground"><MapPin size={15} /> Open in Google Maps</a></div></div></section>;
}

function Rsvp() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); const form = new FormData(event.currentTarget);
    if (!String(form.get("name") ?? "").trim() || !form.get("attendance")) { setError("Please add your name and select whether you can attend."); return; }
    setError(""); setSubmitted(true);
  };
  return (
    <section id="rsvp" className="px-5 py-24 sm:px-8 sm:py-32"><div className="mx-auto max-w-2xl"><SectionHeading eyebrow="Kindly reply by 1 July 2027">Will you celebrate with us?</SectionHeading>{submitted ? <div className="reveal mt-14 border-y border-border py-16 text-center" role="status"><Heart className="mx-auto text-primary" strokeWidth={1} /><h3 className="mt-6 font-display text-3xl">Thank you for your reply.</h3><p className="mt-3 text-sm text-muted-foreground">Your response has been noted for this preview.</p><Button variant="ghost" className="mt-6" onClick={() => setSubmitted(false)}>Edit response</Button></div> : <form onSubmit={submit} className="reveal mt-14 space-y-8" noValidate><div className="grid gap-8 sm:grid-cols-2"><Field label="Full name" name="name" required /><label className="block"><span className="field-label">Number of guests</span><select name="guests" className="field-input" defaultValue="1">{[1, 2, 3, 4].map(n => <option key={n}>{n}</option>)}</select></label></div><fieldset><legend className="field-label mb-4">Attendance</legend><div className="grid grid-cols-2 gap-3"><label className="choice"><input type="radio" name="attendance" value="accept" className="peer sr-only" /><span className="choice-inner">Joyfully accept</span></label><label className="choice"><input type="radio" name="attendance" value="decline" className="peer sr-only" /><span className="choice-inner">Regretfully decline</span></label></div></fieldset><Field label="Dietary requirements (optional)" name="dietary" /><label className="block"><span className="field-label">A message for us (optional)</span><textarea name="message" rows={3} className="field-input resize-none" /></label>{error && <p className="text-center text-sm text-destructive" role="alert">{error}</p>}<div className="text-center"><Button type="submit" className="min-w-48">Send RSVP</Button></div></form>}</div></section>
  );
}

function Field({ label, name, required }: { label: string; name: string; required?: boolean }) { return <label className="block"><span className="field-label">{label}</span><input name={name} required={required} className="field-input" /></label>; }

function ClosingSection() {
  return <><section className="relative min-h-[78svh] bg-foreground"><img src={wedding.images.hero} alt="" width={1408} height={1808} loading="lazy" className="absolute inset-0 h-full w-full object-cover object-bottom opacity-35" /><div className="hero-shade absolute inset-0" /><div className="relative flex min-h-[78svh] flex-col items-center justify-center px-5 text-center text-ivory"><p className="font-display text-4xl italic leading-tight sm:text-6xl">We can’t wait<br />to celebrate with you.</p><div className="my-10 h-12 w-px bg-champagne" /><p className="font-display text-5xl">{wedding.couple.initials}</p><p className="mt-5 font-sans text-[0.62rem] uppercase tracking-[0.28em]">{wedding.date.display}</p></div></section><footer className="flex items-center justify-center gap-2 bg-foreground py-7 font-sans text-[0.58rem] uppercase tracking-[0.2em] text-ivory/60">Made with <Heart size={11} fill="currentColor" aria-label="love" /></footer></>;
}