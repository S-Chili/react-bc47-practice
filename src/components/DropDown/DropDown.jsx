import { ReactComponent as Edit } from '../../assets/images/edit.svg'
import { ReactComponent as Delete } from '../../assets/images/delete.svg'

const DropDown = ({ isOpen, onDeleteCard }) => {
    return (isOpen && <div>
        <button type="button"><Edit />редактировать</button>
        <button type="button" onClick={onDeleteCard} ><Delete />удалить</button>
    </div>)

}



export default DropDown

