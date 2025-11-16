'use client';

export default function AnalyticsDashboardMockup() {
  return (
    <div className="w-full max-w-lg mx-auto">
      <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
        {/* Dashboard Header */}
        <div className="bg-gray-900 px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-white font-semibold">Campagne Q1 2024</h3>
              <p className="text-gray-400 text-sm">Performance en temps réel</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
              <span className="text-green-400 text-xs font-medium">Live</span>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="p-6 grid grid-cols-2 gap-4">
          {/* Stat 1 */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4">
            <div className="text-xs font-medium text-blue-600 mb-1">Emails envoyés</div>
            <div className="text-2xl font-bold text-blue-900">4,247</div>
            <div className="flex items-center gap-1 mt-2 text-xs">
              <svg className="w-3 h-3 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-green-600 font-medium">+12%</span>
              <span className="text-gray-500">vs. mois dernier</span>
            </div>
          </div>

          {/* Stat 2 */}
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-4">
            <div className="text-xs font-medium text-purple-600 mb-1">Taux d'ouverture</div>
            <div className="text-2xl font-bold text-purple-900">47.3%</div>
            <div className="flex items-center gap-1 mt-2 text-xs">
              <svg className="w-3 h-3 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-green-600 font-medium">+5.2%</span>
            </div>
          </div>

          {/* Stat 3 */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-xl p-4">
            <div className="text-xs font-medium text-green-600 mb-1">Taux de réponse</div>
            <div className="text-2xl font-bold text-green-900">8.7%</div>
            <div className="flex items-center gap-1 mt-2 text-xs">
              <svg className="w-3 h-3 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-green-600 font-medium">+2.1%</span>
            </div>
          </div>

          {/* Stat 4 */}
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-4">
            <div className="text-xs font-medium text-orange-600 mb-1">RDV générés</div>
            <div className="text-2xl font-bold text-orange-900">23</div>
            <div className="flex items-center gap-1 mt-2 text-xs">
              <svg className="w-3 h-3 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-green-600 font-medium">+8 ce mois</span>
            </div>
          </div>
        </div>

        {/* Chart */}
        <div className="px-6 pb-6">
          <div className="bg-gray-50 rounded-xl p-4">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium text-gray-700">Progression hebdomadaire</span>
              <span className="text-xs text-gray-500">7 derniers jours</span>
            </div>
            {/* Simple bar chart */}
            <div className="flex items-end justify-between gap-2 h-32">
              {[45, 62, 58, 73, 69, 81, 87].map((height, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-1">
                  <div
                    className="w-full bg-gradient-to-t from-primary-500 to-primary-400 rounded-t-lg transition-all hover:from-primary-600 hover:to-primary-500"
                    style={{ height: `${height}%` }}
                  ></div>
                  <span className="text-xs text-gray-400">
                    {['L', 'M', 'M', 'J', 'V', 'S', 'D'][i]}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
