import React, { useRef } from 'react';
import { Modal, Button } from 'react-bootstrap';

const ModalCapturePicture = ({ show, onHide, imgSrc }) => {

  return (
    <>
      <Modal
        size='lg'
        aria-labelledby='contained-modal-title-vcenter'
        centered
        show={show}
        onHide={onHide}
      >
        <Modal.Body>
          <img
            className='embed-responsive embed-responsive-16by9'
            id='qrid'
            alt='register'
            text='name'
            src={imgSrc}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default ModalCapturePicture;
