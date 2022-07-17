import ReactModal from 'react-modal';
import Cross from './Cross';
import useMobileDetect from 'use-mobile-detect-hook';
import { useMemo } from 'react';

ReactModal.setAppElement('#__next');

const getStyle = isMobile => ({
  overlay: {
    zIndex: 3
  },
  content: {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    opacity: '0.9',
    width: isMobile ? '100vw' : '80vw',
    height: isMobile ? '100vh' : '80vh'
  }
});

const Modal = ({ isOpen, closeModal, children }) => {
  const { isMobile: getIsMobile } = useMobileDetect();
  const isMobile = getIsMobile();
  const style = useMemo(() => getStyle(isMobile), [isMobile]);
  return (
    <ReactModal isOpen={isOpen} onRequestClose={closeModal} style={style}>
      <div className="sticky top-0 right-5 z-10 w-full flex justify-end">
        <Cross onClick={closeModal} className="hover:cursor-pointer" />
      </div>
      {children}
    </ReactModal>
  );
};

export default Modal;
