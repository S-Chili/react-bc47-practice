// import universityImg from "../assets/images/university-icon.svg";
// import departmentImg from "../assets/images/faculties-icon.svg";
import {HiAcademicCap, HiBookOpen} from 'react-icons/hi';


export const menuConfig = [
  {
    name: 'University',
    link: 'university',
    img: <HiBookOpen color={'#FF6B0A'} size={24} />,
  },

  {
    name: 'Departments',
    link: 'departments',
    img: <HiAcademicCap color={'#FF6B0A'} size={24} />,
  },
];