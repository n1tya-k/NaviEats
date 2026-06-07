import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../utils/supabase';

export default function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mode, setMode] = useState('login');
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setStatus(null);
    if (mode === 'login') {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) setStatus({ type: 'error', message: error.message });
      else navigate('/dashboard');
    } else {
      const { error } = await supabase.auth.signUp({ email, password });
      if (error) setStatus({ type: 'error', message: error.message });
      else setStatus({ type: 'success', message: 'Check your email to confirm your account.' });
    }
    setLoading(false);
  };

  return (
    <main className="flex min-h-[80vh] items-center justify-center bg-stone-50 px-6 py-16 sm:px-10">
      <div className="w-full max-w-xl rounded-[3rem] border border-stone-200 bg-white p-10 shadow-xl">
        <div className="mb-8 flex items-center justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-amber-500">Welcome to NaviEats</p>
            <h1 className="mt-3 text-3xl font-bold text-stone-950">{mode === 'login' ? 'Log in' : 'Create your account'}</h1>
          </div>
          <button
            onClick={() => setMode(mode === 'login' ? 'signup' : 'login')}
            className="rounded-full bg-stone-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-amber-500"
          >
            {mode === 'login' ? 'Sign up' : 'Log in'}
          </button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <label className="block text-sm text-stone-700">
            Email
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-3 w-full rounded-3xl border border-stone-200 bg-stone-50 px-5 py-4 text-sm text-stone-900 outline-none focus:border-amber-400"
            />
          </label>
          <label className="block text-sm text-stone-700">
            Password
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-3 w-full rounded-3xl border border-stone-200 bg-stone-50 px-5 py-4 text-sm text-stone-900 outline-none focus:border-amber-400"
            />
          </label>
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-full bg-amber-400 px-5 py-4 text-sm font-semibold text-slate-950 transition hover:bg-amber-300 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {loading ? 'Working...' : mode === 'login' ? 'Log in' : 'Create account'}
          </button>
          {status ? (
            <p className={`text-sm ${status.type === 'success' ? 'text-emerald-600' : 'text-rose-600'}`}>{status.message}</p>
          ) : null}
        </form>
      </div>
    </main>
  );
}
