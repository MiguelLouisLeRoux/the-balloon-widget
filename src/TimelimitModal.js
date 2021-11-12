import {React, useState}from 'react'
import { Button,Modal } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';

export default function TimelimitModal(props) {
    const [show, setShow] = useState(false);
    const[time, setTime] = useState();
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return (

      <>
        <p  className="text-primary cursor-pointer" style={{"cursor": "pointer"}} onClick={handleShow}>
            Set time limit for trending balloons
        </p>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Current time limit is: {props.theTimeLimit}min</Modal.Title>
          </Modal.Header>
            <Modal.Body>Set new time limit (minutes): <input type="number" onChange={event=> setTime(event.target.value)} min="1"></input></Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={()=>props.timeLimitFunction(time)}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }