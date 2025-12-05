import './globals.css'

export const metadata = {
  title: 'Flower Dough Sourdough',
  description: 'Handcrafted sourdough bread baked with love',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
