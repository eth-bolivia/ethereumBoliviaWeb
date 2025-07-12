// components/shop/MerchCard.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

import { ShoppingCart } from 'lucide-react';
import { ProductFeaturesSelect } from './ProductFeaturesSelect'; 
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'; 
import type { MerchItemData, CartItem } from './types';

interface MerchCardProps {
  item: MerchItemData;
  onAddToCart: (item: CartItem) => void;
}

export function MerchCard({ item, onAddToCart }: MerchCardProps) {
  const [selectedFeature, setSelectedFeature] = useState(''); 

  const currentPrice =  item.price ;
  const totalPrice = currentPrice;

  const handleAddToCart = () => {
    if (item.extra && item.extra.length > 0 && !selectedFeature) {
      alert('Por favor, selecciona una característica.');
      return;
    }
    onAddToCart({
      ...item,
      selectedFeature,
      currentPrice
    });
    // Podrías usar una notificación "toast" aquí en lugar de un alert.
    alert(`${item.name} ${selectedFeature} añadido al carrito.`);
  };
  const hasMultipleImages = item.imageUrl && item.imageUrl.length > 1; 

  return (
    <Card className="overflow-hidden">
       <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
      {/* Contenedor de la imagen o carrusel */}
      <div className="relative aspect-square w-full">
        {hasMultipleImages ? (
          // Si hay múltiples imágenes, renderiza el Carrusel
          <Carousel className="w-full h-full">
            <CarouselContent>
              {item.imageUrl.map((url, index) => (
                <CarouselItem key={index}>
                  <div className="relative w-full h-full aspect-square">
                    <Image
                      src={url}
                      alt={`${item.name} - Imagen ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            {/* Ocultamos los botones en pantallas pequeñas para un look más limpio */}
            <CarouselPrevious className="absolute left-2 hidden sm:inline-flex" />
            <CarouselNext className="absolute right-2 hidden sm:inline-flex" />
          </Carousel>
        ) : (
          // Si hay una o cero imágenes, muestra solo la primera (si existe)
          item.imageUrl && item.imageUrl.length > 0 && (
            <Image
              src={item.imageUrl[0]}
              alt={item.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          )
        )}
      </div>
     
 
        <div className="lg:col-span-2 p-6 flex flex-col justify-between">
        <div>
          <CardHeader className="p-0 ">
            <CardTitle>{item.name}</CardTitle>
            <CardDescription className="mt-2">{item.description}</CardDescription>
          </CardHeader>
           <CardContent className="pt-6 pl-0 flex-grow">
            
        
            <div className="mt-4 space-y-4">
               <ProductFeaturesSelect
                features={item.extra}
                selectedValue={selectedFeature}
                onValueChange={setSelectedFeature}
                className="mt-4"  
              />
            </div>
          </CardContent>
        </div>
          <CardFooter className="flex justify-between items-center  pl-0">
            <p className="text-2xl font-bold">{totalPrice.toFixed(2)} Bs</p>
            <Button onClick={handleAddToCart}
              disabled={item.extra?.length > 0 && !selectedFeature}>
              <ShoppingCart className="h-4 w-4 mr-2" />
              Añadir
            </Button>
          </CardFooter>
        </div>
      </div>

   

    </Card>
  );
}