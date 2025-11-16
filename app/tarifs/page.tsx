'use client';

import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import CTA from '@/components/business/CTA';

export default function TarifsPage() {
  return (
    <>
      <Section className="pt-20" background="white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Badge variant="primary" className="mb-6">Tarifs</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Tarification transparente et adaptée à vos objectifs
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Chaque entreprise est unique. Nos tarifs sont adaptés à votre volume, votre secteur et vos objectifs.
            </p>
          </motion.div>
        </div>
      </Section>

      <Section background="gray">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">ROI : Scalead vs SDR Interne</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <h3 className="text-xl font-bold text-gray-900 mb-4">💰 SDR Interne</h3>
              <div className="space-y-3 text-gray-700">
                <p>Salaire : 40-50k€/an</p>
                <p>Charges : +45% = 60-70k€/an</p>
                <p>Outils : 3-5k€/an</p>
                <p>Formation : 2-3 mois</p>
                <p>Turnover : 18 mois</p>
                <hr className="my-4" />
                <p className="font-bold text-xl text-red-600">Coût total : 65-75k€/an</p>
                <p className="text-sm">Pour 500-1000 contacts/mois</p>
              </div>
            </Card>
            <Card className="border-2 border-primary-500">
              <h3 className="text-xl font-bold text-primary-600 mb-4">🚀 Scalead</h3>
              <div className="space-y-3 text-gray-700">
                <p>Coût : Sur mesure</p>
                <p>Setup : < 2 semaines</p>
                <p>Outils : Inclus</p>
                <p>Expertise : Incluse</p>
                <p>Scaling : Illimité</p>
                <hr className="my-4" />
                <p className="font-bold text-xl text-primary-600">ROI supérieur</p>
                <p className="text-sm">Pour 5 000+ contacts/mois</p>
              </div>
            </Card>
          </div>
        </div>
      </Section>

      <Section background="white">
        <CTA
          variant="gradient"
          title="Demandez un devis personnalisé"
          description="Parlons de vos objectifs et trouvons la solution adaptée à votre entreprise."
          primaryButton={{ text: 'Demander un Audit', href: '/audit-gratuit' }}
          secondaryButton={{ text: 'Nous Contacter', href: '/contact' }}
        />
      </Section>
    </>
  );
}
