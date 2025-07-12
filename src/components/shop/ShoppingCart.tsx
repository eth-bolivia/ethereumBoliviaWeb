// components/shop/ShoppingCart.tsx
'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ShoppingCart as CartIcon, Trash2, MessageCircle } from 'lucide-react';
import type { CartItem } from './types';
import { generateWhatsAppMessage } from '@/lib/whatsapp';

interface ShoppingCartProps {
  cart: CartItem[];
  onRemoveFromCart: (index: number) => void;
  whatsappNumber: string;
}

export function ShoppingCart({ cart, onRemoveFromCart, whatsappNumber }: ShoppingCartProps) {
  const total = cart.reduce((acc, item) => acc + item.currentPrice, 0);

  const handleWhatsAppCheckout = () => {
    const message = generateWhatsAppMessage(cart, total);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="sticky top-24">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CartIcon className="h-6 w-6" />
            Tu Carrito
          </CardTitle>
        </CardHeader>
        <CardContent>
          {cart.length === 0 ? (
            <p className="text-sm text-muted-foreground">Tu carrito está vacío.</p>
          ) : (
            <div className="space-y-4">
              {cart.map((item, index) => (
                <div key={index} className="flex justify-between items-center">
                  <div>
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-sm text-muted-foreground capitalize">
                      {/* Mostramos el extra seleccionado solo si existe */}
                      {item.selectedFeature && `${item.selectedFeature} - `} 
                      {item.currentPrice.toFixed(2)} Bs
                    </p>
 
                  </div>
                  <div className="flex items-center gap-2">
                    <p className="font-semibold">{(item.currentPrice).toFixed(2)} Bs</p>
                    <Button variant="ghost" size="icon" onClick={() => onRemoveFromCart(index)}>
                      <Trash2 className="h-4 w-4 text-destructive" />
                    </Button>
                  </div>
                </div>
              ))}
              <hr className="my-4" />
              <div className="flex justify-between font-bold text-lg">
                <p>Total:</p>
                <p>{total.toFixed(2)} Bs.</p>
              </div>
            </div>
          )}
        </CardContent>
        <CardFooter>
          <Button className="w-full" onClick={handleWhatsAppCheckout} disabled={cart.length === 0}>
            <MessageCircle className="h-5 w-5 mr-2" />
            Comprar por WhatsApp
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}