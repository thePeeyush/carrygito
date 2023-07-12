import "./globals.css"

export const metadata = {
    title : "next-app",
    description : "create next app"
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
