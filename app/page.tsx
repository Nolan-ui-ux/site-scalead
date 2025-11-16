'use client';

import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import StatsGrid from '@/components/business/StatsGrid';
import FeatureGrid from '@/components/business/FeatureGrid';
import ProcessWorkflow from '@/components/business/ProcessWorkflow';
import DashboardMockup from '@/components/business/DashboardMockup';
import CTA from '@/components/business/CTA';
import {
  EmailIcon,
  TargetIcon,
  BrainIcon,
  ChartIcon,
  UsersIcon,
  LinkedInIcon,
  LightningIcon,
  RefreshIcon,
  CheckCircleIcon,
  CalendarIcon,
  MessageIcon,
  TrendingUpIcon,
} from '@/components/ui/Icons';

export default function HomePage() {
  const stats = [
    { number: '4000', suffix: '+', label: 'Emails personnalisés / mois', icon: <EmailIcon size={24} /> },
    { number: '1000', suffix: '+', label: 'Contacts LinkedIn / mois', icon: <UsersIcon size={24} /> },
    { number: '8', suffix: '%', label: 'Taux de réponse moyen', icon: <MessageIcon size={24} /> },
    { number: '15', suffix: '+', label: 'RDV qualifiés / mois', icon: <CalendarIcon size={24} /> },
  ];

  const features = [
    {
      icon: <TargetIcon />,
      title: 'Ciblage Ultra-Précis',
      description: 'Identification et qualification de vos prospects idéaux grâce à nos outils de ciblage avancés et notre expertise sectorielle.',
    },
    {
      icon: <BrainIcon />,
      title: 'Personnalisation IA',
      description: 'Chaque message est personnalisé par notre IA qui analyse le site, le LinkedIn, le secteur et le poste de votre prospect.',
    },
    {
      icon: <ChartIcon />,
      title: 'Pilotage Data-Driven',
      description: 'Dashboard en temps réel, A/B testing permanent et optimisation continue de vos campagnes pour maximiser le ROI.',
    },
    {
      icon: <RefreshIcon />,
      title: 'Approche Multicanale',
      description: 'Combinaison stratégique de l\'email et de LinkedIn pour multiplier vos points de contact et vos taux de conversion.',
    },
    {
      icon: <LightningIcon />,
      title: 'Déploiement Rapide',
      description: 'Lancement de vos premières campagnes en moins de 2 semaines avec notre process rodé et notre équipe dédiée.',
    },
    {
      icon: <CheckCircleIcon />,
      title: 'Expertise Outbound',
      description: 'Plus de 50 campagnes lancées, des dizaines de secteurs accompagnés, une maîtrise complète de la prospection B2B.',
    },
  ];

  const pillars = [
    {
      icon: <EmailIcon />,
      title: 'Cold Email À Grande Échelle',
      description: 'Jusqu\'à 4 000 emails personnalisés par mois avec une délivrabilité optimale et des copies testées.',
    },
    {
      icon: <LinkedInIcon />,
      title: 'Automatisation LinkedIn Intelligente',
      description: 'Prospection LinkedIn ciblée avec messages 100% personnalisés par IA pour maximiser l\'engagement.',
    },
    {
      icon: <BrainIcon />,
      title: 'IA & Personnalisation',
      description: 'Notre IA analyse chaque prospect pour créer des messages uniques et pertinents à grande échelle.',
    },
    {
      icon: <TrendingUpIcon />,
      title: 'Focus ROI',
      description: 'Objectif unique : générer des rendez-vous qualifiés et un pipeline commercial prévisible.',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <Section className="pt-20 pb-10" background="white">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="primary" className="mb-6">
              Agence de Développement Commercial B2B
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Générez des leads qualifiés en <span className="text-primary-500">prospection multicanale</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Scalead délègue votre prospection B2B avec une approche combinant <strong>cold email à grande échelle</strong>,
              <strong> automatisation LinkedIn intelligente</strong> et <strong>personnalisation par IA</strong>.
              Obtenez des rendez-vous qualifiés sans mobiliser vos équipes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/audit-gratuit" variant="primary" size="lg">
                Demander un Audit Gratuit
              </Button>
              <Button href="/methodologie" variant="outline" size="lg">
                Découvrir Notre Méthode
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <DashboardMockup />
          </motion.div>
        </div>
      </Section>

      {/* Stats Section */}
      <Section background="gray">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Des chiffres qui parlent
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Scalead vous permet de scaler votre prospection tout en maintenant un niveau de personnalisation et de qualité élevé.
          </p>
        </motion.div>
        <StatsGrid stats={stats} />
      </Section>

      {/* Pillars Section */}
      <Section background="white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ce que fait Scalead pour vous
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Une solution complète de développement commercial qui combine technologie, expertise et exécution.
          </p>
        </motion.div>
        <FeatureGrid features={pillars} columns={2} />
      </Section>

      {/* Workflow Section */}
      <Section background="gray">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Le parcours de prospection multicanale
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Une séquence optimisée qui combine email et LinkedIn pour maximiser vos chances d'obtenir un rendez-vous.
          </p>
        </motion.div>
        <ProcessWorkflow />
      </Section>

      {/* Differentiation Section */}
      <Section background="white">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Pourquoi Scalead est différent d'une agence outbound classique ?
            </h2>
            <div className="space-y-6">
              <Card>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-green-600">
                    <CheckCircleIcon size={28} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Personnalisation IA à l'échelle</h3>
                    <p className="text-gray-600">
                      Là où d'autres agences envoient des messages templétés, notre IA personnalise chaque message en analysant
                      le site web, le profil LinkedIn, le secteur et le poste du prospect.
                    </p>
                  </div>
                </div>
              </Card>

              <Card>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-green-600">
                    <CheckCircleIcon size={28} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Volumes massifs sans compromis</h3>
                    <p className="text-gray-600">
                      4 000+ emails et 1 000+ contacts LinkedIn par mois avec une délivrabilité optimale et un ciblage ultra-précis.
                    </p>
                  </div>
                </div>
              </Card>

              <Card>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-green-600">
                    <CheckCircleIcon size={28} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Approche multicanale native</h3>
                    <p className="text-gray-600">
                      Orchestration intelligente entre email et LinkedIn avec des séquences synchronisées pour multiplier vos points de contact.
                    </p>
                  </div>
                </div>
              </Card>

              <Card>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-green-600">
                    <CheckCircleIcon size={28} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Transparence totale</h3>
                    <p className="text-gray-600">
                      Dashboard en temps réel, accès à toutes vos données, reporting détaillé et optimisation continue basée sur la data.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gradient-to-br from-primary-50 to-blue-50 border-2 border-primary-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Résultats typiques</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-4 border-b border-primary-200">
                  <span className="text-gray-700 font-medium">Contacts ciblés / mois</span>
                  <span className="text-2xl font-bold text-primary-600">5 000+</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-primary-200">
                  <span className="text-gray-700 font-medium">Taux d'ouverture email</span>
                  <span className="text-2xl font-bold text-primary-600">40-50%</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-primary-200">
                  <span className="text-gray-700 font-medium">Taux de réponse</span>
                  <span className="text-2xl font-bold text-primary-600">6-10%</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-primary-200">
                  <span className="text-gray-700 font-medium">RDV qualifiés / mois</span>
                  <span className="text-2xl font-bold text-primary-600">15-30</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-medium">Délai de lancement</span>
                  <span className="text-2xl font-bold text-primary-600">{"<"} 2 sem.</span>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </Section>

      {/* Features Section */}
      <Section background="gray">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Pourquoi les entreprises B2B choisissent Scalead
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Une solution complète qui allie technologie de pointe et expertise humaine pour des résultats concrets.
          </p>
        </motion.div>
        <FeatureGrid features={features} />
      </Section>

      {/* Social Proof Section */}
      <Section background="white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ils nous font confiance
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Des entreprises de toutes tailles utilisent Scalead pour accélérer leur développement commercial.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              company: 'SaaS B2B',
              testimonial: 'Scalead nous a permis de générer 25 rendez-vous qualifiés par mois sans mobiliser nos équipes. Le ROI est impressionnant.',
              author: 'CEO, Startup SaaS',
              results: '+180% de pipeline commercial',
            },
            {
              company: 'Cabinet de Conseil',
              testimonial: 'La qualité de personnalisation et le professionnalisme de l\'équipe nous ont bluffés. Enfin une agence qui tient ses promesses.',
              author: 'Directeur Commercial',
              results: '32 RDV générés en 2 mois',
            },
            {
              company: 'Éditeur Logiciel',
              testimonial: 'L\'approche multicanale de Scalead nous a permis de toucher des décideurs inaccessibles par nos méthodes traditionnelles.',
              author: 'VP Sales',
              results: 'Taux de réponse de 12%',
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card hover className="h-full">
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    <Badge variant="success">{item.results}</Badge>
                  </div>
                  <p className="text-gray-700 mb-6 flex-grow italic">
                    "{item.testimonial}"
                  </p>
                  <div className="border-t border-gray-200 pt-4">
                    <p className="font-semibold text-gray-900">{item.author}</p>
                    <p className="text-sm text-gray-600">{item.company}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button href="/cas-clients" variant="outline" size="lg">
            Voir tous les cas clients
          </Button>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="gray">
        <CTA
          variant="gradient"
          title="Prêt à scaler votre développement commercial ?"
          description="Obtenez un audit gratuit de votre stratégie de prospection et découvrez comment Scalead peut générer des leads qualifiés pour votre entreprise."
          primaryButton={{
            text: 'Demander un Audit Gratuit',
            href: '/audit-gratuit',
          }}
          secondaryButton={{
            text: 'Parler à un Expert',
            href: '/contact',
          }}
        />
      </Section>
    </>
  );
}
