import { Link } from 'react-router-dom';
import { getDailyRecipe, getTopRecipes } from '../data/mockData';
import RecipeCard from '../components/RecipeCard';
import ThreeHeroScene from '../components/ThreeHeroScene';

const dailyRecipe = getDailyRecipe();
const topRecipes = getTopRecipes();

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-stone-900 px-6 py-24 text-white sm:px-10 lg:px-16">
        <ThreeHeroScene />
        <div className="relative mx-auto flex max-w-7xl flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl space-y-6">
            <p className="text-sm uppercase tracking-[0.3em] text-amber-300">NaviEats for teens</p>
            <h1 className="text-5xl font-bold leading-tight tracking-tight sm:text-6xl">
              Learn cooking with energy, confidence, and recipes made just for you.
            </h1>
            <p className="max-w-xl text-base leading-8 text-stone-200 sm:text-lg">
              Explore quick meals, creative cooking guides, AI-powered pantry suggestions, and chef stories designed for new cooks and teen food lovers.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                to="/recipes"
                className="inline-flex items-center justify-center rounded-full bg-amber-400 px-8 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-300"
              >
                Browse recipes
              </Link>
              <Link
                to="/login"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-8 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
              >
                Join NaviEats
              </Link>
            </div>
          </div>
          <div className="rounded-[2.5rem] border border-white/10 bg-white/10 p-8 backdrop-blur-xl shadow-2xl shadow-slate-950/20 sm:w-[29rem]">
            <p className="text-sm uppercase tracking-[0.3em] text-amber-100">Recipe of the Day</p>
            <h2 className="mt-4 text-3xl font-bold text-white">{dailyRecipe.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-stone-200">{dailyRecipe.description}</p>
            <div className="mt-6 grid gap-3 text-sm text-stone-100 sm:grid-cols-2">
              <span className="rounded-3xl bg-white/10 px-4 py-3">{dailyRecipe.cuisine}</span>
              <span className="rounded-3xl bg-white/10 px-4 py-3">{dailyRecipe.difficulty}</span>
            </div>
            <Link to={`/recipes/${dailyRecipe.id}`} className="mt-6 inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-100">
              View recipe
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-16">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-amber-500">Top picks</p>
            <h2 className="mt-2 text-3xl font-bold text-stone-950">Top 3 most viewed recipes</h2>
          </div>
          <Link to="/recipes" className="text-sm font-semibold text-stone-700 transition hover:text-stone-900">
            Explore all recipes →
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {topRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 sm:px-10 lg:px-16">
        <div className="rounded-[2rem] border border-stone-200 bg-white p-8 shadow-sm">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-amber-500">Chef profiles</p>
              <h2 className="mt-2 text-3xl font-bold text-stone-950">Meet teen chefs who share recipes and kitchen stories.</h2>
            </div>
            <Link to="/chefs" className="inline-flex items-center justify-center rounded-full bg-amber-400 px-7 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-300">
              Explore chefs
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
