// components/Summary.tsx
import { Fragment } from 'react';

interface SummaryProps {
  protein: string;
  fat: string;
  calories: string;
  servings: number;
  costPerServing: string;
  likes: number;
  ingredients: string[];
  preparationTime: string;
  celebrationEvent: string;
  score: string;
  similarRecipes: { title: string, url: string }[];
}

export default function Summary({
  protein,
  fat,
  calories,
  servings,
  costPerServing,
  likes,
  ingredients,
  preparationTime,
  celebrationEvent,
  score,
  similarRecipes,
}: SummaryProps) {
  return (
    <Fragment>
      <p>
        You can never have too many Mediterranean recipes, so give this summer vegetable pizza a try! One portion of this dish contains approximately:
      </p>
      <ul>
        <li><strong>{protein} of protein</strong></li>
        <li><strong>{fat} of fat</strong></li>
        <li><strong>{calories} calories</strong></li>
      </ul>
      <p>
        This recipe serves {servings} people and costs <strong>${costPerServing} per serving</strong>. It's a hit with foodies, earning a total of <strong>{likes} likes</strong> from fellow cooks.
      </p>
      <p>
        The ingredients for this dish include {ingredients.join(', ')}, and it works best as a main course. The dish can be prepared in roughly <strong>{preparationTime}</strong>.
      </p>
      <p>
        Make your <strong>{celebrationEvent}</strong> celebration extra special with this delicious recipe! It holds a <strong>good spoonacular score of {score}%</strong>.
      </p>
      <p>
        If you enjoy this recipe, check out these similar ones:
        <ul>
          {similarRecipes.map((recipe, index) => (
            <li key={index}>
              <a href={recipe.url}>{recipe.title}</a>
            </li>
          ))}
        </ul>
      </p>
    </Fragment>
  );
}
