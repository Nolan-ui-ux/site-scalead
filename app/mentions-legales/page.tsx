import Section from '@/components/ui/Section';
import Badge from '@/components/ui/Badge';

export default function MentionsLegalesPage() {
  return (
    <>
      <Section className="pt-20" background="white">
        <div className="max-w-4xl mx-auto">
          <Badge variant="primary" className="mb-6">Mentions Légales</Badge>
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Mentions Légales</h1>

          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Éditeur du Site</h2>
              <p>
                <strong>Scalead</strong><br />
                [Forme juridique]<br />
                Capital social : [Montant]<br />
                Siège social : [Adresse complète]<br />
                RCS : [Ville] [Numéro]<br />
                SIRET : [Numéro]<br />
                TVA intracommunautaire : [Numéro]
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Directeur de la Publication</h2>
              <p>[Nom du directeur de publication]</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Hébergement</h2>
              <p>
                Ce site est hébergé par :<br />
                [Nom de l\'hébergeur]<br />
                [Adresse de l\'hébergeur]
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact</h2>
              <p>
                Email : contact@scalead.fr<br />
                Téléphone : [Numéro]
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Propriété Intellectuelle</h2>
              <p>
                L'ensemble du contenu de ce site (textes, images, vidéos, etc.) est la propriété exclusive de Scalead
                et est protégé par les lois françaises et internationales relatives à la propriété intellectuelle.
              </p>
              <p>
                Toute reproduction, distribution, modification, adaptation, retransmission ou publication de ces différents
                éléments est strictement interdite sans l'accord exprès par écrit de Scalead.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Données Personnelles</h2>
              <p>
                Les informations recueillies sur ce site font l'objet d'un traitement informatique destiné à la gestion
                de la relation client. Conformément au RGPD et à la loi Informatique et Libertés, vous disposez d'un
                droit d'accès, de rectification et de suppression de vos données personnelles.
              </p>
              <p>
                Pour exercer ce droit, vous pouvez nous contacter à : contact@scalead.fr
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies</h2>
              <p>
                Ce site utilise des cookies pour améliorer l'expérience utilisateur et analyser le trafic.
                En poursuivant votre navigation, vous acceptez l'utilisation de ces cookies.
              </p>
            </section>
          </div>
        </div>
      </Section>
    </>
  );
}
