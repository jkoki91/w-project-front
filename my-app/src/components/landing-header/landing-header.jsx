import React from "react";
import { useTranslation } from "react-i18next";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/esm/Container';
import Nav from 'react-bootstrap/Nav';
import { useContext } from "react";
import { themeContext } from "../../context/theme-context";
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/esm/Button";
import './style.css';
import Register from "../register/register";
import Modal from 'react-bootstrap/Modal'
import { useState } from "react";


export default function LandingHeader() {
    const [t, i18n] = useTranslation('global');
    let [theme, updateTheme, changeTheme] = useContext(themeContext);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <React.Fragment>
            <Navbar expand="lg" sticky="top" bg="light" variant="light">
                <Container fluid>
                    <Container className="d-flex flex-row">
                        <Form className="me-2">
                            <Button onClick={() => i18n.changeLanguage('en')} variant={theme.secondary} id="en__button">EN</Button>
                            <Button onClick={() => i18n.changeLanguage('es')} variant={theme.secondary} id="es__button">ES</Button>
                        </Form>
                        <Form.Check
                            className="me-5"
                            onClick={changeTheme}
                            type="switch"
                            id="custom-switch"
                            label={theme.light === 'light' ? 'Dark' : 'Light'}
                        />
                    </Container>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Navbar.Brand href="/">wallet-management</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link onClick={handleShow}>{t('landin-header')}</Nav.Link>
                        </Nav>
                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>{t('modal')}</Modal.Title>
                            </Modal.Header>
                            <Register className="register__container"></Register>
                        </Modal>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </React.Fragment>
    )
}



