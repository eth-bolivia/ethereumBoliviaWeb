export interface EventType {
  id: number;
  created_at: string;
  title: string;
  date: string;
  time: string;
  place: string;
  city: string;
  imagenUrl: string;
  linktoRegister: string;
  isOnline: boolean;
  recap: string | null;  
}