import { useEffect, useState } from 'react';
import { nearbyEvents } from '../data/mockData';

export default function Events() {
  const [query, setQuery] = useState('Your city or ZIP');
  const [events, setEvents] = useState(nearbyEvents);
  const [status, setStatus] = useState('Showing nearby events based on your search.');

  useEffect(() => {
    if (!query || query === 'Your city or ZIP') return;
    setStatus(`Showing events near ${query}.`);
  }, [query]);

  return (
    <main className="mx-auto max-w-6xl px-6 py-16 sm:px-10 lg:px-16">
      <section className="rounded-[2rem] border border-stone-200 bg-white p-8 shadow-sm">
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-amber-500">Events</p>
            <h1 className="mt-2 text-3xl font-bold text-stone-950">Find nearby culinary events for teen cooks.</h1>
            <p className="mt-4 text-stone-600">Enter your location or ZIP code to explore food festivals, workshops, and local kitchen happenings.</p>
          </div>
          <div className="rounded-[2rem] bg-stone-50 p-6">
            <label className="block text-sm font-semibold text-stone-700">Location</label>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="mt-3 w-full rounded-full border border-stone-300 bg-white px-5 py-3 text-sm text-stone-900 outline-none"
            />
            <p className="mt-3 text-sm text-stone-500">Example: 94103, Portland, or Austin TX</p>
          </div>
        </div>
      </section>

      <div className="mt-10 space-y-6">
        <div className="rounded-[2rem] bg-amber-50 p-6 text-sm text-stone-700 shadow-sm">
          {status}
        </div>
        {events.map((event) => (
          <article key={event.id} className="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-2xl font-semibold text-stone-950">{event.title}</h2>
                <p className="mt-2 text-sm text-stone-600">{event.location} • {event.date}</p>
              </div>
              <a href={event.url} className="inline-flex items-center rounded-full bg-amber-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-300">
                Learn more
              </a>
            </div>
            <p className="mt-4 text-stone-700">{event.description}</p>
          </article>
        ))}
      </div>
    </main>
  );
}
