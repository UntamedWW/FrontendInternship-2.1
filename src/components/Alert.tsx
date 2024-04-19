import { ReactNode } from "react";

interface AlertTextProp {
    children: ReactNode;
    onClose: () => void;
}

const Alert = ({children, onClose}: AlertTextProp) => {
  return (
      <div className="alert alert-dark aler-dismissible" role="alert" onClick={onClose}>
          {children}
          <button type="button" className="btn-close" aria-label="Close"></button>
      </div>
  )
}

export default Alert