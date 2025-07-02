// components/progressive-onboarding.tsx

'use client';

import React, { useState } from 'react';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  FileText,
  Send, 
  Sparkles, 
  ClipboardCheck,
  CheckCircle2, 
  ArrowLeft,
  ArrowRight,
} from 'lucide-react';
import { MakerCardPage } from './maker-card';
import { StepForm } from './step-form';
import { StepReady } from './step-ready'; 
import { StepJoinGroup } from './step-join-group'; 

const stepsData = [
  {
    id: 'step-1',
    title: 'Registro',
    icon: <FileText className="h-5 w-5" />,
    contentTitle: 'Completa tu Registro',
    contentDescription:
      'Llena el formulario de inscripción con tus datos y sube el comprobante de pago para tu polera oficial. Si ya lo completaste, click en Siguiente.',
    contentElement: <StepForm/>
  },
  {
    id: 'step-2',
    title: 'Mail',
    icon: <Send className="h-5 w-5" />,
    contentTitle: 'Revisa tu bandera de entrada',
    contentDescription:
      'Si no te llegó el mail de confirmación puedes escribirnos por WhatsApp al +591 69131888.',
    contentElement: <StepJoinGroup/>
  },
  {
    id: 'step-3',
    title: 'Celebra',
    icon: <Sparkles className="h-5 w-5" />,
    contentTitle: 'Diseña tu Tarjeta de Aceptación',
    contentDescription:
      'Comparte tu emoción en redes sociales con tu tarjeta personalizada. ¡Etiquétanos!',
    contentElement: <MakerCardPage/>
  },
  {
    id: 'step-4',
    title: 'Prepárate',
    icon: <ClipboardCheck className="h-5 w-5" />,
    contentTitle: 'Tu Kit de Supervivencia para la Buildathon',
    contentDescription:
      '¡Prepárate para 48 horas de creatividad, código y camaradería! Para que tu única preocupación sea construir algo increíble, hemos preparado esta checklist con todo lo que necesitas para sobrevivir y prosperar.',
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
          className="max-w-5xl mx-auto"
        >
          <TabsList className="grid w-full grid-cols-4 md:grid-cols-4 ">
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
                    
                  </CardDescription>
                  <CardContent className="p-0">
                    {step.contentElement}
                  </CardContent>
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