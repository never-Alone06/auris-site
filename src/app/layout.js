import { Inter } from "next/font/google";
import "./globals.css";

// Chargement optimisé de la police Inter
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

// Métadonnées SEO du site (utilisées par Google & co)
export const metadata = {
  title: "AURIS — Le bracelet qui donne une voix au silence",
  description:
    "AURIS est un bracelet connecté à intelligence artificielle embarquée qui alerte les personnes sourdes et malentendantes par des vibrations différenciées selon les sons détectés.",
  keywords: [
    "AURIS",
    "bracelet connecté",
    "surdité",
    "malentendants",
    "Cameroun",
    "intelligence artificielle",
    "ESP32",
    "accessibilité",
  ],
  authors: [
    { name: "Nguimbous Nehemie Boris" },
    { name: "Tiencheu Kamga Leuga Franck" },
    { name: "Guemdjo Tebu Ange Elena" },
  ],
  openGraph: {
    title: "AURIS — Le bracelet qui donne une voix au silence",
    description:
      "Alerte vibratoire intelligente pour personnes sourdes et malentendantes.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}