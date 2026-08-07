import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://resepta.cenktokgoz.chatgpt.site"),
  title: "Resepta — Kliniğinizin dijital resepsiyonisti",
  description: "Resepta, İstanbul’daki kliniklerin WhatsApp mesajlarını karşılayan, randevu akışını düzenleyen dijital resepsiyonisttir.",
  keywords: ["klinik dijital resepsiyonist", "WhatsApp randevu sistemi", "doktor takvim uygulaması", "hasta iletişimi", "klinik otomasyonu", "İstanbul klinik otomasyonu", "Üsküdar klinik", "Kadıköy klinik", "Resepta"],
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "/",
    siteName: "Resepta",
    title: "Resepta — Kliniğinizin dijital resepsiyonisti",
    description: "WhatsApp hasta iletişimini, randevu akışını ve doktor takvimini tek bir dijital yardımcıyla düzenleyin.",
  },
  twitter: {
    card: "summary",
    title: "Resepta — Kliniğinizin dijital resepsiyonisti",
    description: "Klinikler için WhatsApp hasta iletişimi ve randevu akışı.",
  },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="tr"><body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body></html>;
}
