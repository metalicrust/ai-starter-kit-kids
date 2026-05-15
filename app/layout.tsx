import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Starter Kit for Kids and Parents",
  description:
    "A family-friendly mini kit with three creative AI projects parents and kids can complete together.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
