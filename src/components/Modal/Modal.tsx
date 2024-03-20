import React, { ReactNode } from "react";
import "./modal.css"

interface ModalProps {
  active: boolean;
  children: ReactNode; // Correct type for children
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal = ({ active, setActive, children }: ModalProps) => {
    return (
        <div className= {active? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className={active ? "modal__content active" : "modal__content"} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}

export default Modal;