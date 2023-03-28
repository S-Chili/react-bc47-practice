import PropTypes from "prop-types"
import GeneralCardItem from "./GeneralCardItem"

const GeneralCardList = ({ listData, onDeleteCard }) => {
    return (
        <ul>
            {listData.map(({ text, relation }) => <GeneralCardItem key={text} id={text} relation={relation} text={text} onDeleteCard={onDeleteCard} />)}
        </ul>
    )
}

export default GeneralCardList

GeneralCardList.propTypes = {
    listData: PropTypes.arrayOf(PropTypes.shape({ text: PropTypes.string })),
}