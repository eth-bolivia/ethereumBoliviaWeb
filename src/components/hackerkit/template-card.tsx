// components/TemplateCard.tsx
'use client';

import Image from 'next/image';
import React  from 'react'; 

import "./card.css";

interface CardProps {
  name: string;
  xHandle: string;
  photo: string | null;
  variant?: 'responsive' | 'download';
}

const styleVariants = {
  // Estilos para la tarjeta visible y responsiva
  responsive: {
    buildathon: 'text-[10px] opacity-80',
    hacker: 'text-sm',
    pass: 'text-[10px] opacity-80',
    photoContainer: ' w-20 h-20',
    name: 'text-sm font-bold',
    handle: 'text-[10px] opacity-80',
    logoContainer: ' m-[-12px]',
    logo: { width: 80, height: 70 },
  },
  // Estilos FIJOS y de ALTA CALIDAD para la descarga
  download: {
    buildathon: 'text-[10px] opacity-80',
    hacker: 'text-sm',
    pass: 'text-[10px] opacity-80',
    photoContainer: ' w-20 h-20',
    name: 'text-sm font-bold',
    handle: 'text-[10px] opacity-80',
    logoContainer: ' m-[-12px]',
    logo: { width: 80, height: 70 },
  }
}; 

const TemplateCard = React.forwardRef<HTMLDivElement, CardProps>(({ name, xHandle, photo, variant = 'responsive' }, ref) => {
  const styles = styleVariants[variant];
  
  return (
    <div ref={ref} className="h-[300px] w-[300px] flex items-center justify-center bg-[#171717]">
      <div className="e-card playing">
        <div className="image"></div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="infotop ">
          <p className={styles.buildathon}>Buildathon 2025</p>
          <p className={styles.hacker}>HACKER</p>
          <p className={styles.pass}>Pase directo a hackear</p>
          <div className="flex pt-3 justify-center ">
            <div className={`relative ${styles.photoContainer} rounded-full bg-white/30 border-2 border-white/50 overflow-hidden`}>
              {photo && (
                <Image src={photo} alt="User photo" fill className="object-cover" />
              )}
            </div>
          </div>
          <div>
            <h3 className={styles.name}>{name}</h3>
            <p className={styles.handle}>{xHandle}</p>
            
          </div>
          <div className={`flex justify-center ${styles.logoContainer}`}>
            <Image width={styles.logo.width} height={styles.logo.height} src="/eth.png" alt="logo"  />
          </div>
          
        </div>
        
      </div>
    </div> 
  );
});

TemplateCard.displayName = 'Card';  
export default TemplateCard;