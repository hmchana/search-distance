import { Card } from 'antd';
import React from 'react';
import Search from '../Form';

import useCities from 'shared/hooks/useCities';
import useOrigineCities from 'shared/hooks/useOriginCities';
import useDestinationCities from 'shared/hooks/useDestinationCities';
import { useHistory, useLocation } from 'react-router';
import { handleParse } from 'utils/miscellenaous';

const Container = () => {
  const history = useHistory();
  const { search } = useLocation();
  const { cities } = useCities();

  const { loadingOriginCities, originCities, handleSearch } = useOrigineCities();
  const { loadingDestinationCities, destinationCities, handleSearchDestination } =
    useDestinationCities();

  const { city_origin, city_destination, cities_intermediates } = handleParse(search);

  const handleSubmit = values => {
    const { cities_intermediates, city_origin, city_destination } = values;

    history.push(
      `/result?q=city_origin=${city_origin}&city_destination=${city_destination}&cities_intermediates=${cities_intermediates.join(
        ','
      )}`
    );
  };

  return (
    <Card className="card m-t-50">
      <Search
        {...{
          initialValues: {
            city_origin: city_origin || '',
            city_destination: city_destination || '',
            cities_intermediates: !!cities_intermediates
              ? cities_intermediates.split(',')
              : []
          },
          cities,
          originCities,
          loadingOriginCities,
          handleSubmit,
          handleSearch,
          handleSearchDestination,
          destinationCities,
          loadingDestinationCities
        }}
      />
    </Card>
  );
};

export default Container;
