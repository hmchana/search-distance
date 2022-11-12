import React from 'react';
import { Alert } from 'antd';
import { useMemo } from 'react';
import { useLocation } from 'react-router';
import { RESULT_MODES } from 'utils/constants';
import { handleParse, renderValidValue } from 'utils/miscellenaous';
import ResultWithIntermediates from '../ResultWithIntermediates';
import ResultWithoutIntermediates from '../ResultWithoutIntermediates';

const modes = {
  [RESULT_MODES.WITH_INTERMEDIATES]: ResultWithIntermediates,
  [RESULT_MODES.WITHOUT_INTERMEDIATES]: ResultWithoutIntermediates,
  [RESULT_MODES.ERROR]: () => <Alert type="error" message="Error, Dijon is included ! " />
};

const Container = () => {
  const { search } = useLocation();

  const { cities_intermediates, city_origin, city_destination } = handleParse(search);

  const validValue = renderValidValue({
    cities_intermediates,
    city_origin,
    city_destination
  });

  const Component = useMemo(() => modes[validValue], [validValue]);

  return <Component {...{ cities_intermediates, city_origin, city_destination }} />;
};

export default Container;
