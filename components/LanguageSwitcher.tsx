// components/LanguageSwitcher.tsx
"use client";

import { useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { useTransition } from "react";

const LOCALES = [
    { code: "es", label: "Español" },
    { code: "en", label: "English" },
    { code: "fr", label: "Français" },
];

export default function LanguageSwitcher() {
    const current = useLocale();
    const t = useTranslations("LanguageSwitcher");
    const router = useRouter();
    const [isPending, startTransition] = useTransition();

    const changeLocale = (newLocale: string) => {
        // Guardamos en cookie y refrescamos la página para reenviar SSR
        document.cookie = `NEXT_LOCALE=${newLocale}; path=/`;
        startTransition(() => {
            router.refresh();
        });
    };

    return (
        <select
            value={current}
            onChange={(e) => changeLocale(e.target.value)}
            disabled={isPending}
        >
            {LOCALES.map((l) => (
                <option key={l.code} value={l.code}>
                    {t(l.code)}
                </option>
            ))}
        </select>
    );
}
