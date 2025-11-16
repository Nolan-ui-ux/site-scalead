'use client';

import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import FeatureGrid from '@/components/business/FeatureGrid';
import ProcessWorkflow from '@/components/business/ProcessWorkflow';
import CTA from '@/components/business/CTA';

export default function ProspectionMulticanalePage() {
  const benefits = [
    {
      icon: '📈',
      title: 'Taux de réponse multiplié par 3',
      description: 'Combiner email et LinkedIn permet d\'obtenir 3x plus de réponses qu\'en utilisant un seul canal.',
    },
    {
      icon: '🎯',
      title: 'Meilleure couverture',
      description: 'Certains prospects sont plus réactifs sur email, d\'autres sur LinkedIn. Le multicanal couvre les deux.',
    },
    {
      icon: '🔁',
      title: 'Points de contact multiples',
      description: '7-10 touchpoints sur différents canaux créent une familiarité et augmentent les chances de réponse.',
    },
    {
      icon: '💡',
      title: 'Renforcement du message',
      description: 'Voir votre message à la fois dans sa boîte email et sur LinkedIn renforce la crédibilité et la mémorisation.',
    },
    {
      icon: '⚡',
      title: 'Réactivité accrue',
      description: 'Si un prospect ne répond pas sur un canal, l\'autre canal offre une seconde chance immédiate.',
    },
    {
      icon: '📊',
      title: 'Data enrichie',
      description: 'Observer le comportement sur plusieurs canaux permet une meilleure qualification et segmentation.',
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
              Prospection Multicanale B2B
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Prospection multicanale : Email + LinkedIn synchronisés
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              La prospection multicanale combine intelligemment le cold email et l'automatisation LinkedIn pour maximiser
              vos chances de toucher et convertir vos prospects B2B. Découvrez la méthode Scalead.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/audit-gratuit" variant="primary" size="lg">
                Audit Gratuit
              </Button>
              <Button href="/methodologie" variant="outline" size="lg">
                Notre Process
              </Button>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Why Multichannel */}
      <Section background="gray">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Pourquoi la prospection multicanale est-elle si efficace ?
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                La <strong>prospection multicanale</strong> (ou multi-touch outbound) consiste à contacter vos prospects
                sur plusieurs canaux de communication de manière orchestrée et cohérente. L'approche la plus efficace en B2B
                combine <strong>le cold email</strong> et <strong>LinkedIn</strong>.
              </p>
              <p>
                Les statistiques sont éloquentes :
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Un prospect touché sur <strong>2 canaux</strong> a <strong>3x plus de chances</strong> de répondre
                </li>
                <li>
                  Il faut en moyenne <strong>8 touchpoints</strong> pour obtenir une première conversation
                </li>
                <li>
                  <strong>73% des décideurs B2B</strong> préfèrent être contactés sur plusieurs canaux
                </li>
                <li>
                  Les campagnes multicanales génèrent un <strong>ROI 3x supérieur</strong> aux campagnes monocanales
                </li>
              </ul>
              <p>
                Le principe ? Créer une <strong>présence omnicanale</strong> qui renforce votre message et augmente
                drastiquement vos chances d'obtenir un rendez-vous. Quand un prospect voit votre nom à la fois dans
                sa boîte email et sur LinkedIn, vous devenez familier, crédible et impossible à ignorer.
              </p>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Benefits */}
      <Section background="white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Les avantages de la prospection multicanale
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Pourquoi combiner email et LinkedIn plutôt que miser sur un seul canal ?
          </p>
        </motion.div>
        <FeatureGrid features={benefits} />
      </Section>

      {/* Workflow */}
      <Section background="gray">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Le workflow de prospection multicanale Scalead
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Une séquence optimisée qui combine stratégiquement email et LinkedIn sur 3-4 semaines.
          </p>
        </motion.div>
        <ProcessWorkflow />
      </Section>

      {/* Detailed Sequence */}
      <Section background="white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Séquence multicanale type : 10 touchpoints sur 21 jours
            </h2>
            <div className="space-y-4">
              {[
                {
                  day: 'Jour 1',
                  channel: 'Email',
                  action: 'Email de premier contact personnalisé',
                  goal: 'Présenter la valeur, poser une question ouverte',
                },
                {
                  day: 'Jour 2',
                  channel: 'LinkedIn',
                  action: 'Invitation LinkedIn avec note personnalisée',
                  goal: 'Créer un second point de contact, renforcer le message email',
                },
                {
                  day: 'Jour 4',
                  channel: 'Email',
                  action: 'Follow-up email avec nouveau contenu/angle',
                  goal: 'Apporter une nouvelle valeur (cas client, stats, insight)',
                },
                {
                  day: 'Jour 5',
                  channel: 'LinkedIn',
                  action: 'Message LinkedIn si invitation acceptée',
                  goal: 'Engager la conversation sur LinkedIn',
                },
                {
                  day: 'Jour 7',
                  channel: 'LinkedIn',
                  action: 'Interaction avec le contenu du prospect (like, commentaire)',
                  goal: 'Rester visible sans être trop pushy',
                },
                {
                  day: 'Jour 9',
                  channel: 'Email',
                  action: 'Email de valeur (article, étude, outil gratuit)',
                  goal: 'Donner avant de demander, construire la confiance',
                },
                {
                  day: 'Jour 12',
                  channel: 'LinkedIn',
                  action: 'Follow-up LinkedIn avec question spécifique',
                  goal: 'Relancer gentiment avec une approche consultative',
                },
                {
                  day: 'Jour 15',
                  channel: 'Email',
                  action: 'Email "dernière tentative" avec social proof',
                  goal: 'Créer l\'urgence avec témoignage ou résultat client',
                },
                {
                  day: 'Jour 18',
                  channel: 'LinkedIn',
                  action: 'Message LinkedIn "break-up"',
                  goal: 'Dernière chance avec message de désengagement',
                },
                {
                  day: 'Jour 21',
                  channel: 'Email',
                  action: 'Email final de clôture',
                  goal: 'Fermer la boucle, laisser porte ouverte',
                },
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <Card hover className={step.channel === 'LinkedIn' ? 'border-l-4 border-primary-500' : 'border-l-4 border-blue-500'}>
                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                      <div className="flex-shrink-0">
                        <Badge variant={step.channel === 'LinkedIn' ? 'primary' : 'info'}>
                          {step.day}
                        </Badge>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-2xl">{step.channel === 'LinkedIn' ? '👔' : '📧'}</span>
                          <h3 className="font-bold text-gray-900">{step.action}</h3>
                        </div>
                        <p className="text-gray-600 text-sm">{step.goal}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Orchestration */}
      <Section background="gray">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              L'orchestration intelligente : la clé du multicanal
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4 mb-8">
              <p>
                L'erreur classique du multicanal mal fait ? Envoyer les mêmes messages sur tous les canaux en même temps,
                sans cohérence ni logique. Résultat : vous spammez votre prospect et détruisez votre crédibilité.
              </p>
              <p>
                Chez Scalead, nous pratiquons <strong>l'orchestration multicanale intelligente</strong> :
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: '🎯 Cohérence du message',
                  description: 'Le message email et LinkedIn se complètent mais ne sont jamais identiques. Chaque canal a son propre angle et ton.',
                },
                {
                  title: '⏱️ Timing optimisé',
                  description: 'Espacement stratégique entre les touches pour créer de la familiarité sans être intrusif. Rythme adapté au comportement du prospect.',
                },
                {
                  title: '🔀 Logique conditionnelle',
                  description: 'Si le prospect répond sur LinkedIn, on arrête l\'email. Si pas de réponse sur email après 2 touches, on intensifie LinkedIn.',
                },
                {
                  title: '📊 Scoring comportemental',
                  description: 'Chaque action (ouverture email, visite profil, acceptation LinkedIn) est trackée pour adapter la suite de la séquence.',
                },
              ].map((item, index) => (
                <Card key={index} hover>
                  <h3 className="font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-700">{item.description}</p>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Comparison */}
      <Section background="white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Email seul vs LinkedIn seul vs Multicanal
            </h2>
            <Card>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="text-left py-4 px-4"></th>
                      <th className="text-center py-4 px-4 font-semibold text-gray-900">Email seul</th>
                      <th className="text-center py-4 px-4 font-semibold text-gray-900">LinkedIn seul</th>
                      <th className="text-center py-4 px-4 font-semibold text-primary-600 bg-primary-50">Multicanal</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { feature: 'Volume mensuel', email: '3-4k', linkedin: '1k', multicanal: '5k+' },
                      { feature: 'Taux de réponse', email: '4-6%', linkedin: '8-12%', multicanal: '12-18%' },
                      { feature: 'Coût par lead', email: 'Bas', linkedin: 'Moyen', multicanal: 'Optimisé' },
                      { feature: 'Rapidité', email: 'Rapide', linkedin: 'Lent', multicanal: 'Rapide' },
                      { feature: 'Crédibilité', email: 'Moyenne', linkedin: 'Élevée', multicanal: 'Très élevée' },
                      { feature: 'Complexité', email: 'Faible', linkedin: 'Moyenne', multicanal: 'Élevée' },
                      { feature: 'Scalabilité', email: 'Excellente', linkedin: 'Limitée', multicanal: 'Excellente' },
                    ].map((row, index) => (
                      <tr key={index} className="border-b border-gray-100">
                        <td className="py-4 px-4 font-medium text-gray-900">{row.feature}</td>
                        <td className="py-4 px-4 text-center text-gray-700">{row.email}</td>
                        <td className="py-4 px-4 text-center text-gray-700">{row.linkedin}</td>
                        <td className="py-4 px-4 text-center text-primary-700 bg-primary-50 font-semibold">{row.multicanal}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </motion.div>
        </div>
      </Section>

      {/* Use Cases */}
      <Section background="gray">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Pour quels types d'entreprises ?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  type: 'SaaS B2B',
                  why: 'Cycles de vente courts, besoin de volume et de vitesse. Le multicanal permet de toucher rapidement les décideurs tech.',
                },
                {
                  type: 'Cabinets de Conseil',
                  why: 'Crédibilité essentielle, cibles senior. LinkedIn + email renforce l\'expertise et la légitimité.',
                },
                {
                  type: 'Services Professionnels',
                  why: 'Marchés de niche, ABM ciblé. Le multicanal permet une approche personnalisée à grande échelle.',
                },
                {
                  type: 'Industrie / Manufacturing',
                  why: 'Décideurs moins actifs digitalement. Multiplier les canaux augmente les chances de contact.',
                },
              ].map((item, index) => (
                <Card key={index} hover>
                  <h3 className="text-xl font-bold text-primary-600 mb-3">{item.type}</h3>
                  <p className="text-gray-700">{item.why}</p>
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
          title="Prêt à multiplier vos résultats avec le multicanal ?"
          description="Découvrez comment notre approche multicanale orchestrée peut transformer votre prospection B2B et générer un pipeline prévisible."
          primaryButton={{
            text: 'Audit Gratuit',
            href: '/audit-gratuit',
          }}
          secondaryButton={{
            text: 'Voir la Méthodologie',
            href: '/methodologie',
          }}
        />
      </Section>
    </>
  );
}
