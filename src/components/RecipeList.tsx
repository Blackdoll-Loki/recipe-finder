"use client";
import { useRouter } from "next/navigation";

interface Recipe {
  id: number;
  title: string;
  image: string;
}

interface RecipesListProps {
  recipes: Recipe[];
}

export default function RecipesList({ recipes }: RecipesListProps) {
  const router = useRouter();

  const handleClick = (id: number) => {
    router.push(`/recipes/${id}`);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {recipes.map((recipe) => (
        <div
          key={recipe.id}
          className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer mb-6"
          onClick={() => handleClick(recipe.id)}
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
  );
}
