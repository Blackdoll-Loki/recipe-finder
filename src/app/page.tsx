'use client' // Mark the component as client-side

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

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
    <div className="min-h-screen flex flex-col relative bg-blue-100 overflow-hidden">
      <header className="w-full bg-white shadow-md p-4 fixed top-0 left-0 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">🍽️ Recipe Finder</h1>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center px-6">
        <div className="bg-white p-8 shadow-lg rounded-lg max-w-lg w-full relative z-10">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
            Find Your Perfect Recipe
          </h2>
          <form className="space-y-4">
            <input
              type="text"
              value={query}
              onChange={handleQueryChange}
              placeholder="Search for a recipe..."
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <select
              value={cuisine}
              onChange={handleCuisineChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="">Select Cuisine</option>
              <option value="african">African</option>
              <option value="asian">Asian</option>
              <option value="american">American</option>
              <option value="british">British</option>
              <option value="cajun">Cajun</option>
              <option value="caribbean">Caribbean</option>
              <option value="chinese">Chinese</option>
              <option value="eastern European">Eastern European</option>
              <option value="european">European</option>
              <option value="french">French</option>
              <option value="german">German</option>
              <option value="greek">Greek</option>
              <option value="indian">Indian</option>
              <option value="irish">Irish</option>
              <option value="italian">Italian</option>
              <option value="japanese">Japanese</option>
              <option value="jewish">Jewish</option>
              <option value="korean">Korean</option>
              <option value="latin american">Latin American</option>
              <option value="mediterranean">Mediterranean</option>
              <option value="mexican">Mexican</option>
              <option value="middle eastern">Middle Eastern</option>
              <option value="nordic">Nordic</option>
              <option value="southern">Southern</option>
              <option value="spanish">Spanish</option>
              <option value="thai">Thai</option>
              <option value="vietnamese">Vietnamese</option>
            </select>
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
          </form>
        </div>
      </main>

      <footer className="w-full bg-gray-900 text-white text-center py-4 relative z-10">
        <p>&copy; 2025 Recipe Finder. All rights reserved.</p>
      </footer>
    </div>
  );
}

