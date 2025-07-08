// components/shop/MerchCard.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { ShoppingCart } from 'lucide-react';
import type { MerchItemData, CartItem } from './types';

interface MerchCardProps {
  item: MerchItemData;
  onAddToCart: (item: CartItem) => void;
}

export function MerchCard({ item, onAddToCart }: MerchCardProps) {
  const [size, setSize] = useState('M'); 

  const currentPrice =  item.price ;
  const totalPrice = currentPrice;

  const handleAddToCart = () => {
    onAddToCart({
      ...item,
      size,
      currentPrice
    });
    // Podrías usar una notificación "toast" aquí en lugar de un alert.
    alert(`${item.name} (Talla: ${size} añadido al carrito!`);
  };

  return (
    <Card className="overflow-hidden">
       <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
         
      <div className="lg:col-span-1 relative aspect-square lg:aspect-auto lg:h-full">
        <Image 
          src={item.imageUrl} 
          alt={item.name} 
          fill 
          className="object-cover"
        />
      </div>
        <div className="lg:col-span-2 p-6 flex flex-col justify-between">
        <div>
          <CardHeader className="p-0 ">
            <CardTitle>{item.name}</CardTitle>
            <CardDescription className="mt-2">{item.description}</CardDescription>
          </CardHeader>
           <CardContent className="pt-6 pl-0 flex-grow">
            
        
            <div className="mt-4 space-y-4">
              <div>
                <Label className="mb-2">Talla</Label>
                <Select value={size} onValueChange={setSize}>
                  <SelectTrigger><SelectValue placeholder="Selecciona una talla" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="S">S</SelectItem>
                    <SelectItem value="M">M</SelectItem>
                    <SelectItem value="L">L</SelectItem>
                  </SelectContent>
                </Select>
              </div>
          
              <div>

              </div>
            </div>
          </CardContent>
        </div>
          <CardFooter className="flex justify-between items-center  pl-0">
            <p className="text-2xl font-bold">{totalPrice.toFixed(2)} Bs</p>
            <Button onClick={handleAddToCart}>
              <ShoppingCart className="h-4 w-4 mr-2" />
              Añadir
            </Button>
          </CardFooter>
        </div>
      </div>

   

    </Card>
  );
}