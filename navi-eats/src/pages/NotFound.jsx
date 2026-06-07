import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-stone-50 px-6 py-16 sm:px-10">
      <div className="rounded-[2rem] border border-stone-200 bg-white p-10 text-center shadow-sm">
        <p className="text-sm uppercase tracking-[0.3em] text-amber-500">Page not found</p>
        <h1 className="mt-5 text-4xl font-bold text-stone-950">Looks like you took a wrong turn.</h1>
        <p className="mt-4 text-sm leading-7 text-stone-600">Let’s get you back to tasty recipes and cooking inspiration.</p>
        <Link to="/" className="mt-8 inline-flex rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-300">Return home</Link>
      </div>
    </main>
  );
}
