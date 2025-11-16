'use client';

import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import FeatureGrid from '@/components/business/FeatureGrid';
import StatsGrid from '@/components/business/StatsGrid';
import CTA from '@/components/business/CTA';
import {
  EmailIcon,
  TargetIcon,
  BrainIcon,
  ChartIcon,
  MessageIcon,
  CheckCircleIcon,
  RefreshIcon,
  TrendingUpIcon,
} from '@/components/ui/Icons';

export default function ColdEmailPage() {
  const stats = [
    { number: '4000', suffix: '+', label: 'Emails envoyés / mois', icon: <EmailIcon size={24} /> },
    { number: '45', suffix: '%', label: 'Taux d\'ouverture moyen', icon: <ChartIcon size={24} /> },
    { number: '8', suffix: '%', label: 'Taux de réponse moyen', icon: <MessageIcon size={24} /> },
    { number: '98', suffix: '%', label: 'Délivrabilité', icon: <CheckCircleIcon size={24} /> },
  ];

  const features = [
    {
      icon: <TargetIcon />,
      title: 'Ciblage ultra-précis',
      description: 'Bases de données vérifiées, enrichissement multi-sources et segmentation avancée pour ne contacter que vos ICP.',
    },
    {
      icon: <BrainIcon />,
      title: 'Personnalisation IA',
      description: 'Notre IA analyse site web, LinkedIn, actualités et secteur pour rédiger des emails 100% personnalisés.',
    },
    {
      icon: <ChartIcon />,
      title: 'A/B Testing systématique',
      description: 'Test permanent des objets, accroches, CTA et timings pour optimiser chaque élément de vos campagnes.',
    },
    {
      icon: <CheckCircleIcon />,
      title: 'Délivrabilité maximale',
      description: 'Infrastructure dédiée, warm-up progressif, domaines multiples et monitoring SPF/DKIM/DMARC.',
    },
    {
      icon: <RefreshIcon />,
      title: 'Séquences intelligentes',
      description: 'Follow-ups automatisés et personnalisés avec logique conditionnelle basée sur les comportements.',
    },
    {
      icon: <TrendingUpIcon />,
      title: 'Scale sans compromis',
      description: 'Montée en volume progressive tout en maintenant qualité, personnalisation et taux de réponse élevés.',
    },
  ];

  return (
    <>
      {/* Hero */}
      <Section className="pt-20" background="white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Badge variant="primary" className="mb-6">
              Cold Email B2B
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Cold Email B2B : 4 000+ emails personnalisés par mois
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Scalead maîtrise l'art du cold email à grande échelle. Découvrez comment nous combinons volumes massifs,
              personnalisation IA et délivrabilité optimale pour générer des leads qualifiés via l'emailing B2B.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/audit-gratuit" variant="primary" size="lg">
                Audit Gratuit
              </Button>
              <Button href="/methodologie" variant="outline" size="lg">
                Notre Méthode
              </Button>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Stats */}
      <Section background="gray">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Les chiffres du cold email avec Scalead
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Des performances qui parlent d'elles-mêmes grâce à notre approche unique du cold emailing B2B.
          </p>
        </motion.div>
        <StatsGrid stats={stats} />
      </Section>

      {/* What is Cold Email */}
      <Section background="white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Qu'est-ce que le cold email B2B ?
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                Le <strong>cold email</strong> (ou email froid) est une technique de prospection commerciale B2B qui consiste
                à envoyer des emails personnalisés à des prospects qui ne vous connaissent pas encore. Contrairement au spam,
                un bon cold email est <strong>ciblé</strong>, <strong>personnalisé</strong> et apporte une <strong>valeur réelle</strong> au destinataire.
              </p>
              <p>
                Le cold email est aujourd'hui l'un des canaux les plus efficaces pour la <strong>génération de leads B2B</strong> car :
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Scalabilité</strong> : vous pouvez contacter des milliers de prospects qualifiés chaque mois
                </li>
                <li>
                  <strong>Coût maîtrisé</strong> : ROI bien supérieur aux autres canaux d'acquisition B2B
                </li>
                <li>
                  <strong>Mesurabilité</strong> : tracking précis de chaque métrique (ouvertures, clics, réponses)
                </li>
                <li>
                  <strong>Personnalisation</strong> : messages adaptés à chaque prospect grâce à l'IA
                </li>
                <li>
                  <strong>Contrôle total</strong> : vous maîtrisez le message, le timing et le ciblage
                </li>
              </ul>
              <p>
                Cependant, réussir en cold email demande une <strong>expertise technique</strong> (délivrabilité, infrastructure),
                une <strong>maîtrise du copywriting</strong> et une <strong>approche data-driven</strong> pour optimiser en continu.
                C'est précisément ce que Scalead apporte à ses clients.
              </p>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Features */}
      <Section background="gray">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Notre approche du cold email B2B
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ce qui fait la différence entre un email qui finit en spam et un email qui génère des RDV.
          </p>
        </motion.div>
        <FeatureGrid features={features} />
      </Section>

      {/* Methodology */}
      <Section background="white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Comment nous envoyons 4 000 emails / mois en gardant la qualité
            </h2>
            <div className="space-y-6">
              {[
                {
                  title: '1. Ciblage et enrichissement',
                  description: 'Nous identifions vos ICP (Ideal Customer Profile) puis utilisons des outils premium pour construire des listes ultra-qualifiées. Chaque email est vérifié (syntax, MX, SMTP) pour garantir la délivrabilité.',
                },
                {
                  title: '2. Infrastructure dédiée',
                  description: 'Domaines secondaires dédiés, warm-up progressif sur 3-4 semaines, configuration SPF/DKIM/DMARC parfaite. Nous utilisons plusieurs domaines en rotation pour maintenir une réputation IP excellente.',
                },
                {
                  title: '3. Copywriting testé',
                  description: 'Nos copies sont conçues pour maximiser les réponses, pas les ouvertures. Structure PAS (Problem-Agitate-Solve), objets courts et intrigants, CTA clairs. Chaque élément est A/B testé.',
                },
                {
                  title: '4. Personnalisation IA',
                  description: 'Notre IA analyse automatiquement chaque prospect (site web, LinkedIn, actualités, secteur) pour insérer des variables de personnalisation pertinentes dans chaque email. Résultat : 0 email identique.',
                },
                {
                  title: '5. Séquences multi-touch',
                  description: 'Un prospect reçoit 4-7 emails espacés de 3-5 jours. Chaque follow-up apporte une nouvelle valeur et un nouvel angle. Les séquences sont conditionnelles (si ouverture sans réponse, si clic, etc.).',
                },
                {
                  title: '6. Monitoring et optimisation',
                  description: 'Suivi quotidien de la délivrabilité, des taux d\'ouverture et de réponse. A/B testing permanent sur tous les éléments. Ajustement hebdomadaire basé sur la data.',
                },
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card hover>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-700">{step.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Comparison */}
      <Section background="gray">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Cold email : en interne vs avec Scalead
            </h2>
            <Card>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="text-left py-4 px-4"></th>
                      <th className="text-center py-4 px-4 font-semibold text-gray-900">En interne</th>
                      <th className="text-center py-4 px-4 font-semibold text-primary-600 bg-primary-50">Avec Scalead</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { feature: 'Temps de mise en place', internal: '2-3 mois', scalead: '< 2 semaines' },
                      { feature: 'Coût mensuel', internal: '3-5k€ (SDR + outils)', scalead: 'Sur mesure' },
                      { feature: 'Volume / mois', internal: '500-1000 emails', scalead: '4 000+ emails' },
                      { feature: 'Personnalisation', internal: 'Manuelle (limitée)', scalead: 'IA (100%)' },
                      { feature: 'Délivrabilité', internal: '60-80%', scalead: '95-98%' },
                      { feature: 'Taux d\'ouverture', internal: '20-35%', scalead: '40-50%' },
                      { feature: 'Taux de réponse', internal: '2-4%', scalead: '6-10%' },
                      { feature: 'A/B Testing', internal: 'Occasionnel', scalead: 'Permanent' },
                      { feature: 'Optimisation', internal: 'Mensuelle', scalead: 'Quotidienne' },
                      { feature: 'Expertise requise', internal: 'Forte', scalead: 'Aucune' },
                    ].map((row, index) => (
                      <tr key={index} className="border-b border-gray-100">
                        <td className="py-4 px-4 font-medium text-gray-900">{row.feature}</td>
                        <td className="py-4 px-4 text-center text-gray-700">{row.internal}</td>
                        <td className="py-4 px-4 text-center text-primary-700 bg-primary-50 font-semibold">{row.scalead}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </motion.div>
        </div>
      </Section>

      {/* Best Practices */}
      <Section background="white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Les règles d'or du cold email en 2024
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: '✅ À faire',
                  items: [
                    'Personnaliser chaque email (nom, entreprise, contexte)',
                    'Garder l\'email court (< 150 mots)',
                    'Un seul CTA clair par email',
                    'Warm-up de vos domaines (3-4 semaines)',
                    'Espacer les envois (max 40-50/jour/domaine)',
                    'Segmenter vos listes par ICP',
                    'A/B tester systématiquement',
                    'Monitorer votre réputation (sender score)',
                  ],
                },
                {
                  title: '❌ À éviter',
                  items: [
                    'Acheter des listes d\'emails non opt-in',
                    'Envoyer depuis votre domaine principal',
                    'Utiliser des mots spam (gratuit, argent, etc.)',
                    'Envoyer des pièces jointes',
                    'Faire du mass mailing non personnalisé',
                    'Ignorer les demandes de désinscription',
                    'Utiliser un seul domaine pour tout',
                    'Négliger la délivrabilité technique',
                  ],
                },
              ].map((section, index) => (
                <Card key={index} className={index === 0 ? 'border-2 border-green-200 bg-green-50' : 'border-2 border-red-200 bg-red-50'}>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{section.title}</h3>
                  <ul className="space-y-2">
                    {section.items.map((item, i) => (
                      <li key={i} className="text-gray-700 text-sm">{item}</li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </Section>

      {/* FAQ */}
      <Section background="gray">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Questions fréquentes sur le cold email
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: 'Le cold email est-il légal en France ?',
                  a: 'Oui, le cold email B2B est légal en France dans le cadre du RGPD, à condition de respecter certaines règles : cibler des professionnels, permettre la désinscription facilement, ne pas acheter de bases illégales. Chez Scalead, nous sommes 100% conformes RGPD.',
                },
                {
                  q: 'Quel taux de réponse puis-je espérer ?',
                  a: 'Un bon taux de réponse en cold email B2B se situe entre 5% et 10%. Chez Scalead, nous visons 8% en moyenne grâce à notre personnalisation IA et notre ciblage ultra-précis. Ce taux peut monter à 12-15% sur des marchés de niche.',
                },
                {
                  q: 'Comment éviter de finir en spam ?',
                  a: 'La délivrabilité repose sur 3 piliers : infrastructure technique (SPF/DKIM/DMARC), réputation (warm-up, volumes progressifs) et contenu (éviter les mots spam, bon ratio texte/lien). Scalead gère tout cela pour vous avec un taux de délivrabilité de 98%.',
                },
                {
                  q: 'Combien de temps avant les premiers résultats ?',
                  a: 'Les premières réponses arrivent dès la 1ère semaine de campagne. Il faut compter 3-4 semaines pour avoir suffisamment de data et optimiser. À partir de 2 mois, les résultats se stabilisent et deviennent prévisibles.',
                },
                {
                  q: 'Quelle est la différence entre cold email et spam ?',
                  a: 'Le spam est un envoi massif non ciblé et non personnalisé. Le cold email est une approche ciblée, personnalisée et apportant de la valeur au destinataire. Chez Scalead, chaque email est unique et pertinent pour le prospect.',
                },
              ].map((item, index) => (
                <Card key={index} hover>
                  <h3 className="font-bold text-gray-900 mb-3">{item.q}</h3>
                  <p className="text-gray-700">{item.a}</p>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </Section>

      {/* CTA */}
      <Section background="white">
        <CTA
          variant="gradient"
          title="Prêt à lancer vos campagnes de cold email ?"
          description="Obtenez un audit gratuit de votre approche actuelle et découvrez comment générer des leads qualifiés via le cold email B2B."
          primaryButton={{
            text: 'Audit Gratuit',
            href: '/audit-gratuit',
          }}
          secondaryButton={{
            text: 'Voir des Cas Clients',
            href: '/cas-clients',
          }}
        />
      </Section>
    </>
  );
}
