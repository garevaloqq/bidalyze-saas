"use client";

import { useLocale } from "next-intl";
import { useEffect, useState } from "react";
import SignUpClient from "components/Auth/SignUpClient";
import { getI18nPathClient } from "utils/client";

export default function SignInPage() {
  const locale = useLocale();
  const [path, setPath] = useState<string>("");

  useEffect(() => {
    const localizedPath = getI18nPathClient("/sign-up", locale);
    setPath(localizedPath);
  }, [locale]);

  if (!path) return null; // Mientras se calcula la ruta correcta

  return (
    <div style={{ display: "flex", justifyContent: "center", padding: 40 }}>
      <SignUpClient path={path} />
    </div>
  );
}
