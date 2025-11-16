'use client';

export default function LinkedInSequenceMockup() {
  return (
    <div className="w-full max-w-md mx-auto">
      <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
        {/* LinkedIn header */}
        <div className="bg-[#0A66C2] px-4 py-3 flex items-center gap-3">
          <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center">
            <span className="text-[#0A66C2] font-bold text-sm">in</span>
          </div>
          <span className="text-white text-sm font-medium">Messages</span>
        </div>

        {/* Conversation */}
        <div className="p-4 space-y-4 bg-gray-50 min-h-[300px]">
          {/* Day 1 - Connection request */}
          <div className="flex flex-col items-end">
            <div className="bg-[#0A66C2] text-white px-4 py-2 rounded-2xl rounded-tr-sm max-w-[85%] text-sm">
              <p className="font-medium mb-1">Demande de connexion</p>
              <p className="text-blue-100">
                Bonjour Sophie, j'ai vu votre post sur l'automatisation commerciale. Intéressant ! 🎯
              </p>
            </div>
            <span className="text-xs text-gray-400 mt-1">Jour 1 · Acceptée ✓</span>
          </div>

          {/* Day 2 - Follow-up */}
          <div className="flex flex-col items-end">
            <div className="bg-[#0A66C2] text-white px-4 py-2 rounded-2xl rounded-tr-sm max-w-[85%] text-sm">
              <p>
                Merci pour l'ajout Sophie ! Comment gérez-vous actuellement votre prospection B2B chez [Entreprise] ?
              </p>
            </div>
            <span className="text-xs text-gray-400 mt-1">Jour 2 · Envoyé</span>
          </div>

          {/* Day 5 - Value add */}
          <div className="flex flex-col items-end">
            <div className="bg-[#0A66C2] text-white px-4 py-2 rounded-2xl rounded-tr-sm max-w-[85%] text-sm">
              <p className="mb-2">
                J'ai pensé à vous en voyant ce cas client : +25 RDV/mois en prospection automatisée.
              </p>
              <div className="bg-white/10 rounded-lg p-2 text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-white/20 rounded"></div>
                  <div>
                    <p className="font-medium">Cas Client SaaS B2B</p>
                    <p className="text-blue-200">scalead.fr</p>
                  </div>
                </div>
              </div>
            </div>
            <span className="text-xs text-gray-400 mt-1">Jour 5 · Lu</span>
          </div>

          {/* Response */}
          <div className="flex flex-col items-start">
            <div className="bg-white px-4 py-2 rounded-2xl rounded-tl-sm max-w-[85%] text-sm border border-gray-200">
              <p className="text-gray-800">
                Intéressant ! Vous pouvez m'en dire plus sur votre approche ?
              </p>
            </div>
            <span className="text-xs text-gray-400 mt-1">Aujourd'hui · Réponse 🎉</span>
          </div>
        </div>

        {/* Stats bar */}
        <div className="bg-gradient-to-r from-blue-500 to-indigo-500 px-4 py-2">
          <div className="flex justify-between text-white text-xs font-medium">
            <span>35% Taux d'acceptation</span>
            <span>12% Taux de réponse</span>
          </div>
        </div>
      </div>
    </div>
  );
}
