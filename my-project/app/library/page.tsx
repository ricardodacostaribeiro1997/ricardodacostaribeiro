"use client";

import { useMemo, useState } from "react";

const translations = {
  id: {
    university: "Universidade",
    home: "Beranda",
    tag: "Perpustakaan",
    title: "Perpustakaan ISC dan Sumber Daya Digital",
    desc: "Cari jurnal, ebook, tesis, dan sumber multimedia dari satu tempat.",
    searchPlaceholder: "Cari buku, jurnal, tesis...",
    search: "Cari",
    cards: [
      { title: "Repositori Digital", desc: "Akses tesis, disertasi, dan laporan riset." },
      { title: "E-Jurnal", desc: "Telusuri jurnal akademik dan database berlangganan." },
      { title: "E-Book", desc: "Ribuan ebook lintas disiplin ilmu." },
    ],
    explore: "Jelajahi ->",
    services: "Layanan Perpustakaan",
    serviceItems: ["Peminjaman dan perpanjangan", "Bantuan riset", "Pinjam antarperpustakaan", "Workshop dan pelatihan"],
    hours: "Jam Operasional",
  },
  tet: {
    university: "Universidade",
    home: "Uma",
    tag: "Biblioteka",
    title: "Biblioteka ISC no Rekursu Dijital",
    desc: "Buka jurnal, ebook, tese no rekursu multimedia iha fatin ida.",
    searchPlaceholder: "Buka livru, jurnal, tese...",
    search: "Buka",
    cards: [
      { title: "Repositóriu Dijital", desc: "Asesu tese, disertasaun no relatoriu pesquisa." },
      { title: "E-Jornal", desc: "Buka jurnal akademiku no database subskrisaun." },
      { title: "E-Book", desc: "Ebook barak iha area estudu hotu." },
    ],
    explore: "Eksplora ->",
    services: "Servisu Biblioteka",
    serviceItems: ["Emprestimu no renova", "Ajuda pesquisa", "Emprestimu entre biblioteka", "Workshop no treinamentu"],
    hours: "Oras",
  },
  en: {
    university: "University",
    home: "Home",
    tag: "Library",
    title: "ISC Library and Digital Resources",
    desc: "Search journals, ebooks, theses, and multimedia resources from one place.",
    searchPlaceholder: "Search books, journals, theses...",
    search: "Search",
    cards: [
      { title: "Digital Repository", desc: "Access theses, dissertations, and research reports." },
      { title: "E-Journals", desc: "Browse subscribed academic journals and databases." },
      { title: "E-Books", desc: "Thousands of ebooks across all disciplines." },
    ],
    explore: "Explore ->",
    services: "Library Services",
    serviceItems: ["Borrowing and renewal", "Research assistance", "Interlibrary loan", "Workshops and training"],
    hours: "Hours",
  },
  pt: {
    university: "Universidade",
    home: "Início",
    tag: "Biblioteca",
    title: "Biblioteca ISC e Recursos Digitais",
    desc: "Pesquise revistas, ebooks, teses e recursos multimídia em um só lugar.",
    searchPlaceholder: "Pesquisar livros, revistas, teses...",
    search: "Pesquisar",
    cards: [
      { title: "Repositório Digital", desc: "Acesse teses, dissertações e relatórios de pesquisa." },
      { title: "E-Revistas", desc: "Navegue por periódicos e bases acadêmicas." },
      { title: "E-Books", desc: "Milhares de ebooks em todas as áreas." },
    ],
    explore: "Explorar ->",
    services: "Serviços da Biblioteca",
    serviceItems: ["Empréstimo e renovação", "Apoio à pesquisa", "Empréstimo entre bibliotecas", "Workshops e treinamentos"],
    hours: "Horário",
  },
};

export default function LibraryPage() {
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
      </header>

      <main className="mx-auto max-w-6xl px-6 py-10">
        <section className="rounded-sm bg-[var(--brand-primary)] px-8 py-10 text-white">
          <p className="text-xs uppercase tracking-[0.25em] text-[var(--brand-accent)]">{t.tag}</p>
          <h1 className="mt-3 text-3xl font-semibold">{t.title}</h1>
          <p className="mt-2 max-w-2xl text-sm text-white/80">{t.desc}</p>
          <div className="mt-6 flex flex-col gap-3 rounded-sm bg-white/15 p-4 sm:flex-row sm:items-center">
            <input
              type="text"
              placeholder={t.searchPlaceholder}
              className="w-full rounded-sm bg-white/90 px-4 py-3 text-sm text-slate-900 outline-none"
            />
            <button className="w-full rounded-sm bg-[var(--brand-accent)] px-4 py-3 text-sm font-semibold text-[var(--brand-dark)] sm:w-auto">
              {t.search}
            </button>
          </div>
        </section>

        <section className="mt-10 grid gap-6 md:grid-cols-3">
          {t.cards.map((item) => (
            <div key={item.title} className="rounded-sm bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-[var(--brand-dark)]">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{item.desc}</p>
              <button className="mt-4 text-sm font-semibold text-[var(--brand-primary)]">{t.explore}</button>
            </div>
          ))}
        </section>

        <section className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-sm bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-[var(--brand-dark)]">{t.services}</h2>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              {t.serviceItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-sm bg-[var(--brand-primary)] p-6 text-white">
            <p className="text-xs uppercase tracking-[0.25em] text-[var(--brand-accent)]">{t.hours}</p>
            <div className="mt-4 space-y-2 text-sm text-white/85">
              <p>Mon - Fri: 08:00 - 20:00</p>
              <p>Sat: 09:00 - 14:00</p>
              <p>Sun & Holidays: Closed</p>
            </div>
            <p className="mt-4 text-sm text-white/85">Contact: library@isc.ac.id</p>
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
