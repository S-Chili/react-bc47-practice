import axios from 'axios';
import { useState, useEffect } from 'react';

const BASE_URL = 'https://6426c5d0556bad2a5b579e63.mockapi.io';
axios.defaults.baseURL = BASE_URL;

const useDepartments = () => {
  const [departments, setDepartments] = useState([]);
  useEffect(() => {
    axios.get('/departments').then(({ data }) => {
      localStorage.setItem(
        'departments',
        JSON.stringify(
          data.map(({ name, id }) => ({
            text: name,
            relation: 'departments',
            id,
          }))
        )
      );
      const departmentsFromLs = JSON.parse(localStorage.getItem('departments'));

      departmentsFromLs
        ? setDepartments(departmentsFromLs)
        : setDepartments([]);
    });
  }, []);
  return [departments, setDepartments];
};

export default useDepartments;
