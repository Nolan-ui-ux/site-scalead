'use client';

import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import ComparisonTable from '@/components/business/ComparisonTable';
import FeatureGrid from '@/components/business/FeatureGrid';
import CTA from '@/components/business/CTA';

export default function PourquoiScaleadPage() {
  const differentiators = [
    {
      icon: '🤖',
      title: 'IA Propriétaire',
      description: 'Notre technologie de personnalisation IA analyse site web, LinkedIn et actualités pour générer des messages 100% uniques.',
    },
    {
      icon: '📊',
      title: 'Approche Data-Driven',
      description: 'A/B testing permanent, optimisation continue, décisions basées sur la data réelle de vos campagnes.',
    },
    {
      icon: '🎯',
      title: 'Expertise Sectorielle',
      description: 'Connaissance approfondie de 15+ secteurs B2B, best practices testées sur 50+ campagnes.',
    },
    {
      icon: '🔄',
      title: 'Vraiment Multicanal',
      description: 'Synchronisation native email + LinkedIn, pas juste deux canaux en parallèle mais une vraie orchestration.',
    },
    {
      icon: '⚡',
      title: 'Exécution Rapide',
      description: 'Lancement en < 2 semaines, premiers résultats dès 3-4 semaines, process rodé et efficace.',
    },
    {
      icon: '💎',
      title: 'Transparence Totale',
      description: 'Accès dashboard temps réel, toutes vos données, reporting détaillé, pas de boîte noire.',
    },
  ];

  const comparisonItems = [
    { feature: 'Personnalisation', scalead: 'IA 100%', competitor1: 'Variables basiques', competitor2: 'Manuelle limitée' },
    { feature: 'Volume mensuel', scalead: '5 000+', competitor1: '1-2k', competitor2: '500-1k' },
    { feature: 'Multicanal natif', scalead: true, competitor1: false, competitor2: false },
    { feature: 'Délai lancement', scalead: '< 2 sem.', competitor1: '4-6 sem.', competitor2: '2-3 mois' },
    { feature: 'Optimisation', scalead: 'Continue', competitor1: 'Mensuelle', competitor2: 'Rare' },
    { feature: 'Dashboard temps réel', scalead: true, competitor1: 'Limité', competitor2: false },
    { feature: 'Expertise incluse', scalead: true, competitor1: 'Partielle', competitor2: false },
  ];

  return (
    <>
      <Section className="pt-20" background="white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Badge variant="primary" className="mb-6">Pourquoi Scalead</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Pourquoi choisir Scalead pour votre prospection B2B ?
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Découvrez ce qui fait de Scalead la solution de référence pour les entreprises B2B qui veulent scaler leur développement commercial.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/audit-gratuit" variant="primary" size="lg">Audit Gratuit</Button>
              <Button href="/cas-clients" variant="outline" size="lg">Voir les Résultats</Button>
            </div>
          </motion.div>
        </div>
      </Section>

      <Section background="gray">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ce qui nous différencie vraiment
          </h2>
        </motion.div>
        <FeatureGrid features={differentiators} />
      </Section>

      <Section background="white">
        <ComparisonTable
          title="Scalead vs Solutions Alternatives"
          headers={['Scalead', 'Agences classiques', 'Outils SaaS']}
          items={comparisonItems}
        />
      </Section>

      <Section background="gray">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Nos garanties</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: '✅ Démarrage garanti en 2 semaines', desc: 'Lancement rapide sans friction technique.' },
              { title: '📊 Transparence totale', desc: 'Accès complet à vos données et métriques.' },
              { title: '🎯 Ciblage qualifié', desc: 'Nous ne contactons que vos ICP réels.' },
              { title: '🔒 Conformité RGPD', desc: '100% conforme aux réglementations françaises.' },
            ].map((item, i) => (
              <Card key={i} hover>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-700">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <Section background="white">
        <CTA
          variant="gradient"
          title="Prêt à passer à Scalead ?"
          description="Découvrez comment nous pouvons transformer votre prospection B2B."
          primaryButton={{ text: 'Demander un Audit', href: '/audit-gratuit' }}
        />
      </Section>
    </>
  );
}
