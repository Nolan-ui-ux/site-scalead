'use client';

import { notFound } from 'next/navigation';
import Section from '@/components/ui/Section';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';

const articles: Record<string, any> = {
  'comment-reussir-cold-email-b2b-2024': {
    title: 'Comment Réussir son Cold Email B2B en 2024',
    date: '15 mars 2024',
    category: 'Cold Email',
    content: `
Le cold email B2B reste l'un des canaux les plus efficaces pour générer des leads qualifiés en 2024. Mais face à l'évolution des algorithmes et aux boîtes de réception saturées, comment se démarquer ?

## Les Fondamentaux du Cold Email en 2024

### 1. Le Ciblage Ultra-Précis

La réussite d'une campagne de cold email commence par le ciblage. Inutile d'envoyer 10 000 emails à des prospects non qualifiés. Mieux vaut 500 emails à des ICP parfaitement ciblés.

**Les critères essentiels :**
- Taille d'entreprise
- Secteur d'activité
- Fonction du décideur
- Signaux d'intérêt (recrutement, levée de fonds, croissance)

### 2. La Délivrabilité : Le Nerf de la Guerre

En 2024, sans délivrabilité, pas de résultats. Vos emails doivent atteindre la boîte principale, pas les spams.

**Les règles d'or :**
- Domaines secondaires dédiés
- Warm-up progressif (3-4 semaines minimum)
- SPF/DKIM/DMARC correctement configurés
- Maximum 40-50 emails/jour par domaine
- Taux de rebond < 3%

### 3. Le Copywriting qui Convertit

Oubliez les longs emails corporate. En 2024, le cold email efficace est :
- **Court** : 80-120 mots maximum
- **Personnalisé** : mention d'un élément spécifique au prospect
- **Centré sur la valeur** : qu'est-ce que vous apportez ?
- **Avec un CTA clair** : une seule demande simple

**Structure gagnante :**
1. Accroche personnalisée (observation spécifique)
2. Problème/Enjeu (que le prospect reconnaît)
3. Solution/Valeur (en 1 phrase)
4. CTA simple (question ouverte ou demande de 15min)

### 4. La Personnalisation à Grande Échelle

Comment personnaliser 1 000+ emails sans y passer sa vie ? L'IA.

Les outils de personnalisation IA analysent :
- Le site web de l'entreprise
- Le profil LinkedIn du prospect
- Les actualités récentes
- Le secteur d'activité

Et génèrent automatiquement des variables de personnalisation pertinentes.

### 5. L'A/B Testing Systématique

Ne lancez jamais une campagne avec une seule variante. Testez :
- Les objets (3-5 mots vs 6-8 mots)
- Les accroches (question vs observation vs stat)
- Les CTA (question ouverte vs demande de calendly)
- Les timings (mardi 10h vs jeudi 14h)

Analysez les résultats après 100-200 envois et doublez la mise sur les variantes gagnantes.

## Les Erreurs à Éviter Absolument

❌ Envoyer depuis votre domaine principal
❌ Acheter des listes d'emails
❌ Utiliser des mots "spam" (gratuit, argent, opportunité)
❌ Envoyer des pièces jointes
❌ Faire du mass mailing non personnalisé
❌ Négliger les follow-ups

## Conclusion

Le cold email B2B en 2024 demande rigueur, expertise et outils adaptés. Bien exécuté, il reste le canal avec le meilleur ROI pour la génération de leads B2B.

Chez Scalead, nous envoyons 4 000+ emails personnalisés par mois avec un taux de réponse de 8% en moyenne. Si vous voulez passer à l'échelle, parlons-en.
    `,
  },
  'automatisation-linkedin-guide-complet': {
    title: 'Automatisation LinkedIn : Le Guide Complet 2024',
    date: '10 mars 2024',
    category: 'LinkedIn',
    content: `
LinkedIn est devenu le canal incontournable pour la prospection B2B. Mais comment automatiser intelligemment sans risquer la restriction de compte ?

## Pourquoi Automatiser LinkedIn ?

Avec 800M+ de professionnels dont 25M en France, LinkedIn concentre tous vos prospects B2B. Problème : prospecter manuellement prend un temps fou.

**L'automatisation permet de :**
- Toucher 400-500 prospects/mois
- Personnaliser chaque message
- Suivre précisément les résultats
- Libérer votre temps pour la closing

## Les Limites LinkedIn à Respecter

LinkedIn impose des limites strictes pour éviter le spam :

**Invitations :** Max 100-150/semaine
**Messages :** Max 50-80/jour recommandé
**Visites de profil :** Max 100-150/jour
**Invitations en attente :** Max 3 000

Dépasser ces limites = restriction de compte.

## Les Outils d'Automatisation

### Outils Cloud (Sécurisés)
- Waalaxy
- Lemlist
- LaGrowthMachine

✅ Avantages : Pas de détection, utilisation via API LinkedIn
❌ Limites : Fonctionnalités parfois limitées

### Outils Chrome (Risqués)
- Phantombuster
- Dux-Soup

⚠️ Plus de fonctionnalités mais risque de détection plus élevé

## La Stratégie Gagnante

### 1. Profil Optimisé

Avant d'automatiser, optimisez votre profil :
- Photo professionnelle
- Headline claire et orientée valeur
- Résumé convaincant
- Recommandations clients

### 2. Ciblage Sales Navigator

Sales Navigator est indispensable pour :
- Filtrer par fonction exacte
- Cibler par taille d'entreprise
- Exclure certains secteurs
- Identifier les décideurs

### 3. Messages Personnalisés

Fini les "Bonjour [Prénom], je vois que vous travaillez dans [Secteur]..."

Un bon message LinkedIn :
- Mentionne un élément vraiment spécifique
- Apporte de la valeur dès le 1er message
- Pose une question ouverte
- Fait max 300 caractères

### 4. Séquence Multi-Touch

1. Invitation avec note personnalisée
2. Message de remerciement (si accepté)
3. Follow-up avec contenu de valeur J+3
4. Follow-up avec question spécifique J+7

## Conclusion

L'automatisation LinkedIn est puissante mais demande rigueur et expertise. Mal faite, vous risquez la restriction. Bien faite, c'est 15-20 RDV/mois.

Chez Scalead, nous générons 400+ connexions/mois avec 35% d'acceptation et 12% de taux de réponse. Notre secret ? Personnalisation IA + respect strict des limites.
    `,
  },
};

export default function BlogArticle({ params }: { params: { slug: string } }) {
  const article = articles[params.slug];

  if (!article) {
    notFound();
  }

  return (
    <>
      <Section className="pt-20" background="white">
        <div className="max-w-4xl mx-auto">
          <Badge variant="primary" className="mb-4">{article.category}</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {article.title}
          </h1>
          <p className="text-gray-600 mb-8">{article.date}</p>

          <div className="prose prose-lg max-w-none">
            {article.content.split('\n\n').map((paragraph: string, i: number) => {
              if (paragraph.startsWith('##')) {
                return <h2 key={i} className="text-3xl font-bold text-gray-900 mt-12 mb-6">{paragraph.replace('##', '').trim()}</h2>;
              }
              if (paragraph.startsWith('###')) {
                return <h3 key={i} className="text-2xl font-bold text-gray-900 mt-8 mb-4">{paragraph.replace('###', '').trim()}</h3>;
              }
              if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                return <p key={i} className="font-bold text-gray-900 mt-6 mb-3">{paragraph.replace(/\*\*/g, '')}</p>;
              }
              if (paragraph.startsWith('-') || paragraph.startsWith('✅') || paragraph.startsWith('❌') || paragraph.startsWith('⚠️')) {
                return <p key={i} className="text-gray-700 my-2">{paragraph}</p>;
              }
              return <p key={i} className="text-gray-700 my-4">{paragraph}</p>;
            })}
          </div>
        </div>
      </Section>

      <Section background="gray">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Envie de passer à l'action ?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Découvrez comment Scalead peut transformer votre prospection B2B.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/audit-gratuit" variant="primary" size="lg">Audit Gratuit</Button>
            <Button href="/blog" variant="outline" size="lg">Voir tous les articles</Button>
          </div>
        </div>
      </Section>
    </>
  );
}

export function generateStaticParams() {
  return Object.keys(articles).map((slug) => ({ slug }));
}
