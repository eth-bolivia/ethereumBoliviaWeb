// components/progressive-onboarding.tsx

'use client';

import React, { useState } from 'react';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  FileText,
  Send,
  Users,
  Sparkles,
  UserPlus,
  ClipboardCheck,
  CheckCircle2, 
  ArrowLeft,
  ArrowRight,
} from 'lucide-react';
import { MakerCardPage } from './maker-card';
import { StepForm } from './step-form';
import { StepReady } from './step-ready';
import { StepShare } from './step-share';
import { StepJoinGroup } from './step-join-group';
import { StepTeam } from './step-team';

const stepsData = [
  {
    id: 'step-1',
    title: 'Registro',
    icon: <FileText className="h-5 w-5" />,
    contentTitle: 'Completa tu Registro',
    contentDescription:
      'Llena el formulario de inscripción con tus datos y sube el comprobante de pago para tu polera oficial.',
    contentElement: <StepForm/>
  },
  {
    id: 'step-2',
    title: 'Telegram',
    icon: <Send className="h-5 w-5" />,
    contentTitle: 'Únete a nuestro Canal de Telegram',
    contentDescription:
      'Es nuestro medio de comunicación principal para actualizaciones. ¡No te quedes fuera!',
    contentElement: <StepJoinGroup/>
  },
  {
    id: 'step-3',
    title: 'Equipo',
    icon: <Users className="h-5 w-5" />,
    contentTitle: 'Busca o Forma tu Equipo',
    contentDescription:
      'Usa el canal de Telegram para conectar con otros participantes y compartir tus habilidades.',
    contentElement: <StepTeam/>
  },
  {
    id: 'step-4',
    title: 'Celebra',
    icon: <Sparkles className="h-5 w-5" />,
    contentTitle: 'Diseña tu Tarjeta de Aceptación',
    contentDescription:
      'Comparte tu emoción en redes sociales con tu tarjeta personalizada. ¡Etiquétanos!',
    contentElement: <MakerCardPage/>
  },
  {
    id: 'step-5',
    title: 'Invita',
    icon: <UserPlus className="h-5 w-5" />,
    contentTitle: 'Invita a tus Amigos',
    contentDescription:
      'La experiencia es mejor acompañada. Comparte el enlace de registro con tus amigos.',
    contentElement: <StepShare/>
  },
  {
    id: 'step-6',
    title: 'Prepárate',
    icon: <ClipboardCheck className="h-5 w-5" />,
    contentTitle: 'Revisa la Información Final',
    contentDescription:
      'Confirma la agenda, la ubicación y lo que necesitas llevar para estar 100% listo.',
    contentElement: <StepReady/>
  },
];

export function HackerSteps() {
  
  const [activeStep, setActiveStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  const handleNext = () => {
    if (activeStep < stepsData.length - 1) {
      setCompletedSteps((prev) => [...new Set([...prev, activeStep])]);
      setActiveStep((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (activeStep > 0) {
      setActiveStep((prev) => prev - 1);
    }
  };

  return (
    <section className="w-full py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Bienvenido/a a la Buildathon de Ethereum Bolivia
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            ¡Ya estás dentro! Sigue esta guía paso a paso para prepararte.
          </p>
        </div>

        <Tabs
          value={stepsData[activeStep].id}
          onValueChange={(value) => {
            const newIndex = stepsData.findIndex((step) => step.id === value);
            setActiveStep(newIndex);
          }}
          className="max-w-4xl mx-auto"
        >
          <TabsList className="grid w-full grid-cols-3 md:grid-cols-6">
            {stepsData.map((step, index) => (
              <TabsTrigger key={step.id} value={step.id}>
                <div className="flex items-center gap-2">
                  {completedSteps.includes(index) ? (
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                  ) : (
                    step.icon
                  )}
                  <span className="hidden sm:inline">{step.title}</span>
                   
                </div>
              </TabsTrigger>
            ))}
          </TabsList>

          
          {stepsData.map((step) => (
            <TabsContent key={step.id} value={step.id}>
              <Card className="text-center mt-6">
                <CardHeader>
                  <CardTitle className="text-2xl">{step.contentTitle}</CardTitle>
                  <CardDescription className="text-base pt-2 leading-relaxed">
                    {step.contentDescription}
                    {step.contentElement}
                  </CardDescription>
                </CardHeader>
              </Card>
            </TabsContent>
          ))}
        </Tabs>

        
        <div className="max-w-4xl mx-auto mt-8 flex justify-between items-center">
          <Button
            onClick={handlePrevious}
            disabled={activeStep === 0}
            variant="outline"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Anterior
          </Button>
          
          <div className="text-sm text-muted-foreground">
            Paso {activeStep + 1} de {stepsData.length}
          </div>

          <Button onClick={handleNext} disabled={activeStep === stepsData.length - 1}>
            Siguiente
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}