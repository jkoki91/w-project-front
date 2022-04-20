import './style.css';
import Container from 'react-bootstrap/esm/Container';
import { useTranslation } from "react-i18next";
import Nav from 'react-bootstrap/Nav';
// import { Link } from 'react-router-dom';


export default function Footer(){
    const [t, i18n] = useTranslation('global');
    
    return(
        <Container className='bg-light p-3 d-flex flex-row gap-1 justify-content-center' fluid>
            <p className='m-0 p-0'>{t('footer.consult')}</p>
            <Nav.Link href="privacy" className='m-0 p-0'>{t('footer.priv')}</Nav.Link>
            <p className='m-0 p-0'>{t('footer.and')}</p>
            <Nav.Link href="cookies" className='m-0 p-0'>{t('footer.cookies')}</Nav.Link>
        </Container>
    )
}