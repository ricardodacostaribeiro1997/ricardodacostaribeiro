"use client";

import { usePathname, useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";

const locales = ["tet", "en", "pt"] as const;

export default function LanguageSwitcher() {
  const t = useTranslations("home");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleChange = (nextLocale: string) => {
    if (!pathname) return;
    const segments = pathname.split("/").filter(Boolean);
    if (segments.length === 0) {
      router.push(`/${nextLocale}`);
      return;
    }
    segments[0] = nextLocale;
    router.push(`/${segments.join("/")}`);
  };

  return (
    <label className="relative inline-flex items-center">
      <span className="sr-only">{t("languageLabel")}</span>
      <select
        value={locale}
        onChange={(event) => handleChange(event.target.value)}
        className="appearance-none rounded-full border border-white/10 bg-white/5 px-4 py-2 pr-9 text-[11px] uppercase tracking-[0.3em] text-slate-200 transition hover:border-white/30 focus:border-emerald-400 focus:outline-none"
      >
        {locales.map((code) => (
          <option key={code} value={code} className="text-slate-900">
            {code === "tet" && t("langTet")}
            {code === "en" && t("langEn")}
            {code === "pt" && t("langPt")}
          </option>
        ))}
      </select>
      <span className="pointer-events-none absolute right-3 text-xs text-slate-300">
        ▾
      </span>
    </label>
  );
}
