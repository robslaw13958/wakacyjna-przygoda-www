import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: 'Wynajem namiotów i dmuchańców – Wakacyjna Przygoda',
  description: 'Profesjonalna organizacja imprez plenerowych, wynajem namiotów i dmuchańców. Kielce i okolice. Montaż gratis, nowoczesny sprzęt – sprawdź ofertę!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <head>
        <link rel="icon" href="/Wakacyjna_przygoda.svg" />
        <link rel="apple-touch-icon" href="/Wakacyjna_przygoda.svg" />
        <link rel="canonical" href="https://www.wakacyjnaprzygoda.com/" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  )
}
