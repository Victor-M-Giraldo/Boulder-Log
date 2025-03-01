import { createPortal } from 'react-dom';
import { ReactEventHandler } from 'react';
import { useRef, useEffect } from 'react';

interface ModalProps {
  children: React.ReactNode;
  open: boolean;
  onCancel?: ReactEventHandler<HTMLDialogElement>;
}

export default function Modal({ children, open, onCancel }: ModalProps) {
  const ref = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    if (open) {
      ref.current?.showModal();
    } else {
      ref.current?.close();
    }
  }, [open]);
  return createPortal(
    <dialog
      ref={ref}
      onCancel={onCancel}
      className='focus-visible:outline-[0px] bg-base-100 p-4 rounded-lg shadow-md w-full max-w-md'>
      {children}
    </dialog>,
    document.body
  );
}
