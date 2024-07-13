import axios from 'axios';
import React, {useState, useEffect, useCallback} from 'react';

export function useCatFact(): [string, () => void] {
  const [fact, setFact] = useState<string | null>(null);

  const fetchCatFact = useCallback(async () => {
    setFact(null);
    try {
      const response = await axios.get('https://catfact.ninja/fact');
      setFact(response.data.fact);
    } catch (error) {
      console.error('Error fetching the cat fact:', error);
      setFact('Could not fetch a cat fact. Please try again.');
    }
  }, []);

  useEffect(() => {
    fetchCatFact();
  }, []);

  return [fact ?? 'Loading...', fetchCatFact];
}
