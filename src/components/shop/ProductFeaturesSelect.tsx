// src/components/ProductFeaturesSelect.tsx 

import * as React from 'react';
import { useId } from 'react'; 
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface ProductFeaturesSelectProps {
  features: string[]; 
  selectedValue: string;
  onValueChange: (value: string) => void;
  label?: string;
  placeholder?: string;
  className?: string;
}

export function ProductFeaturesSelect({
  features,
  selectedValue,
  onValueChange,
  label = "Características", 
  placeholder = "Selecciona una opción", 
  className = "",
}: ProductFeaturesSelectProps) {
  const selectId = useId();
  
  if (!features || features.length === 0) {
    return null; 
  }


  return (
    <div className={className}>
      <Label htmlFor={selectId} className="mb-2 block">
        {label}
      </Label>
      <Select value={selectedValue} onValueChange={onValueChange}>
        <SelectTrigger id={selectId}>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {features.map((feature) => (
         
            <SelectItem key={feature} value={feature}>
              {feature}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}