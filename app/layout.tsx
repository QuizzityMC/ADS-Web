import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ADS Films",
  description: "ADS Film studios! The proud makers of tBitN",
  icons: {
    icon: "/images/logo.png",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/images/logo.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}



import './globals.css'