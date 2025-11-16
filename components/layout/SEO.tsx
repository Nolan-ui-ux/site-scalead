import { Metadata } from 'next';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  canonical?: string;
}

export function generateMetadata({
  title,
  description,
  keywords,
  ogImage = '/og-image.png',
  canonical,
}: SEOProps): Metadata {
  const siteName = 'Scalead';
  const fullTitle = title.includes(siteName) ? title : `${title} | ${siteName}`;
  const url = canonical ? `https://scalead.fr${canonical}` : 'https://scalead.fr';

  return {
    title: fullTitle,
    description,
    keywords: keywords || 'développement commercial, prospection commerciale, cold email, automatisation LinkedIn, prospection multicanale, lead generation B2B',
    authors: [{ name: 'Scalead' }],
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'fr_FR',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [ogImage],
    },
    alternates: {
      canonical: url,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

// Schema.org JSON-LD helpers
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Scalead',
    url: 'https://scalead.fr',
    logo: 'https://scalead.fr/logo.png',
    description: 'Agence de développement commercial B2B spécialisée dans la prospection multicanale',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'FR',
    },
    sameAs: [
      'https://www.linkedin.com/company/scalead',
      'https://twitter.com/scalead',
    ],
  };
}

export function generateServiceSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Développement Commercial B2B',
    provider: {
      '@type': 'Organization',
      name: 'Scalead',
    },
    areaServed: {
      '@type': 'Country',
      name: 'France',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Services de prospection B2B',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Cold Email B2B',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Automatisation LinkedIn',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Prospection Multicanale',
          },
        },
      ],
    },
  };
}
