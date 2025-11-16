'use client';

import { motion } from 'framer-motion';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Input from '@/components/ui/Input';
import Select from '@/components/ui/Select';
import Button from '@/components/ui/Button';

export default function AuditGratuitPage() {
  return (
    <>
      <Section className="pt-20" background="white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Badge variant="primary" className="mb-6">Audit Gratuit</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Obtenez un audit gratuit de votre stratégie de prospection
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Remplissez ce questionnaire et recevez une analyse personnalisée de votre potentiel de prospection B2B.
            </p>
          </motion.div>
        </div>
      </Section>

      <Section background="gray">
        <div className="max-w-3xl mx-auto">
          <Card>
            <form className="space-y-8">
              {/* Informations personnelles */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Vos informations</h2>
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input name="firstName" label="Prénom" required />
                    <Input name="lastName" label="Nom" required />
                  </div>
                  <Input name="email" type="email" label="Email professionnel" required />
                  <Input name="phone" type="tel" label="Téléphone" required />
                </div>
              </div>

              {/* Entreprise */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Votre entreprise</h2>
                <div className="space-y-4">
                  <Input name="company" label="Nom de l'entreprise" required />
                  <Input name="website" type="url" label="Site web" required />
                  <Select
                    name="companySize"
                    label="Taille de l'entreprise"
                    required
                    options={[
                      { value: '1-10', label: '1-10 employés' },
                      { value: '11-50', label: '11-50 employés' },
                      { value: '51-200', label: '51-200 employés' },
                      { value: '201-500', label: '201-500 employés' },
                      { value: '500+', label: '500+ employés' },
                    ]}
                  />
                  <Input name="sector" label="Secteur d'activité" required />
                </div>
              </div>

              {/* Cible */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Votre cible</h2>
                <div className="space-y-4">
                  <Input name="targetProfile" label="Profil cible (ex: DRH, CEO, DSI...)" required />
                  <Input name="targetCompanySize" label="Taille entreprises cibles" required />
                  <Input name="targetSector" label="Secteurs cibles" required />
                  <Select
                    name="dealSize"
                    label="Ticket moyen"
                    required
                    options={[
                      { value: '<5k', label: '< 5k€' },
                      { value: '5-20k', label: '5-20k€' },
                      { value: '20-50k', label: '20-50k€' },
                      { value: '50-100k', label: '50-100k€' },
                      { value: '100k+', label: '100k€+' },
                    ]}
                  />
                </div>
              </div>

              {/* Prospection actuelle */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Votre prospection actuelle</h2>
                <div className="space-y-4">
                  <Select
                    name="currentProspecting"
                    label="Faites-vous déjà de la prospection outbound ?"
                    required
                    options={[
                      { value: 'non', label: 'Non, pas encore' },
                      { value: 'interne', label: 'Oui, en interne' },
                      { value: 'agence', label: 'Oui, avec une agence' },
                      { value: 'outils', label: 'Oui, avec des outils SaaS' },
                    ]}
                  />
                  <Input name="challenges" label="Vos principaux défis en prospection" rows={3} required />
                  <Input name="goals" label="Vos objectifs (ex: X RDV/mois)" required />
                </div>
              </div>

              {/* Budget */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Budget</h2>
                <Select
                  name="budget"
                  label="Budget mensuel envisagé pour la prospection"
                  required
                  options={[
                    { value: '<2k', label: '< 2 000€/mois' },
                    { value: '2-5k', label: '2 000 - 5 000€/mois' },
                    { value: '5-10k', label: '5 000 - 10 000€/mois' },
                    { value: '10k+', label: '10 000€+/mois' },
                  ]}
                />
              </div>

              <Button type="submit" variant="primary" size="lg" className="w-full">
                Recevoir Mon Audit Gratuit
              </Button>

              <p className="text-sm text-gray-600 text-center">
                Nous vous recontacterons sous 24h pour vous présenter votre audit personnalisé.
              </p>
            </form>
          </Card>
        </div>
      </Section>
    </>
  );
}
