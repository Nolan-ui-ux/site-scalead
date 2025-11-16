'use client';

import { motion } from 'framer-motion';

export default function ProcessWorkflow() {
  const steps = [
    { icon: '📧', label: 'Email Cold', color: 'bg-blue-500' },
    { icon: '👤', label: 'LinkedIn', color: 'bg-primary-500' },
    { icon: '💬', label: 'Follow-up', color: 'bg-purple-500' },
    { icon: '📞', label: 'Appel', color: 'bg-green-500' },
    { icon: '📅', label: 'RDV', color: 'bg-yellow-500' },
  ];

  return (
    <div className="relative py-12">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col md:flex-row items-center">
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className={`w-24 h-24 ${step.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                <span className="text-4xl">{step.icon}</span>
              </div>
              <div className="mt-4 text-center">
                <p className="font-semibold text-gray-900">{step.label}</p>
              </div>
            </motion.div>

            {index < steps.length - 1 && (
              <motion.div
                initial={{ scaleX: 0, opacity: 0 }}
                whileInView={{ scaleX: 1, opacity: 1 }}
                transition={{ delay: index * 0.2 + 0.1 }}
                viewport={{ once: true }}
                className="hidden md:block mx-4"
              >
                <svg className="w-12 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                    className="text-gray-400"
                  />
                </svg>
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
