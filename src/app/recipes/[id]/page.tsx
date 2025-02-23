import { getUniqRecipe, RecipeDetail } from "@/lib/uniqRecipe";

export default async function RecipeDetailPage({ params }: { params: { id: string } }) {
  const recipe: RecipeDetail = await getUniqRecipe(params.id);

  return (
    <div className="min-h-screen bg-blue-50 py-8">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">{recipe.title}</h2>
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full max-w-4xl mx-auto h-auto object-contain mb-8 rounded-xl shadow-lg"
        />

        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Ingredients:</h3>
        <ul className="list-disc pl-6 mb-8">
          {recipe.extendedIngredients.map((ingredient) => (
            <li key={ingredient.id} className="text-lg text-gray-700">
              {ingredient.amount} {ingredient.unit} of {ingredient.name}
            </li>
          ))}
        </ul>

        <div className="text-lg text-gray-700">
          <p>
            <strong>Preparation Time:</strong> {recipe.readyInMinutes} minutes
          </p>
          <p>
            <strong>Servings:</strong> {recipe.servings}
          </p>
          <section>
            <strong>Summary:</strong>
            <p dangerouslySetInnerHTML={{ __html: recipe.summary }}></p>
            <p>{recipe.instructions}</p>
          </section>
        </div>
      </div>
    </div>
  );
}
