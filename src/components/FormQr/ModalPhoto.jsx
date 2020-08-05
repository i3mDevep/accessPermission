import React, { useRef } from 'react';
import Webcam from 'react-webcam';
import { Modal, Button } from 'react-bootstrap';

const ModalPhoto = ({ show, onHide }) => {
  const webcamRef = useRef(null);

  const capture = React.useCallback(
    () => {
      const imageSrc = webcamRef.current.getScreenshot();
      onHide(imageSrc);
    },
    [webcamRef],
  );

  return (
    <>
      <Modal show={show} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Toma tu foto!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat='image/jpeg'
            className='embed-responsive embed-responsive-16by9'
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={capture}>
            Take Photo
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default ModalPhoto;
