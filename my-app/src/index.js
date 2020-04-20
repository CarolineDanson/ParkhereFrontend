import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Location from './location'
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button'
import Navbar from 'react-bootstrap/Navbar'

window.$lat = 'lat';

function ModalMethod(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (

        <>
            <Navbar bg="light" fixed="bottom">
                <Navbar.Brand href="#About">
                    <img
                        src="/ParkIcon.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                    <Button variant="link" onClick={handleShow} className="linkcolor">
                        Om ParkHere
                    </Button>
                </Navbar.Brand>
            </Navbar>

            <Modal show={show} onHide={handleClose} animation={true} {...props}
      size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>
                    <p><img
                        src="/ParkIcon.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />  </p>
                    <Modal.Title >   ParkHere</Modal.Title>
                </Modal.Header>

                <Modal.Body><b>Tycker du också att det är svårt att veta vilka parkeringsregler som gäller?</b><br></br>
                ParkHere är en app vars mål är att hjälp dig parkera korrekt.
                Appen scannar av din position och ger dig parkeringsregler tillbaka.
                För närvarande fungerar appen endast inom Stockholm Stad.
                <br></br><br></br><br></br>
                <p> <em>Vi eftersträvar alltid att kontinuerligt uppdatera informationen på vår hemsida och se till att informationen är korrekt.
                Trots våra strävanden kan innehållet på vår hemsida vara ofullständigt och/eller felaktigt och inga rättigheter kan härledas från informationen på denna webbplats.
                Tänk på att informationen på parkeringskyltar alltid är det som gäller.</em></p>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose} className="ModalButton">Stäng</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

ReactDOM.render(<div><Location /><ModalMethod /></div>, document.getElementById('root'));

