"use client";

import { FormEvent } from "react";
import { useTranslations } from "next-intl";

const WHATSAPP_LINK = "https://wa.me/message/XITK6YVFTVQFD1";

export default function ContactForm() {
  const t = useTranslations("home");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const message = String(formData.get("message") || "").trim();

    const text = [
      `${t("formName")}: ${name || "-"}`,
      `${t("formEmail")}: ${email || "-"}`,
      `${t("formMessage")}: ${message || "-"}`,
    ].join("\n");

    const url = `${WHATSAPP_LINK}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 rounded-[28px] border border-white/10 bg-white/5 p-6"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="text-xs uppercase tracking-[0.2em] text-slate-400">
          {t("formName")}
          <input
            type="text"
            name="name"
            placeholder={t("formNamePlaceholder")}
            className="mt-2 w-full rounded-2xl border border-white/10 bg-[#0b1016] px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-emerald-400 focus:outline-none"
          />
        </label>
        <label className="text-xs uppercase tracking-[0.2em] text-slate-400">
          {t("formEmail")}
          <input
            type="email"
            name="email"
            placeholder={t("formEmailPlaceholder")}
            className="mt-2 w-full rounded-2xl border border-white/10 bg-[#0b1016] px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-emerald-400 focus:outline-none"
          />
        </label>
      </div>
      <label className="text-xs uppercase tracking-[0.2em] text-slate-400">
        {t("formMessage")}
        <textarea
          name="message"
          rows={4}
          placeholder={t("formMessagePlaceholder")}
          className="mt-2 w-full rounded-2xl border border-white/10 bg-[#0b1016] px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-emerald-400 focus:outline-none"
        />
      </label>
      <button
        type="submit"
        className="w-full rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-[#0f131a] transition hover:-translate-y-0.5 hover:shadow-[0_15px_35px_rgba(16,185,129,0.45)]"
      >
        {t("formSubmit")}
      </button>
      <p className="text-xs text-slate-500">{t("formNote")}</p>
    </form>
  );
}
