// src/app/layout.tsx

import QueryProvider from "@/providers/QueryProvider";
import "./globals.css";
import { MSWProvider } from "@/providers/MSWProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <MSWProvider>
          <QueryProvider>{children}</QueryProvider>
        </MSWProvider>
      </body>
    </html>
  );
}
