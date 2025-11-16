'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function TechScrapingMockup() {
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
        <div className="bg-gradient-to-r from-purple-500 to-indigo-600 px-6 py-4">
          <div className="flex items-center gap-3">
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            <span className="text-white font-semibold">Tech Stack Detector</span>
          </div>
        </div>

        {/* Filters */}
        <div className="px-6 py-4 bg-gray-50 border-b border-gray-200 space-y-3">
          <motion.div
            animate={{
              scale: step === 0 ? 1.02 : 1,
              borderColor: step === 0 ? '#8B5CF6' : '#E5E7EB',
            }}
            className="bg-white rounded-lg px-4 py-3 border-2 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs text-gray-500 mb-1">Technologie</div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-green-500 rounded flex items-center justify-center">
                    <span className="text-white text-xs font-bold">S</span>
                  </div>
                  <span className="text-sm font-medium text-gray-900">Shopify</span>
                </div>
              </div>
              <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
          </motion.div>

          <motion.div
            animate={{
              scale: step === 0 ? 1.02 : 1,
              borderColor: step === 0 ? '#8B5CF6' : '#E5E7EB',
            }}
            className="bg-white rounded-lg px-4 py-3 border-2 transition-colors"
          >
            <div className="text-xs text-gray-500 mb-1">Pays</div>
            <div className="text-sm font-medium text-gray-900">France</div>
          </motion.div>
        </div>

        {/* Results */}
        <div className="p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: step >= 1 ? 1 : 0.3 }}
            className="space-y-3"
          >
            {[
              { domain: 'monboutique.fr', traffic: '50K-100K', category: 'Mode' },
              { domain: 'techstore.fr', traffic: '100K-500K', category: 'Électronique' },
              { domain: 'beaute-shop.fr', traffic: '10K-50K', category: 'Beauté' },
              { domain: 'sport-premium.fr', traffic: '50K-100K', category: 'Sport' },
            ].map((site, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{
                  opacity: step >= 1 ? 1 : 0,
                  x: step >= 1 ? 0 : -20,
                }}
                transition={{ delay: i * 0.1 }}
                className="bg-white border border-gray-200 rounded-lg p-4 hover:border-purple-500 transition-colors"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 text-sm">{site.domain}</div>
                      <div className="text-xs text-gray-500">{site.category}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-medium">
                      {site.traffic}/mois
                    </div>
                    <div className="w-6 h-6 bg-green-500 rounded flex items-center justify-center">
                      <span className="text-white text-xs font-bold">S</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Export Button */}
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 text-center">
          <motion.button
            animate={{
              scale: step === 2 ? 1.05 : 1,
            }}
            className="px-8 py-3 bg-purple-500 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all"
          >
            Exporter {step >= 1 ? '1,247' : '0'} sites
          </motion.button>
        </div>

        {/* CSV Preview */}
        {step === 3 && (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="mx-6 mb-6 bg-white border-2 border-green-500 rounded-xl overflow-hidden"
          >
            <div className="bg-green-50 px-4 py-2 border-b border-green-200">
              <span className="text-sm font-semibold text-green-900">shopify_france.csv</span>
            </div>
            <div className="p-4 overflow-x-auto">
              <table className="w-full text-xs">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-3 py-2 text-left font-semibold">Domaine</th>
                    <th className="px-3 py-2 text-left font-semibold">CMS</th>
                    <th className="px-3 py-2 text-left font-semibold">Trafic</th>
                    <th className="px-3 py-2 text-left font-semibold">Email</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr>
                    <td className="px-3 py-2">monboutique.fr</td>
                    <td className="px-3 py-2">Shopify</td>
                    <td className="px-3 py-2">50K-100K</td>
                    <td className="px-3 py-2">contact@...</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2">techstore.fr</td>
                    <td className="px-3 py-2">Shopify</td>
                    <td className="px-3 py-2">100K-500K</td>
                    <td className="px-3 py-2">hello@...</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
