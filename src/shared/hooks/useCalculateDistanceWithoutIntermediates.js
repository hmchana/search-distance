import { useEffect, useState } from 'react';
import apiMocks from 'utils/api/mocks/cities';
import { useCallback } from 'react';
import { formatArr } from 'utils/miscellenaous';

const useCalculateDistance = ({ city_origin, city_destination }) => {
  const [infos, setInfos] = useState({
    loading: false,
    errors: null,
    originCity: city_origin,
    destinationCity: city_destination,
    distance: 0
  });

  const fetchData = async () => {
    try {
      setInfos(prev => ({ ...prev, loading: true }));

      const [cityOriginInfos] = await apiMocks.search(city_origin);
      const [cityDestinationInfos] = await apiMocks.search(city_destination);

      const distance = await apiMocks.calculateDistance(
        formatArr(cityOriginInfos),
        formatArr(cityDestinationInfos)
      );

      setInfos(prev => ({
        ...prev,
        loading: false,
        distance
      }));
    } catch (error) {
      setInfos(prev => ({ ...prev, loading: false, errors: 'An Error Occured' }));
    }
  };

  const fetchDataMemoized = useCallback(fetchData, [city_origin, city_destination]);

  useEffect(() => {
    try {
      fetchDataMemoized();
    } catch (error) {
      setInfos(prev => ({
        ...prev,
        loading: false,
        errors: 'An Unexpected Error Occured !'
      }));
    }
  }, [fetchDataMemoized]);

  const { loading, errors, originCity, destinationCity, distance } = infos;

  return { loading, errors, originCity, destinationCity, distance };
};

export default useCalculateDistance;
