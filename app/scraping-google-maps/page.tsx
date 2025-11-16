'use client';

import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import Section from '@/components/ui/Section';
import GoogleMapsScrapingMockup from '@/components/mockups/GoogleMapsScrapingMockup';

export default function ScrapingGoogleMapsPage() {
  return (
    <>
      {/* Hero */}
      <Section className="pt-24 pb-12" background="white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                Scraping Google Maps
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Scraping local : <span className="bg-gradient-to-r from-blue-600 to-primary-600 bg-clip-text text-transparent">artisans, commerces & services</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Extrayez en masse les coordonnées de professionnels locaux depuis Google Maps : plombiers, restaurants, avocats, médecins... Toutes les données dont vous avez besoin pour votre prospection locale.
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
              { value: '500+', label: 'Résultats / recherche' },
              { value: '95%', label: 'Avec téléphone' },
              { value: '85%', label: 'Avec email' },
              { value: '100%', label: 'Données vérifiées' },
            ].map((stat, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-1">{stat.value}</div>
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
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Comment ça marche ?</h2>
              <div className="space-y-4">
                {[
                  {
                    step: '1',
                    title: 'Définissez votre recherche',
                    description: 'Type d\'établissement ("plombier", "restaurant", "avocat"...) + zone géographique (ville, département, région).',
                  },
                  {
                    step: '2',
                    title: 'Scraping automatique',
                    description: 'Notre système parcourt tous les résultats Google Maps et collecte toutes les données publiques disponibles.',
                  },
                  {
                    step: '3',
                    title: 'Enrichissement des contacts',
                    description: 'Nous complétons avec emails professionnels, réseaux sociaux, sites web et autres informations utiles.',
                  },
                  {
                    step: '4',
                    title: 'Export structuré',
                    description: 'CSV complet avec nom, adresse, téléphone, email, site web, note Google, nombre d\'avis, horaires...',
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
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
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

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="bg-white rounded-2xl p-4 shadow-2xl">
                <GoogleMapsScrapingMockup />
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Features Grid */}
      <Section background="white" className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Toutes les données Google Maps</h2>
            <p className="text-lg text-gray-600">Export complet et structuré</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Informations de base',
                items: ['Nom de l\'établissement', 'Adresse complète', 'Ville & Code postal', 'Catégorie', 'Coordonnées GPS', 'Site web'],
              },
              {
                title: 'Contact',
                items: ['Numéro de téléphone', 'Email (si disponible)', 'Page Facebook', 'Profil Instagram', 'Autres réseaux sociaux', 'Formulaire de contact'],
              },
              {
                title: 'Données d\'analyse',
                items: ['Note Google (sur 5)', 'Nombre d\'avis', 'Horaires d\'ouverture', 'Photos', 'Services proposés', 'Questions-Réponses'],
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Fournisseurs B2B locaux',
                description: 'Trouvez des plombiers, électriciens, artisans pour proposer vos services de fourniture de matériel.',
                icon: 'tools',
              },
              {
                title: 'Prospection restaurants',
                description: 'Ciblez les restaurants, bars, cafés pour vos solutions de paiement, livraison ou logiciels de caisse.',
                icon: 'restaurant',
              },
              {
                title: 'Services professionnels',
                description: 'Identifiez avocats, comptables, médecins pour vos offres d\'assurance, logiciels métier ou formation.',
                icon: 'briefcase',
              },
              {
                title: 'Retail & Commerce',
                description: 'Listez les commerces pour proposer systèmes de paiement, solutions d\'encaissement ou marketing local.',
                icon: 'shop',
              },
              {
                title: 'Immobilier',
                description: 'Trouvez agences immobilières, syndics, promoteurs pour vos services B2B.',
                icon: 'building',
              },
              {
                title: 'Santé & Bien-être',
                description: 'Ciblez cabinets médicaux, dentistes, kinés, salles de sport pour vos solutions métier.',
                icon: 'health',
              },
            ].map((useCase, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all h-full">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{useCase.title}</h3>
                  <p className="text-gray-600 text-sm">{useCase.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Pricing hint */}
      <Section background="white" className="py-12">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-gray-900 mb-2">À partir de 0,10€</div>
                <div className="text-sm text-gray-600">Par contact collecté</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900 mb-2">Livraison 48h</div>
                <div className="text-sm text-gray-600">Fichier prêt à l'emploi</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900 mb-2">Support dédié</div>
                <div className="text-sm text-gray-600">Accompagnement personnalisé</div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section background="white" className="py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-gradient-to-br from-blue-600 to-primary-700 rounded-2xl p-10 text-center shadow-lg">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Prêt à scraper Google Maps ?</h2>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">Demandez votre premier fichier test gratuit et découvrez la qualité de nos données.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/audit-gratuit" variant="primary" size="lg" className="bg-white text-blue-600 hover:bg-gray-50">Fichier Test Gratuit</Button>
              <Button href="/contact" variant="outline" size="lg" className="border-white text-white hover:bg-white/10">Nous Contacter</Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
