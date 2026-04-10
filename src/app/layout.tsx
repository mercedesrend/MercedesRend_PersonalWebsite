import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://mercedesrend.com"),
  title: "Mercedes Rend",
  description:
    "Personal website for Mercedes Rend, a Johns Hopkins biomedical engineering student building AI systems for educational equity, college access, and student opportunity.",
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
