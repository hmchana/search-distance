import { CITIES } from 'utils/constants';
import { handleSearch, haversineDistance } from 'utils/miscellenaous';

const apiMocks = {
  search: keyword => {
    return new Promise((resolve, reject) => {
      if (keyword === 'fail')
        setTimeout(() => {
          reject('Error, keyword fail was used !');
        }, 1000);

      let result = handleSearch(keyword, CITIES);

      if (result.length === 0)
        setTimeout(() => {
          reject(`Error, city name ${keyword} not available`);
        }, 1000);
      else
        setTimeout(() => {
          resolve(result);
        }, 1000);
    });
  },
  calculateDistance: (cord1, cord2) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(haversineDistance(cord1, cord2));
      }, 1000);
    });
  }
};

export default apiMocks;
