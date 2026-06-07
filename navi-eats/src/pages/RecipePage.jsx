import { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import ReviewSection from '../components/ReviewSection';
import { findRecipeById, recipes as mockRecipes } from '../data/mockData';
import { supabase } from '../utils/supabase';

export default function RecipePage() {
  const { recipeId } = useParams();
  const { session } = useAuth();
  const [recipe, setRecipe] = useState(null);
  const [aiAnswer, setAiAnswer] = useState('Ask me anything about this recipe.');
  const [question, setQuestion] = useState('How can I make this dish kid-friendly?');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function loadRecipe() {
      const { data, error } = await supabase.from('recipes').select('*').eq('id', recipeId).single();
      if (!error && data) {
        setRecipe(data);
      } else {
        setRecipe(findRecipeById(recipeId));
      }
    }
    loadRecipe();
  }, [recipeId]);

  const maxLikes = useMemo(() => recipe?.likes || 0, [recipe]);
  const reviewList = recipe?.reviews || recipe?.reviewData || (recipe ? recipe.reviews : []);

  const askAi = async () => {
    if (!question.trim()) return;
    setIsLoading(true);
    try {
      const res = await fetch('/api/gemini', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: `You are a cooking guide for teens. A user asks about the recipe titled ${recipe?.title}. Answer with friendly and clear advice based on the recipe's ingredients and steps. Question: ${question}`,
        }),
      });
      const body = await res.json();
      setAiAnswer(body.result || body.output || body.choices?.[0]?.message?.content || 'Sorry, I could not answer that.');
    } catch (err) {
      setAiAnswer('AI is having trouble right now. Try again soon.');
    } finally {
      setIsLoading(false);
    }
  };

  if (!recipe) {
    return (
      <div className="min-h-[70vh] bg-stone-50 px-6 py-20 sm:px-10 lg:px-16">
        <p className="text-center text-stone-500">Loading recipe...</p>
      </div>
    );
  }

  return (
    <main className="bg-stone-50 px-6 py-16 sm:px-10 lg:px-16">
      <section className="grid gap-8 lg:grid-cols-[1.4fr_0.9fr] lg:items-start">
        <div className="rounded-[2rem] bg-white p-8 shadow-sm">
          <img src={recipe.image} alt={recipe.title} className="h-80 w-full rounded-[1.5rem] object-cover" />
          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-stone-500">
            <span>{recipe.cuisine}</span>
            <span>•</span>
            <span>{recipe.difficulty}</span>
            <span>•</span>
            <span>{recipe.spice} spice</span>
          </div>
          <div className="mt-4 flex flex-wrap items-center gap-4">
            <h1 className="text-3xl font-bold text-stone-950">{recipe.title}</h1>
            <div className="rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-700">{recipe.rating?.toFixed(1) ?? '4.5'} ★</div>
          </div>
          <p className="mt-4 text-stone-600">{recipe.description}</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-3xl bg-stone-50 p-4 text-sm">
              <p className="text-sm uppercase tracking-[0.3em] text-stone-400">Likes</p>
              <p className="mt-2 text-xl font-semibold text-stone-900">{maxLikes}</p>
            </div>
            <div className="rounded-3xl bg-stone-50 p-4 text-sm">
              <p className="text-sm uppercase tracking-[0.3em] text-stone-400">Author</p>
              <p className="mt-2 text-xl font-semibold text-stone-900">{recipe.author}</p>
            </div>
            <div className="rounded-3xl bg-stone-50 p-4 text-sm">
              <p className="text-sm uppercase tracking-[0.3em] text-stone-400">Cook time</p>
              <p className="mt-2 text-xl font-semibold text-stone-900">{recipe.cookTime} min</p>
            </div>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_0.9fr]">
            <div className="rounded-[2rem] bg-stone-50 p-6">
              <h2 className="text-xl font-semibold text-stone-900">Ingredients</h2>
              <ul className="mt-4 space-y-3 text-stone-700">
                {recipe.ingredients.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-amber-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-[2rem] bg-stone-50 p-6">
              <h2 className="text-xl font-semibold text-stone-900">Directions</h2>
              <ol className="mt-4 space-y-4 text-stone-700">
                {recipe.steps.map((step, index) => (
                  <li key={index} className="rounded-3xl bg-white p-4 shadow-sm">
                    <span className="mb-2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-amber-100 text-sm font-semibold text-amber-700">{index + 1}</span>
                    <p>{step}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>

        <aside className="space-y-6">
          <div className="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-stone-950">Ask NaviEats AI</h2>
            <p className="mt-2 text-sm text-stone-600">Get recipe tips, substitutions, or help customizing this dish.</p>
            <label className="mt-5 block text-sm text-stone-700">
              <textarea
                rows="4"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                className="min-h-[110px] w-full rounded-3xl border border-stone-200 bg-stone-50 px-4 py-4 text-sm text-stone-900 outline-none transition focus:border-amber-400"
              />
            </label>
            <button
              onClick={askAi}
              className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-stone-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-amber-500"
            >
              {isLoading ? 'Thinking...' : 'Ask AI'}
            </button>
            <div className="mt-5 rounded-[2rem] bg-stone-50 p-4 text-sm leading-7 text-stone-700">
              <p className="font-semibold text-stone-900">AI answer</p>
              <p className="mt-3">{aiAnswer}</p>
            </div>
          </div>

          <ReviewSection reviews={reviewList ?? []} />

          <div className="rounded-[2rem] border border-amber-100 bg-amber-50 p-6 text-stone-950">
            <h3 className="text-lg font-semibold">Chef tip</h3>
            <p className="mt-3 text-sm leading-relaxed">
              Bookmark this dish to save it in your dashboard, and come back later to re-create it with friends.
            </p>
          </div>
        </aside>
      </section>
    </main>
  );
}
