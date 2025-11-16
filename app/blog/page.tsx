'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';

const articles = [
  {
    slug: 'comment-reussir-cold-email-b2b-2024',
    title: 'Comment Réussir son Cold Email B2B en 2024',
    excerpt: 'Guide complet pour maîtriser le cold email : ciblage, copywriting, délivrabilité et optimisation.',
    date: '15 mars 2024',
    category: 'Cold Email',
    readTime: '12 min',
  },
  {
    slug: 'automatisation-linkedin-guide-complet',
    title: 'Automatisation LinkedIn : Le Guide Complet 2024',
    excerpt: 'Tout savoir sur l\'automatisation LinkedIn : outils, best practices, limites et stratégies gagnantes.',
    date: '10 mars 2024',
    category: 'LinkedIn',
    readTime: '15 min',
  },
  {
    slug: 'prospection-multicanale-strategie-gagnante',
    title: 'Prospection Multicanale : La Stratégie Gagnante',
    excerpt: 'Pourquoi et comment combiner email et LinkedIn pour multiplier vos résultats par 3.',
    date: '5 mars 2024',
    category: 'Stratégie',
    readTime: '10 min',
  },
  {
    slug: 'personnalisation-ia-prospection-b2b',
    title: 'IA et Personnalisation : L\'Avenir de la Prospection B2B',
    excerpt: 'Comment l\'intelligence artificielle transforme la prospection B2B avec la personnalisation à grande échelle.',
    date: '1er mars 2024',
    category: 'IA',
    readTime: '8 min',
  },
];

export default function BlogPage() {
  return (
    <>
      <Section className="pt-20" background="white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Badge variant="primary" className="mb-6">Blog</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Le Blog Scalead
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Guides, stratégies et best practices pour réussir votre prospection B2B.
            </p>
          </motion.div>
        </div>
      </Section>

      <Section background="gray">
        <div className="grid md:grid-cols-2 gap-8">
          {articles.map((article, i) => (
            <motion.div
              key={article.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <Link href={`/blog/${article.slug}`}>
                <Card hover className="h-full flex flex-col">
                  <Badge variant="primary" className="mb-4 w-fit">{article.category}</Badge>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">{article.title}</h2>
                  <p className="text-gray-600 mb-4 flex-grow">{article.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t border-gray-200">
                    <span>{article.date}</span>
                    <span>{article.readTime}</span>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </Section>
    </>
  );
}
