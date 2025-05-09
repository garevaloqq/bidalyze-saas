// components/Auth/SignInClient.tsx
"use client";

import { SignUp } from "@clerk/nextjs";

export default function SignUpClient({ path }: { path: string }) {
  return (
    <div style={{ display: "flex", justifyContent: "center", padding: 40 }}>
      <SignUp path={path} />
    </div>
  );
}
