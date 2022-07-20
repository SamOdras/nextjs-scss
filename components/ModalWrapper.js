import styled from 'styled-components';
import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

const CardHorizontalImg = styled.div`
  grid-column: 1/2;
  width: 100%;
  height: 13.7rem;
  border-radius: 1rem;
  background-image: url(${({ src }) => src});
  background-size: cover;
  background-position: center;
`

const ModalWrapper = ({ setOpen, open, children }) => {

  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  },[])

  const handleClose = (e) => {
    e.preventDefault();
    setOpen(false);
  }

  const modalContent = open ? (
    <div className="modal-description-checkout" onClick={handleClose}>
      {children}
    </div>
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById("modal-root")
    )
  } else {
    return null;
  }
}

export default ModalWrapper;