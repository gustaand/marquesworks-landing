import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { siteConfig } from '@/lib/site-config';

const manrope = localFont({ src: '../node_modules/@fontsource-variable/manrope/files/manrope-latin-wght-normal.woff2', variable: '--font-manrope', display: 'swap', weight: '200 800' });
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: siteConfig.title, template: '%s | Marques Works' },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  alternates: { canonical: '/' },
  robots: { index: true, follow: true },
  openGraph: { type: 'website', locale: 'es_ES', siteName: siteConfig.name, url: '/', title: siteConfig.title, description: siteConfig.description, images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Marques Works: web, reservas y gestión para tu negocio' }] },
  twitter: { card: 'summary_large_image', title: siteConfig.title, description: siteConfig.description, images: ['/opengraph-image'] },
  icons: { icon: '/icon.jpg', apple: '/apple-icon.jpg' },
  manifest: '/manifest.webmanifest',
};
export const viewport: Viewport = { width: 'device-width', initialScale: 1, themeColor: '#07111f' };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es" className={manrope.variable}><body>{children}</body></html>;
}
