import { Suspense } from "react";
import Spinner from "../../components/Spinner";
import RecipeList from "../../components/RecipeList"
import { getRecipes } from "@/lib/recipes";


export default async function RecipesPage({ searchParams }: { searchParams: { query?: string; cuisine?: string; prepTime?: string } }) {
  const search = searchParams.query || "borsch";
  const cuisine = searchParams.cuisine || "ukrainian";
  const prepTime = searchParams.prepTime || "200";
  const recipes = await getRecipes(search, cuisine, prepTime);


  return (
    <div className="min-h-screen bg-blue-50 py-8">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">Recipes</h2>
        <Suspense fallback={<Spinner />}>
          <RecipeList recipes={recipes} />
        </Suspense>
      </div>
    </div>
  );
}
