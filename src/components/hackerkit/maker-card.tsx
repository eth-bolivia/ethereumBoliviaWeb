'use client';

import { useState, useRef } from 'react';
import { toPng } from 'html-to-image';
import TemplateCard from './template-card';
import { Button } from '@/components/ui/button'; // Usamos el botón de Shadcn para consistencia

export function MakerCardPage() { // Renombrado para ser un componente de página
  const [name, setName] = useState('Tu Nombre');
  const [xHandle, setXHandle] = useState('@tu_usuario_x');
  const [photo, setPhoto] = useState<string | null>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhoto(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setPhoto(null);
    }
  };

  const handleDownload = () => {
    if (cardRef.current === null) return;
    
    toPng(cardRef.current, { 
      cacheBust: true,
      pixelRatio: 2, // <-- CLAVE: Aumenta la resolución de la imagen descargada x2
    })
      .then((dataUrl) => {
        const link = document.createElement('a');
        link.download = `buildathon-card-${name.replace(/\s+/g, '-').toLowerCase()}.png`;
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.error('¡Oops, algo salió mal!', err);
      });
  };

  return (
    <div className="container mx-auto py-12">
      <div className="flex flex-col items-center justify-center gap-8 xl:flex-row xl:items-start">
        {/* Área de Vista Previa */}
        <div className="">
          <TemplateCard ref={cardRef} name={name} xHandle={xHandle} photo={photo} />
        </div>

        {/* Panel de Controles */}
        <div className="w-full max-w-md rounded-xl border bg-card p-6 text-card-foreground shadow-sm">
          <h4 className="text-xl font-bold mb-6">Personaliza tu Tarjeta</h4>
          <div className="space-y-4">
            <div className="grid w-full items-center gap-1.5">
              <label htmlFor="name" className="text-sm font-medium">Nombre</label>
              <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm" />
            </div>
            <div className="grid w-full items-center gap-1.5">
              <label htmlFor="xhandle" className="text-sm font-medium">Usuario de X/Twitter</label>
              <input type="text" id="xhandle" value={xHandle} onChange={(e) => setXHandle(e.target.value)} className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm" />
            </div>
            <div className="grid w-full items-center gap-1.5">
              <label htmlFor="photo" className="text-sm font-medium">Tu Foto</label>
              <input type="file" accept="image/png, image/jpeg" id="photo" onChange={handlePhotoUpload} className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium" />
            </div>
          </div>
          <Button onClick={handleDownload} className="w-full mt-8">
            Descargar PNG
          </Button>
        </div>
      </div>
    </div>
  );
}