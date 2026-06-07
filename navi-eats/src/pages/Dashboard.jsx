import { useEffect, useMemo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { supabase } from '../utils/supabase';
import { recipes as mockRecipes } from '../data/mockData';

export default function Dashboard() {
  const { session, authLoading } = useAuth();
  const [favorites, setFavorites] = useState([]);
  const [profilePrivate, setProfilePrivate] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!authLoading && !session) navigate('/login');
  }, [session, authLoading, navigate]);

  useEffect(() => {
    if (!session) return;
    const loadFavorites = async () => {
      const { data } = await supabase.from('saved_recipes').select('recipe_id').eq('user_id', session.user.id);
      if (data) {
        const recipeIds = data.map((row) => row.recipe_id);
        setFavorites(mockRecipes.filter((recipe) => recipeIds.includes(recipe.id)));
      }
    };
    loadFavorites();
  }, [session]);

  const toggleVisibility = async () => {
    setProfilePrivate((prev) => !prev);
    if (!session) return;
    await supabase.from('chef_profiles').upsert({ user_id: session.user.id, public: !profilePrivate }, { onConflict: 'user_id' });
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/');
  };

  const favoriteCount = useMemo(() => favorites.length, [favorites]);

  return (
    <main className="mx-auto max-w-6xl px-6 py-16 sm:px-10 lg:px-16">
      <div className="rounded-[2rem] border border-stone-200 bg-white p-10 shadow-sm">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-amber-500">Dashboard</p>
            <h1 className="mt-3 text-3xl font-bold text-stone-950">Welcome back, {session?.user?.email?.split('@')[0] || 'chef'}.</h1>
          </div>
          <button onClick={handleLogout} className="rounded-full bg-stone-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-amber-500">Log out</button>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <div className="rounded-[2rem] bg-amber-50 p-6">
            <p className="text-sm uppercase tracking-[0.3em] text-amber-700">Favorites</p>
            <p className="mt-3 text-4xl font-bold text-stone-950">{favoriteCount}</p>
            <p className="mt-2 text-sm text-stone-700">Recipes you bookmarked to cook again.</p>
          </div>
          <div className="rounded-[2rem] bg-stone-50 p-6">
            <p className="text-sm uppercase tracking-[0.3em] text-stone-500">Profile visibility</p>
            <p className="mt-3 text-sm text-stone-700">Toggle whether your chef profile is public to the NaviEats community.</p>
            <button onClick={toggleVisibility} className="mt-4 rounded-full bg-stone-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-amber-500">
              {profilePrivate ? 'Make public' : 'Make private'}
            </button>
          </div>
          <div className="rounded-[2rem] bg-stone-50 p-6">
            <p className="text-sm uppercase tracking-[0.3em] text-stone-500">Submit recipes</p>
            <p className="mt-3 text-sm text-stone-700">Create and save recipes to share with the community.</p>
            <Link to="/recipes" className="mt-4 inline-flex rounded-full bg-amber-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-300">Browse ideas</Link>
          </div>
        </div>

        <section className="mt-10 rounded-[2rem] border border-stone-200 bg-stone-50 p-6">
          <h2 className="text-xl font-semibold text-stone-950">Saved recipes</h2>
          {favorites.length === 0 ? (
            <p className="mt-4 text-sm text-stone-600">You don’t have any saved recipes yet. Add one from a recipe page to keep it here.</p>
          ) : (
            <div className="mt-6 grid gap-5 md:grid-cols-2">
              {favorites.map((recipe) => (
                <Link key={recipe.id} to={`/recipes/${recipe.id}`} className="rounded-3xl bg-white p-5 shadow-sm transition hover:-translate-y-1">
                  <h3 className="text-lg font-semibold text-stone-900">{recipe.title}</h3>
                  <p className="mt-2 text-sm text-stone-600">{recipe.cuisine} • {recipe.difficulty}</p>
                </Link>
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
