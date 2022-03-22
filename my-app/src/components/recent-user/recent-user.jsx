import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import image from '../../assets/pictures/addUser1.PNG'
import './style.css'
import Container from 'react-bootstrap/esm/Container';
import { useTranslation } from "react-i18next";

export default function RecentUser() {
    const [t,i18n] = useTranslation('global');
    return (
        <Card className='bg-primary card__container' style={{ width: '160px', height:'206px'}}>
            <Container className='card__image' style={{ width: '100%', height:'85%'}}>
                <Card.Img variant="top" style={{ width: '50px', height:'50px'}} src={image} />
            </Container>
            <Card.Body className='bg-primary d-flex justify-content-center align-items-center'  style={{ width: '100%', height:'15%'}}>
                <Card.Title className='fs-6'>{t('recent')}</Card.Title>
            </Card.Body>
        </Card>
    )
}