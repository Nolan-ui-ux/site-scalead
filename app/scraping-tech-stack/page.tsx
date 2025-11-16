'use client';

import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import Section from '@/components/ui/Section';
import TechScrapingMockup from '@/components/mockups/TechScrapingMockup';

export default function ScrapingTechStackPage() {
  return (
    <>
      {/* Hero */}
      <Section className="pt-24 pb-12" background="white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <div className="inline-flex items-center gap-2 bg-purple-50 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                Scraping Tech Stack
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Détection technologique : <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">ciblez par stack technique</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Identifiez les entreprises utilisant des technologies spécifiques (Shopify, WordPress, Salesforce...) pour une prospection ultra-ciblée et personnalisée.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button href="/audit-gratuit" variant="primary" size="lg">Demander une Démo</Button>
                <Button href="/contact" variant="outline" size="lg">Voir Technologies Disponibles</Button>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Stats */}
      <Section background="white" className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { value: '10 000+', label: 'Technologies détectées' },
              { value: '50M+', label: 'Sites analysés' },
              { value: '150+', label: 'Pays couverts' },
              { value: '99%', label: 'Précision' },
            ].map((stat, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Main Mockup Section */}
      <Section background="#F5F7FB" className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="bg-white rounded-2xl p-4 shadow-2xl">
                <TechScrapingMockup />
              </div>
            </motion.div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Comment ça marche ?</h2>
              <div className="space-y-4">
                {[
                  {
                    step: '1',
                    title: 'Sélectionnez les technologies',
                    description: 'Shopify, WordPress, Salesforce, HubSpot, Stripe, Google Analytics... Plus de 10 000 technologies détectables.',
                  },
                  {
                    step: '2',
                    title: 'Définissez vos critères',
                    description: 'Pays, langue, taille de trafic, secteur d\'activité, taille d\'entreprise... Affinez votre ciblage.',
                  },
                  {
                    step: '3',
                    title: 'Analyse automatique',
                    description: 'Notre système crawle des millions de sites web et détecte les technologies utilisées avec une précision de 99%.',
                  },
                  {
                    step: '4',
                    title: 'Export enrichi',
                    description: 'CSV avec domaine, technologies, trafic estimé, emails de contact, réseaux sociaux, données entreprise.',
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Technologies Categories */}
      <Section background="white" className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Technologies détectables</h2>
            <p className="text-lg text-gray-600">Plus de 10 000 technologies dans 80+ catégories</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                category: 'E-commerce',
                examples: ['Shopify', 'WooCommerce', 'Magento', 'PrestaShop', 'BigCommerce', 'Wix eCommerce'],
              },
              {
                category: 'CMS',
                examples: ['WordPress', 'Webflow', 'Drupal', 'Joomla', 'Squarespace', 'Wix'],
              },
              {
                category: 'CRM & Marketing',
                examples: ['Salesforce', 'HubSpot', 'Mailchimp', 'ActiveCampaign', 'Pipedrive', 'Zoho'],
              },
              {
                category: 'Paiement',
                examples: ['Stripe', 'PayPal', 'Braintree', 'Square', 'Adyen', 'Klarna'],
              },
              {
                category: 'Analytics',
                examples: ['Google Analytics', 'Hotjar', 'Mixpanel', 'Segment', 'Amplitude', 'Heap'],
              },
              {
                category: 'Framework & Tech',
                examples: ['React', 'Vue.js', 'Angular', 'Next.js', 'Laravel', 'Django'],
              },
            ].map((tech, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 h-full">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{tech.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {tech.examples.map((example, j) => (
                      <span key={j} className="text-xs px-3 py-1 bg-purple-50 text-purple-700 rounded-full">
                        {example}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Use Cases */}
      <Section background="#F5F7FB" className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Cas d'usage</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                title: 'Solutions SaaS B2B',
                description: 'Ciblez les entreprises utilisant des outils complémentaires à votre solution (ex: CRM, analytics, marketing automation).',
                color: 'purple',
              },
              {
                title: 'Agences Web',
                description: 'Identifiez les sites sous WordPress, Shopify ou autres CMS pour proposer vos services de refonte, maintenance ou optimisation.',
                color: 'blue',
              },
              {
                title: 'Services de Paiement',
                description: 'Trouvez les e-commerces utilisant Stripe, PayPal ou autres solutions pour proposer vos alternatives ou services complémentaires.',
                color: 'green',
              },
              {
                title: 'Développement & Intégrations',
                description: 'Ciblez les entreprises avec des stacks techniques spécifiques pour proposer développement, intégrations ou consulting.',
                color: 'orange',
              },
            ].map((useCase, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all h-full">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{useCase.title}</h3>
                  <p className="text-gray-600 text-sm">{useCase.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Data Output */}
      <Section background="white" className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Données fournies</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: 'Site Web',
                items: ['Nom de domaine', 'URL complète', 'Langue', 'Pays'],
              },
              {
                title: 'Technologies',
                items: ['CMS détecté', 'Framework', 'Outils marketing', 'Plugins'],
              },
              {
                title: 'Trafic & Données',
                items: ['Visites mensuelles', 'Classement Alexa', 'Pages indexées', 'Backlinks'],
              },
              {
                title: 'Contact',
                items: ['Emails trouvés', 'Téléphone', 'Réseaux sociaux', 'WHOIS'],
              },
            ].map((data, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 h-full">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{data.title}</h3>
                  <ul className="space-y-2">
                    {data.items.map((item, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-gray-600">
                        <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section background="white" className="py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-gradient-to-br from-purple-600 to-indigo-700 rounded-2xl p-10 text-center shadow-lg">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Prêt à cibler par stack technique ?</h2>
            <p className="text-lg text-purple-100 mb-8 max-w-2xl mx-auto">Demandez une extraction test et découvrez comment cibler précisément vos prospects par technologie.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/audit-gratuit" variant="primary" size="lg" className="bg-white text-purple-600 hover:bg-gray-50">Extraction Test Gratuite</Button>
              <Button href="/contact" variant="outline" size="lg" className="border-white text-white hover:bg-white/10">Nous Contacter</Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
