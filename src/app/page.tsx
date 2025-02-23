import MeatballRain from '../components/MeatBall';
import SearchForm from '../components/SearchForm';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col relative bg-blue-100 overflow-hidden">
      <MeatballRain />

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
          <SearchForm />
        </div>
      </main>

      <footer className="w-full bg-gray-900 text-white text-center py-4 relative z-10">
        <p>&copy; 2025 Recipe Finder. All rights reserved.</p>
      </footer>
    </div>
  );
}

