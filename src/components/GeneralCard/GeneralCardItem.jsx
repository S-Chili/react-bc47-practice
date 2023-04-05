import { useState } from 'react';
import { Paper } from 'components';
import { BsThreeDotsVertical } from 'react-icons/bs';
import PropTypes from 'prop-types';
import DropDown from '../DropDown/DropDown';
import { BtnMenu, Item } from './GeneralCard.styled';
import { useNavigate } from 'react-router-dom';
const GeneralCardItem = ({
  text,
  onDeleteCard,
  id,
  relation,
  toggleModal,
  onEditCard,
  modalState,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();
  const pathTo = () => {
    if (relation !== 'departments') return;
      navigate(`/departments/${id}`);
  }

  const toggleDropDown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Paper>
        <Item>
          <span onClick={pathTo}>{text}</span>
          <BtnMenu onClick={toggleDropDown}>
            <BsThreeDotsVertical />
          </BtnMenu>
          {isOpen && (
            <DropDown
              toggleModal={toggleModal}
              relation={relation}
              onDeleteCard={() => onDeleteCard(id, relation)}
              onEditCard={onEditCard}
              idItem={id}
              modalState={modalState}
              textItem={text}
            />
          )}
        </Item>
      </Paper>
    </>
  );
};

export default GeneralCardItem;

GeneralCardItem.propTypes = {
  text: PropTypes.string,
  onDeleteCard: PropTypes.func,
};
