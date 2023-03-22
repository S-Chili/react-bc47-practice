import PropTypes from 'prop-types'
import { BsFillPlusCircleFill } from 'react-icons/bs'
import { StyledBtn } from './Button.styled'


const Button = ({ text, icon, type = 'button', action, styles, ...restProps }) => {
    return <StyledBtn type={type} onClick={action} className={styles} {...restProps}>
        {icon && <BsFillPlusCircleFill color='#fff' />}
        {text}
    </StyledBtn>
}

export default Button

Button.propTypes = {
    text: PropTypes.string.isRequired,
    icon: PropTypes.bool,
    type: PropTypes.string,
    action: PropTypes.func,
    styles: PropTypes.string,
    restProps: PropTypes.any
}