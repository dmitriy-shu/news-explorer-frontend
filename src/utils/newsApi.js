import {
  BASE_URL,
  API_KEY,
  NUMBER_OF_DAYS_TO_SEARCH,
  NUMBER_OF_ARTICLES_REQUESTED
} from '../constants/newsApiConst.js';

export default function search(keyWord) {
  const today = (new Date()).toISOString();
  const severalDaysAgoInMilSec = Date.now() - (1000 * 3600 * 24 * NUMBER_OF_DAYS_TO_SEARCH);
  const severalDaysAgo = (new Date(severalDaysAgoInMilSec)).toISOString();


  return fetch(`${BASE_URL}?q=${keyWord}&from=${severalDaysAgo}&to=${today}&pageSize=${NUMBER_OF_ARTICLES_REQUESTED}&apiKey=${API_KEY}`, {
    method: 'GET',
    headers: {
      "Content-Type": "text/plain",
    },

  })
    .then((res) => {
      if (res.ok) {
        return res.json()
      } else {
        return Promise.reject(`Ошибка  ${res.status}`)
      }
    })
};