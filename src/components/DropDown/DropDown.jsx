import { ReactComponent as Edit } from '../../assets/images/edit.svg'
import { ReactComponent as Delete } from '../../assets/images/delete.svg'

const DropDown = ({ isOpen, toggleModal }) => {
    return (isOpen && <div>
        <button type="button" onClick={() => toggleModal('edit')}><Edit />редактировать</button>
        <button type="button" onClick={() => toggleModal('delete')} ><Delete />удалить</button>
    </div>)

}



export default DropDown

