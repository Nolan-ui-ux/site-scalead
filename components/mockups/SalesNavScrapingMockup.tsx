'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function SalesNavScrapingMockup() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => (prev + 1) % 4);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-200">
        {/* Header */}
        <div className="bg-[#0A66C2] px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
              <span className="text-[#0A66C2] font-bold text-sm">in</span>
            </div>
            <span className="text-white font-semibold">Sales Navigator</span>
          </div>
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-white/30"></div>
            <div className="w-3 h-3 rounded-full bg-white/30"></div>
            <div className="w-3 h-3 rounded-full bg-white/30"></div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <motion.div
              animate={{
                scale: step === 0 ? 1.05 : 1,
                borderColor: step === 0 ? '#1877F2' : '#E5E7EB',
              }}
              className="bg-white rounded-lg px-4 py-2 border-2 transition-colors"
            >
              <div className="text-xs text-gray-500 mb-1">Fonction</div>
              <div className="text-sm font-medium text-gray-900">Directeur Commercial</div>
            </motion.div>
            <motion.div
              animate={{
                scale: step === 1 ? 1.05 : 1,
                borderColor: step === 1 ? '#1877F2' : '#E5E7EB',
              }}
              className="bg-white rounded-lg px-4 py-2 border-2 transition-colors"
            >
              <div className="text-xs text-gray-500 mb-1">Taille entreprise</div>
              <div className="text-sm font-medium text-gray-900">11-50 employés</div>
            </motion.div>
            <motion.div
              animate={{
                scale: step === 1 ? 1.05 : 1,
                borderColor: step === 1 ? '#1877F2' : '#E5E7EB',
              }}
              className="bg-white rounded-lg px-4 py-2 border-2 transition-colors"
            >
              <div className="text-xs text-gray-500 mb-1">Pays</div>
              <div className="text-sm font-medium text-gray-900">France</div>
            </motion.div>
          </div>
        </div>

        {/* Results */}
        <div className="px-6 py-8 text-center bg-gradient-to-b from-blue-50 to-white">
          <motion.div
            key={step}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="inline-block"
          >
            <div className="text-6xl font-bold text-[#1877F2] mb-2">
              {step === 0 ? '2,847' : step === 1 ? '4,532' : '4,532'}
            </div>
            <div className="text-gray-600 font-medium">résultats trouvés</div>
          </motion.div>

          {/* Export Button */}
          <motion.button
            animate={{
              scale: step === 2 ? 1.1 : 1,
              backgroundColor: step === 2 ? '#1877F2' : '#1877F2',
            }}
            className="mt-6 px-8 py-3 bg-[#1877F2] text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all"
          >
            Exporter en CSV
          </motion.button>
        </div>

        {/* CSV Preview */}
        {step === 3 && (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="mx-6 mb-6 bg-white border-2 border-green-500 rounded-xl overflow-hidden"
          >
            <div className="bg-green-50 px-4 py-2 border-b border-green-200 flex items-center gap-2">
              <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-semibold text-green-900">prospects_qualifies.csv</span>
            </div>
            <div className="p-4 overflow-x-auto">
              <table className="w-full text-xs">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-3 py-2 text-left font-semibold text-gray-700">Nom</th>
                    <th className="px-3 py-2 text-left font-semibold text-gray-700">Poste</th>
                    <th className="px-3 py-2 text-left font-semibold text-gray-700">Entreprise</th>
                    <th className="px-3 py-2 text-left font-semibold text-gray-700">Email</th>
                    <th className="px-3 py-2 text-left font-semibold text-gray-700">LinkedIn</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="px-3 py-2 text-gray-900">Pierre Martin</td>
                    <td className="px-3 py-2 text-gray-600">Dir. Commercial</td>
                    <td className="px-3 py-2 text-gray-600">TechCorp SAS</td>
                    <td className="px-3 py-2 text-blue-600">p.martin@...</td>
                    <td className="px-3 py-2 text-blue-600">linkedin.com/...</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 text-gray-900">Sophie Durand</td>
                    <td className="px-3 py-2 text-gray-600">VP Sales</td>
                    <td className="px-3 py-2 text-gray-600">InnoSoft</td>
                    <td className="px-3 py-2 text-blue-600">s.durand@...</td>
                    <td className="px-3 py-2 text-blue-600">linkedin.com/...</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>
        )}

        {/* Animated Cursor */}
        {(step === 0 || step === 1 || step === 2) && (
          <motion.div
            animate={{
              x: step === 0 ? 100 : step === 1 ? 300 : 400,
              y: step === 0 ? 120 : step === 1 ? 120 : 280,
            }}
            transition={{ duration: 0.5 }}
            className="absolute pointer-events-none"
            style={{ top: 0, left: 0 }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M3 3L10.07 19.97L12.58 12.58L19.97 10.07L3 3Z" fill="#1877F2" stroke="white" strokeWidth="2" />
            </svg>
          </motion.div>
        )}
      </div>
    </div>
  );
}
