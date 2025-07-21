// app/shop/page.tsx
'use client';

import { useState } from 'react';
import { MerchCard } from '@/components/shop/MerchCard';
import { ShoppingCart } from '@/components/shop/ShoppingCart';
import type { CartItem } from '@/components/shop/types';
import { merchData } from '@/components/shop/data-merch';
 
const WHATSAPP_NUMBER = '59169131888'; 

export default function ShopPage() {
  const [cart, setCart] = useState<CartItem[]>([]);

  const handleAddToCart = (newItem: CartItem) => {
    setCart(prevCart => {
      const existingItemIndex = prevCart.findIndex(
        item => item.id === newItem.id && item.extra === newItem.extra
      );

      if (existingItemIndex > -1) {
        const updatedCart = [...prevCart]; 
        return updatedCart;
      } else {
        return [...prevCart, newItem];
      }
    });
  };

  const handleRemoveFromCart = (indexToRemove: number) => {
    setCart(cart.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight">Tienda Oficial</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Lleva un recuerdo de la Buildathon y apoya a la comunidad.
        </p>
        <p className="mt-4 text-lg text-muted-foreground">
          Recuerda que la entrega es en la Buildathon.
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
        {/* Columna de Productos */}
        <div className="lg:col-span-2 space-y-8">
          {merchData.map(item => (
            <MerchCard key={item.id} item={item} onAddToCart={handleAddToCart} />
          ))}
        </div>

        {/* Columna del Carrito */}
        <div className="lg:col-span-1 lg:sticky top-24">
          <ShoppingCart 
            cart={cart}
            onRemoveFromCart={handleRemoveFromCart}
            whatsappNumber={WHATSAPP_NUMBER}
          />
        </div>
      </div>
    </div>
  );
}