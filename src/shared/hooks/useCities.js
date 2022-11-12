import { useEffect } from 'react';
import { useState } from 'react';
import apiMocks from 'utils/api/mocks/cities';

const useCities = () => {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    async function fetchAllCities() {
      try {
        const response = await apiMocks.search('');

        setCities(response);
      } catch (error) {}
    }

    fetchAllCities();
  }, []);

  return { cities };
};

export default useCities;
