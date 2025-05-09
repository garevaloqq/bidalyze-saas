// components/Auth/SignInClient.tsx
"use client";

import { SignIn } from "@clerk/nextjs";

export default function SignInClient({ path }: { path: string }) {
  return (
    <div style={{ display: "flex", justifyContent: "center", padding: 40 }}>
      <SignIn path={path} />
    </div>
  );
}
