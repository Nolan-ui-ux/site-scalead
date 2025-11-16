'use client';

import { motion } from 'framer-motion';
import Card from '@/components/ui/Card';

interface TimelineStep {
  number: string;
  title: string;
  description: string;
  icon: string;
}

interface TimelineProps {
  steps: TimelineStep[];
}

export default function Timeline({ steps }: TimelineProps) {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-primary-300 to-primary-100"></div>

      <div className="space-y-8">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="flex items-start gap-6">
              {/* Number Circle */}
              <div className="hidden md:flex relative z-10 flex-shrink-0 w-16 h-16 bg-primary-500 rounded-full items-center justify-center shadow-lg">
                <span className="text-white text-xl font-bold">{step.number}</span>
              </div>

              {/* Content Card */}
              <Card hover className="flex-1">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">{step.icon}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              </Card>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
