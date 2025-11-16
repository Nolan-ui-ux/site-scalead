'use client';

import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import Section from '@/components/ui/Section';
import Badge from '@/components/ui/Badge';
import Timeline from '@/components/business/Timeline';
import CTA from '@/components/business/CTA';

export default function MethodologiePage() {
  const steps = [
    {
      number: '1',
      title: 'Audit & Stratégie',
      description: 'Analyse approfondie de votre marché, ICP, concurrence et positionnement. Définition de la stratégie outbound optimale.',
      icon: '🔍',
    },
    {
      number: '2',
      title: 'Ciblage & Enrichissement',
      description: 'Construction de listes ultra-qualifiées, enrichissement multi-sources, vérification des emails et téléphones.',
      icon: '🎯',
    },
    {
      number: '3',
      title: 'Copywriting & Personnalisation',
      description: 'Rédaction de copies testées, mise en place de la personnalisation IA, création de variantes A/B.',
      icon: '✍️',
    },
    {
      number: '4',
      title: 'Set-up Technique',
      description: 'Configuration domaines, warm-up, intégration CRM, mise en place de l\'infrastructure multicanale.',
      icon: '⚙️',
    },
    {
      number: '5',
      title: 'Lancement',
      description: 'Déploiement progressif des campagnes email et LinkedIn, monitoring temps réel, ajustements initiaux.',
      icon: '🚀',
    },
    {
      number: '6',
      title: 'Optimisation',
      description: 'A/B testing permanent, analyse des résultats, ajustement des copies et du ciblage basé sur la data.',
      icon: '📊',
    },
    {
      number: '7',
      title: 'Scale & Reporting',
      description: 'Scaling des campagnes performantes, reporting hebdomadaire, ajout de nouveaux segments.',
      icon: '📈',
    },
  ];

  return (
    <>
      <Section className="pt-20" background="white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Badge variant="primary" className="mb-6">Notre Méthodologie</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Notre process en 7 étapes pour des résultats garantis
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Une méthode éprouvée, rodée sur 50+ campagnes, qui combine expertise humaine et technologie IA.
            </p>
            <Button href="/audit-gratuit" variant="primary" size="lg">Demander un Audit Gratuit</Button>
          </motion.div>
        </div>
      </Section>

      <Section background="gray">
        <Timeline steps={steps} />
      </Section>

      <Section background="white">
        <CTA
          variant="gradient"
          title="Prêt à démarrer ?"
          description="Obtenez un audit gratuit et découvrez comment notre méthodologie peut transformer votre prospection."
          primaryButton={{ text: 'Audit Gratuit', href: '/audit-gratuit' }}
        />
      </Section>
    </>
  );
}
