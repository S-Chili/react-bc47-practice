import { useState, useEffect } from 'react';
import {getCities} from "../Api/citiesApi"

const useCities = () => {
  const [cities, setCities] = useState([]);
  useEffect(() => {
    getCities().then(({ data }) => {
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
