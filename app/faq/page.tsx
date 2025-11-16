'use client';

import { motion } from 'framer-motion';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';

export default function FAQPage() {
  const faqs = [
    {
      category: 'Général',
      questions: [
        { q: 'Qu\'est-ce que Scalead exactement ?', a: 'Scalead est une agence de développement commercial B2B qui délègue votre prospection outbound. Nous combinons cold email, automatisation LinkedIn et personnalisation IA pour générer des leads qualifiés.' },
        { q: 'Pour quels types d\'entreprises ?', a: 'Nous travaillons avec des entreprises B2B de toutes tailles : SaaS, conseil, services, industrie, formation. Si vous vendez à d\'autres entreprises, notre approche fonctionne.' },
        { q: 'Quelle différence avec une agence classique ?', a: 'Notre technologie de personnalisation IA, notre approche multicanale native et notre focus sur la data nous différencient. Nous générons 2-3x plus de résultats.' },
      ],
    },
    {
      category: 'Fonctionnement',
      questions: [
        { q: 'Comment ça marche concrètement ?', a: 'Nous gérons tout de A à Z : ciblage, enrichissement, copywriting, configuration technique, lancement, optimisation. Vous n\'avez qu\'à prendre les RDV générés.' },
        { q: 'Combien de temps avant les premiers résultats ?', a: 'Premières réponses dès 3-4 semaines. Optimisation complète en 2-3 mois pour atteindre un rythme de croisière.' },
        { q: 'Quel engagement minimum ?', a: 'Nous recommandons minimum 3 mois pour laisser le temps d\'optimiser. La prospection B2B demande de la constance.' },
      ],
    },
    {
      category: 'Résultats',
      questions: [
        { q: 'Combien de RDV puis-je espérer ?', a: 'En moyenne, 15-30 RDV qualifiés par mois selon votre marché, votre offre et la qualité de votre proposition de valeur.' },
        { q: 'Quels taux de réponse ?', a: 'Email : 6-10% de taux de réponse. LinkedIn : 12-18% de taux de réponse. Largement au-dessus des moyennes du marché.' },
        { q: 'Garantissez-vous des résultats ?', a: 'Nous garantissons le volume de contacts (5 000+/mois) et nos best practices. Les résultats dépendent aussi de votre offre et votre closing.' },
      ],
    },
    {
      category: 'Tarifs',
      questions: [
        { q: 'Combien ça coûte ?', a: 'Nos tarifs dépendent du volume, du secteur et de vos objectifs. Contactez-nous pour un devis personnalisé adapté à votre situation.' },
        { q: 'Y a-t-il des frais de setup ?', a: 'Tous les frais de setup (domaines, outils, configuration) sont inclus dans notre offre. Pas de mauvaise surprise.' },
        { q: 'Puis-je arrêter quand je veux ?', a: 'Engagement minimum recommandé de 3 mois. Ensuite vous pouvez ajuster ou arrêter avec 30 jours de préavis.' },
      ],
    },
  ];

  return (
    <>
      <Section className="pt-20" background="white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Badge variant="primary" className="mb-6">FAQ</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Questions Fréquentes
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Tout ce que vous devez savoir sur Scalead et la prospection B2B.
            </p>
          </motion.div>
        </div>
      </Section>

      {faqs.map((category, i) => (
        <Section key={i} background={i % 2 === 0 ? 'gray' : 'white'}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">{category.category}</h2>
            <div className="space-y-4">
              {category.questions.map((item, j) => (
                <Card key={j} hover>
                  <h3 className="font-bold text-gray-900 mb-3 text-lg">{item.q}</h3>
                  <p className="text-gray-700">{item.a}</p>
                </Card>
              ))}
            </div>
          </div>
        </Section>
      ))}

      <Section background="gray">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Vous avez d'autres questions ?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Notre équipe est là pour vous répondre.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="primary" size="lg">Nous Contacter</Button>
            <Button href="/audit-gratuit" variant="outline" size="lg">Demander un Audit</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
