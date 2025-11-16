'use client';

import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import FeatureGrid from '@/components/business/FeatureGrid';
import CTA from '@/components/business/CTA';

export default function IAPersonnalisationPage() {
  const features = [
    {
      icon: '🌐',
      title: 'Analyse de site web',
      description: 'L\'IA scrape et analyse le site de l\'entreprise cible pour comprendre l\'activité, les enjeux et le positionnement.',
    },
    {
      icon: '👔',
      title: 'Analyse LinkedIn',
      description: 'Extraction et analyse du profil LinkedIn : poste, expérience, centres d\'intérêt, posts récents, engagements.',
    },
    {
      icon: '🏢',
      title: 'Contexte sectoriel',
      description: 'Compréhension du secteur d\'activité, des enjeux métier et des tendances pour adapter le message.',
    },
    {
      icon: '📰',
      title: 'Actualités entreprise',
      description: 'Détection d\'événements récents (levée de fonds, recrutement, nouveaux produits) pour contextualiser.',
    },
    {
      icon: '✍️',
      title: 'Génération de copies',
      description: 'Rédaction automatique de messages 100% uniques en fonction de toutes les données analysées.',
    },
    {
      icon: '🔄',
      title: 'A/B Testing IA',
      description: 'L\'IA génère plusieurs variantes et apprend en continu des messages qui performent le mieux.',
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
              IA & Personnalisation
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Personnalisation IA : 4 000+ messages uniques par mois
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              L'IA de Scalead analyse automatiquement chaque prospect (site web, LinkedIn, secteur, actualités) pour
              générer des messages 100% personnalisés à grande échelle. La puissance de l'automatisation, la qualité de l'humain.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/audit-gratuit" variant="primary" size="lg">
                Audit Gratuit
              </Button>
              <Button href="/methodologie" variant="outline" size="lg">
                Comment Ça Marche
              </Button>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Problem */}
      <Section background="gray">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Le paradoxe de la prospection à grande échelle
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Card className="border-2 border-red-200 bg-red-50">
                <h3 className="text-xl font-bold text-gray-900 mb-4">❌ Le problème</h3>
                <p className="text-gray-700 mb-4">
                  Pour générer un pipeline commercial prévisible, vous avez besoin de <strong>volume</strong> :
                  contacter des centaines voire des milliers de prospects chaque mois.
                </p>
                <p className="text-gray-700 mb-4">
                  Mais pour obtenir des <strong>réponses</strong>, vous avez besoin de <strong>personnalisation</strong> :
                  des messages qui parlent des enjeux spécifiques de chaque prospect.
                </p>
                <p className="text-gray-700 font-bold">
                  Le dilemme : comment personnaliser à grande échelle sans y passer 10 heures par jour ?
                </p>
              </Card>

              <Card className="border-2 border-primary-200 bg-primary-50">
                <h3 className="text-xl font-bold text-primary-600 mb-4">✅ La solution Scalead</h3>
                <p className="text-gray-700 mb-4">
                  Notre <strong>IA de personnalisation</strong> analyse automatiquement chaque prospect en quelques secondes :
                  site web, profil LinkedIn, secteur, actualités.
                </p>
                <p className="text-gray-700 mb-4">
                  Elle génère ensuite un <strong>message 100% unique</strong> qui mentionne des éléments spécifiques
                  au prospect : son activité, ses enjeux, son contexte.
                </p>
                <p className="text-gray-700 font-bold">
                  Résultat : 4 000+ messages personnalisés par mois, chacun aussi pertinent que s'il avait été écrit manuellement.
                </p>
              </Card>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* How It Works */}
      <Section background="white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Comment fonctionne notre IA de personnalisation
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Un processus en 6 étapes qui transforme une liste de prospects en messages ultra-personnalisés.
          </p>
        </motion.div>
        <FeatureGrid features={features} />
      </Section>

      {/* Detailed Process */}
      <Section background="gray">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Le processus détaillé de personnalisation
            </h2>
            <div className="space-y-6">
              {[
                {
                  step: 'Étape 1',
                  title: 'Enrichissement des données',
                  description: 'Pour chaque prospect de votre liste, notre système récupère automatiquement : URL du site web, profil LinkedIn, secteur d\'activité, taille entreprise, localisation, funding récent.',
                },
                {
                  step: 'Étape 2',
                  title: 'Scraping et extraction',
                  description: 'L\'IA visite le site web et le profil LinkedIn pour extraire les informations clés : activité principale, value proposition, clients types, technologies utilisées, posts récents, centres d\'intérêt.',
                },
                {
                  step: 'Étape 3',
                  title: 'Analyse contextuelle',
                  description: 'L\'IA analyse ces données pour identifier : les pain points probables, les enjeux business actuels, les signaux d\'intérêt (recrutement, croissance, levée), les angles de personnalisation pertinents.',
                },
                {
                  step: 'Étape 4',
                  title: 'Génération du message',
                  description: 'Sur la base de l\'analyse, l\'IA génère un message unique qui : mentionne un élément spécifique au prospect, fait le lien avec une problématique métier, propose une valeur concrète, inclut un CTA adapté au contexte.',
                },
                {
                  step: 'Étape 5',
                  title: 'Validation qualité',
                  description: 'Chaque message généré passe par des filtres qualité : vérification de la pertinence, détection de hallucinations, contrôle du ton et du style, validation des informations factuelles.',
                },
                {
                  step: 'Étape 6',
                  title: 'Optimisation continue',
                  description: 'L\'IA apprend en continu : quels types de personnalisation obtiennent le plus de réponses, quels angles fonctionnent le mieux par secteur, quels éléments augmentent les taux d\'ouverture et de clic.',
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card hover>
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold">{index + 1}</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                        <p className="text-gray-700">{item.description}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Examples */}
      <Section background="white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Exemples de personnalisation IA
            </h2>
            <div className="space-y-6">
              {[
                {
                  prospect: 'CEO d\'un SaaS RH en croissance',
                  variables: 'Détecte : levée de fonds récente, 15 recrutements en cours, présence sur Product Hunt',
                  message: '"Félicitations pour votre série A ! J\'ai vu que vous recrutiez massivement. Beaucoup de nos clients SaaS RH utilisent Scalead pour alimenter leur pipe commercial pendant leur phase de scaling. Intéressé par un échange ?"',
                },
                {
                  prospect: 'Directeur Commercial d\'un éditeur logiciel industriel',
                  variables: 'Détecte : secteur traditionnel, cycle de vente long, présence sur LinkedIn mais peu active',
                  message: '"Bonjour [Prénom], je remarque que [Entreprise] accompagne les industriels dans leur transformation digitale - un marché où les cycles de vente sont longs et où chaque lead compte. Nous aidons des éditeurs comme vous à générer 15-20 RDV qualifiés/mois. Un rapide échange ?"',
                },
                {
                  prospect: 'VP Sales d\'une startup fintech',
                  variables: 'Détecte : posts LinkedIn sur le scaling, participe à des événements sales, actif sur le sujet outbound',
                  message: '"Salut [Prénom] - j\'ai adoré ton post sur le passage de 5 à 20 sales. Chez Scalead on travaille avec plusieurs fintechs (notamment [Client similaire]) pour scaler l\'outbound sans recruter 10 SDRs. Tu aurais 15min pour en discuter ?"',
                },
              ].map((example, index) => (
                <Card key={index} className="border-l-4 border-primary-500" hover>
                  <div className="mb-4">
                    <Badge variant="primary">Prospect : {example.prospect}</Badge>
                  </div>
                  <div className="mb-3">
                    <p className="text-sm font-semibold text-gray-600 mb-1">Variables détectées par l\'IA :</p>
                    <p className="text-sm text-gray-700 italic">{example.variables}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-600 mb-1">Message généré :</p>
                    <p className="text-gray-900 bg-gray-50 p-4 rounded border border-gray-200 italic">
                      {example.message}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </Section>

      {/* vs Manual */}
      <Section background="gray">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Personnalisation manuelle vs IA Scalead
            </h2>
            <Card>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="text-left py-4 px-4"></th>
                      <th className="text-center py-4 px-4 font-semibold text-gray-900">Manuelle</th>
                      <th className="text-center py-4 px-4 font-semibold text-gray-900">Variables simples</th>
                      <th className="text-center py-4 px-4 font-semibold text-primary-600 bg-primary-50">IA Scalead</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { feature: 'Temps par message', manual: '5-10 min', variables: '30 sec', ai: '< 5 sec' },
                      { feature: 'Messages/jour possible', manual: '20-30', variables: '200-300', ai: '1 000+' },
                      { feature: 'Profondeur personnalisation', manual: 'Très élevée', variables: 'Faible', ai: 'Élevée' },
                      { feature: 'Cohérence', manual: 'Variable', variables: 'Élevée', ai: 'Parfaite' },
                      { feature: 'Scalabilité', manual: 'Nulle', variables: 'Moyenne', ai: 'Excellente' },
                      { feature: 'Coût', manual: 'Très élevé', variables: 'Faible', ai: 'Optimisé' },
                      { feature: 'Apprentissage', manual: 'Non', variables: 'Non', ai: 'Oui (ML)' },
                    ].map((row, index) => (
                      <tr key={index} className="border-b border-gray-100">
                        <td className="py-4 px-4 font-medium text-gray-900">{row.feature}</td>
                        <td className="py-4 px-4 text-center text-gray-700">{row.manual}</td>
                        <td className="py-4 px-4 text-center text-gray-700">{row.variables}</td>
                        <td className="py-4 px-4 text-center text-primary-700 bg-primary-50 font-semibold">{row.ai}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </motion.div>
        </div>
      </Section>

      {/* Benefits */}
      <Section background="white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Les bénéfices de la personnalisation IA
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: '📈 +150% de taux de réponse',
                  description: 'Nos messages personnalisés par IA obtiennent 2,5x plus de réponses que des messages templétés classiques.',
                },
                {
                  title: '⚡ Gain de temps massif',
                  description: 'Zéro temps de personnalisation manuelle. L\'IA traite 1 000 prospects en quelques minutes.',
                },
                {
                  title: '🎯 Pertinence maximale',
                  description: 'Chaque message fait référence à des éléments réels et spécifiques au prospect. Aucune généralité.',
                },
                {
                  title: '🔄 Amélioration continue',
                  description: 'L\'IA apprend en permanence des messages qui fonctionnent et s\'améliore au fil du temps.',
                },
                {
                  title: '💰 ROI optimisé',
                  description: 'Meilleurs taux de réponse + volume élevé = plus de RDV générés pour le même budget.',
                },
                {
                  title: '🌍 Multi-langue et multi-secteur',
                  description: 'L\'IA s\'adapte à tous les secteurs et peut personnaliser dans plusieurs langues.',
                },
              ].map((benefit, index) => (
                <Card key={index} hover>
                  <h3 className="font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-700">{benefit.description}</p>
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
              Questions fréquentes sur l'IA de personnalisation
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: 'L\'IA ne risque-t-elle pas de générer des messages qui sonnent "robotiques" ?',
                  a: 'Non, car notre IA est entraînée sur des milliers de messages rédigés par des experts outbound. Elle imite le style humain et conversationnel. De plus, nous validons la qualité de chaque message avant envoi.',
                },
                {
                  q: 'Comment l\'IA évite-t-elle les "hallucinations" (fausses informations) ?',
                  a: 'Notre système inclut plusieurs layers de vérification : validation des sources, cross-checking des informations, filtres anti-hallucination. Si l\'IA n\'est pas sûre d\'une info, elle ne l\'utilise pas.',
                },
                {
                  q: 'L\'IA peut-elle personnaliser pour tous les secteurs ?',
                  a: 'Oui. L\'IA apprend en continu et s\'adapte à tous les secteurs B2B. Plus elle traite de prospects dans un secteur donné, meilleure elle devient dans ce secteur.',
                },
                {
                  q: 'Puis-je contrôler ou valider les messages générés par l\'IA ?',
                  a: 'Absolument. Vous avez un accès complet au dashboard et pouvez valider/modifier les messages avant envoi si vous le souhaitez. Nous vous montrons aussi des exemples avant le lancement.',
                },
                {
                  q: 'Quelle est la différence avec ChatGPT ou d\'autres IA génériques ?',
                  a: 'Notre IA est spécialisée et entraînée sur la prospection B2B. Elle connaît les best practices outbound, évite les erreurs classiques et est optimisée pour maximiser les taux de réponse - pas juste générer du texte.',
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
          title="Découvrez la puissance de l'IA pour votre prospection"
          description="Obtenez un audit gratuit et voyez comment notre IA peut personnaliser vos messages à grande échelle pour générer plus de leads qualifiés."
          primaryButton={{
            text: 'Audit Gratuit',
            href: '/audit-gratuit',
          }}
          secondaryButton={{
            text: 'Exemples de Résultats',
            href: '/cas-clients',
          }}
        />
      </Section>
    </>
  );
}
