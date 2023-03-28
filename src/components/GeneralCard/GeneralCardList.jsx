import PropTypes from "prop-types"
import GeneralCardItem from './GeneralCardItem';
import { List } from './GeneralCard.styled';

const GeneralCardList = ({ listData, onDeleteCard, toggleModal, modalState }) => {
    return (
      <List>
        {listData.map(({ text, relation }) => <GeneralCardItem
          key={text}
          id={text}
          relation={relation}
          text={text}
          onDeleteCard={onDeleteCard}
          toggleModal={toggleModal}
          modalState={modalState} />)}
      </List>
    )
}

export default GeneralCardList

GeneralCardList.propTypes = {
    listData: PropTypes.arrayOf(PropTypes.shape({ text: PropTypes.string })),
}
