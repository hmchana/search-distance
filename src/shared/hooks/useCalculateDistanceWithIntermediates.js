import { useEffect, useState } from 'react';
import { formatArr, formulateIntermidiaries } from 'utils/miscellenaous';
import apiMocks from 'utils/api/mocks/cities';
import { useCallback } from 'react';

const useCalculateDistance = ({
  cities_intermediates,
  city_origin,
  city_destination
}) => {
  const intermediates = cities_intermediates.split(',');

  const [infos, setInfos] = useState({
    loading: false,
    errors: null,
    originCity: city_origin,
    destinationCity: city_destination,
    intermediateCities: intermediates,
    data: {}
  });

  const fetchData = async () => {
    setInfos(prev => ({ ...prev, loading: true }));

    const [cityOriginInfos] = await apiMocks.search(city_origin);
    const [cityDestinationInfos] = await apiMocks.search(city_destination);

    for (let intermediate of intermediates) {
      const [response] = await apiMocks.search(intermediate);

      const distanceFromOrigin = await apiMocks.calculateDistance(
        formatArr(response),
        formatArr(cityOriginInfos)
      );

      const distanceFromDestination = await apiMocks.calculateDistance(
        formatArr(response),
        formatArr(cityDestinationInfos)
      );

      setInfos(prev => ({
        ...prev,
        loading: false,
        data: {
          ...prev.data,
          [intermediate]: {
            distanceFromDestination,
            distanceFromOrigin
          }
        }
      }));
    }
  };

  const fetchDataMemoized = useCallback(fetchData, [
    city_origin,
    city_destination,
    cities_intermediates
  ]);

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

  const formulatedData = formulateIntermidiaries(infos.data);

  const { loading, errors, originCity, destinationCity, intermediateCities } = infos;

  return {
    loading,
    errors,
    originCity,
    destinationCity,
    intermediateCities,
    data: formulatedData
  };
};

export default useCalculateDistance;
