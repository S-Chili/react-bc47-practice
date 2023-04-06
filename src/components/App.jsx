import { Suspense, useEffect, useState } from 'react';
import {
  Sidebar,
  Main,

} from '../components';

import useCities from '../hooks/useCities';
import useDepartments from 'hooks/useDepartments';
import useTutors from '../hooks/useTutors';
import { postCity, deleteCity, updateCity } from 'Api/citiesApi';
import { postDepartment, deleteDepartment, updateDepartment } from 'Api/departments';
import Departments from 'pages/department/Departments';
import University from 'pages/university/University';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import DepartmentDetails from 'pages/department/DepartmentDetails'
import DepartmentDescription from 'pages/department/DepartmentDescription';
import DepartmentHistory from 'pages/department/DepartmentHistory';

export default function App() {
  const [cities, setCities] = useCities();
  const [departments, setDepartments] = useDepartments();

  const [tutors, setTutors] = useTutors();
  const [formIsOpen, setFormIsOpen] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(null);

  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === '/' || pathname === '/react-homework-template') navigate('university') 
  }, [navigate, pathname])


  const handleEditCard = data => {
    const { id, name, relation } = data;
    if (relation === 'cities') {

      updateCity(id, { id, text: name }).then(res => {
        const findIndexCities = cities.findIndex(item => item.id === res.data.id);
        setCities(prev => [
          ...prev.slice(0, findIndexCities),
          { text: res.data.text, relation, id: res.data.id },
          ...prev.slice(findIndexCities + 1),
        ]);
      })
      setIsModalOpen(null);

    } else {
      updateDepartment(id, { id, name }).then(res => {
        const findIndexDepart = departments.findIndex(item => item.id === res.data.id);
        setDepartments(prev => [
          ...prev.slice(0, findIndexDepart),
          { text: res.data.name, id: res.data.id, relation },
          ...prev.slice(findIndexDepart + 1),
        ]);
      })
      setIsModalOpen(null);
    }
  };

  const onEdit = () => console.log('edit');
  const onDelete = () => console.log('delete');

  const addTutor = tutor => {
    setTutors([...tutors, tutor]);
    setFormIsOpen(null);
  };

  const deleteTutor = name => {
    setTutors([...tutors.filter(({ firstName }) => firstName !== name)]);
  };

  const addCity = name => {
    postCity({ text: name }).then(({ data }) => {
      if (cities.some(city => city.text.toLowerCase() === name.toLowerCase())) {
        alert('This city is already exist');
      } else {
        const newCity = { ...data, relation: 'cities' };
        setCities([...cities, newCity]);
        setFormIsOpen(null);
      }
    })

  };
  const addDepartment = name => {
    postDepartment({ name }).then(({ data: { id, name } }) => {
      if (
        departments.some(
          department => department.text.toLowerCase() === name.toLowerCase()
        )
      ) {
        alert('This department is already exist');
      } else {
        const newDep = { text: name, id, relation: 'departments' };
        setDepartments([...departments, newDep]);
        setFormIsOpen(null);
      }
    })

  };

  const handleFormShow = formName => {
    setFormIsOpen(formIsOpen === formName ? null : formName);
  };

  const handleModalOpen = action => {
    setIsModalOpen(isModalOpen === action ? null : action);
  };

  return (
    <div className="app">
      <Sidebar />

      <Main>
        <Suspense fallback={<h3>Loading...</h3>}>
          <Routes>
            <Route
              path="/university"
              element={
                <University
                  onDelete={onDelete}
                  onEdit={onEdit}
                  tutors={tutors}
                  deleteTutor={deleteTutor}
                  formIsOpen={formIsOpen}
                  addTutor={addTutor}
                  handleFormShow={handleFormShow}
                  onEditCard={handleEditCard}
                  listData={cities}
                  toggleModal={handleModalOpen}
                  modalState={isModalOpen}
                  onSubmit={addCity}
                />
              }
            ></Route>
            <Route path="/departments">

              <Route
                index
                element={
                  <Departments
                    onEditCard={handleEditCard}
                    listData={departments}
                    toggleModal={handleModalOpen}
                    modalState={isModalOpen}
                    formIsOpen={formIsOpen}
                    onSubmit={addDepartment}
                    handleFormShow={handleFormShow}
                  />
                }
              />

              <Route
                path=":departmentId"
                element={<DepartmentDetails departments={departments} />}
              >
                <Route
                  path="description"
                  element={<DepartmentDescription />}
                ></Route>
                <Route
                  path="history"
                  element={<DepartmentHistory />}>

                  </Route>
              </Route>

            </Route>
          </Routes>
        </Suspense>
      </Main>
    </div>
  );
}
