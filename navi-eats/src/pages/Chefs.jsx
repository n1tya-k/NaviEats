import { chefProfiles, recipes as mockRecipes } from '../data/mockData';
import { Link } from 'react-router-dom';

export default function Chefs() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-16">
      <section className="rounded-[2rem] border border-stone-200 bg-white p-8 shadow-sm">
        <div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr] md:items-end">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-amber-500">Chefs</p>
            <h1 className="mt-3 text-3xl font-bold text-stone-950">Public creator profiles for teen kitchen leaders.</h1>
          </div>
          <p className="text-sm text-stone-600">Browse the creators who opted in to share recipes, stories, and kitchen tips.</p>
        </div>
      </section>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {chefProfiles.map((chef) => (
          <article key={chef.id} className="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm">
            <img src={chef.photo} alt={chef.name} className="h-48 w-full rounded-3xl object-cover" />
            <div className="mt-5">
              <h2 className="text-xl font-semibold text-stone-950">{chef.name}</h2>
              <p className="mt-3 text-sm leading-7 text-stone-600">{chef.bio}</p>
            </div>
            <div className="mt-6 space-y-3">
              <p className="text-xs uppercase tracking-[0.3em] text-stone-400">Recipes</p>
              {chef.recipeIds.map((recipeId) => {
                const recipe = mockRecipes.find((item) => item.id === recipeId);
                if (!recipe) return null;
                return (
                  <Link key={recipe.id} to={`/recipes/${recipe.id}`} className="block rounded-3xl bg-stone-50 px-4 py-3 text-sm text-stone-700 transition hover:bg-stone-100">
                    {recipe.title}
                  </Link>
                );
              })}
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
