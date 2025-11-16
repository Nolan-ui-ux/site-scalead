'use client';

export default function AIPersonalizationMockup() {
  return (
    <div className="w-full max-w-md mx-auto">
      <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-500 to-indigo-600 px-4 py-3">
          <div className="flex items-center gap-2 text-white">
            <div className="w-6 h-6 rounded-lg bg-white/20 flex items-center justify-center">
              <span className="text-xs font-bold">AI</span>
            </div>
            <span className="text-sm font-medium">Analyse IA en cours...</span>
          </div>
        </div>

        {/* Analysis steps */}
        <div className="p-6 space-y-4">
          {/* Step 1 */}
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-1">
              <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900">Site web analysé</p>
              <p className="text-xs text-gray-500 mt-1">
                Secteur: SaaS Marketing · Cible: PME B2B
              </p>
              <div className="mt-2 bg-blue-50 border-l-2 border-blue-400 px-3 py-2 rounded text-xs">
                💡 L'entreprise propose des outils d'automatisation marketing
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-1">
              <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900">Profil LinkedIn scanné</p>
              <p className="text-xs text-gray-500 mt-1">
                Sophie Martin · CMO · 8 ans d'expérience
              </p>
              <div className="mt-2 bg-purple-50 border-l-2 border-purple-400 px-3 py-2 rounded text-xs">
                💡 A récemment posté sur "L'importance des données en marketing"
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-1">
              <div className="w-3 h-3 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900">Génération du message</p>
              <p className="text-xs text-gray-500 mt-1">Personnalisation en cours...</p>
            </div>
          </div>

          {/* Generated output */}
          <div className="mt-4 pt-4 border-t border-gray-200">
            <p className="text-xs font-medium text-gray-500 mb-2">MESSAGE GÉNÉRÉ :</p>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-lg p-4">
              <p className="text-sm text-gray-800 leading-relaxed">
                <span className="font-semibold">Bonjour Sophie,</span>
                <br />
                <br />
                J'ai lu votre post sur l'importance des données en marketing - <span className="bg-yellow-100">totalement
                d'accord</span> !
                <br />
                <br />
                Chez [Client SaaS], nous les aidons à transformer leur data commercial en pipeline
                prévisible grâce à la prospection automatisée.
                <br />
                <br />
                15 min pour en discuter ?
              </p>
            </div>
          </div>

          {/* Personalization score */}
          <div className="flex items-center gap-2 pt-2">
            <span className="text-xs font-medium text-gray-600">Score de personnalisation:</span>
            <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-green-400 to-emerald-500 w-[94%]"></div>
            </div>
            <span className="text-xs font-bold text-green-600">94%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
