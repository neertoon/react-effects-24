import { useRef } from 'react';
import { createPortal } from 'react-dom';

function Modal({ children, open }) {
  const dialog = useRef();

  if (open) {
    setTimeout(() => dialog.current.showModal(), 200);
  } else {
    setTimeout(() => dialog.current.close(), 200);
  }

  return createPortal(
    <dialog className="modal" ref={dialog}>
      {children}
    </dialog>,
    document.getElementById('modal')
  );
}

export default Modal;
