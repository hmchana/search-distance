import { Alert, Card } from 'antd';
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

  const { loadingOriginCities, originCities, errorOrigin, handleSearch } =
    useOrigineCities();
  const {
    loadingDestinationCities,
    destinationCities,
    errorDestination,
    handleSearchDestination
  } = useDestinationCities();

  const { city_origin, city_destination, cities_intermediates } = handleParse(search);

  const handleSubmit = values => {
    const { cities_intermediates, city_origin, city_destination } = values;

    history.push(
      `/result?q=city_origin=${city_origin}&city_destination=${city_destination}&cities_intermediates=${cities_intermediates.join(
        ','
      )}`
    );
  };

  const isErrorExist = Boolean(errorOrigin) || Boolean(errorDestination);
  const errorMessage = errorOrigin || errorDestination;

  return (
    <div className="m-t-50">
      {isErrorExist && <Alert type="error" message={errorMessage} />}
      <Card className="card ">
        <Search
          {...{
            initialValues: {
              city_origin: city_origin || '',
              city_destination: city_destination || '',
              cities_intermediates: !!cities_intermediates
                ? cities_intermediates.split(',')
                : []
            },
            isErrorExist,
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
    </div>
  );
};

export default Container;
