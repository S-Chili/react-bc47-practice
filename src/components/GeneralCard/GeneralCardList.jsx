import PropTypes from "prop-types"
import GeneralCardItem from "./GeneralCardItem"

const GeneralCardList = ({listData, isOpenDropdown}) =>{
    return(
        <ul>
            {listData.map(({text})=> <GeneralCardItem key={text} text={text} isOpenDropdown={isOpenDropdown} /> )}
        </ul>
    )
}

export default GeneralCardList

GeneralCardList.propTypes = {
    listData:PropTypes.arrayOf(PropTypes.shape({text:PropTypes.string})) ,
}