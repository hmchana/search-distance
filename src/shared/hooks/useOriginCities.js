import { useEffect } from 'react';
import { useCallback } from 'react';
import { useState } from 'react';
import apiMocks from 'utils/api/mocks/cities';

const useOrigineCities = () => {
  const [keyword, setKeyword] = useState('');
  const [result, setResult] = useState({
    loading: false,
    errors: null,
    data: []
  });

  const handleSearch = setKeyword;

  const fetchData = async () => {
    try {
      setResult(prev => ({ ...prev, loading: true }));
      const response = await apiMocks.search(keyword);

      setResult(prev => ({ ...prev, data: response, loading: false }));
    } catch (error) {
      setResult(prev => ({ ...prev, errors: 'An Error Occured', loading: false }));
    }
  };

  const fetchDataMemoized = useCallback(fetchData, [keyword]);

  useEffect(() => {
    if (keyword.length > 0) fetchDataMemoized();
  }, [fetchDataMemoized, keyword]);

  const { loading, errors, data } = result;

  return { loadingOriginCities: loading, errors, originCities: data, handleSearch };
};

export default useOrigineCities;
