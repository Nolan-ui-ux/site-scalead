'use client';

import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import Section from '@/components/ui/Section';
import LinkedInSequenceMockup from '@/components/mockups/LinkedInSequenceMockup';
import TargetingMockup from '@/components/mockups/TargetingMockup';

export default function AutomatisationLinkedInPage() {
  return (
    <>
      {/* Hero */}
      <Section className="pt-24 pb-12" background="white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></div>
                Automatisation LinkedIn B2B
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Automatisation LinkedIn : <span className="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">1 000+ contacts</span> qualifiés par mois
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Scalead automatise votre prospection LinkedIn tout en gardant une approche 100% personnalisée et sécurisée. Générez des leads qualifiés sur le réseau social professionnel n°1.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button href="/audit-gratuit" variant="primary" size="lg">Audit Gratuit</Button>
                <Button href="/prospection-multicanale" variant="outline" size="lg">Approche Multicanale</Button>
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
              { value: '1000+', label: 'Invitations / mois' },
              { value: '35%', label: 'Taux d\'acceptation' },
              { value: '12%', label: 'Taux de réponse' },
              { value: '100%', label: 'Personnalisation IA' },
            ].map((stat, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-indigo-600 mb-1">{stat.value}</div>
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
          <div className="bg-gradient-to-br from-indigo-50 to-white rounded-2xl overflow-hidden shadow-sm">
            <div className="p-8 md:p-12 grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-block p-2 bg-indigo-100 rounded-xl mb-4">
                  <span className="text-2xl font-bold text-indigo-600">in</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Séquences intelligentes 100% personnalisées</h2>
                <p className="text-gray-600 mb-6">Chaque message LinkedIn est unique, rédigé par notre IA qui analyse le profil, les posts récents et l'activité LinkedIn de chaque prospect pour maximiser l'engagement.</p>
                <ul className="space-y-3">
                  {[
                    'Messages 100% personnalisés par IA',
                    'Séquences multi-touch optimisées',
                    'Respect strict des limites LinkedIn',
                    'Actions humanisées avec randomisation',
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
                <LinkedInSequenceMockup />
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Features Grid */}
      <Section background="white" className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Notre approche de l'automatisation LinkedIn</h2>
            <p className="text-lg text-gray-600">Ce qui fait la différence entre du spam et de la prospection professionnelle</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Ciblage précis',
                description: 'Identification des bons décideurs grâce au Sales Navigator et à nos filtres avancés (poste, entreprise, secteur, localisation).',
              },
              {
                title: 'Messages personnalisés IA',
                description: 'Chaque message est unique, rédigé par notre IA qui analyse le profil, les posts récents et l\'activité LinkedIn du prospect.',
              },
              {
                title: 'Sécurité maximale',
                description: 'Respect strict des limites LinkedIn, actions humanisées avec randomisation, gestion des fuseaux horaires.',
              },
              {
                title: 'Multi-touch intelligent',
                description: 'Séquences automatisées : invitation → message de connexion → follow-ups → content engagement.',
              },
              {
                title: 'Synchronisation multicanale',
                description: 'Orchestration parfaite entre LinkedIn et email pour maximiser vos chances de toucher le prospect.',
              },
              {
                title: 'Reporting détaillé',
                description: 'Dashboard temps réel avec toutes vos métriques LinkedIn : invitations, acceptations, messages, réponses.',
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

      {/* Targeting Mockup */}
      <Section background="white" className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-br from-purple-50 to-white rounded-2xl overflow-hidden shadow-sm">
            <div className="p-8 md:p-12 grid md:grid-cols-2 gap-8 items-center">
              <div className="scale-95">
                <TargetingMockup />
              </div>
              <div>
                <div className="inline-block p-2 bg-purple-100 rounded-xl mb-4">
                  <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Ciblage ultra-précis avec Sales Navigator</h2>
                <p className="text-gray-600 mb-6">Identification de vos prospects idéaux grâce à des filtres avancés : fonction, secteur, taille d'entreprise, signaux d'intérêt (recrutement, croissance, levée de fonds).</p>
                <ul className="space-y-3">
                  {[
                    'Filtres avancés Sales Navigator',
                    'Signaux d\'intérêt automatiques',
                    'Enrichissement multi-sources',
                    'Score ICP pour chaque prospect',
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

      {/* Best Practices */}
      <Section background="white" className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Les limites LinkedIn à respecter</h2>
            <p className="text-gray-600">Pour éviter les restrictions de compte</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { metric: 'Invitations', limit: '100-150 / semaine' },
              { metric: 'Messages', limit: '50-80 / jour' },
              { metric: 'Visites de profil', limit: '100-150 / jour' },
              { metric: 'Invitations en attente', limit: 'Max 3 000' },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600 mb-1">{item.metric}</p>
                      <p className="text-2xl font-bold text-gray-900">{item.limit}</p>
                    </div>
                    <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section background="white" className="py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-gradient-to-br from-indigo-600 to-blue-700 rounded-2xl p-10 text-center shadow-lg">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Prêt à automatiser votre prospection LinkedIn ?</h2>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">Obtenez un audit gratuit et découvrez comment générer des leads qualifiés via LinkedIn de manière sécurisée et personnalisée.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/audit-gratuit" variant="primary" size="lg" className="bg-white text-indigo-600 hover:bg-gray-50">Audit Gratuit</Button>
              <Button href="/prospection-multicanale" variant="outline" size="lg" className="border-white text-white hover:bg-white/10">Approche Multicanale</Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
