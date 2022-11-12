import { CITIES } from 'utils/constants';
import { handleSearch, haversineDistance } from 'utils/miscellenaous';

const apiMocks = {
  search: keyword => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(handleSearch(keyword, CITIES));
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

// haversineDistance
