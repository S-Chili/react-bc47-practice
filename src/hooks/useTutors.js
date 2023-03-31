import { useEffect, useState } from 'react';
import universityData from '../constants/universityData.json';

const useTutors = () => {
  const [tutors, setTutors] = useState([]);
  useEffect(() => {
    localStorage.setItem('tutors', JSON.stringify(universityData.tutors));
    const tutorsFromLs = JSON.parse(localStorage.getItem('tutors'));

    tutorsFromLs ? setTutors(tutorsFromLs) : setTutors([]);
  }, []);
  return [tutors, setTutors];
};

export default useTutors;
