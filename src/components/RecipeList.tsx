import { getRecipes } from "@/lib/recipes";

export default async function RecipesList({ search, cuisine, prepTime }: { search: string; cuisine: string; prepTime: string }) {
  const recipes = await getRecipes(search, cuisine, prepTime);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {recipes.map((recipe) => (
        <div key={recipe.id} className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer mb-6">
          <img src={recipe.image} alt={recipe.title} width={400} height={250} className="w-full h-56 object-cover" />
          <div className="p-4">
            <h3 className="text-xl font-semibold text-gray-800">{recipe.title}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}