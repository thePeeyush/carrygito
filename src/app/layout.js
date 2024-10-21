'use client'
import useProfile from "@/hooks/useProfile"
import "./globals.css"

export const metadata = {
  title: "Carrygito Tiffin Services in Indore",
  description: "Looking for the best tiffin provider in Indore? Carrygito offers mouthwatering home-style meals delivered right to your doorstep.",
}

export default function Layout({ children }) {
  useProfile()
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
