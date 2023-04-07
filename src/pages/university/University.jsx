import {
  Section,
  UniversityCard,
  Paper,
  TutorList,
  TutorForm,
  Button,
  GeneralCardList,
  InfoForm,
} from 'components';

import universityData from '../../constants/universityData.json';
import TutorIcon from '../../assets/images/teachers-emoji.png';
import FORMS from 'constants/forms';
import PinIcon from '../../assets/images/cities.svg';
import { addCitiesOperation, fetchCities } from 'store/cities/citiesOperation';
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';

const University = ({
  onDelete,
  onEdit,
  tutors,
  deleteTutor,
  formIsOpen,
  addTutor,
  handleFormShow,

  toggleModal,
  modalState,

}) => {

  const dispatch = useDispatch();

  const cities = useSelector(state => state.cities.items)

  useEffect(() => {
    dispatch(fetchCities())
  }, [dispatch]);

  return (
    <>
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

          listData={cities}
          toggleModal={toggleModal}
          modalState={modalState}
        />
        {formIsOpen === FORMS.CITY_FORM && (
          <InfoForm
            title="Добавление города"
            placeholder="Город"
            onSubmit={addCitiesOperation}
          />
        )}
        <Button
          text="Добавить город"
          icon
          action={() => handleFormShow(FORMS.CITY_FORM)}
        />
      </Section>
    </>
  );
};

export default University;
