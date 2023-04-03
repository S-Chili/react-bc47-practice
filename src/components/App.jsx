import { useEffect, useState } from 'react';
import {
  Sidebar,
  Main,
  Paper,
  UniversityCard,
  TutorList,
  Section,
  GeneralCardList,
  Button,
  TutorForm,
  InfoForm,
  Modal,
} from '../components';
import universityData from '../constants/universityData.json';
import TutorIcon from '../assets/images/teachers-emoji.png';
import PinIcon from '../assets/images/cities.svg';
import DepartmentIcon from '../assets/images/faculties-emoji.png';
import FORMS from 'constants/forms';
import axios from 'axios';
import useCities from '../hooks/useCities';
import useDepartments from 'hooks/useDepartments';
import useTutors from '../hooks/useTutors';
import { postCity, deleteCity, updateCity } from 'Api/citiesApi';
import { postDepartment, deleteDepartment, updateDepartment } from 'Api/departments';



export default function App() {
  const [cities, setCities] = useCities();
  const [departments, setDepartments] = useDepartments();

  const [tutors, setTutors] = useTutors();
  const [formIsOpen, setFormIsOpen] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(null);

  const handleDeleteCard = (id, relation) => {

    if (relation === 'cities') {
      deleteCity(id).then(res => {
        const newCityArray = cities.filter(({ id }) => id !== res.data.id);
        setCities(newCityArray);
        setIsModalOpen(null);
      })

    } else {
      deleteDepartment(id).then(res => {
        const newDepartmentsArray = departments.filter(({ id }) => id !== res.data.id);
        setDepartments(newDepartmentsArray);
        setIsModalOpen(null);
      })

    }
  };

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
        <Section title="Информация о университете" isRightPosition isRow>
          <UniversityCard
            name={universityData.name}
            onDelete={onDelete}
            onEdit={onEdit}
          />
          <Paper>{universityData.description}</Paper>
        </Section>
        <Section title="Преподаватели" image={TutorIcon}>
          <TutorList tutors={tutors} deleteTutor={deleteTutor} />
          {formIsOpen === FORMS.TUTOR_FORM && <TutorForm addTutor={addTutor} />}
          <Button
            text="Добавить преподавателя"
            icon
            type="submit"
            action={() => handleFormShow(FORMS.TUTOR_FORM)}
          />
        </Section>
        <Section title="Города" image={PinIcon}>
          <GeneralCardList
            onDeleteCard={handleDeleteCard}
            onEditCard={handleEditCard}
            listData={cities}
            toggleModal={handleModalOpen}
            modalState={isModalOpen}
          />
          {formIsOpen === FORMS.CITY_FORM && (
            <InfoForm
              title="Добавление города"
              placeholder="Город"
              onSubmit={addCity}
            />
          )}
          <Button
            text="Добавить город"
            icon
            action={() => handleFormShow(FORMS.CITY_FORM)}
          />
        </Section>
        <Section title="Факультеты" image={DepartmentIcon}>
          <GeneralCardList
            onDeleteCard={handleDeleteCard}
            onEditCard={handleEditCard}
            listData={departments}
            toggleModal={handleModalOpen}
            modalState={isModalOpen}
          />
          {formIsOpen === FORMS.DEPARTMENT_FORM && (
            <InfoForm
              title="Добавление филиала"
              placeholder="Филиал"
              onSubmit={addDepartment}
            />
          )}

          <Button
            text="Добавить факультет"
            icon
            action={() => handleFormShow(FORMS.DEPARTMENT_FORM)}
          />
        </Section>
      </Main>
    </div>
  );
}
