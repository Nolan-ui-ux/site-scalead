import Link from 'next/link';

const footerLinks = {
  solutions: {
    title: 'Solutions',
    links: [
      { label: 'Développement Commercial', href: '/developpement-commercial' },
      { label: 'Cold Email B2B', href: '/cold-email' },
      { label: 'Automatisation LinkedIn', href: '/automatisation-linkedin' },
      { label: 'Prospection Multicanale', href: '/prospection-multicanale' },
      { label: 'Personnalisation IA', href: '/ia-personnalisation' },
    ],
  },
  resources: {
    title: 'Ressources',
    links: [
      { label: 'Méthodologie', href: '/methodologie' },
      { label: 'Cas Clients', href: '/cas-clients' },
      { label: 'Blog', href: '/blog' },
      { label: 'FAQ', href: '/faq' },
      { label: 'Tarifs', href: '/tarifs' },
    ],
  },
  company: {
    title: 'Entreprise',
    links: [
      { label: 'Pourquoi Scalead', href: '/pourquoi-scalead' },
      { label: 'À Propos', href: '/a-propos' },
      { label: 'Contact', href: '/contact' },
      { label: 'Audit Gratuit', href: '/audit-gratuit' },
    ],
  },
  legal: {
    title: 'Légal',
    links: [
      { label: 'Mentions Légales', href: '/mentions-legales' },
      { label: 'CGV', href: '/cgv' },
    ],
  },
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <span className="text-2xl font-bold text-white">Scalead</span>
            </Link>
            <p className="text-sm text-gray-400">
              Votre agence de développement commercial B2B spécialisée dans la prospection multicanale à grande échelle.
            </p>
          </div>

          {/* Links Columns */}
          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <h3 className="text-white font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm hover:text-primary-400 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Scalead. Tous droits réservés.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary-400 transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary-400 transition-colors"
              aria-label="Twitter"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
