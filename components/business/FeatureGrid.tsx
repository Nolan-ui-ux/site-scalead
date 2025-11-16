'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import Card from '@/components/ui/Card';
import IconWrapper from '@/components/ui/IconWrapper';

interface Feature {
  icon: string | ReactNode;
  title: string;
  description: string;
}

interface FeatureGridProps {
  features: Feature[];
  columns?: 2 | 3 | 4;
}

export default function FeatureGrid({ features, columns = 3 }: FeatureGridProps) {
  const gridCols = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  };

  return (
    <div className={`grid ${gridCols[columns]} gap-6 md:gap-8`}>
      {features.map((feature, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <Card hover className="h-full border border-gray-100">
            <div className="flex flex-col items-center text-center">
              {typeof feature.icon === 'string' ? (
                <div className="w-14 h-14 md:w-16 md:h-16 bg-primary-50 rounded-2xl flex items-center justify-center mb-4 text-primary-600">
                  <span className="text-2xl md:text-3xl">{feature.icon}</span>
                </div>
              ) : (
                <div className="mb-4">
                  <IconWrapper variant="primary" size="lg">
                    {feature.icon}
                  </IconWrapper>
                </div>
              )}
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 leading-tight">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                {feature.description}
              </p>
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
