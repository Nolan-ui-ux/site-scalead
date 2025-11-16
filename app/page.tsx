'use client';

import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import Section from '@/components/ui/Section';
import EmailCampaignMockup from '@/components/mockups/EmailCampaignMockup';
import LinkedInSequenceMockup from '@/components/mockups/LinkedInSequenceMockup';
import AIPersonalizationMockup from '@/components/mockups/AIPersonalizationMockup';
import AnalyticsDashboardMockup from '@/components/mockups/AnalyticsDashboardMockup';
import TargetingMockup from '@/components/mockups/TargetingMockup';
import MultichannelFlowMockup from '@/components/mockups/MultichannelFlowMockup';

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <Section className="pt-24 pb-16" background="white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-primary-50 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></div>
                Agence de Développement Commercial B2B
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Générez des leads qualifiés en{' '}
                <span className="bg-gradient-to-r from-primary-600 to-blue-600 bg-clip-text text-transparent">
                  prospection multicanale
                </span>
              </h1>

              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                Scalead combine <strong>cold email à grande échelle</strong>,{' '}
                <strong>automatisation LinkedIn</strong> et <strong>IA de personnalisation</strong>{' '}
                pour générer des RDV qualifiés sans mobiliser vos équipes.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button href="/audit-gratuit" variant="primary" size="lg">
                  Demander un Audit Gratuit
                </Button>
                <Button href="/methodologie" variant="outline" size="lg">
                  Découvrir Notre Méthode
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { value: '4000+', label: 'Emails / mois' },
                  { value: '1000+', label: 'Contacts LinkedIn' },
                  { value: '8%', label: 'Taux de réponse' },
                  { value: '15+', label: 'RDV / mois' },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + i * 0.1 }}
                  >
                    <div className="text-2xl md:text-3xl font-bold text-primary-600 mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Features Grid - Compact */}
      <Section background="white" className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Une solution complète de prospection B2B
            </h2>
            <p className="text-lg text-gray-600">
              Technologie de pointe + expertise humaine pour des résultats concrets
            </p>
          </div>

          {/* Grid de 6 blocs compacts */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Block 1 - Cold Email */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-2 lg:col-span-2"
            >
              <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 h-full">
                <div className="p-8 grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <div className="inline-block p-2 bg-blue-100 rounded-xl mb-4">
                      <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      Cold Email à Grande Échelle
                    </h3>
                    <p className="text-gray-600 mb-4">
                      4 000+ emails personnalisés par mois avec une délivrabilité optimale et des copies testées.
                    </p>
                  </div>
                  <div className="scale-90">
                    <EmailCampaignMockup />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Block 2 - LinkedIn */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="bg-gradient-to-br from-indigo-50 to-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 h-full">
                <div className="p-6">
                  <div className="inline-block p-2 bg-indigo-100 rounded-xl mb-3">
                    <span className="text-xl font-bold text-indigo-600">in</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Automatisation LinkedIn
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    1 000+ contacts qualifiés par mois avec messages personnalisés par IA.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Block 3 - AI */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="bg-gradient-to-br from-purple-50 to-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 h-full">
                <div className="p-6">
                  <div className="inline-block p-2 bg-purple-100 rounded-xl mb-3">
                    <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Personnalisation IA
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Analyse automatique de chaque prospect pour des messages uniques.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Block 4 - Analytics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="md:col-span-2"
            >
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 h-full">
                <div className="p-8 grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <div className="inline-block p-2 bg-gray-100 rounded-xl mb-4">
                      <svg className="w-6 h-6 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      Dashboard Temps Réel
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Suivi en temps réel, A/B testing permanent et optimisation data-driven.
                    </p>
                  </div>
                  <div className="scale-90">
                    <AnalyticsDashboardMockup />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Block 5 - Targeting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <div className="bg-gradient-to-br from-emerald-50 to-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 h-full">
                <div className="p-6">
                  <div className="inline-block p-2 bg-emerald-100 rounded-xl mb-3">
                    <svg className="w-5 h-5 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Ciblage Ultra-Précis
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Identification de vos ICP idéaux avec Sales Navigator.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Block 6 - Multichannel */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <div className="bg-gradient-to-br from-orange-50 to-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 h-full">
                <div className="p-6">
                  <div className="inline-block p-2 bg-orange-100 rounded-xl mb-3">
                    <svg className="w-5 h-5 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                      <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Approche Multicanale
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Orchestration intelligente entre email et LinkedIn.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Social Proof */}
      <Section background="white" className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ils nous font confiance
            </h2>
            <p className="text-lg text-gray-600">
              Des entreprises de toutes tailles utilisent Scalead pour accélérer leur développement commercial
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                company: 'SaaS B2B',
                quote: 'Scalead nous a permis de générer 25 rendez-vous qualifiés par mois sans mobiliser nos équipes.',
                author: 'CEO',
                result: '+180% de pipeline',
              },
              {
                company: 'Cabinet de Conseil',
                quote: 'La qualité de personnalisation et le professionnalisme nous ont bluffés.',
                author: 'Directeur Commercial',
                result: '32 RDV en 2 mois',
              },
              {
                company: 'Éditeur Logiciel',
                quote: 'L&apos;approche multicanale nous a permis de toucher des décideurs inaccessibles.',
                author: 'VP Sales',
                result: '12% taux de réponse',
              },
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
                  <div className="mb-3">
                    <div className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">
                      {testimonial.result}
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4 flex-grow italic text-sm leading-relaxed">
                    &quot;{testimonial.quote}&quot;
                  </p>
                  <div className="border-t border-gray-100 pt-3">
                    <p className="font-semibold text-gray-900 text-sm">{testimonial.author}</p>
                    <p className="text-xs text-gray-600">{testimonial.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="white" className="py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-gradient-to-br from-primary-600 to-blue-700 rounded-2xl p-10 md:p-12 text-center shadow-lg">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Prêt à scaler votre développement commercial ?
            </h2>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              Obtenez un audit gratuit de votre stratégie de prospection et découvrez comment Scalead peut générer des leads qualifiés.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/audit-gratuit" variant="primary" size="lg" className="bg-white text-primary-600 hover:bg-gray-50">
                Demander un Audit Gratuit
              </Button>
              <Button href="/contact" variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                Parler à un Expert
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
