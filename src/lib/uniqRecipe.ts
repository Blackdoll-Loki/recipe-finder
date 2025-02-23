export interface Ingredient {
  id: number;
  name: string;
  amount: number;
  unit: string;
}

export interface RecipeDetail {
  id: number;
  title: string;
  image: string;
  extendedIngredients: Ingredient[];
  readyInMinutes: number;
  servings: number;
  summary: string;
  instructions: string;
}

export async function getUniqRecipe(id: string): Promise<RecipeDetail> {
  const apiKey = process.env.NEXT_PUBLIC_SPOONACULAR_API_KEY;
  if (!apiKey) throw new Error("API key is missing");

  const url = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`;
  console.log("Fetching URL:", url);

  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to fetch recipe details");

  const data = await res.json();

  return {
    id: data.id,
    title: data.title,
    image: data.image,
    extendedIngredients: data.extendedIngredients || [],
    readyInMinutes: data.readyInMinutes,
    servings: data.servings,
    summary: data.summary,
    instructions: data.instructions,
  };
}
