// Suppress missing type declarations for CSS imports in this TS file
// @ts-ignore
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SevakSetu AI",
  description: "Volunteer Deployment Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}