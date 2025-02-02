import React from 'react'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';

const Modalbox = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
      <Button className='btn btn-play' variant="primary" onClick={handleShow}>
        <FontAwesomeIcon icon={faPlayCircle} />
      </Button>

      <Modal show={show} onHide={handleClose} className='modal-fullscreen' size='lg'>
        <Modal.Header closeButton className='border-0 position-absolute close_modify'>
        </Modal.Header>
        <Modal.Body ratio ratio-4x3>
       
          <iframe width="100%" height="500px" src="https://www.youtube.com/embed/aTC_RNYtEb0?si=eqyEobYEZiS35HzN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></Modal.Body>
    
      </Modal>
    </>
  )
}

export default Modalbox
