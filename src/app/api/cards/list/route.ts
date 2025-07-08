// app/api/cards/list/route.ts
import { NextResponse } from 'next/server'; 
import { getCardImageUrls } from '@/lib/vercel-blob-storage';
 
export const dynamic = 'force-dynamic';
 
export async function GET() {
  try {
    const urls = await getCardImageUrls();
    return NextResponse.json({ urls });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Error desconocido';
    console.error('Error en API /api/cards/list:', errorMessage);
    return NextResponse.json({ error: 'Error interno del servidor al listar las imágenes.' }, { status: 500 });
  }
}