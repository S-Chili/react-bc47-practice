import { Button, Section, GeneralCardList, InfoForm } from 'components';
import DepartmentIcon from '../../assets/images/faculties-emoji.png';
import FORMS from 'constants/forms';

const Departments = ({
  onDeleteCard,
  onEditCard,
  listData,
  toggleModal,
  modalState,
  formIsOpen,
  onSubmit,
  handleFormShow,
}) => {
  return (
    <Section title="Факультеты" image={DepartmentIcon}>
      <GeneralCardList
        onDeleteCard={onDeleteCard}
        onEditCard={onEditCard}
        listData={listData}
        toggleModal={toggleModal}
        modalState={modalState}
      />
      {formIsOpen === FORMS.DEPARTMENT_FORM && (
        <InfoForm
          title="Добавление филиала"
          placeholder="Филиал"
          onSubmit={onSubmit}
        />
      )}

      <Button
        text="Добавить факультет"
        icon
        action={() => handleFormShow(FORMS.DEPARTMENT_FORM)}
      />
    </Section>
  );
};

export default Departments;