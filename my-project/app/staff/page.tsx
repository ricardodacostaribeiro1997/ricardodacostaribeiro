"use client";

import { useMemo, useState } from "react";

const translations = {
  id: {
    university: "Universidade",
    home: "Beranda",
    sectionLabel: "Staff",
    title: "Sumber Daya dan Layanan Staff",
    desc: "Alat HR, dukungan pengajaran, dan pengumuman internal untuk staff ISC.",
    ctaPrimary: "HR dan Payroll",
    ctaSecondary: "Pengumuman",
    hrTitle: "HR dan Administrasi",
    hrDesc: "Akses informasi payroll, cuti, dan kebijakan internal.",
    hrItems: ["Payroll dan Benefit", "Cuti dan Kehadiran", "Direktori Staff", "Perpustakaan Kebijakan"],
    open: "Buka",
    teachTitle: "Pengajaran dan Riset",
    teachDesc: "Koordinasi sumber belajar, pendanaan riset, dan layanan laboratorium.",
    teachItems: ["Dukungan Kurikulum", "Hibah Riset", "Penjadwalan Lab"],
    details: "Detail",
    announcements: "Pengumuman",
    latest: "Terbaru",
    annItems: [
      "Penilaian kinerja tahunan dibuka 15 Feb",
      "Seri workshop pengembangan dosen",
      "Proses pengadaan baru untuk unit kampus",
    ],
    view: "Lihat",
  },
  tet: {
    university: "Universidade",
    home: "Uma",
    sectionLabel: "Staff",
    title: "Rekursu no Servisu Staff",
    desc: "Ferramenta HR, apoiu ensinu, no anunsiu internal ba staff ISC.",
    ctaPrimary: "HR no Payroll",
    ctaSecondary: "Anunsiu",
    hrTitle: "HR no Administrasaun",
    hrDesc: "Asesu informasaun payroll, lisensa no politika internal.",
    hrItems: ["Payroll no Benefisiu", "Lisensa no Presensa", "Diretoriu Staff", "Biblioteka Politika"],
    open: "Loke",
    teachTitle: "Ensinu no Pesquisa",
    teachDesc: "Koordena rekursu aprendizajen, fundu pesquisa no servisu lab.",
    teachItems: ["Apoiu Kurikulu", "Bolsa Pesquisa", "Orariu Lab"],
    details: "Detallu",
    announcements: "Anunsiu",
    latest: "Foun liu",
    annItems: [
      "Avaliasaun anual loke iha 15 Fev",
      "Serie workshop dezenvolvimentu faculty",
      "Prosesu procurement foun ba unidade kampus",
    ],
    view: "Hare",
  },
  en: {
    university: "University",
    home: "Home",
    sectionLabel: "Staff",
    title: "Staff Resources and Services",
    desc: "HR tools, teaching support, and internal announcements for ISC staff.",
    ctaPrimary: "HR and Payroll",
    ctaSecondary: "Announcements",
    hrTitle: "HR and Administration",
    hrDesc: "Access payroll information, leave requests, and internal policies.",
    hrItems: ["Payroll and Benefits", "Leave and Attendance", "Staff Directory", "Policy Library"],
    open: "Open",
    teachTitle: "Teaching and Research",
    teachDesc: "Coordinate learning resources, research funding, and lab services.",
    teachItems: ["Curriculum Support", "Research Grants", "Lab Scheduling"],
    details: "Details",
    announcements: "Announcements",
    latest: "Latest",
    annItems: [
      "Annual performance review opens Feb 15",
      "Faculty development workshop series",
      "New procurement process for campus units",
    ],
    view: "View",
  },
  pt: {
    university: "Universidade",
    home: "Início",
    sectionLabel: "Staff",
    title: "Recursos e Serviços para Staff",
    desc: "Ferramentas de RH, apoio ao ensino e comunicados internos para o staff ISC.",
    ctaPrimary: "RH e Folha",
    ctaSecondary: "Comunicados",
    hrTitle: "RH e Administração",
    hrDesc: "Acesse informações de folha, pedidos de licença e políticas internas.",
    hrItems: ["Folha e Benefícios", "Licenças e Presença", "Diretório de Staff", "Biblioteca de Políticas"],
    open: "Abrir",
    teachTitle: "Ensino e Pesquisa",
    teachDesc: "Coordene recursos de aprendizagem, bolsas de pesquisa e laboratórios.",
    teachItems: ["Suporte Curricular", "Bolsas de Pesquisa", "Agendamento de Laboratório"],
    details: "Detalhes",
    announcements: "Comunicados",
    latest: "Mais recentes",
    annItems: [
      "Avaliação anual abre em 15 de fev",
      "Série de workshops para docentes",
      "Novo processo de compras para unidades do campus",
    ],
    view: "Ver",
  },
};

export default function StaffPage() {
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
            <a href="#hr" className="bg-[var(--brand-accent)] px-4 py-2 text-[var(--brand-primary)]">
              {t.ctaPrimary}
            </a>
            <a href="#announcements" className="border border-white/40 px-4 py-2 text-white">
              {t.ctaSecondary}
            </a>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-10">
        <section id="hr" className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-sm bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-[var(--brand-dark)]">{t.hrTitle}</h2>
            <p className="mt-3 text-sm text-slate-600">{t.hrDesc}</p>
            <div className="mt-4 grid gap-3 text-sm">
              {t.hrItems.map((item) => (
                <div
                  key={item}
                  className="flex items-center justify-between border-b border-slate-100 pb-3 last:border-b-0 last:pb-0"
                >
                  <span className="font-semibold text-slate-800">{item}</span>
                  <span className="text-xs uppercase tracking-[0.2em] text-[var(--brand-primary)]">{t.open}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-sm bg-[var(--brand-primary)] p-6 text-white">
            <h3 className="text-xl font-semibold">{t.teachTitle}</h3>
            <p className="mt-3 text-sm text-white/80">{t.teachDesc}</p>
            <div className="mt-4 space-y-3 text-sm">
              {t.teachItems.map((item) => (
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

        <section id="announcements" className="mt-10 rounded-sm bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold text-[var(--brand-dark)]">{t.announcements}</h3>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-dark)]">{t.latest}</span>
          </div>
          <div className="mt-4 space-y-4 text-sm">
            {t.annItems.map((item) => (
              <div
                key={item}
                className="flex items-center justify-between border-b border-slate-100 pb-3 last:border-b-0 last:pb-0"
              >
                <span className="font-semibold text-slate-800">{item}</span>
                <span className="text-xs uppercase tracking-[0.2em] text-[var(--brand-primary)]">{t.view}</span>
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
