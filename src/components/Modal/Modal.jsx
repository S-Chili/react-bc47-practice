import { useEffect} from 'react';
import { createPortal } from 'react-dom';
import { Overlay, ModalContent } from './Modal.styled';

const modalRoot = document.getElementById('root-modal');

export default function Modal({ title, toggleModal, children, actions }) {
    useEffect(()=> {
        const handleKeyDown = (e) => {
            if (e.code === 'Escape') toggleModal();        
        }
        window.addEventListener('keydown', handleKeyDown)

        return ()=>{window.removeEventListener('keydown', handleKeyDown)}
    }, [toggleModal])
    
    const handleBackdropClick = (e) => {
        if (e.currentTarget === e.target) toggleModal();
    }
    return createPortal(
        <Overlay onClick={handleBackdropClick}>
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

