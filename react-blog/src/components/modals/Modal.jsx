import { useEffect } from "react";
import { createPortal } from "react-dom";

const modalRoot = document.getElementById("modal-root");
const modalContainer = document.createElement("div");

function Modal(props) {
  useEffect(() => {    
    modalRoot.appendChild(modalContainer);

    return () => {
      modalRoot.removeChild(modalContainer);
    };
  }, []);

  return createPortal(props.children, modalContainer);
}

export default Modal;