import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://durgesh-v.vercel.app'),
  title: 'Durgesh Vaigandla | Product Builder & Growth Partner',
  description: 'I build systems that generate users, leads, and revenue. Partner with a technical expert who focuses on business growth, scalable infrastructure, and flawless execution. 35+ products deployed.',
  keywords: ['Durgesh Vaigandla', 'Product Builder', 'Fractional CTO', 'SaaS Strategy', 'Growth Engineer', 'Systems Architecture', 'Technical Partner', 'Startup Development', 'Conversion Optimization', 'Next.js Expert'],
  authors: [{ name: 'Durgesh Vaigandla' }],
  openGraph: {
    type: 'website',
    url: 'https://durgesh-v.vercel.app',
    title: 'Durgesh Vaigandla | Systems Built for Revenue & Scale',
    description: 'Transforming ideas into extreme-performance digital assets. 35+ products deployed. Discover actionable case studies.',
    images: [{
      url: '/og-image.png',
      width: 1200,
      height: 630,
      alt: 'Durgesh Vaigandla | Growth and Architecture'
    }],
    siteName: 'Durgesh Vaigandla Strategy',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Durgesh Vaigandla | Product Builder & Tech Partner',
    description: 'Stop hunting for developers. Partner with a product builder who ships fast, scales efficiently, and focuses on bottom-line growth.',
    images: ['/og-image.png'],
    creator: '@durgeshvaigandla',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/og-image.png',
  },
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#00f0ff" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;800&family=JetBrains+Mono:wght@400;700&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Durgesh Vaigandla",
              "givenName": "Durgesh",
              "familyName": "Vaigandla",
              "url": "https://durgesh-v.vercel.app",
              "jobTitle": "Product Builder & Growth Partner",
              "sameAs": [
                "https://linkedin.com/in/vaigandladurgesh",
                "https://github.com/Durgesh-Vaigandla/"
              ],
              "knowsAbout": ["Web Development", "AI Engineering", "SaaS Infrastructure", "Growth Engineering"]
            })
          }}
        />
      </head>
      <body className="bg-space text-gray-200 selection:bg-accent/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
