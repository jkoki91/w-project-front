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
import Footer from "../../components/footer/footer";

function LandinPage() {
    let [theme, updateTheme, changeTheme] = useContext(themeContext); 
    const [t,i18n] = useTranslation('global');
    
    return (
        <React.Fragment>
            <LandingHeader></LandingHeader>
            <Container fluid className={`bg-${theme.background} d-flex flex-rown`}>
                <Container className="m-0">
                    <h1 className={`text-${theme.leters}`}>w-Network</h1>
                    <h3 className={`text-${theme.leters}`}>{t('landing.title')}</h3>
                    <p className={`text-${theme.leters}`}>{t('landing.addUser')}</p>
                    <RecentUser></RecentUser>
                </Container>
                <Container className="d-flex flex-column align-items-center justify-content-center m-0">
                    <Login></Login>
                    <p className={`text-${theme.leters}`}>{t('landing.company')}</p>
                </Container>
            </Container>
            <PageInfo></PageInfo>
            <Footer></Footer>
        </React.Fragment>

    )
}

export default LandinPage;