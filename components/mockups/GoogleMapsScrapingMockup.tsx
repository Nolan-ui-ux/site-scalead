'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function GoogleMapsScrapingMockup() {
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
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 px-6 py-4">
          <div className="flex items-center gap-3">
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            <span className="text-white font-semibold">Google Maps Scraper</span>
          </div>
        </div>

        {/* Search Bar */}
        <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
          <motion.div
            animate={{
              scale: step === 0 ? 1.02 : 1,
              borderColor: step === 0 ? '#3B82F6' : '#E5E7EB',
            }}
            className="bg-white rounded-lg px-4 py-3 border-2 flex items-center gap-3 transition-colors"
          >
            <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
            </svg>
            <input
              type="text"
              value="Plombier Lyon"
              readOnly
              className="flex-1 outline-none text-gray-900 font-medium"
            />
          </motion.div>
        </div>

        {/* Results */}
        <div className="grid md:grid-cols-2 divide-x divide-gray-200">
          {/* List */}
          <div className="p-4 space-y-3">
            {[
              { name: 'Plomberie Martin', rating: 4.8, city: 'Lyon 3ème' },
              { name: 'Dupont Sanitaire', rating: 4.6, city: 'Lyon 6ème' },
              { name: 'Aqua Services', rating: 4.9, city: 'Villeurbanne' },
            ].map((business, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{
                  opacity: step >= 1 ? 1 : 0.3,
                  x: step >= 1 ? 0 : -20,
                }}
                transition={{ delay: i * 0.1 }}
                className="bg-white border border-gray-200 rounded-lg p-3 hover:border-blue-500 transition-colors cursor-pointer"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 text-sm">{business.name}</h4>
                    <p className="text-xs text-gray-500 mt-1">{business.city}</p>
                  </div>
                  <div className="flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded">
                    <svg className="w-3 h-3 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-xs font-bold text-gray-900">{business.rating}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mini Map */}
          <div className="p-4 bg-gray-50 relative">
            <div className="absolute inset-4 bg-gradient-to-br from-blue-100 to-green-100 rounded-lg overflow-hidden">
              {/* Grid pattern */}
              <div className="absolute inset-0 opacity-20">
                <div className="grid grid-cols-8 grid-rows-8 h-full">
                  {[...Array(64)].map((_, i) => (
                    <div key={i} className="border border-gray-400"></div>
                  ))}
                </div>
              </div>
              {/* Markers */}
              {step >= 1 && (
                <>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="absolute top-1/4 left-1/3 w-6 h-6 bg-red-500 rounded-full border-4 border-white shadow-lg"
                  />
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3 }}
                    className="absolute top-1/2 left-1/2 w-6 h-6 bg-red-500 rounded-full border-4 border-white shadow-lg"
                  />
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.4 }}
                    className="absolute top-2/3 left-2/3 w-6 h-6 bg-red-500 rounded-full border-4 border-white shadow-lg"
                  />
                </>
              )}
            </div>
          </div>
        </div>

        {/* Export Button */}
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 text-center">
          <motion.button
            animate={{
              scale: step === 2 ? 1.05 : 1,
            }}
            className="px-8 py-3 bg-blue-500 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all"
          >
            Exporter {step >= 1 ? '247' : '0'} résultats
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
              <span className="text-sm font-semibold text-green-900">plombiers_lyon.csv</span>
            </div>
            <div className="p-4 overflow-x-auto">
              <table className="w-full text-xs">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-3 py-2 text-left font-semibold">Nom</th>
                    <th className="px-3 py-2 text-left font-semibold">Téléphone</th>
                    <th className="px-3 py-2 text-left font-semibold">Adresse</th>
                    <th className="px-3 py-2 text-left font-semibold">Note</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr>
                    <td className="px-3 py-2">Plomberie Martin</td>
                    <td className="px-3 py-2">04 78...</td>
                    <td className="px-3 py-2">Lyon 3ème</td>
                    <td className="px-3 py-2">4.8 ⭐</td>
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
