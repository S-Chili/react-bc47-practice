import { ReactComponent as Edit } from '../../assets/images/edit.svg';
import { ReactComponent as Delete } from '../../assets/images/delete.svg';
import { Button, InfoForm, Modal } from '../index';
import { ContainerDropdown, Btn, ActionsBtn } from './Dropdown.styled';
import { useDispatch } from 'react-redux'
import { deleteCityOperation, editCitiesOperation } from 'store/cities/citiesOperation';
import { deleteDepartmentsOperation, editDepartmentsOperation } from "../../store/departments/departmentsOperation"

const DropDown = ({ toggleModal, relation, onEditCard, modalState, idItem, textItem }) => {

  const dispatch = useDispatch();



  return (
    <ContainerDropdown>
      <Btn type='button' onClick={() => toggleModal('edit')}><Edit />редактировать</Btn>
      {modalState === 'edit' && (
        <Modal
          toggleModal={toggleModal}
          title={`Редактировать информацию  ${relation === 'cities' ? 'о городе' : 'об факультете'} `}
          children={<InfoForm idItem={idItem} textItem={textItem} relation={relation} onSubmit={relation === 'cities' ? editCitiesOperation : editDepartmentsOperation} title={relation === 'cities' ? 'Город' : 'Факультет'} toggleModal={toggleModal} />}
        />
      )}
      <Btn type='button' onClick={() => toggleModal('delete')}><Delete />удалить</Btn>
      {modalState === 'delete' && (
        <Modal
          toggleModal={toggleModal}
          title={`Удаление ${relation === 'cities' ? ' города' : 'факультета'}`}
          children={`Будут удалены все материалы и информация ${relation === 'cities' ? 'о городе' : 'о факультете'}.`}
          actions={
            <ActionsBtn>
              <Button text='нет' action={toggleModal} />
              <Button text='да' action={() => { relation === 'cities' ? dispatch(deleteCityOperation(idItem)) : dispatch(deleteDepartmentsOperation(idItem)); toggleModal() }} />
            </ActionsBtn>
          }
        />
      )}
    </ContainerDropdown>);

};



export default DropDown

