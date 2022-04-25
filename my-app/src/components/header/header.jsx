import React from "react";
import { useTranslation } from "react-i18next";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/esm/Container';
import Nav from 'react-bootstrap/Nav';
import { useContext, useEffect, useState } from "react";
import { themeContext } from "../../context/theme-context";
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/esm/Button";
import './style.css';
 
export default function Header() {
    const [t,i18n] = useTranslation('global');
    let [theme, updateTheme, changeTheme] = useContext(themeContext);
    let token = localStorage.getItem('access_token')
    let [info, updateInfo] = useState()
    useEffect(() => {
        fetch('http://localhost:4000/users', {
            method: 'GET',
            headers: { 'Authorization': `Bearer ${token}` }
        })
            .then(j => j.json())
            .then(data => {
                // console.log(data)
                updateInfo(data)
            })
    }, [])
    // console.log(info)
    return(
        <React.Fragment>
            <Navbar expand="lg" sticky="top" bg={`${theme.header}`} variant="light">
                <Container fluid>
                    <Container className={`text-${theme.leters} d-flex flex-row ms-3 align-items-center`}>
                        <Form className="me-2">
                            <Button className={`text-${theme.leters}`} onClick={() => i18n.changeLanguage('en')} variant={theme.secondary} id="en__button">EN</Button>
                            <Button className={`text-${theme.leters}`} onClick={() => i18n.changeLanguage('es')} variant={theme.secondary} id="es__button">ES</Button>
                        </Form>
                        <Form.Check 
                            className="me-5"
                            onClick={changeTheme}
                            type="switch"
                            id="custom-switch"
                            label={theme.light === 'light' ? 'Dark' : 'Light'}
                        />
                        <h1 className="ps-5 ms-5">w-Network</h1>
                    </Container>
                    
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll" className="me-4 pe-3">
                        {info?<Navbar.Brand className={`text-${theme.leters}`} href="/user">{info.username}</Navbar.Brand>:''}
                        <Nav className="me-auto">
                            <Nav.Link className={`text-${theme.leters}`} href="/user/page">{t('header.profile')}</Nav.Link>
                            <Nav.Link className={`text-${theme.leters}`} href="">{t('header.notifications')}</Nav.Link>
                            <Nav.Link className={`text-${theme.leters}`} href="">{t('header.settings')}</Nav.Link>
                            <Nav.Link className={`text-${theme.leters}`} href="/users">{t('header.search')}</Nav.Link>
                        </Nav>
                    </Navbar.Collapse> 
                </Container>
            </Navbar>
        </React.Fragment>        
    )    
}