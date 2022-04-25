import './style.css';
import Container from 'react-bootstrap/esm/Container';
import { useTranslation } from "react-i18next";
import Nav from 'react-bootstrap/Nav';
import { useContext } from "react";
import { themeContext } from "../../context/theme-context";


export default function Footer(){
    const [t, i18n] = useTranslation('global');
    let [theme, updateTheme, changeTheme] = useContext(themeContext);
    
    return(
        <Container className={`bg-${theme.header} m-0 p-3 d-flex flex-row gap-1 justify-content-center`} fluid>
            <p className={`m-0 p-0 text-${theme.leters}`}>{t('footer.consult')}</p>
            <Nav.Link href="privacy" className='m-0 p-0'>{t('footer.priv')}</Nav.Link>
            <p className={`m-0 p-0 text-${theme.leters}`}>{t('footer.and')}</p>
            <Nav.Link href="cookies" className='m-0 p-0'>{t('footer.cookies')}</Nav.Link>
        </Container>
    )
}