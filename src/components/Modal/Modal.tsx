import React, { ReactNode } from "react";
import ReactDOM from 'react-dom';
import "./modal.css"

interface ModalProps {
  active: boolean;
  children: ReactNode; // Correct type for children
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal = ({ active = false, setActive, children }: ModalProps) => {
    return ReactDOM.createPortal(
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className={active ? "modal__content active" : "modal__content"} onClick={e => e.stopPropagation()}>
                {children}
                <h2 className='modalText'>Hi, hope you are doing great! ...this code sucks, tho</h2>
            </div>
        </div>,
        document.body
    );
}

export default Modal;
