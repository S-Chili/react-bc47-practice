import { useState } from 'react';
import { Paper, Modal, Button } from 'components';
import { BsThreeDotsVertical } from 'react-icons/bs';
import PropTypes from 'prop-types';

import DropDown from '../DropDown/DropDown';

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
        <li>
          <span>{text}</span>
          <button onClick={toggleDropDown}>
            <BsThreeDotsVertical />
          </button>
          <DropDown isOpen={isOpen} toggleModal={toggleModal} />
          {modalState === 'delete' && (
            <Modal
              toggleModal={toggleModal}
              title={`Удаление ${
                relation === 'cities' ? ' города' : 'факультета'
              }`}
              children="Будут удалены все материалы и информация об факультете."
              actions={
                <>
                  <Button text="нет" />
                  <Button text="да" action={() => onDeleteCard(id, relation)} />
                </>
              }
            ></Modal>
          )}
        </li>
      </Paper>
    </>
  );
};

export default GeneralCardItem;

GeneralCardItem.propTypes = {
  text: PropTypes.string,
  onDeleteCard: PropTypes.func,
};
