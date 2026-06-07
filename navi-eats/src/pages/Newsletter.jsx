import { useState } from 'react';
import { supabase } from '../utils/supabase';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!email.trim()) return;
    setLoading(true);
    const { error } = await supabase.from('newsletter_subscribers').insert({ email });
    setStatus(error ? { type: 'error', message: error.message } : { type: 'success', message: 'Thanks! You’re signed up.' });
    setEmail('');
    setLoading(false);
  };

  return (
    <main className="mx-auto max-w-4xl px-6 py-20 sm:px-10 lg:px-16">
      <section className="rounded-[3rem] bg-gradient-to-r from-amber-400 via-amber-300 to-orange-400 p-10 text-white shadow-2xl shadow-amber-500/20">
        <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-white/80">Weekly news</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">Stay in the loop with teen-friendly food news, new recipes, and fun kitchen challenges.</h1>
            <p className="mt-4 max-w-xl text-base leading-8 text-white/90">Get weekly updates with new cooking ideas, events near you, and exclusive drops from NaviEats creators.</p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4 rounded-[2rem] bg-white/15 p-6 backdrop-blur-xl">
            <label className="block text-sm font-semibold uppercase tracking-[0.2em] text-white/90">Email address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full rounded-full border border-white/30 bg-white/20 px-5 py-4 text-sm text-white outline-none placeholder:text-white/70 focus:border-white"
            />
            <button
              type="submit"
              disabled={loading}
              className="inline-flex w-full items-center justify-center rounded-full bg-slate-950 px-5 py-4 text-sm font-semibold text-white transition hover:bg-slate-900 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {loading ? 'Saving...' : 'Sign up'}
            </button>
            {status ? (
              <p className={`text-sm ${status.type === 'success' ? 'text-emerald-100' : 'text-rose-100'}`}>{status.message}</p>
            ) : null}
          </form>
        </div>
      </section>
    </main>
  );
}
