"use client";

import { useMemo, useState } from "react";

const translations = {
  id: {
    navUtility: ["Email", "Perpustakaan", "Mahasiswa", "Staff", "Alumni"],
    navMain: [
      "Pendaftaran",
      "Pendidikan",
      "Penelitian",
      "Pengabdian",
      "Layanan",
      "Tentang",
      "Berita",
      "Peduli Bencana",
    ],
    uniLabel: "Universidade",
    uniName: "Instituto Superior Cristal (ISC)",
    heroTag: "Berita Utama",
    heroTitle: "ISC Perkuat Diplomasi Kampus dan Transformasi Digital",
    heroDesc:
      "Rangkaian kegiatan internasional dan kolaborasi riset lintas disiplin memperkuat peran universitas sebagai poros ilmu pengetahuan di Timor Leste.",
    heroCtaPrimary: "Baca Selengkapnya",
    heroCtaSecondary: "Agenda Kampus",
    heroTickerLeft: "ISC Update",
    heroTickerRight: "",
    quickLinks: [
      "Pendaftaran Mahasiswa",
      "Sistem Akademik",
      "Perpustakaan Digital",
      "Layanan Alumni",
    ],
    newsTitle: "Berita Kampus",
    newsAll: "Lihat Semua",
    newsBadge: "Berita",
    newsTags: ["Sains", "Kampus"],
    newsItems: [
      "ISC Luncurkan Program Green Campus 2030",
      "Inovasi Biomedis untuk Ketahanan Kesehatan",
      "Kuliah Umum: Transformasi Industri Kreatif",
      "ISC Perkuat Riset Ketahanan Pangan",
    ],
    newsMeta: "8 Februari 2026 · 3 menit baca",
    announcementTag: "Pengumuman",
    announcementTitle: "Pendaftaran ISC 2026",
    announcementDesc:
      "Informasi jalur prestasi, jalur reguler, dan jalur internasional tersedia dalam satu portal terpadu.",
    announcementCta: "Lihat Detail",
    agendaTag: "Agenda",
    agendaItems: [
      { date: "10 Feb", title: "Simposium Inovasi Digital" },
      { date: "12 Feb", title: "Workshop Riset Pangan" },
      { date: "15 Feb", title: "ISC Innovation Day" },
    ],
    agendaPlace: "Auditorium ISC",
    stats: [
      { label: "Fakultas", value: "18" },
      { label: "Program Studi", value: "247" },
      { label: "Mahasiswa Aktif", value: "55.000+" },
    ],
    spotlightTag: "Spotlight",
    spotlightTitle:
      "ISC Perkuat Jejaring Global melalui Program Visiting Professor",
    spotlightDesc:
      "Kolaborasi dengan mitra internasional menghadirkan program pengajaran lintas budaya dan penelitian kolaboratif.",
    spotlightCta: "Eksplorasi",
    specialTag: "Laporan Khusus",
    specialTitle: "ISC dan Inovasi Sosial untuk Masyarakat",
    address: "Balide, Dili, Timor-Leste",
    contact:
      "E: info@ISC.ac.id | P: +670 7567 7567",
    langLabel: "Bahasa",
  },
  tet: {
    navUtility: ["Email", "Biblioteka", "Estudante", "Staff", "Alumni"],
    navMain: [
      "Rejistu",
      "Edukasaun",
      "Pesquisa",
      "Servisu Komunidade",
      "Servisu",
      "Kona-ba",
      "Notisia",
      "Ajuda Desastre",
    ],
    uniLabel: "Universidade",
    uniName: "Instituto Superior Cristal (ISC)",
    heroTag: "Notisia Prinsipal",
    heroTitle:
      "ISC Hametin Diplomazia Kampus no Transformasaun Digital",
    heroDesc:
      "Atividade internasionál no kolaborasaun peskiza interdisiplinar hametin papel universidade hanesan eixu koñesimentu iha Indonézia.",
    heroCtaPrimary: "Lee Detallu",
    heroCtaSecondary: "Agenda Kampus",
    heroTickerLeft: "Atualizasaun ISC",
    heroTickerRight: "",
    quickLinks: [
      "Rejistu Estudante",
      "Sistema Akademiku",
      "Biblioteka Dijitál",
      "Servisu Alumni",
    ],
    newsTitle: "Notisia Kampus",
    newsAll: "Hare Hotu",
    newsBadge: "Notisia",
    newsTags: ["Sains", "Kampus"],
    newsItems: [
      "ISC Lansa Programa Green Campus 2030",
      "Inovasaun Biomedika ba Rezisténsia Saúde",
      "Kuliah Umum: Transformasaun Indústria Kreativu",
      "ISC Hametin Peskiza Rezisténsia Pangan",
    ],
    newsMeta: "8 Fevereiru 2026 · 3 minutu lee",
    announcementTag: "Anunsiu",
    announcementTitle: "Rejistu ISC 2026",
    announcementDesc:
      "Informasaun dalan prestasaun, dalan regulár, no dalan internasionál iha portál ida de'it.",
    announcementCta: "Hare Detallu",
    agendaTag: "Agenda",
    agendaItems: [
      { date: "10 Feb", title: "Simpozium Inovasaun Dijitál" },
      { date: "12 Feb", title: "Workshop Peskiza Pangan" },
      { date: "15 Feb", title: "ISC Innovation Day" },
    ],
    agendaPlace: "Auditorium ISC",
    stats: [
      { label: "Fakuldade", value: "18" },
      { label: "Programa Estudu", value: "247" },
      { label: "Estudante Ativu", value: "55.000+" },
    ],
    spotlightTag: "Destaque",
    spotlightTitle:
      "ISC Hametin Rede Global liuhusi Programa Visiting Professor",
    spotlightDesc:
      "Kolaborasaun ho parceiru internasionál lori program teaching interkultura no peskiza kolaborativu.",
    spotlightCta: "Eksplora",
    specialTag: "Relatoriu Espesiál",
    specialTitle: "ISC no Inovasaun Sosial ba Komunidade",
    address: "Balide, Dili, Timor-Leste",
    contact:
      "E: info@ISC.ac.id | P: +670 7567 7567",
    langLabel: "Lingua",
  },
  en: {
    navUtility: ["Email", "Library", "Students", "Staff", "Alumni"],
    navMain: [
      "Admissions",
      "Education",
      "Research",
      "Community Service",
      "Services",
      "About",
      "News",
      "Disaster Response",
    ],
    uniLabel: "University",
    uniName: "Instituto Superior Cristal (ISC)",
    heroTag: "Instituição Educativa Cristal-Fundação Cristal",
    heroTitle: "ISC Strengthens Campus Diplomacy and Digital Transformation",
    heroDesc:
      "International programs and cross-disciplinary research collaborations strengthen the university's role as a knowledge hub in Timor Leste.",
    heroCtaPrimary: "Read More",
    heroCtaSecondary: "Campus Agenda",
    heroTickerLeft: "ISC Update",
    heroTickerRight: "",
    quickLinks: [
      "Student Admissions",
      "Academic System",
      "Digital Library",
      "Alumni Services",
    ],
    newsTitle: "Campus News",
    newsAll: "View All",
    newsBadge: "News",
    newsTags: ["Science", "Campus"],
    newsItems: [
      "ISC Launches Green Campus 2030 Program",
      "Biomedical Innovation for Health Resilience",
      "Public Lecture: Creative Industry Transformation",
      "ISC Strengthens Food Security Research",
    ],
    newsMeta: "February 8, 2026 · 3 min read",
    announcementTag: "Announcement",
    announcementTitle: "ISC Admissions 2026",
    announcementDesc:
      "Information for achievement, regular, and international tracks is available in one unified portal.",
    announcementCta: "See Details",
    agendaTag: "Agenda",
    agendaItems: [
      { date: "Feb 10", title: "Digital Innovation Symposium" },
      { date: "Feb 12", title: "Food Research Workshop" },
      { date: "Feb 15", title: "ISC Innovation Day" },
    ],
    agendaPlace: "ISC Auditorium",
    stats: [
      { label: "Faculties", value: "18" },
      { label: "Study Programs", value: "247" },
      { label: "Active Students", value: "55,000+" },
    ],
    spotlightTag: "Spotlight",
    spotlightTitle:
      "ISC Expands Global Network Through Visiting Professor Program",
    spotlightDesc:
      "Collaboration with international partners brings intercultural teaching and collaborative research programs.",
    spotlightCta: "Explore",
    specialTag: "Special Report",
    specialTitle: "ISC and Social Innovation for Communities",
    address: "Balide, Dili, Timor-Leste",
    contact:
      "E: info@ISC.ac.id | P: +670 7567 7567",
    langLabel: "Language",
  },
  pt: {
    navUtility: ["Email", "Biblioteca", "Estudantes", "Staff", "Alumni"],
    navMain: [
      "Admissão",
      "Educação",
      "Pesquisa",
      "Serviço Comunitário",
      "Serviços",
      "Sobre",
      "Notícias",
      "Resposta a Desastres",
    ],
    uniLabel: "Universidade",
    uniName: "Instituto Superior Cristal (ISC)",
    heroTag: "Notícia Principal",
    heroTitle:
      "ISC Reforça Diplomacia do Campus e Transformação Digital",
    heroDesc:
      "Programas internacionais e colaborações de pesquisa interdisciplinares reforçam o papel da universidade como polo de conhecimento na Indonésia.",
    heroCtaPrimary: "Ler Mais",
    heroCtaSecondary: "Agenda do Campus",
    heroTickerLeft: "Atualização ISC",
    heroTickerRight: "",
    quickLinks: [
      "Admissão de Estudantes",
      "Sistema Académico",
      "Biblioteca Digital",
      "Serviços para Alumni",
    ],
    newsTitle: "Notícias do Campus",
    newsAll: "Ver Tudo",
    newsBadge: "Notícias",
    newsTags: ["Ciência", "Campus"],
    newsItems: [
      "ISC Lança Programa Green Campus 2030",
      "Inovação Biomédica para Resiliência em Saúde",
      "Palestra Pública: Transformação da Indústria Criativa",
      "ISC Reforça Pesquisa em Segurança Alimentar",
    ],
    newsMeta: "8 de Fevereiro de 2026 · 3 min de leitura",
    announcementTag: "Anúncio",
    announcementTitle: "Admissão ISC 2026",
    announcementDesc:
      "Informações sobre vias de mérito, regular e internacional estão disponíveis num portal unificado.",
    announcementCta: "Ver Detalhes",
    agendaTag: "Agenda",
    agendaItems: [
      { date: "10 Fev", title: "Simpósio de Inovação Digital" },
      { date: "12 Fev", title: "Workshop de Pesquisa Alimentar" },
      { date: "15 Fev", title: "ISC Innovation Day" },
    ],
    agendaPlace: "Auditório ISC",
    stats: [
      { label: "Faculdades", value: "18" },
      { label: "Cursos", value: "247" },
      { label: "Estudantes Ativos", value: "55.000+" },
    ],
    spotlightTag: "Destaque",
    spotlightTitle:
      "ISC Expande Rede Global através do Programa Visiting Professor",
    spotlightDesc:
      "Colaboração com parceiros internacionais traz ensino intercultural e programas de pesquisa colaborativa.",
    spotlightCta: "Explorar",
    specialTag: "Relatório Especial",
    specialTitle: "ISC e Inovação Social para a Comunidade",
    address: "Balide, Dili, Timor-Leste",
    contact:
      "E: info@ISC.ac.id | P: +670 7567 7567",
    langLabel: "Idioma",
  },
};

export default function Home() {
  const [lang, setLang] = useState<keyof typeof translations>("id");
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = useMemo(() => translations[lang], [lang]);
  const isDark = theme === "dark";
  const surfaceClass = isDark
    ? "bg-slate-900/80 text-slate-100"
    : "bg-white";
  const surfaceSoftClass = isDark ? "bg-slate-900/60" : "bg-white";
  const bodyTextClass = isDark ? "text-slate-100" : "text-slate-800";
  const mutedTextClass = isDark ? "text-slate-300" : "text-slate-500";
  const dividerClass = isDark ? "border-white/10" : "border-slate-100";
  const mapEmbedSrc =
    "https://www.google.com/maps?q=-8.5675373,125.5756187&t=k&z=17&output=embed";
  const utilityLinks = [
    "mailto:info@ISC.ac.id",
    "/library",
    "/students",
    "/staff",
    "/alumni",
  ];

  return (
    <div
      className={`min-h-screen ${
        isDark ? "bg-slate-950 text-slate-100" : "bg-slate-100 text-slate-900"
      }`}
      style={{
        ["--brand-primary" as any]: "#0b6a00",
        ["--brand-accent" as any]: "#65d445",
        ["--brand-deep" as any]: "#0a5a00",
        ["--brand-dark" as any]: "#073800",
      }}
    >
      <header className="sticky top-0 z-50 bg-[var(--brand-primary)] text-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <div className="flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-full border border-white/50 bg-white/90">
              <img
                src="/isc.png"
                alt="ISC logo"
                className="h-8 w-8 object-contain"
              />
            </div>
            <div className="leading-tight">
              <p className="text-xs uppercase tracking-[0.3em] text-white/70">
                {t.uniLabel}
              </p>
              <p className="font-display text-lg font-semibold">
                {t.uniName}
              </p>
            </div>
          </div>
          <div className="hidden items-center gap-5 text-sm font-semibold text-white/90 lg:flex">
            {t.navUtility.map((item, index) => (
              <a
                key={item}
                href={utilityLinks[index] || "#"}
                className="transition hover:text-[var(--brand-accent)]"
              >
                {item}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-3 text-white/80">
            <div className="hidden items-center gap-3 text-[11px] font-semibold md:flex">
              <button
                type="button"
                onClick={() => setTheme(isDark ? "light" : "dark")}
                aria-label="Toggle dark mode"
                className={`relative h-6 w-11 rounded-full border transition ${
                  isDark
                    ? "border-white/20 bg-slate-900"
                    : "border-white/30 bg-white/30"
                }`}
              >
                <span
                  className={`absolute top-0.5 left-0.5 h-5 w-5 rounded-full transition ${
                    isDark
                      ? "translate-x-5 bg-[var(--brand-accent)]"
                      : "translate-x-0 bg-white"
                  }`}
                />
              </button>
              <span className="text-white/70">
                {isDark ? "Dark" : "Light"}
              </span>
              <span className="text-white/70">{t.langLabel}</span>
              <div className="flex items-center gap-1 rounded-full bg-white/15 p-1">
                {[
                  { code: "id", label: "ID" },
                  { code: "tet", label: "TET" },
                  { code: "en", label: "EN" },
                  { code: "pt", label: "PT" },
                ].map((item) => (
                  <button
                    key={item.code}
                    onClick={() =>
                      setLang(item.code as keyof typeof translations)
                    }
                    className={`rounded-full px-2 py-1 ${
                      lang === item.code
                        ? "bg-white text-[var(--brand-primary)]"
                        : "text-white/70"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="rounded border border-white/35 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-white lg:hidden"
            >
              {mobileMenuOpen ? "Close" : "Menu"}
            </button>
          </div>
        </div>
        <div
          className={`border-t border-white/10 lg:block ${
            mobileMenuOpen ? "block" : "hidden"
          }`}
        >
          <nav className="mx-auto flex max-w-6xl flex-wrap items-center gap-5 px-6 pt-3 text-sm font-semibold text-white/90 lg:hidden">
            {t.navUtility.map((item, index) => (
              <a
                key={`mobile-${item}`}
                href={utilityLinks[index] || "#"}
                className="transition hover:text-[var(--brand-accent)]"
              >
                {item}
              </a>
            ))}
          </nav>
          <nav className="mx-auto flex max-w-6xl flex-wrap items-center gap-6 px-6 py-3 text-sm font-semibold">
            {t.navMain.map((item, index) => {
              const anchorMap = [
                "#admissions",
                "#education",
                "#research",
                "#community",
                "#services",
                "#about",
                "#news",
                "#disaster",
              ];
              return (
                <a
                  key={item}
                  href={anchorMap[index] || "#"}
                  className="text-white/95 transition hover:text-[var(--brand-accent)]"
                >
                  <span
                    className="relative pb-1 after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-[var(--brand-accent)] after:transition-transform hover:after:scale-x-100"
                  >
                    {item}
                  </span>
                </a>
              );
            })}
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-10">
        <section
          id="admissions"
          className="relative overflow-hidden rounded-sm bg-white shadow-[0_20px_60px_-40px_rgba(7,84,90,0.8)]"
        >
          <div className="relative h-[440px] w-full">
            <div className="absolute inset-0 bg-[url('/isc1.png')] bg-[length:100%_60%] bg-top bg-no-repeat" />
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--brand-dark)]/80 via-transparent to-transparent" />
            <div className="relative z-10 flex h-full flex-col justify-center gap-4 px-10 text-white">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--brand-accent)]">
                {t.heroTag}
              </p>
              <h1 className="max-w-2xl text-4xl font-semibold leading-tight">
                {t.heroTitle}
              </h1>
              <p className="max-w-xl text-sm text-white/80">
                {t.heroDesc}
              </p>
              <div className="flex flex-wrap gap-3 text-sm font-semibold">
                <button className="bg-[var(--brand-accent)] px-4 py-2 text-[var(--brand-primary)]">
                  {t.heroCtaPrimary}
                </button>
                <button className="border border-white/40 px-4 py-2 text-white">
                  {t.heroCtaSecondary}
                </button>
              </div>
            </div>
            <button
              className="absolute left-4 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center bg-[var(--brand-accent)] text-[var(--brand-primary)]"
              aria-label="Previous slide"
            >
              <span className="text-xl">&#x2039;</span>
            </button>
            <button
              className="absolute right-4 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center bg-[var(--brand-accent)] text-[var(--brand-primary)]"
              aria-label="Next slide"
            >
              <span className="text-xl">&#x203A;</span>
            </button>
          </div>
          <div className="flex items-center justify-between gap-4 bg-[var(--brand-primary)] px-6 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-white/70">
            <span>{t.heroTickerLeft}</span>
            <div className="flex items-center gap-2">
              {Array.from({ length: 5 }).map((_, index) => (
                <span
                  key={`dot-${index}`}
                  className={`h-2.5 w-2.5 rounded-full ${
                    index === 2 ? "bg-[var(--brand-accent)]" : "bg-white/40"
                  }`}
                />
              ))}
            </div>
            <span>{t.heroTickerRight}</span>
          </div>
        </section>

        <section id="services" className="mt-8 grid gap-4 md:grid-cols-4">
          {t.quickLinks.map((item, index) => (
            <div
              key={item}
              className={`flex items-center justify-between rounded-sm px-5 py-4 text-sm font-semibold shadow-sm ${surfaceClass}`}
            >
              <span>{item}</span>
              <span className="grid h-9 w-9 place-items-center rounded-full bg-[var(--brand-primary)] text-white">
                {index + 1}
              </span>
            </div>
          ))}
        </section>

        <section
          id="news"
          className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]"
        >
          <div>
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold text-[var(--brand-dark)]">
                {t.newsTitle}
              </h2>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-dark)]">
                {t.newsAll}
              </span>
            </div>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {t.newsItems.map((title, index) => (
                <article
                  key={title}
                  className={`group relative overflow-hidden rounded-sm shadow-[0_10px_40px_-30px_rgba(7,84,90,0.9)] ${surfaceSoftClass}`}
                >
                  <div className="relative h-40">
                    <div className="absolute inset-0 bg-[url('/isc1.png')] bg-[length:100%_60%] bg-top bg-no-repeat opacity-90" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-dark)]/70 via-transparent to-transparent" />
                    <span className="absolute left-4 top-4 rounded-full bg-[var(--brand-accent)] px-3 py-1 text-xs font-semibold text-[var(--brand-primary)]">
                      {t.newsBadge}
                    </span>
                  </div>
                  <div className="space-y-2 px-4 py-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-[var(--brand-dark)]">
                      {index % 2 === 0 ? t.newsTags[0] : t.newsTags[1]}
                    </p>
                    <h3 className="text-base font-semibold text-[var(--brand-dark)]">
                      {title}
                    </h3>
                    <p className={`text-xs ${mutedTextClass}`}>
                      {t.newsMeta}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <div className="rounded-sm bg-[var(--brand-primary)] p-6 text-white">
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--brand-accent)]">
                {t.announcementTag}
              </p>
              <h3 className="mt-2 text-xl font-semibold">
                {t.announcementTitle}
              </h3>
              <p className="mt-3 text-sm text-white/80">
                {t.announcementDesc}
              </p>
              <button className="mt-4 border border-white/40 px-4 py-2 text-sm font-semibold">
                {t.announcementCta}
              </button>
            </div>
            <div className={`rounded-sm p-6 shadow-sm ${surfaceClass}`}>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-dark)]">
                {t.agendaTag}
              </p>
              <div className="mt-4 space-y-4 text-sm">
                {t.agendaItems.map((item) => (
                  <div
                    key={item.title}
                    className={`flex items-start gap-4 border-b pb-4 last:border-b-0 last:pb-0 ${dividerClass}`}
                  >
                    <div className="grid h-11 w-11 place-items-center rounded-full bg-[var(--brand-primary)] text-xs font-semibold text-white">
                      {item.date}
                    </div>
                    <div>
                      <p className={`font-semibold ${bodyTextClass}`}>
                        {item.title}
                      </p>
                      <p className={`text-xs ${mutedTextClass}`}>
                        {t.agendaPlace}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="mt-12 grid gap-6 md:grid-cols-3">
          {t.stats.map((item) => (
            <div
              key={item.label}
              className={`rounded-sm px-6 py-8 text-center shadow-sm ${surfaceClass}`}
            >
              <p className="text-3xl font-semibold text-[var(--brand-dark)]">
                {item.value}
              </p>
              <p className={`mt-2 text-xs font-semibold uppercase tracking-[0.2em] ${mutedTextClass}`}>
                {item.label}
              </p>
            </div>
          ))}
        </section>

        <section
          id="education"
          className="mt-12 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]"
        >
          <div className="rounded-sm bg-[var(--brand-primary)] p-8 text-white">
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--brand-accent)]">
              {t.spotlightTag}
            </p>
            <h3 className="mt-3 text-2xl font-semibold leading-snug">
              {t.spotlightTitle}
            </h3>
            <p className="mt-4 text-sm text-white/80">
              {t.spotlightDesc}
            </p>
            <button className="mt-5 bg-[var(--brand-accent)] px-4 py-2 text-sm font-semibold text-[var(--brand-primary)]">
              {t.spotlightCta}
            </button>
          </div>
          <div className={`relative overflow-hidden rounded-sm ${surfaceSoftClass}`}>
            <div className="absolute inset-0 bg-[url('/isc1.png')] bg-[length:100%_60%] bg-top bg-no-repeat" />
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--brand-dark)]/70 via-transparent to-transparent" />
            <div className="relative z-10 flex h-full flex-col justify-end p-6 text-white">
              <p className="text-xs uppercase tracking-[0.2em] text-white/80">
                {t.specialTag}
              </p>
              <h3 className="mt-2 text-xl font-semibold">
                {t.specialTitle}
              </h3>
            </div>
          </div>
        </section>

        <section id="research" className="mt-12 space-y-5">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-[var(--brand-dark)]">
              {t.navMain[2]}
            </h2>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-dark)]">
              Innovation
            </span>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                stat: "34",
                label: "Active Laboratories",
                desc: "Cross-faculty labs working on food, health, and climate technologies.",
              },
              {
                stat: "126",
                label: "Published Papers",
                desc: "Indexed publications in international journals and conference proceedings.",
              },
              {
                stat: "22",
                label: "Industry Partners",
                desc: "Joint research projects with public institutions and private sectors.",
              },
            ].map((item) => (
              <article
                key={item.label}
                className={`rounded-sm p-6 shadow-sm ${surfaceClass}`}
              >
                <p className="text-3xl font-semibold text-[var(--brand-primary)]">
                  {item.stat}
                </p>
                <h3 className={`mt-2 text-sm font-semibold ${bodyTextClass}`}>
                  {item.label}
                </h3>
                <p className={`mt-2 text-xs ${mutedTextClass}`}>{item.desc}</p>
              </article>
            ))}
          </div>
        </section>

        <section
          id="community"
          className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]"
        >
          <div className={`rounded-sm p-6 shadow-sm ${surfaceClass}`}>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-dark)]">
              {t.navMain[3]}
            </p>
            <h3 className={`mt-3 text-2xl font-semibold ${bodyTextClass}`}>
              Campus Programs for Local Impact
            </h3>
            <div className="mt-5 space-y-3">
              {[
                "Village mentoring for digital literacy and micro-business management.",
                "Public health education and free screening in partner districts.",
                "Sustainable agriculture coaching with student-led field teams.",
              ].map((item) => (
                <div
                  key={item}
                  className={`flex items-start gap-3 border-b pb-3 last:border-b-0 last:pb-0 ${dividerClass}`}
                >
                  <span className="mt-0.5 grid h-5 w-5 place-items-center rounded-full bg-[var(--brand-primary)] text-[10px] font-bold text-white">
                    ✓
                  </span>
                  <p className={`text-sm ${bodyTextClass}`}>{item}</p>
                </div>
              ))}
            </div>
          </div>
          <aside className="rounded-sm bg-[var(--brand-primary)] p-6 text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-accent)]">
              Outreach
            </p>
            <h3 className="mt-3 text-xl font-semibold">
              18 Ongoing Community Projects
            </h3>
            <p className="mt-3 text-sm text-white/80">
              Multi-disciplinary teams from ISC collaborate with schools,
              villages, and local organizations every semester.
            </p>
            <button className="mt-5 border border-white/40 px-4 py-2 text-sm font-semibold">
              View Program Map
            </button>
          </aside>
        </section>

        <section id="disaster" className="mt-12 rounded-sm bg-[var(--brand-primary)] p-7 text-white">
          <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-accent)]">
                {t.navMain[7]}
              </p>
              <h3 className="mt-3 text-2xl font-semibold">
                Emergency Information and Rapid Action Team
              </h3>
              <p className="mt-3 max-w-2xl text-sm text-white/80">
                Disaster updates, logistics coordination, and volunteer
                mobilization are centralized here for students, staff, and
                alumni.
              </p>
              <div className="mt-5 flex flex-wrap gap-3 text-sm font-semibold">
                <button className="bg-[var(--brand-accent)] px-4 py-2 text-[var(--brand-primary)]">
                  Report Incident
                </button>
                <button className="border border-white/40 px-4 py-2 text-white">
                  Join Volunteer Team
                </button>
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              {[
                { label: "Hotline", value: "+670 7567 7567" },
                { label: "Status", value: "24/7 Monitoring" },
                { label: "Shelters", value: "7 Active Locations" },
              ].map((item) => (
                <div key={item.label} className="rounded-sm border border-white/20 bg-white/10 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-white/70">
                    {item.label}
                  </p>
                  <p className="mt-2 text-sm font-semibold text-white">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="mt-12 bg-[var(--brand-primary)] text-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10 lg:grid-cols-[1fr_420px]">
          <div className="space-y-6">
            <div className="flex flex-wrap items-center justify-center gap-4 text-white/90 lg:justify-start">
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

            <div className="flex items-center justify-center gap-4 lg:justify-start">
              <div className="grid h-12 w-12 place-items-center rounded-full border border-white/40 bg-white/90">
                <img
                  src="/isc.png"
                  alt="ISC logo"
                  className="h-9 w-9 object-contain"
                />
              </div>
              <div className="text-left">
                <p className="text-sm uppercase tracking-[0.3em] text-white/60">
                  {t.uniLabel}
                </p>
                <p className="font-display text-xl font-semibold">
                  {t.uniName}
                </p>
              </div>
            </div>

            <div className="flex items-start justify-center gap-2 text-sm text-white/80 lg:justify-start">
              <span className="grid h-7 w-7 place-items-center rounded-full bg-white/10">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                  <path d="M12 2a7 7 0 00-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 00-7-7zm0 9.5A2.5 2.5 0 1112 6a2.5 2.5 0 010 5.5z" />
                </svg>
              </span>
              <p className="text-center lg:text-left">
                {t.address}
              </p>
            </div>

            <p className="text-center text-sm font-semibold text-white/85 lg:text-left">
              {t.contact}
            </p>
          </div>

          <div className="w-full self-start overflow-hidden rounded-sm border border-white/20">
            <iframe
              title="ISC location map"
              src={mapEmbedSrc}
              className="h-64 w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>

        <div className="h-6 bg-[var(--brand-primary)]" />
      </footer>
    </div>
  );
}
