import { useState } from 'react';
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

export default function App() {
  const [cities, setCities] = useState(universityData.cities.map(city => ({ text: city, relation: 'cities' })) ??
  []);
  const [departments, setDepartments] = useState(universityData.department.map(({ name }) => ({
    text: name,
    relation: 'departments',
  })) ?? []);
  const [tutors, setTutors] = useState(universityData.tutors ?? []);
  const [formIsOpen, setFormIsOpen] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(null);


  const handleDeleteCard = (id, relation) => {
    if (relation === 'cities') {
      const newCityArray = cities.filter(({ text }) => text !== id)
    setCities(newCityArray)
    setIsModalOpen(null) } 
    else {
      const newDepartmentsArray = departments.filter(({ text }) => text !== id)
    setDepartments(newDepartmentsArray)
    setIsModalOpen(null) }
  };

  const handleEditCard = (data) => {
    const { id, name, relation } = data;
    if (relation === 'cities') {
      const findIndexCities = cities.findIndex(item => item.text === id)
      setCities(prev => [...prev.slice(0, findIndexCities), {text: name, relation}, ...prev.slice(findIndexCities+1)])
    } else {
      const findIndexDepart = departments.findIndex(item => item.text === id)
      setDepartments(prev => [...prev.slice(0, findIndexDepart), {text: name, relation}, ...prev.slice(findIndexDepart+1)])
    }
  }

  const onEdit = () => console.log('edit');
  const onDelete = () => console.log('delete');

  const addTutor = tutor => {
  setTutors([...tutors, tutor])
  setFormIsOpen(null)
  }

  const deleteTutor = name => {
    setTutors([...tutors.filter(({ firstName }) => firstName !== name)])
  }

  const addCity = name => {
    if (
      cities.some(city => city.text.toLowerCase() === name.toLowerCase())
    ) {
      alert('This city is already exist');
    } else {
      const newCity = { text: name, relation: 'cities' } 
      setCities([...cities, newCity])
      setFormIsOpen(null)
  }
}
  const addDepartment = name => {
    if (
      departments.some(
        department => department.text.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert('This department is already exist');
    } else {
      const newDep = { text: name, relation: 'departments' };
      setDepartments([...departments, newDep])
      setFormIsOpen(null)
    }
  }

    const handleFormShow = formName => {
      setFormIsOpen(formIsOpen === formName ? null : formName)
    }

    const handleModalOpen = action => {
      setIsModalOpen(isModalOpen === action ? null : action)
    }
  
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
          <TutorList
            tutors={tutors}
            deleteTutor={deleteTutor}
          />
          {formIsOpen === FORMS.TUTOR_FORM && (
            <TutorForm addTutor={addTutor} />
          )}
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

