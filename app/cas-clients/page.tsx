'use client';

import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import CTA from '@/components/business/CTA';

export default function CasClientsPage() {
  const cases = [
    {
      company: 'SaaS RH en Série A',
      sector: 'SaaS B2B',
      challenge: 'Générer des leads qualifiés pendant la phase de scaling sans recruter une armée de SDR.',
      solution: 'Campagne multicanale ciblant DRH et CEO de PME 50-500 personnes.',
      results: ['28 RDV/mois', '+220% pipeline', '12% taux réponse', '< 8 sem. mise en place'],
    },
    {
      company: 'Cabinet Conseil Stratégie',
      sector: 'Conseil',
      challenge: 'Toucher des décideurs C-Level dans le CAC40 et ETI avec une approche premium.',
      solution: 'Messages ultra-personnalisés IA, approche ABM, LinkedIn + Email synchronisés.',
      results: ['18 RDV/mois', 'Taux réponse 15%', '€€€ deals signés', 'ROI x5'],
    },
    {
      company: 'Éditeur Logiciel Industrie',
      sector: 'Software B2B',
      challenge: 'Pénétrer un marché traditionnel peu réactif au digital.',
      solution: 'Approche éducative, contenu de valeur, séquences longues avec nurturing.',
      results: ['22 RDV/mois', '8% taux réponse', 'Pipeline +180%', '4 clients signés'],
    },
  ];

  return (
    <>
      <Section className="pt-20" background="white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Badge variant="primary" className="mb-6">Cas Clients</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Ils ont transformé leur prospection avec Scalead
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Découvrez comment nos clients génèrent un pipeline commercial prévisible et qualifié.
            </p>
          </motion.div>
        </div>
      </Section>

      <Section background="gray">
        <div className="space-y-8">
          {cases.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <Card hover className="border-l-4 border-primary-500">
                <div className="grid md:grid-cols-3 gap-8">
                  <div>
                    <Badge variant="primary" className="mb-3">{c.sector}</Badge>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{c.company}</h3>
                  </div>
                  <div className="md:col-span-2 space-y-4">
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">🎯 Challenge</h4>
                      <p className="text-gray-700">{c.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">💡 Solution</h4>
                      <p className="text-gray-700">{c.solution}</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-primary-600 mb-2">📊 Résultats</h4>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {c.results.map((r, j) => (
                          <div key={j} className="bg-primary-50 rounded-lg p-3 text-center">
                            <p className="font-bold text-primary-700 text-sm">{r}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section background="white">
        <CTA
          variant="gradient"
          title="Et vous, quels résultats voulez-vous obtenir ?"
          description="Demandez un audit gratuit et découvrez comment Scalead peut transformer votre prospection."
          primaryButton={{ text: 'Audit Gratuit', href: '/audit-gratuit' }}
        />
      </Section>
    </>
  );
}
