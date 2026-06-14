import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kerone Creary | Building What Matters",
  description:
    "Software Developer focused on .NET, SQL, and full-stack applications.",
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
