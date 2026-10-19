import { createFileRoute } from "@tanstack/react-router";
import banner from "@/assets/banner.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PiNet Timișoara — Servicii IT pentru afaceri, din 2006" },
      { name: "description", content: "Service calculatoare, rețele, supraveghere video, software & web, Google Ads și automatizări AI în Timișoara." },
      { property: "og:title", content: "PiNet Timișoara — Servicii IT pentru afaceri" },
      { property: "og:description", content: "Toate serviciile IT de la un singur partener: service, rețele, CCTV, software, Google Ads, AI." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const services = [
  { n: "01", t: "Service & mentenanță IT", d: "Calculatoare, laptopuri, imprimante — diagnoză, reparații, devirusări, backup și recuperare date.", h: "https://pinet.ro/service-calculatoare/" },
  { n: "02", t: "Rețele & infrastructură", d: "Cablare structurată, echipamente, configurare și securizare pentru conectivitate stabilă.", h: "https://pinet.ro/retele-structurate/" },
  { n: "03", t: "Supraveghere video", d: "Sisteme CCTV: proiectare, instalare, acces de la distanță și mentenanță periodică.", h: "https://pinet.ro/supraveghere-video/" },
  { n: "04", t: "Software & webdesign", d: "Aplicații de gestiune, automatizări interne, site-uri de prezentare și magazine online.", h: "https://pinet.ro/dezvoltare-software/" },
  { n: "05", t: "Google Ads", d: "Campanii configurate și gestionate corect — clienți relevanți, fără buget risipit.", h: "https://pinet.ro/publicitate-google/" },
  { n: "06", t: "Imprimante & consumabile", d: "Consultanță la achiziție, instalare, service și aprovizionare pentru birou.", h: "https://pinet.ro/service-calculatoare/" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b bg-ink text-ink-foreground">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="/" className="font-display text-xl font-bold">Pi<span className="text-signal">Net</span></a>
          <nav className="hidden gap-6 text-sm md:flex">
            <a href="#servicii" className="hover:text-signal">Servicii</a>
            <a href="#ai" className="hover:text-signal">AI</a>
            <a href="#contact" className="hover:text-signal">Contact</a>
          </nav>
          <a href="tel:0763792900" className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground">0763 79 29 00</a>
        </div>
      </header>

      <section id="servicii" className="bg-background">
        <div className="relative overflow-hidden">
          <img src={banner} alt="Rack de rețea și echipamente IT" className="h-72 w-full object-cover md:h-96" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
          <div className="absolute inset-0 mx-auto flex max-w-7xl flex-col justify-center px-6">
          <p className="text-sm font-semibold uppercase tracking-widest text-signal">Servicii IT în Timișoara · din 2006</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-extrabold leading-tight md:text-6xl">
            Tot IT-ul afacerii tale. <span className="text-primary">Un singur partener.</span>
          </h1>
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-6 pb-16">
          <div className="-mt-10 relative grid gap-px overflow-hidden rounded-2xl bg-border shadow-xl sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <a key={s.n} href={s.h} className="group flex flex-col bg-ink p-7 transition-colors hover:bg-primary hover:text-primary-foreground">
                <span className="font-display text-sm font-bold text-signal group-hover:text-primary-foreground">{s.n}</span>
                <h2 className="mt-4 text-2xl font-bold">{s.t}</h2>
                <p className="mt-2 flex-1 text-sm opacity-75">{s.d}</p>
                <span className="mt-5 text-sm font-semibold">Detalii →</span>
              </a>
            ))}
          </div>
          <a id="ai" href="https://pinet.ro/servicii-ai/" className="mt-px flex flex-col gap-4 rounded-2xl bg-primary p-8 text-primary-foreground md:flex-row md:items-center md:justify-between">
            <div>
              <span className="text-sm font-bold uppercase tracking-widest">Nou · 07</span>
              <h2 className="mt-2 text-3xl font-extrabold">Servicii AI & automatizări</h2>
              <p className="mt-2 max-w-2xl opacity-80">Chatboți non-stop, procesare documente și facturi, agenți AI și integrări personalizate.</p>
            </div>
            <span className="shrink-0 rounded-full bg-ink px-6 py-3 font-semibold text-ink-foreground">Descoperă AI →</span>
          </a>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-6 py-16 md:grid-cols-3">
        {[["18+ ani", "de experiență în servicii IT"], ["Soluții adaptate", "recomandări corecte, pentru nevoile tale"], ["Suport local", "intervenim rapid în Timișoara"]].map(([a, b]) => (
          <div key={a} className="border-t-2 border-primary pt-4">
            <h3 className="text-2xl font-bold">{a}</h3>
            <p className="text-muted-foreground">{b}</p>
          </div>
        ))}
      </section>

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 md:grid-cols-2">
        <div className="relative">
          <img src="https://pinet.ro/assets/img/tech.jpg" alt="Tehnician PiNet reparând un calculator" loading="lazy" className="aspect-[4/3] w-full rounded-2xl object-cover shadow-xl" />
          <div className="absolute -bottom-6 -right-4 rounded-2xl bg-primary px-6 py-4 text-primary-foreground shadow-lg">
            <span className="font-display text-3xl font-extrabold">2006</span>
            <p className="text-sm font-semibold">alături de afaceri</p>
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Partenerul tău IT</p>
          <h2 className="mt-3 text-4xl font-extrabold leading-tight">Tu îți crești afacerea. <span className="text-primary">Noi avem grijă de IT.</span></h2>
          <p className="mt-4 text-muted-foreground">Din 2006, PiNet Timișoara oferă companiilor servicii IT complete și soluții integrate. Îmbinăm experiența tehnică cu o abordare orientată spre nevoile reale ale fiecărui client, pentru parteneriate pe termen lung.</p>
          <ul className="mt-6 space-y-3 font-semibold">
            {["Consultanță pe înțelesul tău", "Soluții potrivite nevoilor tale", "Colaborări pe termen lung"].map((x) => (
              <li key={x} className="flex items-center gap-3"><span className="grid size-6 place-items-center rounded-full bg-primary text-xs text-primary-foreground">✓</span>{x}</li>
            ))}
          </ul>
          <a href="#contact" className="mt-8 inline-block rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground">Hai să discutăm →</a>
        </div>
      </section>

      <section id="contact" className="border-t bg-secondary">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">Contact</p>
            <h2 className="mt-3 text-4xl font-extrabold">Cu ce te putem ajuta?</h2>
            <p className="mt-3 text-muted-foreground">Spune-ne ce ai nevoie și revenim cât mai curând cu o propunere adaptată.</p>
            <dl className="mt-8 grid gap-5 sm:grid-cols-2">
              {[["Telefon", "0763 79 29 00", "tel:0763792900"], ["Email", "contact@pinet.ro", "mailto:contact@pinet.ro"], ["Adresă", "Str. Béla Bartók nr. 4, Dumbrăvița, jud. Timiș", ""], ["Program", "Luni–Vineri, 08:00–18:00", ""]].map(([k, v, h]) => (
                <div key={k} className="border-l-2 border-primary pl-4">
                  <dt className="text-sm text-muted-foreground">{k}</dt>
                  <dd className="font-semibold">{h ? <a href={h}>{v}</a> : v}</dd>
                </div>
              ))}
            </dl>
          </div>
          <form onSubmit={(e) => { e.preventDefault(); alert("Mulțumim! Revenim în curând."); }} className="grid gap-4 rounded-2xl border bg-card p-8 shadow-xl">
            <label className="grid gap-1 text-sm font-semibold">Nume<input required className="rounded-lg border bg-background px-4 py-3 font-normal outline-none focus:border-primary" /></label>
            <label className="grid gap-1 text-sm font-semibold">Email<input required type="email" className="rounded-lg border bg-background px-4 py-3 font-normal outline-none focus:border-primary" /></label>
            <label className="grid gap-1 text-sm font-semibold">Cum te putem ajuta?<textarea required rows={5} className="rounded-lg border bg-background px-4 py-3 font-normal outline-none focus:border-primary" /></label>
            <button className="rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground">Trimite mesajul</button>
          </form>
        </div>
      </section>
    </div>
  );
}
