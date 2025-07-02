
import React, { cloneElement, ReactNode, ReactElement } from 'react';

interface IconProps {
  className?: string;
}

interface InfoSectionProps {
  icon: ReactElement<IconProps>; 
  title: string;
  children: ReactNode;
}

export function InfoSection  ({ icon, title, children }: InfoSectionProps) {
  return (
    <section>
      <div className="flex items-center gap-3 m-8">
        <div className="bg-primary/10 p-3 rounded-full"> 
          {cloneElement(icon, { className: "h-6 w-6 text-primary" })}
        </div>
        <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>
      </div>
      {children}
    </section>
  );
};