 
import { list } from '@vercel/blob';
 
export async function getCardImageUrls(): Promise<string[]> {
  const { blobs } = await list({
    
    prefix: 'api/cards/', 
  });

  const allowedExtensions = ['.png', '.jpg', '.jpeg'];
  
  const imageUrls = blobs
    .filter(blob => 
      allowedExtensions.some(ext => blob.pathname.toLowerCase().endsWith(ext))
    )
    .map(blob => blob.url);
    
  return imageUrls;
}
 