// components/TemplateCard.tsx
'use client';

import Image from 'next/image';
import React  from 'react'; 

import "./card.css";

interface CardProps {
  name: string;
  xHandle: string;
  photo: string | null;
}
 
const TemplateCard = React.forwardRef<HTMLDivElement, CardProps>(({ name, xHandle, photo }, ref) => {
  
  return (
    <div ref={ref} className="h-[360px] w-[360px] flex items-center justify-center bg-gray">
      <div className="e-card playing">
        <div className="image"></div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="infotop ">
          <p className="text-[10px] opacity-80">Buildathon 2025</p>
          <p className="text-sm">HACKER</p>
          <p className="text-[10px] opacity-80">Pase directo a hackear</p>
          <div className="flex pt-3 justify-center ">
            <div className="relative w-20 h-20 rounded-full bg-white/30 border-2 border-white/50 overflow-hidden">
              {photo && (
                <Image src={photo} alt="User photo" fill className="object-cover" />
              )}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-bold">{name}</h3>
            <p className="text-[10px] opacity-80">{xHandle}</p>
            
          </div>
          <div className="flex justify-center m-[-12px]">
            <Image width={80} height={70} src="/eth.png" alt="logo"  />
          </div>
          
        </div>
        
      </div>
    </div> 
  );
});

TemplateCard.displayName = 'Card';  
export default TemplateCard;