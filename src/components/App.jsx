import { Component } from 'react';
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
} from '../components';
import universityData from '../constants/universityData.json';
import TutorIcon from '../assets/images/teachers-emoji.png';
import PinIcon from '../assets/images/cities.svg';
import DepartmentIcon from '../assets/images/faculties-emoji.png';
import FORMS from 'constants/forms';

class App extends Component {
  state = {
    cities: universityData.cities.map(city => ({ text: city, relation: 'cities' })) ?? [],
    departments:
      universityData.department.map(({ name }) => ({ text: name, relation: 'departments' })) ?? [],
    tutors: universityData.tutors ?? [],
    formIsOpen: null,
  };

  handleDeleteCard = (id, relation) => {
    this.setState(prev => ({ [relation]: prev[relation].filter(({ text }) => text !== id) }))
  };


  onEdit = () => console.log('edit');
  onDelete = () => console.log('delete');
  addTutor = tutor =>
    this.setState(({ tutors }) => {
      return { tutors: [...tutors, tutor] };
    });

  deleteTutor = name => {
    this.setState(({ tutors }) => {
      return {
        tutors: tutors.filter(({ firstName }) => firstName !== name),
      };
    });
  };

  addCity = name => {
    if (
      this.state.cities.some(
        city => city.text.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert('This city is already exist');
    } else {
      const newCity = { text: name };
      this.setState(prev => ({ cities: [...prev.cities, newCity] }));
    }
  };

  addDepartment = name => {
    if (
      this.state.departments.some(
        department => department.text.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert('This department is already exist');
    } else {
      const newDep = { text: name };
      this.setState(prev => ({ departments: [...prev.departments, newDep] }));
    }
  };

  handleFormShow = formName => {
    this.setState(prev => ({
      formIsOpen: prev.formIsOpen === formName ? null : formName,
    }));
  };
  render() {
    return (
      <div className="app">
        <Sidebar />

        <Main>
          <Section title="Информация о университете" isRightPosition isRow>
            <UniversityCard
              name={universityData.name}
              onDelete={this.onDelete}
              onEdit={this.onEdit}
            />
            <Paper>{universityData.description}</Paper>
          </Section>
          <Section title="Преподаватели" image={TutorIcon}>
            <TutorList
              tutors={this.state.tutors}
              deleteTutor={this.deleteTutor}
            />
            {this.state.formIsOpen === FORMS.TUTOR_FORM && (
              <TutorForm addTutor={this.addTutor} />
            )}
            <Button
              text="Добавить преподавателя"
              icon
              type="submit"
              action={() => this.handleFormShow(FORMS.TUTOR_FORM)}
            />
          </Section>
          <Section title="Города" image={PinIcon}>
            <GeneralCardList
              onDeleteCard={this.handleDeleteCard}
              listData={this.state.cities}
            />
            {this.state.formIsOpen === FORMS.CITY_FORM && (
              <InfoForm
                title="Добавление города"
                placeholder="Город"
                addNewValue={this.addCity}
              />
            )}
            <Button
              text="Добавить город"
              icon
              action={() => this.handleFormShow(FORMS.CITY_FORM)}
            />
          </Section>
          <Section title="Факультеты" image={DepartmentIcon}>
            <GeneralCardList
              onDeleteCard={this.handleDeleteCard}
              listData={this.state.departments}
            />
            {this.state.formIsOpen === FORMS.DEPARTMENT_FORM && (
              <InfoForm
                title="Добавление филиала"
                placeholder="Филиал"
                addNewValue={this.addDepartment}
              />
            )}

            <Button
              text="Добавить факультет"
              icon
              action={() => this.handleFormShow(FORMS.DEPARTMENT_FORM)}
            />
          </Section>
        </Main>
      </div>
    );
  }
}

export default App;
