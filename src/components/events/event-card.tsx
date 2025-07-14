// app/components/EventCard.tsx
import Image from 'next/image';
import Link from 'next/link';
import { EventType } from '@/lib/supabase/typeEvents';
import { Calendar, MapPin, Ticket, Info } from 'lucide-react';

interface EventCardProps {
  event: EventType;
}

const formatEventDate = (dateString: string) => {
  const date = new Date(dateString);
  
  date.setUTCDate(date.getUTCDate() + 1); 
  return new Intl.DateTimeFormat('es-ES', {
    dateStyle: 'full',
  }).format(date);
};

export default function EventCard({ event }: EventCardProps) {
const today = new Date();
  today.setHours(0, 0, 0, 0);

  const eventDate = new Date(event.date);
  const isPastEvent = eventDate < today;
  return (
 <div 
  className={`
    flex flex-row md:flex-col overflow-hidden rounded-lg border dark:bg-muted-foreground/30 shadow-lg 
    transition-transform duration-300 hover:scale-105
    }
  `}
>
  <div className="relative flex-2 md:flex-none h-full w-full md:h-48 md:w-full">
    <Image
      src={event.imagenUrl}
      alt={`Imagen del evento ${event.title}`}
      fill
      className="object-cover" 
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
    />
  </div>

  <div className="flex flex-1 flex-col p-6">
    <h2 className="mb-2 text-sm font-bold text-gray-900 dark:text-white">{event.title}</h2>

    <div className="mb-4 space-y-2 text-sm text-gray-600 dark:text-gray-400">
      <div className="flex items-center">
        <Calendar className="mr-2 h-4 w-4 text-gray-500 dark:text-gray-400" />
        <span>{formatEventDate(event.date)}</span>
      </div> 
      <div className="flex flex-row items-center justify-self-auto">
        <MapPin className="mr-2 h-4 w-4 text-gray-500 dark:text-gray-400" />
        <span>{event.isOnline ? `Online vía ${event.place}` : `${event.place} -`}</span>
        <span className="bg-gray-400 dark:bg-gray-900 text-white rounded-xl px-2 ml-1">{event.isOnline ? `` : `${event.city}`}</span>
      </div>
        <div className="flex items-center">
            <Link
                href={event.linktoRegister}
                target="_blank"
                rel="noopener noreferrer" 
                className={`
                  flex-1  dark:text-gray-200 dark:hover:text-gray-900
                  ${isPastEvent 
                    ? 'text-gray-500 hover:text-gray-900 underline' 
                    : 'bg-gray-600 hover:bg-gray-700 rounded-xl px-2 py-2 no-underline '}
                `}
              >
                <div className='flex items-center justify-start '>
                  {isPastEvent ? <Info className="mr-2 h-4 w-4" /> : <Ticket className="mr-2 h-5 w-5" />}
                  <span>{isPastEvent ? 'Más Info' : 'Registrarse'}</span>
                </div>
              </Link>
        </div>
        <div className="flex items-center">
          
          {event.recap && (
            <Link
              href={event.recap}
              target="_blank"
              rel="noopener noreferrer"
              className=" underline text-gray-500 dark:text-gray-200 dark:hover:text-gray-900"
            >
            <div className='flex items-center justify-start'><Info className="mr-2 h-4 w-4" />
              Ver Recap
              </div>
            </Link>
          )}
        </div>
    </div>
        
    

   
  </div>
</div>
  );
}