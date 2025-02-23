'use client'

export default function Spinner() {
  return (
    <div className="flex justify-center items-center h-20">
      <div className="w-8 h-8 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
    </div>
  );
}
