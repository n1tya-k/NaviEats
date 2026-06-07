import { useMemo, useState } from 'react';
import RecipeCard from '../components/RecipeCard';
import PantryAI from '../components/PantryAI';
import { recipes as availableRecipes } from '../data/mockData';

const filters = {
  spice: ['Any', 'Mild', 'Medium', 'Hot'],
  type: ['Any', 'Breakfast', 'Lunch', 'Dinner', 'Snack', 'Dessert', 'Brunch'],
  cuisine: ['Any', 'Asian', 'Mexican', 'American', 'Fusion', 'Dessert'],
  difficulty: ['Any', 'Easy', 'Medium', 'Hard'],
  time: ['Any', '15', '20', '25', '30', '45', '60'],
};

export default function Recipes() {
  const [query, setQuery] = useState('');
  const [selectedFilters, setSelectedFilters] = useState({
    spice: 'Any',
    type: 'Any',
    cuisine: 'Any',
    difficulty: 'Any',
    time: 'Any',
    rating: 'Any',
  });

  const filteredRecipes = useMemo(() => {
    return availableRecipes.filter((recipe) => {
      const matchesQuery = query.trim().length === 0 || recipe.title.toLowerCase().includes(query.toLowerCase()) || recipe.description.toLowerCase().includes(query.toLowerCase());
      const matchesSpice = selectedFilters.spice === 'Any' || recipe.spice === selectedFilters.spice;
      const matchesType = selectedFilters.type === 'Any' || recipe.type === selectedFilters.type;
      const matchesCuisine = selectedFilters.cuisine === 'Any' || recipe.cuisine === selectedFilters.cuisine;
      const matchesDifficulty = selectedFilters.difficulty === 'Any' || recipe.difficulty === selectedFilters.difficulty;
      const matchesTime = selectedFilters.time === 'Any' || recipe.cookTime <= Number(selectedFilters.time);
      const matchesRating = selectedFilters.rating === 'Any' || recipe.rating >= Number(selectedFilters.rating);
      return matchesQuery && matchesSpice && matchesType && matchesCuisine && matchesDifficulty && matchesTime && matchesRating;
    });
  }, [query, selectedFilters]);

  return (
    <main className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-16">
      <div className="grid gap-10 lg:grid-cols-[320px_1fr]">
        <aside className="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm">
          <p className="text-sm uppercase tracking-[0.3em] text-amber-500">Filter recipes</p>
          <div className="mt-6 space-y-5">
            {Object.entries(filters).map(([key, options]) => (
              <label key={key} className="grid gap-2 text-sm text-stone-700">
                <span className="font-semibold text-stone-900">{key === 'time' ? 'Time to cook' : key.charAt(0).toUpperCase() + key.slice(1)}</span>
                <select
                  value={selectedFilters[key]}
                  onChange={(e) => setSelectedFilters((prev) => ({ ...prev, [key]: e.target.value }))}
                  className="rounded-3xl border border-stone-200 bg-stone-50 px-4 py-3 text-sm outline-none transition focus:border-amber-400"
                >
                  {options.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </label>
            ))}
            <label className="grid gap-2 text-sm text-stone-700">
              <span className="font-semibold text-stone-900">Minimum rating</span>
              <input
                type="range"
                min="1"
                max="5"
                step="0.5"
                value={selectedFilters.rating}
                onChange={(e) => setSelectedFilters((prev) => ({ ...prev, rating: e.target.value }))}
                className="w-full"
              />
              <span className="text-xs text-stone-500">{selectedFilters.rating === 'Any' ? 'Any' : `${selectedFilters.rating} ★`}</span>
            </label>
          </div>
        </aside>

        <section className="space-y-8">
          <div className="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-amber-500">Recipe directory</p>
                <h1 className="mt-2 text-3xl font-bold text-stone-950">Explore new dishes and filter your next meal.</h1>
              </div>
              <p className="text-sm text-stone-600">{filteredRecipes.length} recipes match your search.</p>
            </div>
            <label className="mt-6 block text-sm text-stone-700">
              <span className="sr-only">Search recipes</span>
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for tacos, smoothie bowls, ramen..."
                className="w-full rounded-full border border-stone-200 bg-stone-50 px-5 py-4 text-sm text-stone-900 outline-none transition focus:border-amber-400"
              />
            </label>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {filteredRecipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
            {filteredRecipes.length === 0 ? (
              <p className="col-span-full rounded-[2rem] border border-dashed border-stone-300 bg-stone-50 p-8 text-center text-stone-500">No recipes found. Try a different filter or search word.</p>
            ) : null}
          </div>

          <PantryAI />
        </section>
      </div>
    </main>
  );
}
