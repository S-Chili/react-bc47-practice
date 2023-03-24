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
  InfoForm
} from '../components';
import universityData from '../constants/universityData.json';
import TutorIcon from '../assets/images/teachers-emoji.png'
import PinIcon from "../assets/images/cities.svg"
import DepartmentIcon from "../assets/images/faculties-emoji.png"


class App extends Component {

  state = {
    cities: universityData.cities.map(city => ({ text: city })) ?? [],
    departments: universityData.department.map(({ name }) => ({ text: name })) ?? [],
    tutors: universityData.tutors ?? [],
  }

  handleToggleDropdown = () => console.log("click");

  onEdit = () => console.log('edit');
  onDelete = () => console.log('delete');
  addTutor = (tutor) => this.setState(({ tutors }) => { return { tutors: [...tutors, tutor] } });

  deleteTutor = (name) => {
    this.setState(({ tutors }) => {
      return {
        tutors: tutors.filter(({ firstName }) => firstName !== name)
      }
    })
  }
  render() {

    console.log("state", this.state.tutors)
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
            <TutorList tutors={this.state.tutors} deleteTutor={this.deleteTutor} />
            <TutorForm addTutor={this.addTutor} />
            <Button text='Добавить преподавателя' icon type='submit' />
          </Section>
          <Section title="Города" image={PinIcon}>
            <GeneralCardList isOpenDropdown={this.handleToggleDropdown} listData={this.state.cities} />
            <InfoForm title="Добавление города" placeholder="Город" />
            <Button text='Добавить город' icon />

          </Section>
          <Section title="Факультеты" image={DepartmentIcon}>
            <GeneralCardList isOpenDropdown={this.handleToggleDropdown} listData={this.state.departments} />
            <InfoForm title="Добавление филиала" placeholder="Филиал" />
            <Button text='Добавить факультет' icon />
          </Section>
        </Main>
      </div>
    );
  }
};

export default App;
