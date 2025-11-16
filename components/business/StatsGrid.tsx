'use client';

import { motion } from 'framer-motion';
import Card from '@/components/ui/Card';

interface Stat {
  number: string;
  label: string;
  suffix?: string;
  icon?: string;
}

interface StatsGridProps {
  stats: Stat[];
  columns?: 2 | 3 | 4;
}

export default function StatsGrid({ stats, columns = 4 }: StatsGridProps) {
  const gridCols = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  };

  return (
    <div className={`grid ${gridCols[columns]} gap-6`}>
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <Card hover className="text-center">
            {stat.icon && (
              <div className="text-5xl mb-4">{stat.icon}</div>
            )}
            <div className="text-4xl md:text-5xl font-bold text-primary-500 mb-2">
              {stat.number}
              {stat.suffix && <span className="text-3xl">{stat.suffix}</span>}
            </div>
            <div className="text-gray-600 font-medium">{stat.label}</div>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
