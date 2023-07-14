import "./globals.css"

export const metadata = {
    title : "CarryGito foods",
    description : "carryGito foods official website"
}

export default function Layout({children}) {
  return (
    <html lang="en">
        <body>
            {children}
        </body>
    </html>
  )
}
