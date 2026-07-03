import './globals.css'
import { Instrument_Serif, Hanken_Grotesk } from "next/font/google";

const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-instrument",
});

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-hanken",
});

export const metadata = {
  title: 'Flower Dough Sourdough',
  description: 'Handcrafted sourdough bread baked with love',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${instrument.variable} ${hanken.variable}`}>
      <body>{children}</body>
    </html>
  )
}
