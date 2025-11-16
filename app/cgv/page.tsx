import Section from '@/components/ui/Section';
import Badge from '@/components/ui/Badge';

export default function CGVPage() {
  return (
    <>
      <Section className="pt-20" background="white">
        <div className="max-w-4xl mx-auto">
          <Badge variant="primary" className="mb-6">Conditions Générales de Vente</Badge>
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Conditions Générales de Vente</h1>

          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Article 1 - Objet</h2>
              <p>
                Les présentes Conditions Générales de Vente (CGV) régissent les relations contractuelles entre Scalead
                et ses clients dans le cadre de la fourniture de services de développement commercial B2B.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Article 2 - Services</h2>
              <p>Scalead propose les services suivants :</p>
              <ul>
                <li>Prospection commerciale B2B multicanale</li>
                <li>Cold emailing à grande échelle</li>
                <li>Automatisation LinkedIn</li>
                <li>Personnalisation IA des messages</li>
                <li>Génération de leads qualifiés</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Article 3 - Tarifs</h2>
              <p>
                Les tarifs de nos services sont établis sur devis personnalisé en fonction des besoins du client,
                du volume de prospection et de la complexité du projet.
              </p>
              <p>
                Les tarifs sont indiqués en euros hors taxes (HT). La TVA au taux en vigueur sera ajoutée au montant HT.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Article 4 - Modalités de Paiement</h2>
              <p>
                Le paiement s'effectue selon les modalités définies dans le devis accepté par le client.
                Les modes de paiement acceptés sont : virement bancaire, carte bancaire.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Article 5 - Durée et Résiliation</h2>
              <p>
                Les prestations sont fournies pour une durée déterminée précisée dans le contrat.
                Un préavis de 30 jours est requis pour toute résiliation anticipée.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Article 6 - Obligations du Client</h2>
              <p>Le client s'engage à :</p>
              <ul>
                <li>Fournir les informations nécessaires à la réalisation de la prestation</li>
                <li>Valider les éléments fournis par Scalead dans les délais convenus</li>
                <li>Respecter les modalités de paiement</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Article 7 - Responsabilité</h2>
              <p>
                Scalead s'engage à mettre en œuvre tous les moyens nécessaires pour atteindre les objectifs définis.
                Toutefois, les résultats dépendent également de facteurs externes (qualité de l'offre client, marché, etc.).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Article 8 - Données Personnelles</h2>
              <p>
                Scalead s'engage à respecter le RGPD et à protéger les données personnelles confiées par le client.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Article 9 - Droit Applicable</h2>
              <p>
                Les présentes CGV sont soumises au droit français. En cas de litige, les tribunaux français seront seuls compétents.
              </p>
            </section>
          </div>
        </div>
      </Section>
    </>
  );
}
