export const recipes = [
  {
    id: 'boba-pancakes',
    title: 'Bubble Tea Pancakes',
    cuisine: 'Fusion',
    type: 'Breakfast',
    difficulty: 'Easy',
    rating: 4.9,
    likes: 320,
    views: 1840,
    spice: 'Mild',
    cookTime: 20,
    description: 'Fluffy pancakes swirled with brown sugar bubbles and sweet milk tea glaze.',
    author: 'Kai',
    authorId: 'chef-kai',
    image: 'https://images.unsplash.com/photo-1551580096-3f8b2c4ccd3e?auto=format&fit=crop&w=1000&q=80',
    tags: ['sweet', 'breakfast', 'bubble tea'],
    ingredients: [
      '1 cup flour',
      '1 tbsp sugar',
      '1 cup milk',
      '2 tbsp tapioca pearls',
      '1 egg',
      '1 tsp baking powder',
      'Pinch of salt'
    ],
    steps: [
      'Cook tapioca pearls until chewy, then drain and set aside.',
      'Whisk flour, sugar, baking powder, salt, egg, and milk into a smooth batter.',
      'Pour batter onto a hot pan and add pearls before flipping.',
      'Cook until golden, stack, and drizzle with milk tea glaze.'
    ],
    reviews: [
      { user: 'Sia', stars: 5, text: 'So fun to make! My friends loved the bubble surprise.' },
      { user: 'Max', stars: 4, text: 'A tasty twist on pancakes with a teen-friendly vibe.' }
    ],
  },
  {
    id: 'spicy-ramen-bowl',
    title: 'Spicy Ramen Bowl',
    cuisine: 'Asian',
    type: 'Dinner',
    difficulty: 'Medium',
    rating: 4.7,
    likes: 280,
    views: 2120,
    spice: 'Hot',
    cookTime: 30,
    description: 'A bold ramen bowl with chili broth, soft egg, and crunchy toppings.',
    author: 'Ari',
    authorId: 'chef-ari',
    image: 'https://images.unsplash.com/photo-1604908553568-183da295d8c0?auto=format&fit=crop&w=1000&q=80',
    tags: ['spicy', 'noodles', 'dinner'],
    ingredients: [
      '2 packs ramen noodles',
      '3 cups vegetable broth',
      '1 tbsp chili paste',
      '2 soft-boiled eggs',
      '1 cup spinach',
      '2 green onions',
      'Sesame seeds'
    ],
    steps: [
      'Heat broth with chili paste, garlic, and ginger.',
      'Cook ramen noodles until tender, then drain.',
      'Assemble noodles in bowls, pour hot broth, and top with egg, greens, and seeds.'
    ],
    reviews: [
      { user: 'Nia', stars: 5, text: 'Perfect kick for teens who love bold flavors.' },
      { user: 'Jay', stars: 4, text: 'Super satisfying and easy enough for a weeknight.' }
    ],
  },
  {
    id: 'sunny-avocado-toast',
    title: 'Sunny Avocado Toast',
    cuisine: 'American',
    type: 'Brunch',
    difficulty: 'Easy',
    rating: 4.8,
    likes: 420,
    views: 1960,
    spice: 'Mild',
    cookTime: 15,
    description: 'Bright toast with creamy avocado, fresh herbs, and sunny-side-up eggs.',
    author: 'Leah',
    authorId: 'chef-leah',
    image: 'https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?auto=format&fit=crop&w=1000&q=80',
    tags: ['healthy', 'quick', 'brunch'],
    ingredients: [
      '2 slices sourdough bread',
      '1 avocado',
      '2 eggs',
      '1 tbsp lemon juice',
      'Chili flakes',
      'Fresh cilantro'
    ],
    steps: [
      'Toast bread until golden brown.',
      'Mash avocado with lemon juice, salt, and pepper.',
      'Spread avocado, top with eggs, herbs, and chili flakes.'
    ],
    reviews: [
      { user: 'Mia', stars: 5, text: 'A cheerful recipe for beginner chefs.' },
      { user: 'Leo', stars: 4, text: 'Great for breakfast or a quick snack.' }
    ],
  },
  {
    id: 'sunset-taco-salad',
    title: 'Sunset Taco Salad',
    cuisine: 'Mexican',
    type: 'Lunch',
    difficulty: 'Medium',
    rating: 4.6,
    likes: 230,
    views: 1780,
    spice: 'Medium',
    cookTime: 25,
    description: 'Crunchy taco salad with salsa, avocado, and zesty lime dressing.',
    author: 'Nova',
    authorId: 'chef-nova',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1000&q=80',
    tags: ['salad', 'fresh', 'lunch'],
    ingredients: [
      'Romaine lettuce',
      'Black beans',
      'Corn',
      'Cherry tomatoes',
      'Avocado',
      'Tortilla chips',
      'Lime dressing'
    ],
    steps: [
      'Chop veggies and assemble in a bowl.',
      'Add beans, corn, tomatoes, avocado, and chips.',
      'Drizzle lime dressing and toss gently.'
    ],
    reviews: [
      { user: 'Tara', stars: 5, text: 'So fresh—perfect for lunch with friends.' },
      { user: 'Ben', stars: 4, text: 'Nice crunch and easy ingredients.' }
    ],
  },
  {
    id: 'mango-crepe-rolls',
    title: 'Mango Crepe Rolls',
    cuisine: 'Dessert',
    type: 'Snack',
    difficulty: 'Easy',
    rating: 4.7,
    likes: 260,
    views: 1850,
    spice: 'Mild',
    cookTime: 18,
    description: 'Sweet crepe rolls stuffed with mango, yogurt, and honey drizzle.',
    author: 'Rio',
    authorId: 'chef-rio',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1000&q=80',
    tags: ['sweet', 'dessert', 'snack'],
    ingredients: [
      'Crepe batter',
      'Fresh mango',
      'Greek yogurt',
      'Honey',
      'Mint leaves'
    ],
    steps: [
      'Cook thin crepes on medium heat.',
      'Fill with mango slices and yogurt.',
      'Roll up and drizzle with honey.'
    ],
    reviews: [
      { user: 'Zoe', stars: 5, text: 'Cute, colorful, and totally teen-friendly.' },
      { user: 'Rae', stars: 4, text: 'Great for dessert night.' }
    ],
  },
  {
    id: 'sunrise-stirfry',
    title: 'Rainbow Stir-Fry',
    cuisine: 'Asian',
    type: 'Dinner',
    difficulty: 'Medium',
    rating: 4.5,
    likes: 210,
    views: 1680,
    spice: 'Mild',
    cookTime: 22,
    description: 'Colorful veggie stir-fry with zesty ginger soy sauce and crispy rice.',
    author: 'Lina',
    authorId: 'chef-lina',
    image: 'https://images.unsplash.com/photo-1562967916-eb82221dfb46?auto=format&fit=crop&w=1000&q=80',
    tags: ['veggie', 'quick', 'healthy'],
    ingredients: [
      'Broccoli florets',
      'Bell peppers',
      'Snap peas',
      'Carrots',
      'Rice',
      'Soy sauce',
      'Ginger'
    ],
    steps: [
      'Cook rice and set aside.',
      'Stir-fry veggies with ginger and garlic.',
      'Add soy sauce, toss with rice, and serve warm.'
    ],
    reviews: [
      { user: 'Jules', stars: 5, text: 'Great way to eat more veggies without boring flavors.' },
      { user: 'Kai', stars: 4, text: 'Super quick and colorful!' }
    ],
  }
];

export const chefProfiles = [
  {
    id: 'chef-kai',
    name: 'Kai Martinez',
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80',
    bio: 'Teen chef sharing playful fusion recipes and quick kitchen wins for new cooks.',
    socials: { instagram: 'kai.cooks' },
    recipeIds: ['boba-pancakes']
  },
  {
    id: 'chef-ari',
    name: 'Ari Chen',
    photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80',
    bio: 'Spice lover who turns tasty ramen and noodle bowls into teenage comfort food.',
    socials: { tiktok: 'chefari' },
    recipeIds: ['spicy-ramen-bowl']
  },
  {
    id: 'chef-leah',
    name: 'Leah Brooks',
    photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80',
    bio: 'Brunch expert with easy ideas that make mornings feel fun and creative.',
    socials: { instagram: 'leahlovescooking' },
    recipeIds: ['sunny-avocado-toast']
  }
];

export const nearbyEvents = [
  {
    id: 'street-food-fest',
    title: 'Teen Street Food Festival',
    date: '2026-07-12',
    location: 'Downtown Arena',
    description: 'A fun festival with food trucks, cooking demos, and teen chef battles.',
    url: '#'
  },
  {
    id: 'bake-off',
    title: 'Local Bake-Off Challenge',
    date: '2026-07-20',
    location: 'City Market',
    description: 'Join a low-stress baking competition with prizes and recipe swaps.',
    url: '#'
  },
  {
    id: 'sushi-workshop',
    title: 'Sushi Rolling Workshop',
    date: '2026-08-03',
    location: 'Community Kitchen',
    description: 'Hands-on sushi rolling class designed for beginner cooks.',
    url: '#'
  }
];

export function getDailyRecipe() {
  const index = new Date().getDate() % recipes.length;
  return recipes[index];
}

export function getTopRecipes() {
  return [...recipes].sort((a, b) => b.views - a.views).slice(0, 3);
}

export function findRecipeById(id) {
  return recipes.find((recipe) => recipe.id === id);
}
