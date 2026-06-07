import { Link } from 'react-router-dom';

export default function About() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-20 sm:px-10 lg:px-16">
      <section className="rounded-[2rem] border border-stone-200 bg-white p-10 shadow-sm">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_0.8fr] lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-amber-500">About us</p>
            <h1 className="mt-4 text-4xl font-bold text-stone-950">NaviEats is made for teen cooks who want a fun, easy way to level up in the kitchen.</h1>
            <p className="mt-6 text-base leading-8 text-stone-600">We built NaviEats to make learning to cook feel like a creative hangout instead of a chore. Our goal is to give teens the confidence to make tasty meals, explore new flavors, and share their culinary stories with friends.</p>
          </div>
          <div className="space-y-5 rounded-[2rem] bg-amber-50 p-8 text-stone-900">
            <p className="font-semibold uppercase tracking-[0.2em] text-amber-700">Why NaviEats?</p>
            <ul className="space-y-4 text-sm leading-7">
              <li>• Recipes designed to be exciting and easy for beginner cooks.</li>
              <li>• AI-powered kitchen help that answers questions in real time.</li>
              <li>• A supportive space for teen creators to share meals and ideas.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mt-12 grid gap-8 lg:grid-cols-3">
        <article className="rounded-[2rem] border border-stone-200 bg-white p-8 shadow-sm">
          <h2 className="text-xl font-semibold text-stone-950">Our story</h2>
          <p className="mt-4 text-stone-600">We started NaviEats as a collection of recipes and tips that our own friends could actually use. Every feature is meant to help teens cook faster, smarter, and with more confidence.</p>
        </article>
        <article className="rounded-[2rem] border border-stone-200 bg-white p-8 shadow-sm">
          <h2 className="text-xl font-semibold text-stone-950">Community first</h2>
          <p className="mt-4 text-stone-600">Creators can share recipes, opt in to public chef profiles, and build a kitchen identity that feels personal and fun.</p>
        </article>
        <article className="rounded-[2rem] border border-stone-200 bg-white p-8 shadow-sm">
          <h2 className="text-xl font-semibold text-stone-950">Learning made easy</h2>
          <p className="mt-4 text-stone-600">From ingredient swaps to step-by-step guides, NaviEats simplifies cooking without losing the excitement.</p>
        </article>
      </section>

      <section className="mt-12 rounded-[2rem] border border-stone-200 bg-stone-50 p-10 shadow-sm">
        <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-amber-500">Meet the creators</p>
            <h2 className="mt-2 text-3xl font-bold text-stone-950">Designed by teens, for teens.</h2>
          </div>
          <div className="space-y-4 text-sm leading-7 text-stone-600">
            <p>We believe cooking should feel bold, playful, and totally accessible. That’s why NaviEats blends smart recipes with interactive tools—so every user can create something they’re proud of.</p>
            <Link to="/recipes" className="inline-flex items-center rounded-full bg-amber-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-300">Start cooking</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
