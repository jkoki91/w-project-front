import React from "react";
import Login from "../../components/login/login";
import Register from "../../components/register/register";
import Container from "react-bootstrap/Container";
import { useContext } from "react";
import { themeContext } from "../../context/theme-context";
import RecentUser from "../../components/recent-user/recent-user";
import { useTranslation } from "react-i18next";
import LandingHeader from "../../components/landing-header/landing-header";
import './style.css'
import PageInfo from "../../components/page-info/page-info";
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";

function LogOut() {
    let [theme, updateTheme, changeTheme] = useContext(themeContext);
    const [t, i18n] = useTranslation('global');

    return (
        <React.Fragment>
            <LandingHeader></LandingHeader>
            <Container fluid className={`bg-${theme.background} d-flex flex-rown`}>
                <Container className="m-0 mb-5">
                    <h1>Sesion cerrada correctamente</h1>
                    <h3>{t('landing.title')}</h3>
                    <p>{t('landing.addUser')}</p>
                    <Nav.Link Style="text-decoration: none" href="/">
                        <RecentUser></RecentUser>
                    </Nav.Link>
                </Container>
            </Container>
            <PageInfo></PageInfo>
        </React.Fragment>

    )
}

export default LogOut;