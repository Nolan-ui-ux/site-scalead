'use client';

import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import Section from '@/components/ui/Section';
import Badge from '@/components/ui/Badge';
import Card from '@/components/ui/Card';
import ComparisonTable from '@/components/business/ComparisonTable';
import CTA from '@/components/business/CTA';

export default function ComparatifOutilsPage() {
  const comparisonItems = [
    { feature: 'Configuration', scalead: 'Done-for-you', competitor1: 'DIY', competitor2: 'DIY' },
    { feature: 'Personnalisation IA', scalead: true, competitor1: false, competitor2: false },
    { feature: 'Expertise incluse', scalead: true, competitor1: false, competitor2: false },
    { feature: 'Copywriting', scalead: true, competitor1: false, competitor2: false },
    { feature: 'Optimisation', scalead: 'Continue', competitor1: 'Manuelle', competitor2: 'Manuelle' },
    { feature: 'Gestion réponses', scalead: true, competitor1: false, competitor2: false },
    { feature: 'Coût temps/mois', scalead: '0h', competitor1: '20-40h', competitor2: '20-40h' },
  ];

  return (
    <>
      <Section className="pt-20" background="white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Badge variant="primary" className="mb-6">Comparatif Outils</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Scalead vs Outils d'Automation (Lemlist, Waalaxy, etc.)
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Pourquoi une solution done-for-you bat les outils SaaS classiques.
            </p>
          </motion.div>
        </div>
      </Section>

      <Section background="gray">
        <div className="max-w-4xl mx-auto mb-12">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2 border-yellow-200 bg-yellow-50">
              <h3 className="text-xl font-bold text-gray-900 mb-4">⚠️ Limites des Outils SaaS</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>✗ Vous devez tout configurer vous-même</li>
                <li>✗ Courbe d'apprentissage importante</li>
                <li>✗ Pas d'expertise copywriting</li>
                <li>✗ Personnalisation limitée (variables)</li>
                <li>✗ Vous gérez les réponses manuellement</li>
                <li>✗ Temps requis : 20-40h/mois</li>
                <li>✗ Risque d'erreurs techniques</li>
              </ul>
            </Card>

            <Card className="border-2 border-primary-500 bg-primary-50">
              <h3 className="text-xl font-bold text-primary-600 mb-4">✅ Avantages Scalead</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>✓ Configuration complète par nos experts</li>
                <li>✓ Démarrage immédiat, zéro formation</li>
                <li>✓ Copies rédigées par des spécialistes</li>
                <li>✓ Personnalisation IA avancée</li>
                <li>✓ Qualification des leads incluse</li>
                <li>✓ Temps requis : 0h/mois</li>
                <li>✓ Expertise garantie, zéro risque</li>
              </ul>
            </Card>
          </div>
        </div>

        <ComparisonTable
          title="Scalead vs Outils SaaS"
          headers={['Scalead', 'Lemlist/LaGrowthMachine', 'Waalaxy/Skylead']}
          items={comparisonItems}
        />
      </Section>

      <Section background="white">
        <CTA
          variant="gradient"
          title="Focalisez-vous sur la closing, on s'occupe du reste"
          description="Scalead = Outil + Expertise + Exécution. Tout-en-un, sans effort de votre part."
          primaryButton={{ text: 'Audit Gratuit', href: '/audit-gratuit' }}
        />
      </Section>
    </>
  );
}
