import { Button, Section, GeneralCardList, InfoForm } from 'components';
import DepartmentIcon from '../../assets/images/faculties-emoji.png';
import FORMS from 'constants/forms';
import { fetchDepartments, addDepartmentsOperatiom } from "../../store/departments/departmentsOperation"
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


const Departments = ({



  toggleModal,
  modalState,
  formIsOpen,

  handleFormShow,
}) => {
  const dispatch = useDispatch()
  const departments = useSelector(state => state.departments.items)

  useEffect(() => {
    dispatch(fetchDepartments())

  }, [dispatch])

  return (
    <Section title="Факультеты" image={DepartmentIcon}>
      <GeneralCardList

        listData={departments}
        toggleModal={toggleModal}
        modalState={modalState}

      />
      {formIsOpen === FORMS.DEPARTMENT_FORM && (
        <InfoForm
          title="Добавление филиала"
          placeholder="Филиал"
          onSubmit={addDepartmentsOperatiom}
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