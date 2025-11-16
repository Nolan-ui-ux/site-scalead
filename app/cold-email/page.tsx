'use client';

import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import Section from '@/components/ui/Section';
import EmailCampaignMockup from '@/components/mockups/EmailCampaignMockup';
import AnalyticsDashboardMockup from '@/components/mockups/AnalyticsDashboardMockup';

export default function ColdEmailPage() {
  return (
    <>
      {/* Hero */}
      <Section className="pt-24 pb-12" background="white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                Cold Email B2B
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Cold Email B2B : <span className="bg-gradient-to-r from-blue-600 to-primary-600 bg-clip-text text-transparent">4 000+ emails personnalisés</span> par mois
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Scalead maîtrise l'art du cold email à grande échelle. Volumes massifs, personnalisation IA et délivrabilité optimale pour générer des leads qualifiés.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button href="/audit-gratuit" variant="primary" size="lg">Audit Gratuit</Button>
                <Button href="/methodologie" variant="outline" size="lg">Notre Méthode</Button>
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
              { value: '4000+', label: 'Emails / mois' },
              { value: '45%', label: 'Taux d\'ouverture' },
              { value: '8%', label: 'Taux de réponse' },
              { value: '98%', label: 'Délivrabilité' },
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

      {/* Main Feature with Mockup */}
      <Section background="white" className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl overflow-hidden shadow-sm">
            <div className="p-8 md:p-12 grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-block p-2 bg-blue-100 rounded-xl mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Personnalisation IA à grande échelle</h2>
                <p className="text-gray-600 mb-6">Chaque email est unique grâce à notre IA qui analyse le site web, le profil LinkedIn, les actualités récentes et le secteur d'activité de chaque prospect.</p>
                <ul className="space-y-3">
                  {[
                    'Variables personnalisées automatiques',
                    'Analyse contextuelle de chaque prospect',
                    'Copies optimisées pour la conversion',
                    'A/B testing permanent sur tous les éléments',
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="scale-95">
                <EmailCampaignMockup />
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Features Grid */}
      <Section background="white" className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Notre approche du cold email B2B</h2>
            <p className="text-lg text-gray-600">Ce qui fait la différence entre un email qui finit en spam et un email qui génère des RDV</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Ciblage ultra-précis',
                description: 'Bases de données vérifiées, enrichissement multi-sources et segmentation avancée pour ne contacter que vos ICP.',
                color: 'blue',
              },
              {
                title: 'Personnalisation IA',
                description: 'Notre IA analyse site web, LinkedIn, actualités et secteur pour rédiger des emails 100% personnalisés.',
                color: 'purple',
              },
              {
                title: 'A/B Testing systématique',
                description: 'Test permanent des objets, accroches, CTA et timings pour optimiser chaque élément de vos campagnes.',
                color: 'green',
              },
              {
                title: 'Délivrabilité maximale',
                description: 'Infrastructure dédiée, warm-up progressif, domaines multiples et monitoring SPF/DKIM/DMARC.',
                color: 'orange',
              },
              {
                title: 'Séquences intelligentes',
                description: 'Follow-ups automatisés et personnalisés avec logique conditionnelle basée sur les comportements.',
                color: 'indigo',
              },
              {
                title: 'Scale sans compromis',
                description: 'Montée en volume progressive tout en maintenant qualité, personnalisation et taux de réponse élevés.',
                color: 'emerald',
              },
            ].map((feature, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all h-full">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Analytics Mockup */}
      <Section background="white" className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl overflow-hidden shadow-sm">
            <div className="p-8 md:p-12 grid md:grid-cols-2 gap-8 items-center">
              <div className="scale-95">
                <AnalyticsDashboardMockup />
              </div>
              <div>
                <div className="inline-block p-2 bg-gray-100 rounded-xl mb-4">
                  <svg className="w-6 h-6 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Suivi et optimisation en temps réel</h2>
                <p className="text-gray-600 mb-6">Dashboard complet pour suivre toutes vos métriques : taux d'ouverture, clics, réponses, RDV générés. Optimisation continue basée sur la data.</p>
                <ul className="space-y-3">
                  {[
                    'Monitoring en temps réel de toutes les campagnes',
                    'A/B testing automatique sur tous les éléments',
                    'Rapports détaillés et insights actionnables',
                    'Optimisation quotidienne des performances',
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Comparison Table - Compact */}
      <Section background="white" className="py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Cold email : en interne vs avec Scalead</h2>
          </div>
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left py-4 px-6 text-sm font-semibold text-gray-900"></th>
                    <th className="text-center py-4 px-6 text-sm font-semibold text-gray-600">En interne</th>
                    <th className="text-center py-4 px-6 text-sm font-semibold text-blue-600 bg-blue-50">Avec Scalead</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    { feature: 'Volume / mois', internal: '500-1000', scalead: '4 000+' },
                    { feature: 'Taux d\'ouverture', internal: '20-35%', scalead: '40-50%' },
                    { feature: 'Taux de réponse', internal: '2-4%', scalead: '6-10%' },
                    { feature: 'Personnalisation', internal: 'Manuelle', scalead: '100% IA' },
                    { feature: 'Délivrabilité', internal: '60-80%', scalead: '95-98%' },
                    { feature: 'Délai de mise en place', internal: '2-3 mois', scalead: '< 2 semaines' },
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-gray-50">
                      <td className="py-3 px-6 text-sm font-medium text-gray-900">{row.feature}</td>
                      <td className="py-3 px-6 text-center text-sm text-gray-600">{row.internal}</td>
                      <td className="py-3 px-6 text-center text-sm font-semibold text-blue-600 bg-blue-50">{row.scalead}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section background="white" className="py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-gradient-to-br from-blue-600 to-primary-700 rounded-2xl p-10 text-center shadow-lg">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Prêt à lancer vos campagnes de cold email ?</h2>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">Obtenez un audit gratuit de votre approche actuelle et découvrez comment générer des leads qualifiés via le cold email B2B.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/audit-gratuit" variant="primary" size="lg" className="bg-white text-blue-600 hover:bg-gray-50">Audit Gratuit</Button>
              <Button href="/cas-clients" variant="outline" size="lg" className="border-white text-white hover:bg-white/10">Voir des Cas Clients</Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
