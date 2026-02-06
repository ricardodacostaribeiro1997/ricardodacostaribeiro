import Image from "next/image";
import { getLocale, getTranslations } from "next-intl/server";
import ContactForm from "./ContactForm";
import LanguageSwitcher from "./LanguageSwitcher";

export default async function Home() {
  const t = await getTranslations("home");
  await getLocale();

  return (
    <div className="min-h-screen bg-[#0f131a] text-slate-100">
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(88,101,242,0.25),_transparent_55%)]" />
        <div className="pointer-events-none absolute -top-32 right-[-10%] h-96 w-96 rounded-full bg-gradient-to-br from-amber-300/30 via-rose-400/20 to-emerald-400/20 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-[-15%] h-80 w-80 rounded-full bg-gradient-to-tr from-indigo-400/20 via-sky-400/10 to-transparent blur-3xl" />

        <main className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-between px-6 py-16 sm:px-10 lg:px-16">
          <header className="flex flex-wrap items-center justify-between gap-4 text-sm uppercase tracking-[0.3em] text-slate-400">
            <span className="font-['Space_Grotesk']">{t("headerPortfolio")}</span>
            <LanguageSwitcher />
            <span className="font-['Space_Grotesk']">{t("headerTagline")}</span>
          </header>

          <section className="grid items-center gap-12 py-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-300">
                {t("heroKicker")}
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
              </div>
              <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl font-['Space_Grotesk']">
                {t("heroTitle")}
              </h1>
              <p className="max-w-xl text-lg leading-8 text-slate-300 font-['Spectral']">
                {t("heroBody")}
              </p>
              <div className="flex flex-wrap gap-3 text-sm text-slate-200">
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
                  {t("pill1")}
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
                  {t("pill2")}
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
                  {t("pill3")}
                </span>
              </div>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#story"
                  className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#0f131a] transition hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(255,255,255,0.2)]"
                >
                  {t("ctaStory")}
                </a>
                <a
                  href="#contact"
                  className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white/80 transition hover:border-white/40 hover:text-white"
                >
                  {t("ctaConnect")}
                </a>
              </div>
            </div>

            <div className="relative flex justify-center">
              <div className="absolute -inset-6 rounded-[40px] border border-white/10 bg-gradient-to-br from-white/10 via-white/0 to-white/5 blur-xl" />
              <a
                href="/1997.jpeg"
                target="_blank"
                rel="noreferrer"
                className="relative block overflow-hidden rounded-[36px] border border-white/20 bg-white/5 shadow-[0_30px_80px_rgba(0,0,0,0.45)]"
              >
                <Image
                  src="/1997.jpeg"
                  alt="Ricardo Da Costa Ribeiro portrait"
                  width={520}
                  height={640}
                  priority
                  className="h-[440px] w-[360px] object-cover object-left-top transform -scale-x-100 sm:h-[520px] sm:w-[420px]"
                />
              </a>
            </div>
          </section>

          <section
            id="story"
            className="grid gap-10 border-t border-white/10 py-12 text-slate-200 lg:grid-cols-[1.1fr_0.9fr]"
          >
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-white font-['Space_Grotesk']">
                {t("storyTitle")}
              </h2>
              <p className="leading-7 text-slate-300">{t("storyP1")}</p>
              <p className="leading-7 text-slate-300">{t("storyP2")}</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white font-['Space_Grotesk']">
                {t("focusTitle")}
              </h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                  <span>{t("focus1")}</span>
                  <span className="text-xs uppercase tracking-[0.2em] text-emerald-300">
                    {t("focusTag1")}
                  </span>
                </li>
                <li className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                  <span>{t("focus2")}</span>
                  <span className="text-xs uppercase tracking-[0.2em] text-sky-300">
                    {t("focusTag2")}
                  </span>
                </li>
                <li className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                  <span>{t("focus3")}</span>
                  <span className="text-xs uppercase tracking-[0.2em] text-rose-300">
                    {t("focusTag3")}
                  </span>
                </li>
              </ul>
            </div>
          </section>

          <section className="border-t border-white/10 py-12 text-slate-200">
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-white font-['Space_Grotesk']">
                {t("experienceTitle")}
              </h2>
              <div className="grid gap-6 lg:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs uppercase tracking-[0.2em] text-slate-400">
                    <span>{t("exp1Period")}</span>
                    <span>{t("exp1Company")}</span>
                  </div>
                  <h3 className="mt-3 text-lg font-semibold text-white">
                    {t("exp1Role")}
                  </h3>
                  <p className="mt-2 text-sm text-slate-300">
                    {t("exp1Summary")}
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-slate-300">
                    <li>{t("exp1Bullet1")}</li>
                    <li>{t("exp1Bullet2")}</li>
                    <li>{t("exp1Bullet3")}</li>
                  </ul>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs uppercase tracking-[0.2em] text-slate-400">
                    <span>{t("exp2Period")}</span>
                    <span>{t("exp2Company")}</span>
                  </div>
                  <h3 className="mt-3 text-lg font-semibold text-white">
                    {t("exp2Role")}
                  </h3>
                  <ul className="mt-4 space-y-2 text-sm text-slate-300">
                    <li>{t("exp2Bullet1")}</li>
                    <li>{t("exp2Bullet2")}</li>
                    <li>{t("exp2Bullet3")}</li>
                    <li>{t("exp2Bullet4")}</li>
                  </ul>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs uppercase tracking-[0.2em] text-slate-400">
                    <span>{t("exp3Period")}</span>
                    <span>{t("exp3Company")}</span>
                  </div>
                  <h3 className="mt-3 text-lg font-semibold text-white">
                    {t("exp3Role")}
                  </h3>
                  <ul className="mt-4 space-y-2 text-sm text-slate-300">
                    <li>{t("exp3Bullet1")}</li>
                    <li>{t("exp3Bullet2")}</li>
                    <li>{t("exp3Bullet3")}</li>
                    <li>{t("exp3Bullet4")}</li>
                  </ul>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs uppercase tracking-[0.2em] text-slate-400">
                    <span>{t("exp4Period")}</span>
                    <span>{t("exp4Company")}</span>
                  </div>
                  <h3 className="mt-3 text-lg font-semibold text-white">
                    {t("exp4Role")}
                  </h3>
                  <ul className="mt-4 space-y-2 text-sm text-slate-300">
                    <li>{t("exp4Bullet1")}</li>
                    <li>{t("exp4Bullet2")}</li>
                  </ul>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs uppercase tracking-[0.2em] text-slate-400">
                    <span>{t("exp5Period")}</span>
                    <span>{t("exp5Company")}</span>
                  </div>
                  <h3 className="mt-3 text-lg font-semibold text-white">
                    {t("exp5Role")}
                  </h3>
                  <ul className="mt-4 space-y-2 text-sm text-slate-300">
                    <li>{t("exp5Bullet1")}</li>
                    <li>{t("exp5Bullet2")}</li>
                  </ul>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs uppercase tracking-[0.2em] text-slate-400">
                    <span>{t("exp6Period")}</span>
                    <span>{t("exp6Company")}</span>
                  </div>
                  <h3 className="mt-3 text-lg font-semibold text-white">
                    {t("exp6Role")}
                  </h3>
                  <ul className="mt-4 space-y-2 text-sm text-slate-300">
                    <li>{t("exp6Bullet1")}</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="border-t border-white/10 py-12 text-slate-200">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-white font-['Space_Grotesk']">
                  {t("educationTitle")}
                </h2>
                <div className="space-y-4">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                      {t("edu1Period")}
                    </p>
                    <h3 className="mt-2 text-lg font-semibold text-white">
                      {t("edu1School")}
                    </h3>
                    <p className="text-sm text-slate-300">{t("edu1Detail")}</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                      {t("edu2Period")}
                    </p>
                    <h3 className="mt-2 text-lg font-semibold text-white">
                      {t("edu2School")}
                    </h3>
                    <p className="text-sm text-slate-300">{t("edu2Detail")}</p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-white font-['Space_Grotesk']">
                  {t("trainingTitle")}
                </h2>
                <ul className="space-y-3 text-sm text-slate-300">
                  <li className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                    {t("train1")}
                  </li>
                  <li className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                    {t("train2")}
                  </li>
                  <li className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                    {t("train3")}
                  </li>
                  <li className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                    {t("train4")}
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="border-t border-white/10 py-12 text-slate-200">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-white font-['Space_Grotesk']">
                  {t("skillsTitle")}
                </h2>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <h3 className="text-sm uppercase tracking-[0.2em] text-slate-400">
                    {t("skillLanguageTitle")}
                  </h3>
                  <p className="mt-3 text-sm text-slate-300">
                    {t("skillLanguageBody")}
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <h3 className="text-sm uppercase tracking-[0.2em] text-slate-400">
                    {t("skillItTitle")}
                  </h3>
                  <ul className="mt-3 space-y-2 text-sm text-slate-300">
                    <li>{t("skillIt1")}</li>
                    <li>{t("skillIt2")}</li>
                    <li>{t("skillIt3")}</li>
                  </ul>
                </div>
              </div>
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-white font-['Space_Grotesk']">
                  {t("leadershipTitle")}
                </h2>
                <ul className="space-y-3 text-sm text-slate-300">
                  <li className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                    {t("lead1")}
                  </li>
                  <li className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                    {t("lead2")}
                  </li>
                  <li className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                    {t("lead3")}
                  </li>
                </ul>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <h3 className="text-sm uppercase tracking-[0.2em] text-slate-400">
                    {t("referenceTitle")}
                  </h3>
                  <ul className="mt-3 space-y-2 text-sm text-slate-300">
                    <li>{t("ref1")}</li>
                    <li>{t("ref2")}</li>
                    <li>{t("ref3")}</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section
            id="contact"
            className="border-t border-white/10 py-12 text-slate-300"
          >
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-white font-['Space_Grotesk']">
                  {t("contactTitle")}
                </h2>
                <p className="text-sm leading-6 text-slate-300">
                  {t("contactBody")}
                </p>
                <div className="space-y-3 text-sm text-slate-300">
                  <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                    <span className="text-xs uppercase tracking-[0.2em] text-slate-400">
                      {t("currentRole")}
                    </span>
                    <p className="mt-1 text-white">
                      {t("currentRoleValue")}
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                    <span className="text-xs uppercase tracking-[0.2em] text-slate-400">
                      {t("company")}
                    </span>
                    <p className="mt-1 text-white">{t("companyValue")}</p>
                  </div>
                </div>
              </div>

              <ContactForm />
            </div>
          </section>

          <footer className="border-t border-white/10 py-8 text-xs uppercase tracking-[0.3em] text-slate-500">
            <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
              <span>Ricardo Da Costa Ribeiro</span>
              <div className="flex flex-wrap gap-4 text-[11px]">
                <a href="#story" className="transition hover:text-white">
                  {t("footerStory")}
                </a>
                <a href="#contact" className="transition hover:text-white">
                  {t("footerContact")}
                </a>
                <span>{t("footerCopyright")}</span>
              </div>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
}
