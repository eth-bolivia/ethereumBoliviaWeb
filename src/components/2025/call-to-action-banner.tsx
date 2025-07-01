// components/call-to-action-banner.tsx

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function CallToActionBanner() {
  return (
    <div className="bg-muted/40 text-primary-foreground">
      <div className="container mx-auto px-4 py-4 sm:px-6">
        <div className="flex flex-col items-center justify-center gap-4 text-center sm:flex-row sm:text-left">
          <h3 className="text-xl text-white font-bold tracking-tight md:text-2xl">
            ¿Listo para construir el futuro?
          </h3>
          
          <Link href="#convocatorias" passHref>
            <Button 
              variant="secondary" 
              size="lg" 
              className="flex-shrink-0 w-full sm:w-auto bg-muted/100 "
            >
              Inscríbete en la Buildathon 2025
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}