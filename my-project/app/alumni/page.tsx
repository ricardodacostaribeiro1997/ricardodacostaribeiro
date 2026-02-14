"use client";

import { useMemo, useState } from "react";

const translations = {
  id: {
    university: "Universidade",
    home: "Beranda",
    sectionLabel: "Alumni",
    title: "Jaringan Alumni",
    desc: "Tetap terhubung, kembangkan karier, dan berkontribusi untuk ISC.",
    ctaPrimary: "Gabung Jaringan",
    ctaSecondary: "Acara Alumni",
    servicesTitle: "Layanan Alumni",
    servicesDesc: "Akses dukungan karier, mentoring, dan manfaat alumni ISC.",
    services: ["Layanan Karier", "Program Mentoring", "Kartu Alumni", "Donasi"],
    featuredTitle: "Program Unggulan",
    featured: ["Alumni Career Week", "Global Alumni Chapters", "Innovation and Entrepreneurship Fund"],
    upcomingTitle: "Acara Alumni Mendatang",
    explore: "Jelajahi",
    details: "Detail",
  },
  tet: {
    university: "Universidade",
    home: "Uma",
    sectionLabel: "Alumni",
    title: "Rede Alumni",
    desc: "Kontinua konekta, dezenvolve karreira, no kontribui ba ISC.",
    ctaPrimary: "Tama Rede",
    ctaSecondary: "Eventu Alumni",
    servicesTitle: "Servisu Alumni",
    servicesDesc: "Asesu apoiu karreira, mentoria, no benefisiu alumni ISC.",
    services: ["Servisu Karreira", "Programa Mentoria", "Kartaun Alumni", "Doasaun"],
    featuredTitle: "Programa Destaque",
    featured: ["Alumni Career Week", "Global Alumni Chapters", "Innovation and Entrepreneurship Fund"],
    upcomingTitle: "Eventu Alumni Tuir Mai",
    explore: "Hare",
    details: "Detallu",
  },
  en: {
    university: "University",
    home: "Home",
    sectionLabel: "Alumni",
    title: "Alumni Network",
    desc: "Stay connected, grow your career, and contribute to ISC.",
    ctaPrimary: "Join the Network",
    ctaSecondary: "Alumni Events",
    servicesTitle: "Alumni Services",
    servicesDesc: "Access career support, mentoring, and ISC alumni benefits.",
    services: ["Career Services", "Mentorship Program", "Alumni ID", "Giving"],
    featuredTitle: "Featured Programs",
    featured: ["Alumni Career Week", "Global Alumni Chapters", "Innovation and Entrepreneurship Fund"],
    upcomingTitle: "Upcoming Alumni Events",
    explore: "Explore",
    details: "Details",
  },
  pt: {
    university: "Universidade",
    home: "Início",
    sectionLabel: "Alumni",
    title: "Rede Alumni",
    desc: "Mantenha-se conectado, cresça na carreira e contribua para o ISC.",
    ctaPrimary: "Entrar na Rede",
    ctaSecondary: "Eventos Alumni",
    servicesTitle: "Serviços Alumni",
    servicesDesc: "Acesse apoio de carreira, mentoria e benefícios do ISC.",
    services: ["Serviços de Carreira", "Programa de Mentoria", "Carteira Alumni", "Doações"],
    featuredTitle: "Programas em Destaque",
    featured: ["Alumni Career Week", "Global Alumni Chapters", "Innovation and Entrepreneurship Fund"],
    upcomingTitle: "Próximos Eventos Alumni",
    explore: "Explorar",
    details: "Detalhes",
  },
};

export default function AlumniPage() {
  const [lang, setLang] = useState<keyof typeof translations>("en");
  const t = useMemo(() => translations[lang], [lang]);

  return (
    <div
      className="min-h-screen bg-slate-100 text-slate-900"
      style={{
        ["--brand-primary" as any]: "#0b6a00",
        ["--brand-accent" as any]: "#65d445",
        ["--brand-deep" as any]: "#0a5a00",
        ["--brand-dark" as any]: "#073800",
      }}
    >
      <header className="sticky top-0 z-50 bg-[var(--brand-primary)] text-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <a href="/" className="flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-full border border-white/50 bg-white/90">
              <img src="/isc.png" alt="ISC logo" className="h-8 w-8 object-contain" />
            </div>
            <div className="leading-tight">
              <p className="text-xs uppercase tracking-[0.3em] text-white/70">{t.university}</p>
              <p className="font-display text-lg font-semibold">Instituto Superior Cristal (ISC)</p>
            </div>
          </a>
          <div className="flex items-center gap-4">
            <a
              href="/"
              className="rounded-full border border-white/40 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/90 transition hover:bg-white/15"
            >
              Home
            </a>
            <div className="hidden items-center gap-1 rounded-full bg-white/15 p-1 md:flex">
              {[
                { code: "id", label: "ID" },
                { code: "tet", label: "TET" },
                { code: "en", label: "EN" },
                { code: "pt", label: "PT" },
              ].map((item) => (
                <button
                  key={item.code}
                  onClick={() => setLang(item.code as keyof typeof translations)}
                  className={`rounded-full px-2 py-1 text-xs font-semibold ${
                    lang === item.code ? "bg-white text-[var(--brand-primary)]" : "text-white/80"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-6xl px-6 pb-8 pt-2">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">{t.sectionLabel}</p>
          <h1 className="mt-3 text-3xl font-semibold">{t.title}</h1>
          <p className="mt-2 max-w-2xl text-sm text-white/80">{t.desc}</p>
          <div className="mt-5 flex flex-wrap gap-3 text-sm font-semibold">
            <a href="#connect" className="bg-[var(--brand-accent)] px-4 py-2 text-[var(--brand-primary)]">
              {t.ctaPrimary}
            </a>
            <a href="#events" className="border border-white/40 px-4 py-2 text-white">
              {t.ctaSecondary}
            </a>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-10">
        <section id="connect" className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-sm bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-[var(--brand-dark)]">{t.servicesTitle}</h2>
            <p className="mt-3 text-sm text-slate-600">{t.servicesDesc}</p>
            <div className="mt-4 grid gap-3 text-sm">
              {t.services.map((item) => (
                <div
                  key={item}
                  className="flex items-center justify-between border-b border-slate-100 pb-3 last:border-b-0 last:pb-0"
                >
                  <span className="font-semibold text-slate-800">{item}</span>
                  <span className="text-xs uppercase tracking-[0.2em] text-[var(--brand-primary)]">{t.explore}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-sm bg-[var(--brand-primary)] p-6 text-white">
            <h3 className="text-xl font-semibold">{t.featuredTitle}</h3>
            <div className="mt-4 space-y-3 text-sm">
              {t.featured.map((item) => (
                <div
                  key={item}
                  className="flex items-center justify-between border-b border-white/20 pb-3 last:border-b-0 last:pb-0"
                >
                  <span className="font-semibold">{item}</span>
                  <span className="text-white/80">{t.details}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="events" className="mt-10 rounded-sm bg-white p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-[var(--brand-dark)]">{t.upcomingTitle}</h3>
          <div className="mt-4 space-y-4 text-sm">
            {[
              { date: "Mar 08", label: "Alumni networking breakfast" },
              { date: "Apr 18", label: "Industry leaders panel" },
              { date: "May 20", label: "Homecoming reception" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center justify-between border-b border-slate-100 pb-3 last:border-b-0 last:pb-0"
              >
                <span className="font-semibold text-slate-800">{item.date}</span>
                <span className="text-slate-600">{item.label}</span>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="mt-12 bg-[var(--brand-primary)] text-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-10 text-center">
          <div className="flex flex-wrap items-center justify-center gap-4 text-white/90">
            {[
              { label: "Instagram", icon: "ig" },
              { label: "Youtube", icon: "yt" },
              { label: "Facebook", icon: "fb" },
              { label: "X", icon: "x" },
              { label: "LinkedIn", icon: "in" },
              { label: "TikTok", icon: "tt" },
            ].map(({ label, icon }) => (
              <span
                key={label}
                className="grid h-9 w-9 place-items-center rounded-full border border-white/35 text-xs font-semibold uppercase"
                aria-label={label}
              >
                {icon}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <div className="grid h-12 w-12 place-items-center rounded-full border border-white/40 bg-white/90">
              <img src="/isc.png" alt="ISC logo" className="h-9 w-9 object-contain" />
            </div>
            <div className="text-left">
              <p className="text-sm uppercase tracking-[0.3em] text-white/60">{t.university}</p>
              <p className="font-display text-xl font-semibold">Instituto Superior Cristal (ISC)</p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-sm text-white/80">
            <span className="grid h-7 w-7 place-items-center rounded-full bg-white/10">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                <path d="M12 2a7 7 0 00-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 00-7-7zm0 9.5A2.5 2.5 0 1112 6a2.5 2.5 0 010 5.5z" />
              </svg>
            </span>
            <p>Balide, Dili, Timor-Leste</p>
          </div>

          <p className="text-sm font-semibold text-white/85">
            E: info@ISC.ac.id | P: +670 7567 7567
          </p>
        </div>

        <div className="h-6 bg-[var(--brand-primary)]" />
      </footer>
    </div>
  );
}
