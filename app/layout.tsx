import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { generateOrganizationSchema } from '@/components/layout/SEO';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://scalead.fr'),
  title: {
    default: 'Scalead | Agence de Développement Commercial B2B',
    template: '%s | Scalead',
  },
  description: 'Agence de développement commercial B2B spécialisée dans la prospection multicanale. Cold email, automatisation LinkedIn et personnalisation IA pour générer des leads qualifiés.',
  keywords: 'développement commercial, prospection commerciale, agence prospection, cold email, automatisation LinkedIn, lead generation B2B, prospection multicanale, SDR externalisé',
  authors: [{ name: 'Scalead' }],
  icons: {
    icon: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://scalead.fr',
    siteName: 'Scalead',
    images: ['/og-image.svg'],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og-image.svg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationSchema = generateOrganizationSchema();

  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
