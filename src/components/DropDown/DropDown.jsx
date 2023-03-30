import { ReactComponent as Edit } from '../../assets/images/edit.svg';
import { ReactComponent as Delete } from '../../assets/images/delete.svg';
import { Button, InfoForm, Modal } from '../index';
import { ContainerDropdown, Btn, ActionsBtn } from './Dropdown.styled';

const DropDown = ({ toggleModal, relation, onDeleteCard, onEditCard, modalState, idItem }) => {
  return (
    <ContainerDropdown>
      <Btn type='button' onClick={() => toggleModal('edit')}><Edit />редактировать</Btn>
      {modalState === 'edit' && (
        <Modal
          toggleModal={toggleModal}
          title={`Редактировать информацию  ${relation === 'cities' ? 'о городе' : 'об факультете'} `}
          children={<InfoForm idItem={idItem} relation={relation} onSubmit={onEditCard} title={relation === 'cities' ? 'Город' : 'Факультет'} />}
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
              <Button text='да' action={onDeleteCard} />
            </ActionsBtn>
          }
        />
      )}
    </ContainerDropdown> );

};



export default DropDown

