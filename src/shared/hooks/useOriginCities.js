import { useEffect } from 'react';
import { useCallback } from 'react';
import { useState } from 'react';
import apiMocks from 'utils/api/mocks/cities';

const useOrigineCities = () => {
  const [keyword, setKeyword] = useState('');
  const [result, setResult] = useState({
    loading: false,
    error: null,
    data: []
  });

  const handleSearch = setKeyword;

  const fetchData = async () => {
    try {
      setResult(prev => ({ ...prev, error: null, loading: true }));
      const response = await apiMocks.search(keyword);

      setResult(prev => ({ ...prev, data: response, loading: false }));
    } catch (error) {
      setResult(prev => ({ ...prev, error, loading: false }));
    }
  };

  const fetchDataMemoized = useCallback(fetchData, [keyword]);

  useEffect(() => {
    if (keyword.length > 0) fetchDataMemoized();
  }, [fetchDataMemoized, keyword]);

  const { loading, error, data } = result;

  return {
    loadingOriginCities: loading,
    errorOrigin: error,
    originCities: data,
    handleSearch
  };
};

export default useOrigineCities;
