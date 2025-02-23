'use client'

import { useState } from "react";
import SelectCuisine from "./SelectsCuisine";
import Form from 'next/form';
import { useRouter } from "next/navigation";


export default function SearchForm (){
  const router = useRouter()
  const [query, setQuery] = useState('');
  const [cuisine, setCuisine] = useState('');
  const [prepTime, setPrepTime] = useState('');

  const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => setQuery(e.target.value);
  const handleCuisineChange = (e: React.ChangeEvent<HTMLSelectElement>) => setCuisine(e.target.value);
  const handlePrepTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => setPrepTime(e.target.value);

  const isNextButtonEnabled = query && cuisine && prepTime;

  const handleNextClick = () => {
    const params: Record<string, string> = {};

    if (query) params.query = query;
    if (cuisine) params.cuisine = cuisine;
    if (prepTime) params.prepTime = prepTime;

    const queryString = new URLSearchParams(params).toString();
    router.push(`/recipes?${queryString}`);
  };

  return (
    <Form action='' className="space-y-4">
      <input
        type="text"
        value={query}
        onChange={handleQueryChange}
        placeholder="Search for a recipe..."
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <SelectCuisine cuisine={cuisine} handleCuisineChange={handleCuisineChange} />
      <input
        type="number"
        value={prepTime}
        onChange={handlePrepTimeChange}
        placeholder="Max preparation time (minutes)"
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button
        type="button"
        onClick={handleNextClick}
        disabled={!isNextButtonEnabled}
        className={`w-full py-3 px-6 rounded-lg shadow-md ${
          isNextButtonEnabled ? 'bg-orange-500 hover:bg-orange-600' : 'bg-gray-400 cursor-not-allowed'
        } text-white font-bold`}
      >
        Next
      </button>
    </Form>
  )
}