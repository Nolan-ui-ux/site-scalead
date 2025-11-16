'use client';

import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import FeatureGrid from '@/components/business/FeatureGrid';
import CTA from '@/components/business/CTA';

export default function DeveloppementCommercialPage() {
  const challenges = [
    {
      icon: '⏰',
      title: 'Manque de temps',
      description: 'Vos équipes commerciales sont focalisées sur la closing et n\'ont pas le temps de prospecter activement.',
    },
    {
      icon: '🎯',
      title: 'Ciblage approximatif',
      description: 'Difficile d\'identifier et de contacter les bons décideurs au bon moment avec les bonnes informations.',
    },
    {
      icon: '📉',
      title: 'Pipeline vide',
      description: 'Manque de leads qualifiés en entrée de pipe, dépendance aux leads entrants qui se tarissent.',
    },
    {
      icon: '💸',
      title: 'Coût élevé',
      description: 'Recruter et former un SDR coûte cher (50-60k€/an) pour des résultats incertains et un turn-over important.',
    },
    {
      icon: '🔧',
      title: 'Stack technique complexe',
      description: 'Multiplier les outils (CRM, enrichissement, emailing, LinkedIn) coûte cher et demande de l\'expertise.',
    },
    {
      icon: '📊',
      title: 'Manque de visibilité',
      description: 'Difficile de mesurer le ROI réel de vos actions de prospection et d\'optimiser en continu.',
    },
  ];

  const solutions = [
    {
      icon: '🚀',
      title: 'Délégation complète',
      description: 'Scalead prend en charge l\'intégralité de votre prospection outbound : ciblage, copywriting, envoi, suivi, optimisation.',
    },
    {
      icon: '🎯',
      title: 'Ciblage ultra-précis',
      description: 'Identification des bons décideurs dans les bonnes entreprises grâce à nos outils et notre expertise sectorielle.',
    },
    {
      icon: '🤖',
      title: 'Personnalisation IA',
      description: 'Chaque message est unique grâce à notre IA qui analyse site web, LinkedIn, secteur et poste du prospect.',
    },
    {
      icon: '📧',
      title: 'Volumes massifs',
      description: 'Jusqu\'à 4 000 emails et 1 000 contacts LinkedIn par mois pour saturer votre marché.',
    },
    {
      icon: '📊',
      title: 'Pilotage data',
      description: 'Dashboard temps réel, A/B testing permanent, optimisation continue basée sur vos métriques.',
    },
    {
      icon: '💰',
      title: 'ROI rapide',
      description: 'Premiers résultats dès 3-4 semaines, coût inférieur à un SDR pour des résultats supérieurs.',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <Section className="pt-20" background="white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Badge variant="primary" className="mb-6">
              Développement Commercial B2B
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Développement commercial B2B : déléguer pour mieux performer
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Générez un pipeline commercial prévisible et qualifié grâce à une prospection outbound multicanale
              déléguée à des experts. Scalead combine cold email, LinkedIn et IA pour transformer votre développement commercial.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/audit-gratuit" variant="primary" size="lg">
                Audit Gratuit
              </Button>
              <Button href="/cas-clients" variant="outline" size="lg">
                Voir les Résultats
              </Button>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Introduction */}
      <Section background="gray">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Qu'est-ce que le développement commercial B2B ?
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                Le <strong>développement commercial B2B</strong> désigne l'ensemble des actions visant à identifier,
                contacter et convertir de nouveaux clients professionnels. Contrairement au marketing inbound qui attend
                que les prospects viennent à vous, le développement commercial adopte une <strong>approche proactive</strong> :
                vous allez chercher vos futurs clients là où ils se trouvent.
              </p>
              <p>
                Cette démarche outbound repose sur plusieurs piliers : la <strong>prospection commerciale</strong>,
                la <strong>qualification des leads</strong>, le <strong>nurturing</strong> et la prise de rendez-vous commercial.
                L'objectif ? Créer un <strong>pipeline commercial prévisible</strong> qui ne dépend pas uniquement
                des fluctuations du trafic organique ou des campagnes publicitaires.
              </p>
              <p>
                Aujourd'hui, le développement commercial B2B moderne s'appuie sur trois canaux principaux :
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Le cold email</strong> : prospection par email à grande échelle avec personnalisation IA
                </li>
                <li>
                  <strong>LinkedIn</strong> : approche directe des décideurs via le réseau social professionnel
                </li>
                <li>
                  <strong>L'appel téléphonique</strong> : pour qualifier et closer les opportunités chaudes
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Challenges */}
      <Section background="white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Les défis du développement commercial en 2024
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Pourquoi la plupart des entreprises B2B peinent à mettre en place une machine de prospection efficace ?
          </p>
        </motion.div>
        <FeatureGrid features={challenges} />
      </Section>

      {/* Solutions */}
      <Section background="gray">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Comment Scalead transforme votre développement commercial
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Une approche complète qui combine technologie, expertise et exécution pour des résultats concrets.
          </p>
        </motion.div>
        <FeatureGrid features={solutions} />
      </Section>

      {/* Process */}
      <Section background="white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Notre process de développement commercial en 7 étapes
            </h2>
            <div className="space-y-6">
              {[
                {
                  number: '01',
                  title: 'Audit et stratégie',
                  description: 'Analyse de votre marché, concurrence, ICP et positionnement pour définir la meilleure approche.',
                },
                {
                  number: '02',
                  title: 'Ciblage et enrichissement',
                  description: 'Identification des entreprises et décideurs cibles, enrichissement des données avec emails et téléphones vérifiés.',
                },
                {
                  number: '03',
                  title: 'Copywriting et personnalisation',
                  description: 'Rédaction de copies testées et personnalisation IA de chaque message en fonction du prospect.',
                },
                {
                  number: '04',
                  title: 'Set-up technique',
                  description: 'Configuration des domaines, warm-up, outils de tracking et intégration CRM.',
                },
                {
                  number: '05',
                  title: 'Lancement des campagnes',
                  description: 'Déploiement progressif sur email et LinkedIn avec monitoring en temps réel.',
                },
                {
                  number: '06',
                  title: 'Optimisation continue',
                  description: 'A/B testing permanent, ajustement des copies et du ciblage basé sur la data.',
                },
                {
                  number: '07',
                  title: 'Reporting et scale',
                  description: 'Reporting hebdomadaire, analyse des résultats et scaling des campagnes performantes.',
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
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0 w-16 h-16 bg-primary-500 rounded-xl flex items-center justify-center">
                        <span className="text-white text-xl font-bold">{step.number}</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </Section>

      {/* ROI Section */}
      <Section background="gray">
        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Développement commercial : en interne ou externalisé ?
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Beaucoup d'entreprises hésitent entre recruter un SDR en interne ou externaliser leur prospection.
              Voici une comparaison objective :
            </p>

            <div className="space-y-4">
              <Card>
                <h3 className="font-bold text-gray-900 mb-3">SDR en interne</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">✗</span>
                    <span>Coût : 50-60k€/an (salaire + charges + outils)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">✗</span>
                    <span>Temps de formation : 3-6 mois avant productivité</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">✗</span>
                    <span>Turn-over élevé (18-24 mois en moyenne)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">✗</span>
                    <span>Capacité limitée (≈ 50 contacts/jour max)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Connaissance produit profonde</span>
                  </li>
                </ul>
              </Card>

              <Card className="border-2 border-primary-500">
                <h3 className="font-bold text-primary-600 mb-3">Scalead (externalisé)</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Coût maîtrisé et prévisible</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Démarrage sous 2 semaines</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Équipe stable et expérimentée</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Volume massif : 5 000+ contacts/mois</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Stack technique complet inclus</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Optimisation continue basée data</span>
                  </li>
                </ul>
              </Card>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gradient-to-br from-primary-50 to-blue-50 border-2 border-primary-200 h-full flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                Résultats moyens avec Scalead
              </h3>
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-5xl font-bold text-primary-600 mb-2">5 000+</div>
                  <div className="text-gray-700 font-medium">Contacts ciblés / mois</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-primary-600 mb-2">40-50%</div>
                  <div className="text-gray-700 font-medium">Taux d'ouverture email</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-primary-600 mb-2">6-10%</div>
                  <div className="text-gray-700 font-medium">Taux de réponse</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-primary-600 mb-2">15-30</div>
                  <div className="text-gray-700 font-medium">RDV qualifiés / mois</div>
                </div>
                <div className="text-center pt-6 border-t border-primary-200">
                  <div className="text-sm text-gray-600 mb-2">Délai de lancement</div>
                  <div className="text-3xl font-bold text-primary-600">{"<"} 2 semaines</div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </Section>

      {/* FAQ */}
      <Section background="white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Questions fréquentes sur le développement commercial
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: 'Quelle est la différence entre développement commercial et prospection ?',
                  a: 'Le développement commercial englobe l\'ensemble du cycle commercial (prospection, qualification, closing, fidélisation) tandis que la prospection se concentre sur l\'identification et le premier contact avec de nouveaux prospects. Chez Scalead, nous nous occupons de la partie prospection et qualification pour générer des RDV qualifiés.',
                },
                {
                  q: 'Combien de temps avant les premiers résultats ?',
                  a: 'Les premiers résultats (réponses, RDV) arrivent généralement dès les 3-4 premières semaines. Il faut compter 2-3 mois pour optimiser complètement les campagnes et atteindre un rythme de croisière optimal.',
                },
                {
                  q: 'Quel volume de leads puis-je espérer ?',
                  a: 'En moyenne, nos clients génèrent 15 à 30 rendez-vous qualifiés par mois. Le volume exact dépend de votre marché, de votre offre et de la qualité de votre proposition de valeur.',
                },
                {
                  q: 'Est-ce que ça fonctionne pour mon secteur ?',
                  a: 'Nous travaillons avec des entreprises B2B de tous secteurs : SaaS, conseil, services, industrie, formation, etc. Si vous vendez à d\'autres entreprises avec un cycle de vente B2B, notre approche fonctionne.',
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
      <Section background="gray">
        <CTA
          variant="gradient"
          title="Prêt à booster votre développement commercial ?"
          description="Obtenez un audit gratuit de votre stratégie actuelle et découvrez comment Scalead peut générer un pipeline prévisible pour votre entreprise."
          primaryButton={{
            text: 'Demander un Audit Gratuit',
            href: '/audit-gratuit',
          }}
          secondaryButton={{
            text: 'Voir Notre Méthodologie',
            href: '/methodologie',
          }}
        />
      </Section>
    </>
  );
}
