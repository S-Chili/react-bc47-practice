import { Suspense, useEffect, useState } from 'react';
import {
  Sidebar,
  Main,

} from '../components';


import useTutors from '../hooks/useTutors';

import Departments from 'pages/department/Departments';
import University from 'pages/university/University';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import DepartmentDetails from 'pages/department/DepartmentDetails'
import DepartmentDescription from 'pages/department/DepartmentDescription';
import DepartmentHistory from 'pages/department/DepartmentHistory';

export default function App() {



  const [tutors, setTutors] = useTutors();
  const [formIsOpen, setFormIsOpen] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(null);

  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === '/' || pathname === '/react-homework-template') navigate('university')
  }, [navigate, pathname])


  const onEdit = () => console.log('edit');
  const onDelete = () => console.log('delete');

  const addTutor = tutor => {
    setTutors([...tutors, tutor]);
    setFormIsOpen(null);
  };

  const deleteTutor = name => {
    setTutors([...tutors.filter(({ firstName }) => firstName !== name)]);
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


                  toggleModal={handleModalOpen}
                  modalState={isModalOpen}

                />
              }
            ></Route>
            <Route path="/departments">

              <Route
                index
                element={
                  <Departments


                    toggleModal={handleModalOpen}
                    modalState={isModalOpen}
                    formIsOpen={formIsOpen}

                    handleFormShow={handleFormShow}
                  />
                }
              />

              <Route
                path=":departmentId"
                element={<DepartmentDetails />}
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
