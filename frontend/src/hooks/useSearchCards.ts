import { useState } from "react";
import axios from "axios";

interface Card {
  _id: string;
  title: string;
  description: string;
  link: string;
  createdAt: string;
}

interface SearchResponse {
  success: boolean;
  data: Card[];
}

const useSearchCards = () => {
  const [searchResults, setSearchResults] = useState<Card[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const searchCards = async (title: string) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post<SearchResponse>(
        "http://localhost:3000/api/cards/search",
        { title }
      );
      setSearchResults(response.data.data);
    } catch (err) {
      setError("An error occurred while searching for cards");
    } finally {
      setLoading(false);
    }
  };

  return { searchCards, searchResults, loading, error };
};

export default useSearchCards;
