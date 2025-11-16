'use client';

import { motion } from 'framer-motion';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';

export default function ContactPage() {
  return (
    <>
      <Section className="pt-20" background="white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Badge variant="primary" className="mb-6">Contact</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Parlons de votre prospection
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Remplissez ce formulaire et nous vous recontacterons sous 24h.
            </p>
          </motion.div>
        </div>
      </Section>

      <Section background="gray">
        <div className="max-w-2xl mx-auto">
          <Card>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Input name="firstName" label="Prénom" required />
                <Input name="lastName" label="Nom" required />
              </div>
              <Input name="email" type="email" label="Email professionnel" required />
              <Input name="company" label="Entreprise" required />
              <Input name="phone" type="tel" label="Téléphone" />
              <Input name="message" label="Votre message" rows={5} required />

              <Button type="submit" variant="primary" className="w-full">
                Envoyer le Message
              </Button>
            </form>
          </Card>
        </div>
      </Section>
    </>
  );
}
