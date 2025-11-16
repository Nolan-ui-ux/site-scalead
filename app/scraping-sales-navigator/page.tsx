'use client';

import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import Section from '@/components/ui/Section';
import SalesNavScrapingMockup from '@/components/mockups/SalesNavScrapingMockup';

export default function ScrapingSalesNavigatorPage() {
  return (
    <>
      {/* Hero */}
      <Section className="pt-24 pb-12" background="white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <div className="inline-flex items-center gap-2 bg-[#0A66C2]/10 text-[#0A66C2] px-4 py-2 rounded-full text-sm font-medium mb-6">
                <div className="w-8 h-8 bg-[#0A66C2] rounded flex items-center justify-center">
                  <span className="text-white font-bold text-xs">in</span>
                </div>
                Scraping Sales Navigator
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Extraction massive de prospects <span className="bg-gradient-to-r from-[#0A66C2] to-blue-600 bg-clip-text text-transparent">depuis LinkedIn</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Exploitez tout le potentiel de LinkedIn Sales Navigator pour générer des milliers de leads qualifiés avec filtres avancés, enrichissement automatique et exports illimités.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button href="/audit-gratuit" variant="primary" size="lg">Demander une Démo</Button>
                <Button href="/contact" variant="outline" size="lg">Voir un Exemple</Button>
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
              { value: '4 500+', label: 'Prospects / recherche' },
              { value: '20+', label: 'Filtres disponibles' },
              { value: '100%', label: 'Données enrichies' },
              { value: '< 2 min', label: 'Par export' },
            ].map((stat, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-[#0A66C2] mb-1">{stat.value}</div>
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
                <SalesNavScrapingMockup />
              </div>
            </motion.div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Comment ça marche ?</h2>
              <div className="space-y-4">
                {[
                  {
                    step: '1',
                    title: 'Définissez vos filtres',
                    description: 'Fonction, secteur, taille d\'entreprise, localisation, ancienneté, niveau d\'études... Plus de 20 filtres disponibles.',
                  },
                  {
                    step: '2',
                    title: 'Lancez la recherche',
                    description: 'Notre système scrape automatiquement tous les résultats correspondant à vos critères, même au-delà des 2 500 limites de LinkedIn.',
                  },
                  {
                    step: '3',
                    title: 'Enrichissement automatique',
                    description: 'Nous enrichissons chaque profil avec email professionnel, téléphone, entreprise, technologies utilisées, signaux d\'intérêt.',
                  },
                  {
                    step: '4',
                    title: 'Export prêt à l\'emploi',
                    description: 'Recevez un CSV complet avec toutes les données structurées, prêt à importer dans votre CRM ou votre outil de prospection.',
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
                    <div className="flex-shrink-0 w-10 h-10 bg-[#0A66C2] rounded-full flex items-center justify-center text-white font-bold">
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

      {/* Features Grid */}
      <Section background="white" className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Toutes les données dont vous avez besoin</h2>
            <p className="text-lg text-gray-600">Export complet avec enrichissement multi-sources</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Données LinkedIn',
                items: ['Nom & Prénom', 'Poste actuel', 'Entreprise', 'URL profil LinkedIn', 'Photo de profil', 'Localisation'],
              },
              {
                title: 'Enrichissement Contact',
                items: ['Email professionnel', 'Email personnel', 'Téléphone direct', 'Téléphone mobile', 'Adresse entreprise', 'Site web'],
              },
              {
                title: 'Données Entreprise',
                items: ['Taille (effectifs)', 'Secteur d\'activité', 'Chiffre d\'affaires', 'Technologies utilisées', 'Levées de fonds', 'Signaux d\'intérêt'],
              },
            ].map((feature, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 h-full">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <ul className="space-y-2">
                    {feature.items.map((item, j) => (
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

      {/* Use Cases */}
      <Section background="#F5F7FB" className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Cas d'usage</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                title: 'Prospection B2B ciblée',
                description: 'Identifiez et contactez les décideurs de vos comptes cibles avec une précision chirurgicale.',
                color: 'blue',
              },
              {
                title: 'Recrutement IT',
                description: 'Trouvez les meilleurs profils tech avec filtres par compétences, expérience et localisation.',
                color: 'purple',
              },
              {
                title: 'Veille concurrentielle',
                description: 'Surveillez les mouvements de talents chez vos concurrents et identifiez les opportunités.',
                color: 'green',
              },
              {
                title: 'Business Development',
                description: 'Identifiez les entreprises en croissance, avec levées de fonds ou recrutements actifs.',
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

      {/* CTA */}
      <Section background="white" className="py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-gradient-to-br from-[#0A66C2] to-blue-700 rounded-2xl p-10 text-center shadow-lg">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Prêt à extraire vos premiers prospects ?</h2>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">Demandez une démo personnalisée et voyez comment nous pouvons générer des milliers de leads qualifiés depuis LinkedIn.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/audit-gratuit" variant="primary" size="lg" className="bg-white text-[#0A66C2] hover:bg-gray-50">Demander une Démo</Button>
              <Button href="/contact" variant="outline" size="lg" className="border-white text-white hover:bg-white/10">Nous Contacter</Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
