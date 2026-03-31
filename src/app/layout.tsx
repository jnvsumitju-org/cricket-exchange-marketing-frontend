import type { Metadata } from "next";
import "./globals.css";

const appUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

export const metadata: Metadata = {
  title: "IPL Trader - Fantasy Stock Exchange",
  description:
    "Trade virtual IPL player shares with live order books, portfolio tracking, and match-driven sentiment updates.",
  openGraph: {
    title: "IPL Trader",
    description: "Virtual IPL player stock exchange.",
    url: appUrl,
    siteName: "IPL Trader",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
