import PropTypes from "prop-types"
import GeneralCardItem from "./GeneralCardItem"

const GeneralCardList = ({ listData, onDeleteCard, toggleModal, modalState }) => {
    return (
        <ul>
            {listData.map(({ text, relation }) => <GeneralCardItem 
            key={text} 
            id={text} 
            relation={relation} 
            text={text} 
            onDeleteCard={onDeleteCard} 
            toggleModal={toggleModal}
            modalState={modalState}/>)}
        </ul>
    )
}

export default GeneralCardList

GeneralCardList.propTypes = {
    listData: PropTypes.arrayOf(PropTypes.shape({ text: PropTypes.string })),
}