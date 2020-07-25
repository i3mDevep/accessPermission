import React, { useRef } from 'react';
import { Modal, Button } from 'react-bootstrap';

const ModalCapturePicture = ({ show, onHide, imgSrc }) => {

  return (
    <>
      <Modal show={show} onHide={onHide}>
        <Modal.Body>
          {imgSrc && (
            <img
              id='qrid'
              alt='register'
              text='name'
              src={imgSrc}
            />
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default ModalCapturePicture;
