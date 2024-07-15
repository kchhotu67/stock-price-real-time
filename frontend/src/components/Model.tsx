import React, { useEffect } from "react";
import { createPortal } from "react-dom";

interface ModalProps {
  onClose: () => void;
  children: React.ReactElement;
}

const Modal: React.FC<ModalProps> = ({ onClose, children }) => {
  const modalRoot = document.getElementById("modal-root")!;
  const el = document.createElement("div");

  useEffect(() => {
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    modalRoot.appendChild(el);
    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      modalRoot.removeChild(el);
    };
  }, [el, modalRoot]);

  return createPortal(
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="bg-white p-8 relative rounded shadow-lg w-1/4 max-w-md">
        <button
          className="text-gray-500 hover:text-gray-800 absolute top-0 right-2 text-2xl font-bold hover:text-2xl"
          onClick={onClose}
        >
          &times;
        </button>
        {children}
      </div>
    </div>,
    el
  );
};

export default Modal;
