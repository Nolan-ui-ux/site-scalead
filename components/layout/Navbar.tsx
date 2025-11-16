'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '@/components/ui/Button';

const navigation = [
  {
    label: 'Solutions',
    items: [
      { label: 'Développement Commercial', href: '/developpement-commercial' },
      { label: 'Cold Email B2B', href: '/cold-email' },
      { label: 'Automatisation LinkedIn', href: '/automatisation-linkedin' },
      { label: 'Prospection Multicanale', href: '/prospection-multicanale' },
      { label: 'Personnalisation IA', href: '/ia-personnalisation' },
    ],
  },
  {
    label: 'Scraping',
    items: [
      { label: 'Sales Navigator (LinkedIn)', href: '/scraping-sales-navigator' },
      { label: 'Google Maps (Local)', href: '/scraping-google-maps' },
      { label: 'Tech Stack (Technologies)', href: '/scraping-tech-stack' },
    ],
  },
  {
    label: 'Ressources',
    items: [
      { label: 'Méthodologie', href: '/methodologie' },
      { label: 'Cas Clients', href: '/cas-clients' },
      { label: 'Blog', href: '/blog' },
      { label: 'FAQ', href: '/faq' },
    ],
  },
  {
    label: 'Comparatifs',
    items: [
      { label: 'Scalead vs Agences', href: '/comparatif-agences-outbound' },
      { label: 'Scalead vs Outils', href: '/comparatif-outils-outbound' },
    ],
  },
  {
    label: 'Entreprise',
    items: [
      { label: 'Pourquoi Scalead', href: '/pourquoi-scalead' },
      { label: 'À Propos', href: '/a-propos' },
      { label: 'Tarifs', href: '/tarifs' },
    ],
  },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="container-custom">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">S</span>
            </div>
            <span className="text-2xl font-bold text-gray-900">Scalead</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="text-gray-700 hover:text-primary-500 font-medium transition-colors">
                  {item.label}
                </button>
                <AnimatePresence>
                  {activeDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-soft-lg py-2 border border-gray-100"
                    >
                      {item.items.map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-primary-500 transition-colors"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button href="/contact" variant="secondary" size="sm">
              Contact
            </Button>
            <Button href="/audit-gratuit" variant="primary" size="sm">
              Audit Gratuit
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-gray-200"
            >
              <div className="py-4 space-y-4">
                {navigation.map((item) => (
                  <div key={item.label} className="space-y-2">
                    <div className="font-medium text-gray-900 px-4">
                      {item.label}
                    </div>
                    {item.items.map((subItem) => (
                      <Link
                        key={subItem.href}
                        href={subItem.href}
                        className="block px-8 py-2 text-gray-600 hover:text-primary-500"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                ))}
                <div className="px-4 pt-4 space-y-2">
                  <Button href="/contact" variant="secondary" className="w-full">
                    Contact
                  </Button>
                  <Button href="/audit-gratuit" variant="primary" className="w-full">
                    Audit Gratuit
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
