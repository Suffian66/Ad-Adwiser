import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  metadataBase: new URL('https://adadwiser.com.pk'),
  title: { default: 'AD ADWISER | Branding, Retail & Advertising Solutions', template: '%s | AD ADWISER' },
  description: 'AD ADWISER transforms ideas into powerful brand experiences through branding, retail solutions, architectural execution, advertising, 3D visualization and events.',
  keywords: ['branding agency Pakistan', 'retail experiences', 'architectural branding', 'OOH advertising', 'AD ADWISER'],
  openGraph: { title: 'AD ADWISER | Transforming Ideas Into Reality', description: 'Premium branding, retail and built-environment execution.', url: 'https://adadwiser.com.pk', siteName: 'AD ADWISER', type: 'website' },
  icons: {
    icon: [
      {
        url: '/logo.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/logo2.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/logo.png',
        type: 'image/svg+xml',
      },
    ],
    apple: '/.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />
        {children}
        <Footer />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
