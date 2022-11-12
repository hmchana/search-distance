import moment from 'moment';
import qs from 'qs';
import { RESULT_MODES } from './constants';

export const handleSearch = (keyword = '', array) => {
  const result = array.filter(elem =>
    elem[0].toLowerCase().startsWith(keyword.toLowerCase())
  );

  return result;
};

export const disabledPreviousDates = current =>
  current && current < moment().endOf('day');

export const isValidNumber = value =>
  value > 0 ? Promise.resolve() : Promise.reject('Number must be greater than 0');

const toRad = x => (x * Math.PI) / 180;

export const haversineDistance = (coords1, coords2) => {
  let lon1 = coords1[0];
  let lat1 = coords1[1];

  let lon2 = coords2[0];
  let lat2 = coords2[1];

  let R = 6371; // km

  let x1 = lat2 - lat1;
  let dLat = toRad(x1);
  let x2 = lon2 - lon1;
  let dLon = toRad(x2);
  let a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) *
      Math.cos(toRad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  let d = R * c;

  return d;
};

export const formulateIntermidiaries = (intermediates = {}) => {
  const arr = [];
  for (const [key, value] of Object.entries(intermediates)) {
    arr.push({
      name: key,
      distanceFromOrigin: value.distanceFromOrigin,
      distanceFromDestination: value.distanceFromDestination
    });
  }

  return arr;
};

export const handleParse = search => qs.parse(search.substring(3));

export const formulateItems = array =>
  array.map(element => ({ label: element[0], value: element[0] }));

export const roundNumber = number => Number(number.toFixed(1));

export const renderValidValue = ({
  cities_intermediates,
  city_origin,
  city_destination
}) => {
  const isDijonIncluded =
    city_destination === 'Dijon' ||
    city_origin === 'Dijon' ||
    cities_intermediates.includes('Dijon');

  if (isDijonIncluded) return RESULT_MODES.ERROR;

  if (cities_intermediates.length === 0) return RESULT_MODES.WITHOUT_INTERMEDIATES;
  else return RESULT_MODES.WITH_INTERMEDIATES;
};

export const formatArr = arr => arr.slice(1);
