import { Sidebar, Main, Paper, UniversityCard } from '../components';
import universityData from '../constants/universityData.json';

const App = () => {
  const onEdit = () => console.log('edit');
  const onDelete = () => console.log('delete');

  return (
    <div className="app">
      <Sidebar />

      <Main>
        <UniversityCard
          name={universityData.name}
          onDelete={onDelete}
          onEdit={onEdit}
        />
        <Paper>{universityData.description}</Paper>
      </Main>
    </div>
  );
};

export default App;
