import React from "react";
import useCards from "../hooks/useCards";

const HelpSection: React.FC = () => {
  const { cards, loading, error } = useCards();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card) => (
            <div
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              key={card._id}
            >
              <h3 className="text-2xl font-semibold mb-3">{card.title}</h3>
              <p className="text-gray-600 mb-4">{card.description}</p>
              <a
                href={card.link}
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Learn More →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HelpSection;
