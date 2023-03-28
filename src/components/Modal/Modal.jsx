import {Component} from 'react';
import { createPortal } from 'react-dom';
import { Overlay, ModalContent } from './Modal.styled';

const modalRoot = document.getElementById('root-modal');

class Modal extends Component {
    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown)
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown)
    }
    
    handleKeyDown = (e) => {
        if (e.code === 'Escape') this.props.toggleModal();        
    }

    handleBackdropClick = (e) => {
        if (e.currentTarget === e.target) this.props.toggleModal();
    }
    render () {
        const {title, children, actions} = this.props;
        return createPortal(
            <Overlay onClick={this.handleBackdropClick}>
                <ModalContent >
                    <h2>{title}</h2>
                    <div>
                        {children}
                    </div>
                    {actions && <div>
                        {actions}
                    </div>}
                </ModalContent>
            </Overlay>, modalRoot
        )
    }
}

export default Modal;