import React from "react";
import { Container } from "react-bootstrap";
import Footer from "../../components/footer/footer";
import LandingHeader from "../../components/landing-header/landing-header";
import { useContext } from "react";
import { themeContext } from "../../context/theme-context";
import { useTranslation } from "react-i18next";
import "./style.css"


export default function NotFound(){
    const [t, i18n] = useTranslation('global');
    let [theme, updateTheme, changeTheme, token, updateToken, info, updateInfo] = useContext(themeContext);
    return(
        <React.Fragment>
            <LandingHeader></LandingHeader>
            <Container fluid className={`p-5 bg-${theme.background} text-${theme.leters}`} id="main__notFound">
                <h1>Error 404: Not found</h1>
            </Container>
            <Footer></Footer>
        </React.Fragment>
    )
}