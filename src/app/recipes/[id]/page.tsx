'use client'

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

interface Ingredient {
  id: number;
  name: string;
  amount: number;
  unit: string;
}

interface RecipeDetail {
  id: number;
  title: string;
  image: string;
  ingredients: Ingredient[];
  preparationMinutes: number;
  servings: number;
  summary: string;
  instructions: string;
}

export default function RecipeDetailPage() {
  const pathname = usePathname();
  const [recipe, setRecipe] = useState<RecipeDetail | null>(null);
  const [error, setError] = useState<string | null>(null);

  const recipeId = pathname?.split('/').pop(); 
  console.log('recipe', recipe)
  useEffect(() => {
    if (!recipeId) return; 

    const fetchRecipeDetail = async () => {
      const apiKey = 'da29a56b072b4242b9ec8ad0e60e77ed';
      const url = `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${apiKey}`;
      console.log('Fetching URL:', url); 

      try {
        const res = await fetch(url);
        if (!res.ok) throw new Error('Failed to fetch recipe details');

        const data = await res.json();
        setRecipe({
          id: data.id,
          title: data.title,
          image: data.image,
          ingredients: data.extendedIngredients,
          preparationMinutes: data.preparationMinutes,
          servings: data.servings,
          summary: data.summary,
          instructions: data.instructions,
        });
      } catch (error) {
        setError('Something went wrong!');
      }
    };

    fetchRecipeDetail();
  }, [recipeId]);

  if (error) return <div>Error: {error}</div>;
  if (!recipe) return <div>Loading...</div>;

  return (
    <div className="min-h-screen bg-blue-50 py-8">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">{recipe.title}</h2>
        <img src={recipe.image} alt={recipe.title} className="w-full max-w-4xl mx-auto h-auto object-contain mb-8 rounded-xl shadow-lg" />

        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Ingredients:</h3>
        <ul className="list-disc pl-6 mb-8">
          {recipe.ingredients.map((ingredient) => (
            <li key={ingredient.id} className="text-lg text-gray-700">
              {ingredient.amount} {ingredient.unit} of {ingredient.name}
            </li>
          ))}
        </ul>

        <div className="text-lg text-gray-700">
          <p><strong>Preparation Time:</strong> {recipe.preparationMinutes} minutes</p>
          <p><strong>Servings:</strong> {recipe.servings}</p>
          <section><strong>Summary:</strong>
          <p>{recipe.summary}</p>
          <p>{recipe.instructions}</p>
          </section>
        </div>
      </div>
    </div>
  );
}
