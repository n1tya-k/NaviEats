import { useState } from 'react';

export default function PantryAI() {
  const [ingredients, setIngredients] = useState('tomato, cheese, rice');
  const [cuisine, setCuisine] = useState('Any');
  const [difficulty, setDifficulty] = useState('Any');
  const [time, setTime] = useState('30');
  const [minRating, setMinRating] = useState('4');
  const [minLikes, setMinLikes] = useState('100');
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setError(null);
    setResults([]);

    try {
      const response = await fetch('/api/gemini', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: `You are PantryAI. Suggest three teen-friendly recipes matching these filters:\nIngredients: ${ingredients}.\nCuisine: ${cuisine}.\nDesired difficulty: ${difficulty}.\nMax cook time: ${time} minutes.\nMinimum rating: ${minRating}.\nMinimum likes: ${minLikes}.\nRespond as a JSON array with title, short description, and core ingredients.`,
        }),
      });

      const body = await response.json();
      if (!response.ok) throw new Error(body.error?.message || 'AI request failed');
      const content = body.result || body.output || body.choices?.[0]?.message?.content || JSON.stringify(body);
      const parsed = JSON.parse(content?.trim() || '[]');
      setResults(Array.isArray(parsed) ? parsed : [{ title: 'No suggestions found', description: content }]);
    } catch (err) {
      setError(err.message || 'Unable to generate suggestions.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="rounded-[2rem] border border-stone-200 bg-white/90 p-6 shadow-xl backdrop-blur-md">
      <div className="mb-5 flex items-center justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-stone-400">PantryAI</p>
          <h2 className="text-2xl font-bold text-stone-900">Find recipes with what you have</h2>
        </div>
        <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold uppercase text-amber-700">AI powered</span>
      </div>

      <form onSubmit={handleSubmit} className="grid gap-4 md:grid-cols-2">
        <label className="space-y-2 text-sm text-stone-700">
          Ingredients on hand
          <input
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            placeholder="eggs, spinach, chicken"
            className="w-full rounded-3xl border border-stone-200 bg-stone-50 px-4 py-3 text-sm text-stone-900 outline-none transition focus:border-amber-400"
          />
        </label>
        <label className="space-y-2 text-sm text-stone-700">
          Preferred cuisine
          <input
            value={cuisine}
            onChange={(e) => setCuisine(e.target.value)}
            placeholder="Any"
            className="w-full rounded-3xl border border-stone-200 bg-stone-50 px-4 py-3 text-sm text-stone-900 outline-none transition focus:border-amber-400"
          />
        </label>
        <label className="space-y-2 text-sm text-stone-700">
          Desired difficulty
          <select
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
            className="w-full rounded-3xl border border-stone-200 bg-stone-50 px-4 py-3 text-sm text-stone-900 outline-none transition focus:border-amber-400"
          >
            <option>Any</option>
            <option>Easy</option>
            <option>Medium</option>
            <option>Hard</option>
          </select>
        </label>
        <label className="space-y-2 text-sm text-stone-700">
          Max cook time (minutes)
          <input
            type="number"
            min="10"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="w-full rounded-3xl border border-stone-200 bg-stone-50 px-4 py-3 text-sm text-stone-900 outline-none transition focus:border-amber-400"
          />
        </label>
        <label className="space-y-2 text-sm text-stone-700">
          Minimum rating
          <input
            type="number"
            min="1"
            max="5"
            step="0.1"
            value={minRating}
            onChange={(e) => setMinRating(e.target.value)}
            className="w-full rounded-3xl border border-stone-200 bg-stone-50 px-4 py-3 text-sm text-stone-900 outline-none transition focus:border-amber-400"
          />
        </label>
        <label className="space-y-2 text-sm text-stone-700">
          Minimum likes
          <input
            type="number"
            min="0"
            value={minLikes}
            onChange={(e) => setMinLikes(e.target.value)}
            className="w-full rounded-3xl border border-stone-200 bg-stone-50 px-4 py-3 text-sm text-stone-900 outline-none transition focus:border-amber-400"
          />
        </label>
      </form>

      <button
        type="submit"
        onClick={handleSubmit}
        className="mt-5 inline-flex items-center justify-center rounded-full bg-stone-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-amber-500"
      >
        {isLoading ? 'Finding recipes...' : 'Generate suggestions'}
      </button>

      {error ? (
        <p className="mt-4 rounded-3xl bg-rose-50 px-4 py-3 text-sm text-rose-700">{error}</p>
      ) : null}

      <div className="mt-6 space-y-4">
        {results.map((item, index) => (
          <div key={index} className="rounded-3xl border border-stone-200 bg-stone-50 p-4">
            <h3 className="font-semibold text-stone-900">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-stone-600">{item.description}</p>
            {item.ingredients ? (
              <p className="mt-3 text-xs uppercase tracking-[0.2em] text-stone-500">Core ingredients: {item.ingredients}</p>
            ) : null}
          </div>
        ))}
      </div>
    </section>
  );
}
