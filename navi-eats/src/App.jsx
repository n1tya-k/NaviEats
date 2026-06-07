import { useState, useEffect } from 'react';
import { Link, NavLink, Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Recipes from './pages/Recipes.jsx';
import RecipePage from './pages/RecipePage.jsx';
import Chefs from './pages/Chefs.jsx';
import Newsletter from './pages/Newsletter.jsx';
import Events from './pages/Events.jsx';
import About from './pages/About.jsx';
import Auth from './pages/Auth.jsx';
import Dashboard from './pages/Dashboard.jsx';
import NotFound from './pages/NotFound.jsx';

const navLinks = [
  { label: 'HOME', to: '/' },
  { label: 'NEWS', to: '/newsletter' },
  { label: 'RECIPES', to: '/recipes' },
  { label: 'EVENTS', to: '/events' },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-stone-100 font-sans text-stone-900">
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-2' : 'bg-white py-3'}`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center gap-3 text-stone-900">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-400 text-white shadow-lg shadow-amber-400/20">N</div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-stone-500">NaviEats</p>
              <p className="text-sm font-semibold">Cook with confidence</p>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6">
              {navLinks.map((link) => (
                <NavLink key={link.label} to={link.to} className={({ isActive }) => `text-sm font-semibold uppercase tracking-[0.2em] transition ${isActive ? 'text-amber-500' : 'text-stone-600 hover:text-stone-900'}`}>
                  {link.label}
                </NavLink>
              ))}
            </div>
            <div className="flex items-center gap-3 border-l border-stone-200 pl-4">
              <Link to="/login" className="rounded-full border border-stone-200 bg-stone-50 px-4 py-2 text-sm font-semibold uppercase text-stone-700 transition hover:bg-stone-100">Log In</Link>
              <Link to="/login" className="rounded-full bg-amber-400 px-4 py-2 text-sm font-semibold uppercase text-slate-950 transition hover:bg-amber-300">Sign Up</Link>
            </div>
          </div>

          <button className="md:hidden rounded-full p-3 text-stone-700 transition hover:bg-stone-100" onClick={() => setMenuOpen((prev) => !prev)} aria-label="Toggle menu">
            <svg viewBox="0 0 24 24" className="h-6 w-6">
              <path d={menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 7h16M4 12h16M4 17h16'} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${menuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="space-y-2 border-t border-stone-200 bg-white px-5 py-4">
            {navLinks.map((link) => (
              <Link key={link.label} to={link.to} className="block rounded-3xl px-4 py-3 text-sm font-semibold uppercase text-stone-700 transition hover:bg-stone-50">{link.label}</Link>
            ))}
            <Link to="/login" className="block rounded-3xl bg-stone-50 px-4 py-3 text-sm font-semibold uppercase text-stone-700 transition hover:bg-stone-100">Log In</Link>
            <Link to="/login" className="block rounded-3xl bg-amber-400 px-4 py-3 text-sm font-semibold uppercase text-slate-950 transition hover:bg-amber-300">Sign Up</Link>
          </div>
        </div>
      </nav>

      <div className="pt-28">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/recipes/:recipeId" element={<RecipePage />} />
          <Route path="/chefs" element={<Chefs />} />
          <Route path="/newsletter" element={<Newsletter />} />
          <Route path="/events" element={<Events />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Auth />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}
