'use client';

import { motion } from 'framer-motion';
import Card from '@/components/ui/Card';

export default function DashboardMockup() {
  const stats = [
    { label: 'Emails envoyés', value: '3 847', trend: '+12%' },
    { label: 'Taux d\'ouverture', value: '42%', trend: '+5%' },
    { label: 'Taux de réponse', value: '8.3%', trend: '+2%' },
    { label: 'RDV obtenus', value: '23', trend: '+18%' },
  ];

  const leads = [
    { name: 'Pierre Martin', company: 'TechCorp', status: 'Rendez-vous fixé', score: 95 },
    { name: 'Sophie Durant', company: 'InnovSAS', status: 'Réponse positive', score: 88 },
    { name: 'Marc Dubois', company: 'DigiSolutions', status: 'En discussion', score: 76 },
    { name: 'Julie Bernard', company: 'CloudServices', status: 'Réponse positive', score: 82 },
  ];

  return (
    <div className="relative">
      <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 border-2 border-gray-200 shadow-soft-lg">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h3 className="text-xl font-bold text-gray-900">Tableau de bord Campagne</h3>
            <p className="text-sm text-gray-600">Dernière mise à jour : il y a 5 min</p>
          </div>
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card padding="sm" className="bg-white">
                <div className="text-sm text-gray-600 mb-1">{stat.label}</div>
                <div className="flex items-end justify-between">
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-xs text-green-600 font-semibold">{stat.trend}</div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Leads Table */}
        <Card padding="sm" className="bg-white">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left text-sm font-semibold text-gray-700 py-3 px-4">Contact</th>
                  <th className="text-left text-sm font-semibold text-gray-700 py-3 px-4">Entreprise</th>
                  <th className="text-left text-sm font-semibold text-gray-700 py-3 px-4">Statut</th>
                  <th className="text-left text-sm font-semibold text-gray-700 py-3 px-4">Score</th>
                </tr>
              </thead>
              <tbody>
                {leads.map((lead, index) => (
                  <motion.tr
                    key={lead.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="border-b border-gray-100 hover:bg-gray-50"
                  >
                    <td className="py-3 px-4 text-sm text-gray-900">{lead.name}</td>
                    <td className="py-3 px-4 text-sm text-gray-600">{lead.company}</td>
                    <td className="py-3 px-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        {lead.status}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center">
                        <div className="w-16 bg-gray-200 rounded-full h-2 mr-2">
                          <div
                            className="bg-primary-500 h-2 rounded-full"
                            style={{ width: `${lead.score}%` }}
                          ></div>
                        </div>
                        <span className="text-sm text-gray-700">{lead.score}</span>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>

      {/* Decorative elements */}
      <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary-500 rounded-full opacity-10 blur-2xl"></div>
      <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-primary-500 rounded-full opacity-10 blur-2xl"></div>
    </div>
  );
}
