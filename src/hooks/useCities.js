import axios from 'axios';
import { useState, useEffect } from 'react';

const BASE_URL = 'https://6426c5d0556bad2a5b579e63.mockapi.io';
axios.defaults.baseURL = BASE_URL;

const useCities = () => {
  const [cities, setCities] = useState([]);
  useEffect(() => {
    axios.get('/cities').then(({ data }) => {
      localStorage.setItem(
        'cities',
        JSON.stringify(
          data.map(({ text, id }) => ({
            text,
            relation: 'cities',
            id,
          }))
        )
      );
      const citiesFromLs = JSON.parse(localStorage.getItem('cities'));

      citiesFromLs ? setCities(citiesFromLs) : setCities([]);
    });
  }, []);
  return [cities, setCities];
};

export default useCities;
