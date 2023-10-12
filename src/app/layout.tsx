import './globals.scss'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './components/ui/navbar/navbar'
import { Providers } from './providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Crypto Pay',
  description: 'Crypto payments for telegram bots',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <Navbar></Navbar>
          {children}
        </Providers>
      </body>
    </html>
  )
}
