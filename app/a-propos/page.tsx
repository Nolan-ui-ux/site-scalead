'use client';

import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';

export default function AProposPage() {
  return (
    <>
      <Section className="pt-20" background="white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Badge variant="primary" className="mb-6">À Propos</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Nous aidons les entreprises B2B à scaler leur prospection
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Scalead a été créé pour résoudre un problème simple : comment générer un pipeline commercial prévisible sans recruter une armée de SDR ?
            </p>
          </motion.div>
        </div>
      </Section>

      <Section background="gray">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Notre Mission</h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
            <p>
              Nous croyons que <strong>chaque entreprise B2B mérite un pipeline commercial prévisible</strong>.
              Mais la prospection outbound est difficile : elle demande de l'expertise, des outils, du temps et de la constance.
            </p>
            <p>
              C'est pourquoi nous avons créé Scalead : une solution <strong>done-for-you</strong> qui combine
              technologie IA, expertise outbound et exécution sans faille pour générer des leads qualifiés à grande échelle.
            </p>
          </div>
        </div>
      </Section>

      <Section background="white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Nos Valeurs</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: '🎯', title: 'Résultats', desc: 'Obsession du ROI et des KPIs qui comptent vraiment.' },
              { icon: '💎', title: 'Transparence', desc: 'Accès total à vos données, reporting honnête.' },
              { icon: '🚀', title: 'Excellence', desc: 'Expertise, rigueur et amélioration continue.' },
            ].map((v, i) => (
              <Card key={i} hover className="text-center">
                <div className="text-5xl mb-4">{v.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{v.title}</h3>
                <p className="text-gray-700">{v.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <Section background="gray">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Prêt à travailler ensemble ?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Demandez un audit gratuit et découvrons comment Scalead peut transformer votre prospection.
          </p>
          <Button href="/audit-gratuit" variant="primary" size="lg">Demander un Audit Gratuit</Button>
        </div>
      </Section>
    </>
  );
}
