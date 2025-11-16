'use client';

import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import Section from '@/components/ui/Section';
import Badge from '@/components/ui/Badge';
import ComparisonTable from '@/components/business/ComparisonTable';
import CTA from '@/components/business/CTA';

export default function ComparatifAgencesPage() {
  const comparisonItems = [
    { feature: 'Personnalisation messages', scalead: 'IA 100%', competitor1: 'Variables basiques', competitor2: 'Templates' },
    { feature: 'Volume mensuel', scalead: '5 000+', competitor1: '2-3k', competitor2: '1-2k' },
    { feature: 'Multicanal natif', scalead: true, competitor1: false, competitor2: false },
    { feature: 'Délivrabilité', scalead: '95-98%', competitor1: '70-85%', competitor2: '60-80%' },
    { feature: 'A/B Testing', scalead: 'Permanent', competitor1: 'Mensuel', competitor2: 'Occasionnel' },
    { feature: 'Délai lancement', scalead: '< 2 sem.', competitor1: '4-6 sem.', competitor2: '6-8 sem.' },
    { feature: 'Transparence data', scalead: true, competitor1: 'Limitée', competitor2: false },
    { feature: 'Tech propriétaire', scalead: true, competitor1: false, competitor2: false },
  ];

  return (
    <>
      <Section className="pt-20" background="white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Badge variant="primary" className="mb-6">Comparatif</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Scalead vs Agences Outbound Classiques
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Comparez objectivement Scalead avec les autres acteurs du marché français.
            </p>
          </motion.div>
        </div>
      </Section>

      <Section background="gray">
        <ComparisonTable
          title="Comparaison détaillée"
          headers={['Scalead', 'Agence Type 1', 'Agence Type 2']}
          items={comparisonItems}
        />
      </Section>

      <Section background="white">
        <CTA
          variant="gradient"
          title="Découvrez la différence Scalead"
          description="Demandez un audit gratuit et comparez par vous-même."
          primaryButton={{ text: 'Audit Gratuit', href: '/audit-gratuit' }}
        />
      </Section>
    </>
  );
}
