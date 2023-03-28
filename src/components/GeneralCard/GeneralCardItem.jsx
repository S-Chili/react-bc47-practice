import { useState } from 'react';
import { Paper } from 'components';
import { BsThreeDotsVertical } from 'react-icons/bs';
import PropTypes from 'prop-types';
import DropDown from '../DropDown/DropDown';
import { BtnMenu, Item } from './GeneralCard.styled';

const GeneralCardItem = ({
  text,
  onDeleteCard,
  id,
  relation,
  toggleModal,
  modalState,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropDown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Paper>
        <Item>
          <span>{text}</span>
          <BtnMenu onClick={toggleDropDown}>
            <BsThreeDotsVertical />
          </BtnMenu>
          {isOpen &&
            <DropDown
              toggleModal={toggleModal}
              relation={relation}
              onDeleteCard={() => onDeleteCard(id, relation)}
              modalState={modalState}
            />}
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
