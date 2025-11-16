'use client';

import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import FeatureGrid from '@/components/business/FeatureGrid';
import StatsGrid from '@/components/business/StatsGrid';
import CTA from '@/components/business/CTA';

export default function AutomatisationLinkedInPage() {
  const stats = [
    { number: '1000', suffix: '+', label: 'Invitations / mois', icon: '👥' },
    { number: '35', suffix: '%', label: 'Taux d\'acceptation', icon: '✅' },
    { number: '12', suffix: '%', label: 'Taux de réponse', icon: '💬' },
    { number: '100', suffix: '%', label: 'Personnalisation IA', icon: '🤖' },
  ];

  const features = [
    {
      icon: '🎯',
      title: 'Ciblage précis',
      description: 'Identification des bons décideurs grâce au Sales Navigator et à nos filtres avancés (poste, entreprise, secteur, localisation).',
    },
    {
      icon: '🤖',
      title: 'Messages personnalisés IA',
      description: 'Chaque message est unique, rédigé par notre IA qui analyse le profil, les posts récents et l\'activité LinkedIn du prospect.',
    },
    {
      icon: '🔒',
      title: 'Sécurité maximale',
      description: 'Respect strict des limites LinkedIn, actions humanisées avec randomisation, gestion des fuseaux horaires.',
    },
    {
      icon: '📊',
      title: 'Multi-touch intelligent',
      description: 'Séquences automatisées : invitation → message de connexion → follow-ups → content engagement.',
    },
    {
      icon: '⚡',
      title: 'Synchronisation multicanale',
      description: 'Orchestration parfaite entre LinkedIn et email pour maximiser vos chances de toucher le prospect.',
    },
    {
      icon: '📈',
      title: 'Reporting détaillé',
      description: 'Dashboard temps réel avec toutes vos métriques LinkedIn : invitations, acceptations, messages, réponses.',
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
              Automatisation LinkedIn B2B
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Automatisation LinkedIn intelligente : 1 000+ contacts / mois
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Scalead automatise votre prospection LinkedIn tout en gardant une approche 100% personnalisée et sécurisée.
              Générez des leads qualifiés sur le réseau social professionnel n°1.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/audit-gratuit" variant="primary" size="lg">
                Audit Gratuit
              </Button>
              <Button href="/prospection-multicanale" variant="outline" size="lg">
                Approche Multicanale
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
            Résultats moyens de nos campagnes LinkedIn
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Des performances supérieures grâce à notre approche intelligente de l'automatisation LinkedIn.
          </p>
        </motion.div>
        <StatsGrid stats={stats} />
      </Section>

      {/* What is LinkedIn Automation */}
      <Section background="white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Qu'est-ce que l'automatisation LinkedIn B2B ?
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                L'<strong>automatisation LinkedIn</strong> consiste à utiliser des outils et des processus pour automatiser
                vos actions de prospection sur LinkedIn : envoi d'invitations, messages de connexion, follow-ups, engagement sur du contenu.
              </p>
              <p>
                LinkedIn est devenu <strong>le canal n°1 pour la prospection B2B</strong> car :
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>800M+ de professionnels</strong> actifs dont 25M+ en France
                </li>
                <li>
                  <strong>Ciblage ultra-précis</strong> par poste, entreprise, secteur, localisation
                </li>
                <li>
                  <strong>Taux d'engagement élevé</strong> : les décideurs sont actifs sur LinkedIn
                </li>
                <li>
                  <strong>Contexte professionnel</strong> : moins intrusif qu'un email ou un appel
                </li>
                <li>
                  <strong>Social proof</strong> : profil, recommandations, posts renforcent la crédibilité
                </li>
              </ul>
              <p>
                Cependant, LinkedIn impose des <strong>limites strictes</strong> pour éviter le spam : maximum 100-150 invitations/semaine,
                limites sur les messages, risques de restriction de compte. C'est pourquoi une <strong>automatisation intelligente</strong> est cruciale.
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
            Notre approche de l'automatisation LinkedIn
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ce qui différencie Scalead des outils d'automatisation LinkedIn classiques.
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
              Comment nous automatisons LinkedIn sans risque
            </h2>
            <div className="space-y-6">
              {[
                {
                  title: '1. Ciblage Sales Navigator',
                  description: 'Nous utilisons LinkedIn Sales Navigator pour identifier vos ICP avec une précision chirurgicale : fonction exacte, taille d\'entreprise, secteur, localisation, ancienneté au poste. Export et enrichissement des listes.',
                },
                {
                  title: '2. Personnalisation IA',
                  description: 'Notre IA analyse automatiquement chaque profil LinkedIn : photo, headline, expérience, posts récents, centres d\'intérêt. Elle génère ensuite un message 100% unique et pertinent pour chaque prospect.',
                },
                {
                  title: '3. Automatisation sécurisée',
                  description: 'Nous respectons scrupuleusement les limites LinkedIn : max 20-25 invitations/jour, espacement aléatoire entre actions, simulation de comportement humain, gestion des fuseaux horaires. Résultat : 0 restriction de compte.',
                },
                {
                  title: '4. Séquences multi-touch',
                  description: 'Workflow automatisé en 5-7 touches : invitation avec note → message de connexion (si accepté) → follow-up J+3 → follow-up J+7 → content engagement. Chaque étape apporte une nouvelle valeur.',
                },
                {
                  title: '5. Synchronisation email + LinkedIn',
                  description: 'Orchestration intelligente : si le prospect répond sur LinkedIn, on arrête l\'email et inversement. Si pas de réponse sur LinkedIn, on rebondit par email. Approche vraiment multicanale.',
                },
                {
                  title: '6. Optimisation continue',
                  description: 'A/B testing des messages, analyse des taux d\'acceptation par segment, ajustement des copies. Amélioration permanente basée sur vos données réelles.',
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

      {/* Limits & Best Practices */}
      <Section background="gray">
        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="h-full bg-gradient-to-br from-yellow-50 to-orange-50 border-2 border-yellow-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                ⚠️ Les limites LinkedIn à respecter
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Invitations</h4>
                  <p className="text-gray-700 text-sm">
                    <strong>Max 100-150/semaine</strong> (20-25/jour). Au-delà, risque de restriction.
                    LinkedIn suit un "credit system" : si vos invitations sont souvent refusées, votre limite baisse.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Messages</h4>
                  <p className="text-gray-700 text-sm">
                    Pas de limite stricte mais <strong>max 50-80/jour</strong> recommandé.
                    Éviter les messages identiques (détection spam).
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Visites de profil</h4>
                  <p className="text-gray-700 text-sm">
                    <strong>Max 100-150/jour</strong>. Important pour l\'outreach passif (certains prospects vous contacteront).
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Invitations en attente</h4>
                  <p className="text-gray-700 text-sm">
                    <strong>Max 3 000 invitations en attente</strong>. Au-delà, LinkedIn bloque l\'envoi de nouvelles invitations.
                    Il faut retirer les anciennes régulièrement.
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="h-full bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                ✅ Best practices Scalead
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Warm-up progressif</h4>
                  <p className="text-gray-700 text-sm">
                    On commence doucement (10 invits/jour) puis on monte progressivement sur 2-3 semaines
                    pour habituer LinkedIn à votre activité.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Comportement humain</h4>
                  <p className="text-gray-700 text-sm">
                    Randomisation des délais entre actions, simulation de pauses, respect des heures ouvrées,
                    variation des jours/heures d'envoi.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Personnalisation systématique</h4>
                  <p className="text-gray-700 text-sm">
                    Chaque message est unique grâce à l'IA. LinkedIn détecte les messages templétés et les pénalise.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Profil optimisé</h4>
                  <p className="text-gray-700 text-sm">
                    Avant de lancer les campagnes, on optimise votre profil LinkedIn : photo pro, headline claire,
                    résumé convaincant, recommandations.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Monitoring quotidien</h4>
                  <p className="text-gray-700 text-sm">
                    Surveillance des métriques, détection de signaux d'alerte, ajustement immédiat si nécessaire.
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </Section>

      {/* Why not DIY */}
      <Section background="white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Pourquoi ne pas utiliser un outil d'automation LinkedIn directement ?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-2 border-red-200 bg-red-50">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  ❌ Outils seuls (Waalaxy, Skylead, etc.)
                </h3>
                <ul className="space-y-3 text-gray-700 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">✗</span>
                    <span>Vous devez configurer et gérer l'outil vous-même</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">✗</span>
                    <span>Personnalisation limitée (variables basiques)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">✗</span>
                    <span>Pas d'expertise copywriting ni stratégie</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">✗</span>
                    <span>Risque de restriction si mal configuré</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">✗</span>
                    <span>Pas d'optimisation continue</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">✗</span>
                    <span>Vous devez gérer manuellement les réponses</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">✗</span>
                    <span>Monocanal (LinkedIn uniquement)</span>
                  </li>
                </ul>
              </Card>

              <Card className="border-2 border-primary-200 bg-primary-50">
                <h3 className="text-xl font-bold text-primary-600 mb-4">
                  ✅ Scalead (done-for-you)
                </h3>
                <ul className="space-y-3 text-gray-700 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Nous gérons tout de A à Z (zéro temps de votre part)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Personnalisation IA 100% unique par message</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Copies rédigées par des experts outbound</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Sécurité maximale (0 restriction en 2 ans)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>A/B testing et optimisation permanents</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Qualification des réponses incluse</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Approche multicanale (LinkedIn + Email synchronisés)</span>
                  </li>
                </ul>
              </Card>
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
              Questions fréquentes sur l'automatisation LinkedIn
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: 'L\'automatisation LinkedIn est-elle risquée ?',
                  a: 'Si elle est mal faite, oui. C\'est pourquoi nous respectons scrupuleusement les limites LinkedIn, simulons un comportement humain et montons progressivement en volume. En 2+ ans, nous n\'avons jamais eu de restriction de compte client.',
                },
                {
                  q: 'Ai-je besoin d\'un compte Sales Navigator ?',
                  a: 'Oui, Sales Navigator est indispensable pour un ciblage précis. Nous incluons l\'abonnement dans notre service ou vous pouvez utiliser le vôtre.',
                },
                {
                  q: 'Combien de prospects puis-je contacter par mois ?',
                  a: 'En respectant les limites LinkedIn : environ 400-500 invitations/mois + 500-800 messages aux connexions existantes. Soit 1 000+ contacts/mois au total.',
                },
                {
                  q: 'Quel est le taux d\'acceptation des invitations ?',
                  a: 'Entre 30% et 45% en moyenne, selon la qualité du ciblage et la personnalisation. Nous optimisons en continu pour maximiser ce taux.',
                },
                {
                  q: 'Que se passe-t-il avec les réponses LinkedIn ?',
                  a: 'Nous qualifions les réponses et vous transmettons uniquement les leads chauds. Vous pouvez aussi gérer les conversations vous-même si vous préférez.',
                },
                {
                  q: 'LinkedIn vs Email : lequel est le plus efficace ?',
                  a: 'Les deux sont complémentaires ! LinkedIn a un taux d\'engagement plus élevé mais un volume plus limité. L\'email permet plus de volume. L\'idéal est de combiner les deux, ce que nous faisons chez Scalead.',
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
          title="Prêt à automatiser LinkedIn intelligemment ?"
          description="Découvrez comment notre approche combine automatisation sécurisée, personnalisation IA et approche multicanale pour générer des leads sur LinkedIn."
          primaryButton={{
            text: 'Audit Gratuit',
            href: '/audit-gratuit',
          }}
          secondaryButton={{
            text: 'Approche Multicanale',
            href: '/prospection-multicanale',
          }}
        />
      </Section>
    </>
  );
}
