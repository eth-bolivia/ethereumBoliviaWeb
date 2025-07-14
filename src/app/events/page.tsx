// app/page.tsx
import { createClient } from '@/lib/supabase/server';
import EventCard from '@/components/events/event-card';

import { EventType } from '@/lib/supabase/typeEvents';

export default async function EventsPage() {
  const supabase = createClient();
  
  
  const { data: events, error } = await (await supabase)
    .from("events")
    .select('*')
    .order('date', { ascending: false });  

  if (error) {
    console.error('Error fetching events:', error);
    return (
      <main className="flex min-h-screen flex-col items-center justify-center p-24">
        <p className="text-red-500">Error al cargar los eventos. Intenta de nuevo más tarde.</p>
      </main>
    );
  }

  if (!events || events.length === 0) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center p-24">
        <p className="text-gray-500">No hay eventos programados por el momento.</p>
      </main>
    );
  }

  return (
    <section className="w-full py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Nuestros Eventos
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Nuestra ruta de 21 eventos previos para llegar a la Buildathon 2025.
          </p>
        </div>

        <div className="relative max-w-3xl mx-auto">
       
            <div className="space-y-2 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {events.map((event: EventType) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
 
        </div>
      </div>
    </section>
   
  );
}