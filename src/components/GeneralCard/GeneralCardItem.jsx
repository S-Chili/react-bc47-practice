import { useState } from 'react'
import { Paper } from "components"
import { BsThreeDotsVertical } from "react-icons/bs"
import PropTypes from "prop-types"

import DropDown from '../DropDown/DropDown'

const GeneralCardItem = ({ text, onDeleteCard, id, relation }) => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleDropDown = () => {
        setIsOpen(!isOpen)
    }

    return (
        <Paper><li><span>{text}</span><button onClick={toggleDropDown}><BsThreeDotsVertical />
        </button>
            <DropDown isOpen={isOpen} onDeleteCard={() => onDeleteCard(id, relation)} />



        </li>
        </Paper>
    )
}



export default GeneralCardItem

GeneralCardItem.propTypes = {
    text: PropTypes.string,
    onDeleteCard: PropTypes.func,
}


