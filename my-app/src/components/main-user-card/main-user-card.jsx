import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/esm/Container';
import ListGroup from 'react-bootstrap/esm/ListGroup';
import ListGroupItem from 'react-bootstrap/esm/ListGroupItem';
import avatar from '../../assets/pictures/blank-profile.webp';
import './style.css';
import { useContext, useEffect, useState } from 'react';
import { useTranslation } from "react-i18next";
import { themeContext } from '../../context/theme-context';
import Image from 'react-bootstrap/Image'
import {Col} from 'react-bootstrap'

export default function MainUserCard() {
    const [t, i18n] = useTranslation('global');
    let [theme, updateTheme, changeTheme] = useContext(themeContext);
    const token = localStorage.getItem('access_token')
    const [info, updateInfo] = useState()
    useEffect(() => {
        // fetch('http://localhost:4000/users', {
        fetch('https://mysterious-retreat-85632.herokuapp.com/users', {
            method: 'GET',
            headers: { 'Authorization': `Bearer ${token}` }
        })
            .then(j => j.json())
            .then(data => {
                // console.log(data)
                updateInfo(data)
            })
    }, [])
    console.log(info)
    return ( 
        <Col md={4}>
            <Card className='card__container' >
                <Container className={`decoration__container bg-${theme.header}`} id="main__decoration__container"></Container>
                {/* {info?info.img!==''?<Card.Img as={() => <Image roundedCircle src={`http://localhost:4000/static/${info.img}`} className='avatar__image'></Image>} />:<Card.Img as={() => <Image roundedCircle src={avatar} className='avatar__image'></Image>} />:'cargando'} */}
                {info?info.img!==''?<Card.Img as={() => <Image roundedCircle src={`https://mysterious-retreat-85632.herokuapp.com/static/${info.img}`} className='avatar__image'></Image>} />:<Card.Img as={() => <Image roundedCircle src={avatar} className='avatar__image'></Image>} />:'cargando'}
                {/* <Card.Img as={() => <Image roundedCircle src={info?`http://localhost:4000/static/${info.img}`:avatar} className='avatar__image'></Image>} /> */}
                <Card.Body className='mt-3 d-flex flex-column justify-content-center align-items-center'>
                    {info ? <Card.Title className='mt-3'>{info.name}</Card.Title> : ''}
                    <Card.Text className='ms-3'>
                        Breve descripción del usuario.Breve descripción del usuario.Breve descripción del usuario.
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem className='ms-3'>{t('main-card.follow')}: {info?info.follow.length:''}</ListGroupItem>
                    <ListGroupItem className='ms-3'>{t('main-card.followers')}: {info?info.followers.length:''}</ListGroupItem>
                </ListGroup> 
                <Card.Body className='d-flex flex-row'>
                    <Card.Text className='me-2 mb-0 ms-3'>
                        {t('main-card.web')}
                    </Card.Text>
                    <Card.Link href="#">Link</Card.Link>
                </Card.Body>
            </Card>
        </Col >
    )
}