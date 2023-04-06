import PropTypes from 'prop-types';
import GeneralCardItem from './GeneralCardItem';
import { List } from './GeneralCard.styled';

const GeneralCardList = ({
  listData,
  onEditCard,
  toggleModal,
  modalState,
}) => {
  return (
    <List>
      {listData.map(({ id, text, relation }) => (
        <GeneralCardItem
          key={id}
          id={id}
          relation={relation}
          text={text}
          onEditCard={onEditCard}
          toggleModal={toggleModal}
          modalState={modalState}
        />
      ))}
    </List>
  );
};

export default GeneralCardList;

GeneralCardList.propTypes = {
  listData: PropTypes.arrayOf(PropTypes.shape({ text: PropTypes.string })),
};
