import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Kerone Creary | Software Developer",
    template: "%s | Kerone Creary",
  },
  description:
    "Software developer focused on .NET, SQL, automation tools, and full-stack applications that help people and teams work better.",
  openGraph: {
    title: "Kerone Creary | Software Developer",
    description:
      "Software developer focused on .NET, SQL, automation tools, and full-stack applications that help people and teams work better.",
    type: "website",
    siteName: "Kerone Creary Portfolio",
  },
  twitter: {
    card: "summary",
    title: "Kerone Creary | Software Developer",
    description:
      "Software developer focused on .NET, SQL, automation tools, and full-stack applications that help people and teams work better.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
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
