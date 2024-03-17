'use client';

import { NextUIProvider } from "@nextui-org/react";
import { SessionProvider } from "next-auth/react";

interface ProviderProp {
  children: React.ReactNode;
}

export default function Provider({ children }: ProviderProp) {
  // 2. Wrap NextUIProvider at the root of your app
  return (
    <SessionProvider>
      <NextUIProvider>
        {children}
      </NextUIProvider>
    </SessionProvider>
  );
}
