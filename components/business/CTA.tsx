'use client';

import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

interface CTAProps {
  title: string;
  description: string;
  primaryButton?: {
    text: string;
    href: string;
  };
  secondaryButton?: {
    text: string;
    href: string;
  };
  variant?: 'default' | 'gradient';
}

export default function CTA({
  title,
  description,
  primaryButton,
  secondaryButton,
  variant = 'default',
}: CTAProps) {
  if (variant === 'gradient') {
    return (
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary-600 via-primary-500 to-primary-700 p-12 text-center shadow-soft-lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {title}
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {primaryButton && (
              <Button
                href={primaryButton.href}
                variant="secondary"
                size="lg"
                className="bg-white text-primary-600 hover:bg-gray-100"
              >
                {primaryButton.text}
              </Button>
            )}
            {secondaryButton && (
              <Button
                href={secondaryButton.href}
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/10"
              >
                {secondaryButton.text}
              </Button>
            )}
          </div>
        </motion.div>

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
      </div>
    );
  }

  return (
    <Card className="text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          {title}
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {primaryButton && (
            <Button href={primaryButton.href} variant="primary" size="lg">
              {primaryButton.text}
            </Button>
          )}
          {secondaryButton && (
            <Button href={secondaryButton.href} variant="outline" size="lg">
              {secondaryButton.text}
            </Button>
          )}
        </div>
      </motion.div>
    </Card>
  );
}
