import { Alert, Card, Spin } from 'antd';
import React from 'react';

import useCalculateDistanceWithIntermediates from 'shared/hooks/useCalculateDistanceWithIntermediates';
import { roundNumber } from 'utils/miscellenaous';

const InterMediateCities = ({ intermediateCities }) => (
  <div>
    <Card className="card" title="Intermediate Cities">
      {intermediateCities.map((intermediate, idx) => (
        <p key={idx}>{intermediate}</p>
      ))}
    </Card>
  </div>
);

const DistanceInfos = ({ data, originCity, destinationCity }) => (
  <div>
    {data.map(({ name, distanceFromOrigin, distanceFromDestination }, idx) => (
      <Card key={idx} className="card m-t-10">
        <p>
          Distance (origin to intermediate) between {originCity} and {name} is{' '}
          {roundNumber(distanceFromOrigin)} Km
        </p>

        <p>
          Distance (intermediate to destination) between {name} and {destinationCity} is{' '}
          {roundNumber(distanceFromDestination)} Km
        </p>

        <strong>
          Total is:{' '}
          {roundNumber(distanceFromOrigin) + roundNumber(distanceFromDestination)} Km
        </strong>
      </Card>
    ))}
  </div>
);

const Container = ({ cities_intermediates, city_origin, city_destination }) => {
  const { loading, errors, originCity, destinationCity, intermediateCities, data } =
    useCalculateDistanceWithIntermediates({
      cities_intermediates,
      city_origin,
      city_destination
    });

  if (loading) return <Spin size="large" />;

  if (errors) return <Alert message={errors} type="error" />;

  return (
    <div className="m-t-50">
      <InterMediateCities {...{ intermediateCities }} />
      <DistanceInfos {...{ originCity, destinationCity, data }} />
    </div>
  );
};

export default Container;
