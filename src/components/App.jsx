import {
  Sidebar,
  Main,
  Paper,
  UniversityCard,
  TutorList,
  Section,
} from '../components';
import universityData from '../constants/universityData.json';
import TutorIcon from '../assets/images/teachers-emoji.png'

const App = () => {
  const onEdit = () => console.log('edit');
  const onDelete = () => console.log('delete');

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
          <TutorList tutors={universityData.tutors} />
        </Section>
      </Main>
    </div>
  );
};

export default App;
