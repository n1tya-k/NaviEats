import { Link } from 'react-router-dom';

export default function RecipeCard({ recipe }) {
  return (
    <Link
      to={`/recipes/${recipe.id}`}
      className="group block overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="relative h-52 overflow-hidden">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-4 py-3 text-white">
          <p className="text-xs uppercase tracking-[0.2em] text-stone-200">{recipe.cuisine}</p>
          <h3 className="mt-1 text-lg font-bold leading-tight">{recipe.title}</h3>
        </div>
      </div>
      <div className="space-y-2 px-5 py-4">
        <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.2em] text-stone-500">
          <span>{recipe.difficulty}</span>
          <span className="rounded-full bg-stone-100 px-2 py-1">{recipe.spice}</span>
          <span className="rounded-full bg-amber-100 px-2 py-1 text-amber-700">{recipe.rating.toFixed(1)} ★</span>
        </div>
        <p className="text-sm leading-relaxed text-stone-600 line-clamp-3">{recipe.description}</p>
      </div>
    </Link>
  );
}
