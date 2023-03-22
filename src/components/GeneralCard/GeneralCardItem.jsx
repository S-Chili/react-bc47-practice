import { Paper } from "components";
import { BsThreeDotsVertical } from "react-icons/bs"
import PropTypes from "prop-types"

const GeneralCardItem = ({text, isOpenDropdown}) => {
    return(
        <Paper><li><span>{text}</span><button onClick={isOpenDropdown}><BsThreeDotsVertical/></button></li></Paper>
    )
}

export default GeneralCardItem

GeneralCardItem.propTypes = {
    text:PropTypes.string , 
    isOpenDropdown:PropTypes.func,
}