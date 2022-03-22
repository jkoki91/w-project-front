import React from "react";
import Login from "../../components/login/login";
import Register from "../../components/register/register";
import Container from "react-bootstrap/Container";
import { useContext } from "react";
import { themeContext } from "../../context/theme-context";
import RecentUser from "../../components/recent-user/recent-user";
import { useTranslation } from "react-i18next";
import LandingHeader from "../../components/landing-header/landing-header";
import'./style.css'
import PageInfo from "../../components/page-info/page-info";

function LandinPage() {
    let [theme, updateTheme, changeTheme] = useContext(themeContext);
    const [t,i18n] = useTranslation('global');
    
    return (
        <React.Fragment>
            <LandingHeader></LandingHeader>
            <Container fluid className={`bg-${theme.light} d-flex flex-rown`}>
                <Container className="m-0">
                    <h1>wallet-management</h1>
                    <h3>{t('landing.title')}</h3>
                    <p>{t('landing.addUser')}</p>
                    <RecentUser></RecentUser>
                </Container>
                <Container className="d-flex flex-column align-items-center justify-content-center m-0">
                    <Login></Login>
                    <p>{t('landing.company')}</p>
                </Container>
            </Container>
            <PageInfo></PageInfo>
        </React.Fragment>

    )
}

export default LandinPage;