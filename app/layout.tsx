// app/layout.tsx
import type { Metadata } from "next";
import { Karla } from "next/font/google";
import "./globals.css";

import { headers } from "next/headers";
import ContextProvider from '@/context'

const karla = Karla({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-karla',
});

export const metadata: Metadata = {
  title: "Gigabrain",
  icons: {
    icon: [
      {
        url: '/gigabrain-logo-tp.png',
        type: 'image/png',
      },
    ],
    apple: [
      {
        url: '/gigabrain-logo-tp.png',
        type: 'image/png',
      },
    ],
  },
};

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const headersList = await headers()
  const cookies = headersList.get('cookie')

  return (
    <html lang="en" className={karla.variable}>
      <body className="font-karla">
        <ContextProvider cookies={cookies}>{children}</ContextProvider>
      </body>
    </html>
  )
}