import { ReactComponent as Edit } from '../../assets/images/edit.svg';
import { ReactComponent as Delete } from '../../assets/images/delete.svg';
import { InfoForm, Modal } from '../index';
import { ContainerDropdown, Btn } from './Dropdown.styled';
import { useDispatch } from 'react-redux'
import { deleteCityOperation, editCitiesOperation } from 'store/cities/citiesOperation';
import { deleteDepartmentsOperation, editDepartmentsOperation } from "../../store/departments/departmentsOperation"
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import ButtonMui from '@mui/material/Button';

const DropDown = ({ toggleModal, relation, onEditCard, modalState, idItem, textItem, open }) => {

  const dispatch = useDispatch();
  const deleteItem = (relation, idItem) => {
    return relation === 'cities' ? dispatch(deleteCityOperation(idItem)) : dispatch(deleteDepartmentsOperation(idItem));
  }

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

    <Dialog
      open={open}
      onClose={toggleModal}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
      {`Удаление ${relation === 'cities' ? ' города' : 'факультета'}`}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
        {`Будут удалены все материалы и информация ${relation === 'cities' ? 'о городе' : 'о факультете'}.`}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <ButtonMui onClick={toggleModal}>Hет</ButtonMui>
        <ButtonMui onClick={() => deleteItem(relation, idItem)} autoFocus>
          Да
        </ButtonMui>
      </DialogActions>
    </Dialog>
      )}
    </ContainerDropdown>);

};



export default DropDown

