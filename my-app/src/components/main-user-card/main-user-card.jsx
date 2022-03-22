import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/esm/Container';
import ListGroup from 'react-bootstrap/esm/ListGroup';
import ListGroupItem from 'react-bootstrap/esm/ListGroupItem';
import avatar from '../../assets/pictures/blank-profile.webp';
import './style.css';
import { useContext } from 'react';
import { themeContext } from '../../context/theme-context';

export default function MainUserCard() {
    let [theme, updateTheme, changeTheme] = useContext(themeContext);
    return (
        <Card className='card__container' style={{ width: '18rem' }}>
            <Container className={`decoration__container bg-${theme.primary}`}></Container>
            <Card.Img src={avatar} className='avatar__image' />
            <Card.Body className='mt-3 d-flex flex-column justify-content-center align-items-center'>
                <Card.Title>Jorge Garcia Perez</Card.Title>
                <Card.Text>
                    Breve descripción del usuario.Breve descripción del usuario.Breve descripción del usuario.
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem>Personas que me siguen</ListGroupItem>
                <ListGroupItem>Personas a las que sigo</ListGroupItem>
            </ListGroup>
            <Card.Body className='d-flex flex-row'>
                <Card.Text className='me-2 mb-0'>
                    Sitio web:  
                </Card.Text>
                <Card.Link href="#">Link</Card.Link>
            </Card.Body>
        </Card>
    )
}