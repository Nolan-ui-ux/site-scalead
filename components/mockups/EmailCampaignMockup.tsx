'use client';

export default function EmailCampaignMockup() {
  return (
    <div className="w-full max-w-md mx-auto">
      <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
        {/* Email Header */}
        <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-red-400"></div>
            <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
            <div className="w-2 h-2 rounded-full bg-green-400"></div>
            <span className="text-xs text-gray-500 ml-2">Nouveau message</span>
          </div>
        </div>

        {/* Email Content */}
        <div className="p-6 space-y-4">
          {/* To Field */}
          <div className="flex items-center gap-2 text-sm">
            <span className="text-gray-500 font-medium">À:</span>
            <div className="flex-1 bg-blue-50 text-blue-600 px-3 py-1 rounded-md font-medium">
              pierre.martin@entreprise.fr
            </div>
          </div>

          {/* Subject */}
          <div className="flex items-center gap-2 text-sm">
            <span className="text-gray-500 font-medium">Objet:</span>
            <div className="flex-1 text-gray-700">
              Votre stratégie de prospection B2B
            </div>
          </div>

          <div className="border-t border-gray-200 pt-4 space-y-3">
            {/* Personalized greeting */}
            <div className="bg-blue-50 border-l-4 border-blue-400 p-3 rounded">
              <p className="text-sm text-gray-700">
                <span className="font-semibold text-blue-600">Bonjour Pierre,</span>
              </p>
            </div>

            {/* Body preview */}
            <div className="space-y-2 text-sm text-gray-600">
              <p className="leading-relaxed">
                J'ai remarqué que <span className="bg-yellow-100">votre entreprise recrute</span> un Business Developer...
              </p>
              <p className="leading-relaxed">
                Nous aidons des entreprises comme <span className="font-semibold text-gray-800">[Entreprise]</span> à générer...
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <div className="bg-primary-500 text-white px-4 py-2 rounded-lg text-sm font-medium inline-block">
                Discutons-en 15 min ?
              </div>
            </div>

            {/* Signature */}
            <div className="pt-3 border-t border-gray-100 text-xs text-gray-500">
              <p className="font-medium text-gray-700">Alexandre</p>
              <p>Scalead · Développement Commercial B2B</p>
            </div>
          </div>
        </div>

        {/* Stats overlay */}
        <div className="bg-gradient-to-r from-green-500 to-emerald-500 px-4 py-2">
          <div className="flex justify-between text-white text-xs font-medium">
            <span>✓ Personnalisé IA</span>
            <span>✓ Délivrabilité 98%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
