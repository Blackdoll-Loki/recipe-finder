export interface Recipe {
  id: number;
  title: string;
  image: string;
}

export async function getRecipes(search: string, cuisine: string, prepTime: string): Promise<Recipe[]> {
  const apiKey = process.env.NEXT_PUBLIC_SPOONACULAR_API_KEY;
  if (!apiKey) throw new Error("API key is missing");

  const url = `https://api.spoonacular.com/recipes/complexSearch?query=${search}&cuisine=${cuisine}&maxReadyTime=${prepTime}&apiKey=${apiKey}`;

  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to fetch recipes");

  const data = await res.json();
  return data.results || [];
}
