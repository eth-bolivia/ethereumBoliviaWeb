// app/api/cards/list/route.ts

import { list } from '@vercel/blob';
import { NextResponse } from 'next/server';

// Exportamos esta función para poder llamarla directamente desde Server Components
export async function getCardImageUrls() {
  const { blobs } = await list({
    prefix: 'api/cards/', // Filtra para obtener solo archivos de esta "carpeta"
  });
  
  // Devuelve solo las URLs que son imágenes
  const allowedExtensions = ['.png', '.jpg', '.jpeg'];
  return blobs
    .filter(blob => allowedExtensions.some(ext => blob.pathname.toLowerCase().endsWith(ext)))
    .map(blob => blob.url);
}

// El endpoint de la API
export async function GET() {
  try {
    const urls = await getCardImageUrls();
    return NextResponse.json({ urls });
  } catch (error) {
    return NextResponse.json({ error: `Error al listar las imágenes ${error}` }, { status: 500 });
  }
}