import { getDepatments } from 'Api/departments';
import { useState, useEffect } from 'react';

const useDepartments = () => {
  const [departments, setDepartments] = useState([]);
  useEffect(() => {
    getDepatments().then(({ data }) => {
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
