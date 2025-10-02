import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import '../styles/global.css'

export const metadata = {
  title: 'ALX Project 0x01',
  description: 'A comprehensive Next.js web application',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}