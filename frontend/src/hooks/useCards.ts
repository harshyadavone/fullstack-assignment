import { useState, useEffect } from "react";
import axios from "axios";

interface Card {
  _id: string;
  title: string;
  description: string;
  link: string;
  createdAt: string;
}

interface CardResponse {
  success: boolean;
  data: Card[];
}

const useCards = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await axios.get<CardResponse>(
          "http://localhost:3000/api/cards"
        );
        setCards(response.data.data);
        setLoading(false);
      } catch (err) {
        setError("An error occurred while fetching the cards");
        setLoading(false);
      }
    };

    fetchCards();
  }, []);

  return { cards, loading, error };
};

export default useCards;
