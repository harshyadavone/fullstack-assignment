import React, { useState } from "react";
import Topbar from "./Topbar";
import useSearchCards from "../hooks/useSearchCards";

const Header: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { searchCards, searchResults, loading, error } = useSearchCards();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      searchCards(searchTerm);
    }
  };

  return (
    <>
      <Topbar />
      <header className="bg-gray-100 py-8 shadow-md">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-medium text-center mb-6 text-gray-900">
            How can we help?
          </h1>
          <form onSubmit={handleSearch} className="flex justify-center">
            <div className="relative w-2/3 max-w-md">
              <input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none pr-10"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                →
              </button>
            </div>
          </form>
        </div>
      </header>
      {loading && <p className="text-center mt-4">Searching...</p>}
      {error && <p className="text-center mt-4 text-red-500">{error}</p>}
      {searchResults.length > 0 && (
        <div className="container mx-auto px-4 mt-8">
          <h2 className="text-2xl font-medium mb-4">Search Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {searchResults.map((card) => (
              <div key={card._id} className="bg-white p-4 rounded shadow">
                <h3 className="font-medium">{card.title}</h3>
                <p className="text-sm text-gray-600">{card.description}</p>
                <a href={card.link} className="text-blue-500 hover:underline">
                  Learn More
                </a>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
