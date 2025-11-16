'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface FeatureBlockProps {
  title: string;
  description: string;
  mockup: ReactNode;
  variant?: 'default' | 'large' | 'wide' | 'tall';
  imagePosition?: 'left' | 'right' | 'top' | 'bottom';
  accentColor?: 'blue' | 'green' | 'purple' | 'orange';
}

export default function FeatureBlock({
  title,
  description,
  mockup,
  variant = 'default',
  imagePosition = 'right',
  accentColor = 'blue',
}: FeatureBlockProps) {
  const accentColors = {
    blue: 'from-blue-50 to-blue-100',
    green: 'from-green-50 to-green-100',
    purple: 'from-purple-50 to-purple-100',
    orange: 'from-orange-50 to-orange-100',
  };

  const sizeClasses = {
    default: 'col-span-1',
    large: 'col-span-2 row-span-2',
    wide: 'col-span-2',
    tall: 'row-span-2',
  };

  const isHorizontal = imagePosition === 'left' || imagePosition === 'right';
  const flexDirection = isHorizontal
    ? imagePosition === 'left'
      ? 'lg:flex-row-reverse'
      : 'lg:flex-row'
    : imagePosition === 'top'
    ? 'flex-col-reverse'
    : 'flex-col';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`${sizeClasses[variant]} bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300`}
    >
      <div className={`flex ${flexDirection} h-full`}>
        {/* Content */}
        <div className={`p-8 ${isHorizontal ? 'lg:w-1/2' : 'w-full'} flex flex-col justify-center`}>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
          <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>

        {/* Mockup */}
        <div
          className={`bg-gradient-to-br ${accentColors[accentColor]} ${
            isHorizontal ? 'lg:w-1/2' : 'w-full'
          } p-8 flex items-center justify-center`}
        >
          {mockup}
        </div>
      </div>
    </motion.div>
  );
}
