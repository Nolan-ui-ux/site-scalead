'use client';

export default function MultichannelFlowMockup() {
  return (
    <div className="w-full max-w-md mx-auto">
      <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-3">
          <div className="flex items-center gap-2 text-white">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
              <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
            </svg>
            <span className="text-sm font-medium">Séquence Multicanale - Jour 1-14</span>
          </div>
        </div>

        {/* Timeline */}
        <div className="p-6">
          <div className="space-y-4">
            {/* Day 1 - Email */}
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <div className="w-0.5 h-12 bg-gray-200"></div>
              </div>
              <div className="flex-1 pt-2">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-semibold text-gray-900">Jour 1 - Email #1</span>
                  <span className="text-xs text-gray-500">Envoyé ✓</span>
                </div>
                <p className="text-xs text-gray-600">Introduction + valeur</p>
                <div className="mt-2 bg-blue-50 rounded px-2 py-1 text-xs text-blue-700">
                  Taux d'ouverture: 48%
                </div>
              </div>
            </div>

            {/* Day 2 - LinkedIn */}
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-[#0A66C2]/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-[#0A66C2] font-bold text-xs">in</span>
                </div>
                <div className="w-0.5 h-12 bg-gray-200"></div>
              </div>
              <div className="flex-1 pt-2">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-semibold text-gray-900">Jour 2 - LinkedIn</span>
                  <span className="text-xs text-gray-500">Envoyé ✓</span>
                </div>
                <p className="text-xs text-gray-600">Demande de connexion personnalisée</p>
                <div className="mt-2 bg-blue-50 rounded px-2 py-1 text-xs text-blue-700">
                  Acceptation: 38%
                </div>
              </div>
            </div>

            {/* Day 5 - Email */}
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <div className="w-0.5 h-12 bg-gray-200"></div>
              </div>
              <div className="flex-1 pt-2">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-semibold text-gray-900">Jour 5 - Email #2</span>
                  <span className="text-xs text-gray-500">En cours</span>
                </div>
                <p className="text-xs text-gray-600">Cas client + social proof</p>
              </div>
            </div>

            {/* Day 7 - LinkedIn */}
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-[#0A66C2]/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-[#0A66C2] font-bold text-xs">in</span>
                </div>
                <div className="w-0.5 h-12 bg-gray-200"></div>
              </div>
              <div className="flex-1 pt-2">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-semibold text-gray-900">Jour 7 - LinkedIn</span>
                  <span className="text-xs text-gray-500">Planifié</span>
                </div>
                <p className="text-xs text-gray-600">Message de suivi si connexion acceptée</p>
              </div>
            </div>

            {/* Day 10 - Email */}
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <div className="w-0.5 h-12 bg-gray-200"></div>
              </div>
              <div className="flex-1 pt-2">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-semibold text-gray-900">Jour 10 - Email #3</span>
                  <span className="text-xs text-gray-500">Planifié</span>
                </div>
                <p className="text-xs text-gray-600">Break-up email + dernière valeur</p>
              </div>
            </div>

            {/* Response */}
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <div className="flex-1 pt-2">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-semibold text-green-600">Réponse positive !</span>
                  <span className="text-xs text-green-600">✓ RDV pris</span>
                </div>
                <p className="text-xs text-gray-600">
                  &quot;Intéressant ! On peut discuter vendredi ?&quot;
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats footer */}
        <div className="border-t border-gray-200 bg-gradient-to-r from-green-50 to-emerald-50 px-6 py-3">
          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-600">Taux de réponse multicanal:</span>
            <span className="font-bold text-green-600">12.3%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
