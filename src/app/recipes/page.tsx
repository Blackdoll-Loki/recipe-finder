'use client' // Mark the component as client-side

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

interface Recipe {
  id: number;
  title: string;
  image: string;
}

export default function RecipesPage() {
  const router = useRouter();
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [error, setError] = useState<string | null>(null);
  const searchParams = useSearchParams();

  const search = searchParams.get('search') || 'borsch';
  const cuisine = searchParams.get('cuisine') || 'ukrainian';
  const prepTime = searchParams.get('prepTime') || '200';

  useEffect(() => {
    const fetchData = async () => {
      const apiKey = 'da29a56b072b4242b9ec8ad0e60e77ed';

      // Формуємо URL для API із параметрів searchParams
      const url = `https://api.spoonacular.com/recipes/complexSearch?query=${search}&cuisine=${cuisine}&maxReadyTime=${prepTime}&apiKey=${apiKey}`;

      try {
        const res = await fetch(url);

        if (!res.ok) throw new Error('Failed to fetch recipes');

        const data = await res.json();
        setRecipes(data.results || []);
      } catch (error) {
        setError('Something went wrong!');
      }
    };

    fetchData();
  }, [search, cuisine, prepTime]); // Перезапуск fetchData при зміні параметрів

  const handleRecipeClick = (id: number) => {
    router.push(`/recipes/${id}`);
  };

  // Функція для оновлення searchParams в URL
  const updateSearchParams = (newParams: Record<string, string>) => {
    const newUrl = new URL(window.location.href);
    Object.keys(newParams).forEach((key) => {
      if (newParams[key]) {
        newUrl.searchParams.set(key, newParams[key]);
      }
    });
    router.push(newUrl.toString());
  };

  if (error) return <div>Error: {error}</div>;

  return (
    <div className="min-h-screen bg-blue-50 py-8">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">Recipes</h2>
        <div>
          <button
            onClick={() => updateSearchParams({ search: 'pizza', cuisine: 'italian' })}
            className="px-4 py-2 bg-blue-500 text-white rounded-md mb-6"
          >
            Set New Params
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {recipes.map((recipe) => (
            <div
            key={recipe.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer mb-6" // додав mb-6 для відступу між картками
            onClick={() => handleRecipeClick(recipe.id)}
            >
            <img
              src={recipe.image}
              alt={recipe.title}
              width={400}
              height={250}
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">{recipe.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}



