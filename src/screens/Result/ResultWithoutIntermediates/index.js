import { Alert, Card, Spin } from 'antd';
import React from 'react';

import useCalculateDistanceWithoutIntermediates from 'shared/hooks/useCalculateDistanceWithoutIntermediates';
import { roundNumber } from 'utils/miscellenaous';

const DistanceInfos = ({ originCity, destinationCity, distance }) => (
  <Card className="card">
    <p>
      Distance (origin to destination) between {originCity} to {destinationCity} is :{' '}
      <strong>{roundNumber(distance)} Km</strong>
    </p>
  </Card>
);

const Container = ({ city_origin, city_destination }) => {
  const { loading, errors, originCity, destinationCity, distance } =
    useCalculateDistanceWithoutIntermediates({ city_origin, city_destination });

  if (loading) return <Spin size="large" />;

  if (errors) return <Alert message={errors} type="error" />;

  return (
    <div className="m-t-50">
      <DistanceInfos {...{ originCity, destinationCity, distance }} />
    </div>
  );
};

export default Container;
