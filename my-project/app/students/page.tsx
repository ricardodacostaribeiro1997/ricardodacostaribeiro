"use client";

import { useMemo, useState } from "react";

const translations = {
  id: {
    university: "Universidade",
    home: "Beranda",
    langLabel: "Bahasa",
    sectionLabel: "Mahasiswa",
    title: "Layanan Mahasiswa dan Kehidupan Kampus",
    desc: "Temukan alat akademik, layanan dukungan, dan aktivitas mahasiswa dalam satu tempat.",
    ctaPrimary: "Akses Cepat",
    ctaSecondary: "Dukungan Mahasiswa",
    quickAccess: "Akses Cepat",
    quickAccessItems: [
      "Registrasi Mata Kuliah",
      "Kalender Akademik",
      "Perpustakaan Digital",
      "Sistem Manajemen Pembelajaran",
      "Beasiswa dan Bantuan",
      "Layanan Kartu Mahasiswa",
    ],
    supportTitle: "Dukungan Mahasiswa",
    supportDesc:
      "Konseling, layanan disabilitas, dan bimbingan akademik tersedia untuk setiap mahasiswa.",
    supportItems: [
      "Bimbingan Akademik",
      "Kesehatan dan Konseling",
      "Pengembangan Karier",
      "Kantor Mahasiswa Internasional",
    ],
    supportAction: "Lihat",
    datesTitle: "Tanggal Penting",
    dates: [
      { date: "12 Feb", label: "Registrasi UTS" },
      { date: "01 Mar", label: "Batas akhir beasiswa" },
      { date: "10 Apr", label: "Student leadership summit" },
    ],
    helpTag: "Butuh bantuan?",
    helpTitle: "Hubungi Student Center",
    helpCta: "Email Mahasiswa",
  },
  tet: {
    university: "Universidade",
    home: "Uma",
    langLabel: "Lingua",
    sectionLabel: "Estudante",
    title: "Servisu Estudante no Moris iha Kampus",
    desc: "Hetan ferramenta akademika, servisu apoiu, no atividade estudante iha fatin ida.",
    ctaPrimary: "Asesu Lalais",
    ctaSecondary: "Apoiu Estudante",
    quickAccess: "Asesu Lalais",
    quickAccessItems: [
      "Rejistu Kursu",
      "Kalendariu Akademiku",
      "Biblioteka Dijital",
      "Sistema Aprendizajen",
      "Bolsa no Ajuda",
      "Servisu Kartaun Estudante",
    ],
    supportTitle: "Apoiu Estudante",
    supportDesc:
      "Konsellu, servisu disabilidade no orientasaun akademika disponivel ba estudante hotu.",
    supportItems: [
      "Orientasaun Akademika",
      "Saude no Konsellu",
      "Dezenvolvimentu Karreira",
      "Escritoriu Estudante Internasionál",
    ],
    supportAction: "Hare",
    datesTitle: "Data Importante",
    dates: [
      { date: "12 Fev", label: "Rejistu testu meiu" },
      { date: "01 Mar", label: "Prazu bolsa" },
      { date: "10 Abr", label: "Student leadership summit" },
    ],
    helpTag: "Presiza ajuda?",
    helpTitle: "Kontaktu Student Center",
    helpCta: "Email Estudante",
  },
  en: {
    university: "University",
    home: "Home",
    langLabel: "Language",
    sectionLabel: "Students",
    title: "Student Services and Campus Life",
    desc: "Find academic tools, support services, and student activities in one place.",
    ctaPrimary: "Quick Access",
    ctaSecondary: "Student Support",
    quickAccess: "Quick Access",
    quickAccessItems: [
      "Course Registration",
      "Academic Calendar",
      "Digital Library",
      "Learning Management System",
      "Scholarships and Aid",
      "Student ID Services",
    ],
    supportTitle: "Student Support",
    supportDesc:
      "Counseling, disability services, and academic advising are available for every student.",
    supportItems: [
      "Academic Advising",
      "Wellness and Counseling",
      "Career Development",
      "International Student Office",
    ],
    supportAction: "View",
    datesTitle: "Important Dates",
    dates: [
      { date: "Feb 12", label: "Midterm registration" },
      { date: "Mar 01", label: "Scholarship deadline" },
      { date: "Apr 10", label: "Student leadership summit" },
    ],
    helpTag: "Need help?",
    helpTitle: "Contact the Student Center",
    helpCta: "Email Students",
  },
  pt: {
    university: "Universidade",
    home: "Início",
    langLabel: "Idioma",
    sectionLabel: "Estudantes",
    title: "Serviços para Estudantes e Vida no Campus",
    desc: "Encontre ferramentas acadêmicas, serviços de apoio e atividades estudantis em um só lugar.",
    ctaPrimary: "Acesso Rápido",
    ctaSecondary: "Apoio ao Estudante",
    quickAccess: "Acesso Rápido",
    quickAccessItems: [
      "Inscrição em Disciplinas",
      "Calendário Acadêmico",
      "Biblioteca Digital",
      "Sistema de Aprendizagem",
      "Bolsas e Auxílios",
      "Serviços de Carteira Estudantil",
    ],
    supportTitle: "Apoio ao Estudante",
    supportDesc:
      "Aconselhamento, serviços de acessibilidade e orientação acadêmica disponíveis para todos.",
    supportItems: [
      "Orientação Acadêmica",
      "Bem-estar e Aconselhamento",
      "Desenvolvimento de Carreira",
      "Escritório do Estudante Internacional",
    ],
    supportAction: "Ver",
    datesTitle: "Datas Importantes",
    dates: [
      { date: "12 Fev", label: "Inscrição para provas intermediárias" },
      { date: "01 Mar", label: "Prazo para bolsas" },
      { date: "10 Abr", label: "Student leadership summit" },
    ],
    helpTag: "Precisa de ajuda?",
    helpTitle: "Fale com o Student Center",
    helpCta: "Email Estudantes",
  },
};

export default function StudentsPage() {
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
            <a href="#quick-access" className="bg-[var(--brand-accent)] px-4 py-2 text-[var(--brand-primary)]">
              {t.ctaPrimary}
            </a>
            <a href="#support" className="border border-white/40 px-4 py-2 text-white">
              {t.ctaSecondary}
            </a>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-10">
        <section id="quick-access">
          <h2 className="text-2xl font-semibold text-[var(--brand-dark)]">{t.quickAccess}</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {t.quickAccessItems.map((item) => (
              <div key={item} className="rounded-sm bg-white px-5 py-4 text-sm font-semibold shadow-sm">
                {item}
              </div>
            ))}
          </div>
        </section>

        <section id="support" className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-sm bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-[var(--brand-dark)]">{t.supportTitle}</h3>
            <p className="mt-3 text-sm text-slate-600">{t.supportDesc}</p>
            <div className="mt-4 grid gap-3 text-sm">
              {t.supportItems.map((item) => (
                <div
                  key={item}
                  className="flex items-center justify-between border-b border-slate-100 pb-3 last:border-b-0 last:pb-0"
                >
                  <span className="font-semibold text-slate-800">{item}</span>
                  <span className="text-xs uppercase tracking-[0.2em] text-[var(--brand-primary)]">{t.supportAction}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-sm bg-[var(--brand-primary)] p-6 text-white">
            <h3 className="text-xl font-semibold">{t.datesTitle}</h3>
            <div className="mt-4 space-y-3 text-sm">
              {t.dates.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between border-b border-white/20 pb-3 last:border-b-0 last:pb-0"
                >
                  <span className="font-semibold">{item.date}</span>
                  <span className="text-white/80">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-10 rounded-sm bg-white p-6 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-dark)]">{t.helpTag}</p>
              <h3 className="mt-2 text-xl font-semibold text-[var(--brand-dark)]">{t.helpTitle}</h3>
            </div>
            <a
              className="border border-[var(--brand-primary)]/30 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-dark)]"
              href="mailto:students@isc.ac.id"
            >
              {t.helpCta}
            </a>
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
