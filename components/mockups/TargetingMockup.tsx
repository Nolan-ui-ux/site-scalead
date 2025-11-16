'use client';

export default function TargetingMockup() {
  return (
    <div className="w-full max-w-md mx-auto">
      <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 px-4 py-3">
          <div className="flex items-center gap-2 text-white">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-sm font-medium">Ciblage ICP - Sales Navigator</span>
          </div>
        </div>

        {/* Filters */}
        <div className="p-6 space-y-4">
          {/* Filter 1 */}
          <div className="space-y-2">
            <label className="text-xs font-medium text-gray-500 uppercase">Fonction</label>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">
                CEO
              </span>
              <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">
                CMO
              </span>
              <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">
                VP Sales
              </span>
            </div>
          </div>

          {/* Filter 2 */}
          <div className="space-y-2">
            <label className="text-xs font-medium text-gray-500 uppercase">Secteur</label>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                SaaS B2B
              </span>
              <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                Tech
              </span>
            </div>
          </div>

          {/* Filter 3 */}
          <div className="space-y-2">
            <label className="text-xs font-medium text-gray-500 uppercase">Taille entreprise</label>
            <div className="bg-gray-100 rounded-lg p-3 text-sm text-gray-700 font-medium">
              50 - 500 employés
            </div>
          </div>

          {/* Filter 4 */}
          <div className="space-y-2">
            <label className="text-xs font-medium text-gray-500 uppercase">Signaux d'intérêt</label>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium flex items-center gap-1">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                  <path
                    fillRule="evenodd"
                    d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                    clipRule="evenodd"
                  />
                </svg>
                Recrutement
              </span>
              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium flex items-center gap-1">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                </svg>
                Croissance
              </span>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="border-t border-gray-200 bg-gray-50 px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-2xl font-bold text-gray-900">2,847</p>
              <p className="text-sm text-gray-600">profils qualifiés trouvés</p>
            </div>
            <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-lg text-sm font-medium">
              Lancer la campagne
            </div>
          </div>
        </div>

        {/* Match score */}
        <div className="bg-gradient-to-r from-emerald-500 to-green-500 px-6 py-3">
          <div className="flex items-center justify-between text-white text-xs font-medium">
            <span>Score ICP moyen:</span>
            <div className="flex items-center gap-2">
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="w-1.5 h-4 bg-white/80 rounded-full"></div>
                ))}
              </div>
              <span className="font-bold">92%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
