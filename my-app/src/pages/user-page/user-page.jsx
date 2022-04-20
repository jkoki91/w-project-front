import Button from "react-bootstrap/esm/Button";
import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import { Card } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import { useContext } from "react";
import { themeContext } from "../../context/theme-context";
import './style.css'
import { Col } from "react-bootstrap";
import { Image } from "react-bootstrap";
import avatar from '../../assets/pictures/blank-profile.webp';
import ListGroup from 'react-bootstrap/esm/ListGroup';
import React from "react";
import Header from "../../components/header/header";
import Post from "../../components/post/post";
import UploadFiles from "../../components/upload-files/upload-files";
import NewPost from "../../components/new-post/new-post";

function UserPage() {
    const navigate = useNavigate();
    let [theme, updateTheme, changeTheme, token, updateToken, info, updateInfo] = useContext(themeContext);
    // let [info, updateInfo] = useState()
    // console.log(token);
    useEffect(() => {
        fetch('http://localhost:4000/users', {
            method: 'GET',
            headers: { 'Authorization': `Bearer ${token}` }
        })
            .then(j => j.json())
            .then(data => {
                console.log(data)
                updateInfo(data)

            })
    }, [])//obtener informacion del usuario
    const handleDelete = () => {
        fetch('http://localhost:4000/users/crud', {
            method: 'DELETE',
            headers: { 'Authorization': `Bearer ${token}` }
        })
            .then(j => j.json())
            .then(d => {
                console.log(d)
                localStorage.removeItem('access_token')
                navigate('/')
            })
    }//dar de baja al usuario
    const handleCloseSesion = () => {
        localStorage.removeItem('access_token')
        updateToken('')
        navigate('/logout')
    }//cerrar sesion

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const [campo, setCampo] = useState('');
    const modal = () => {
        if (campo !== 'img') {
            return (
                <Modal centered show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modifique su información</Modal.Title>
                    </Modal.Header>
                    <Form className="d-flex flex-column" onSubmit={handleChange}>
                        <Modal.Body>
                            <FormControl
                                type="search"
                                placeholder={`inserte nuevos datos`}
                                className="me-2"
                                aria-label="Search"
                                name='data'
                            />
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="primary" type="submit" >
                                Save Changes
                            </Button>
                        </Modal.Footer>
                    </Form>
                </Modal>
            )
        } else {
            return (
                <Modal centered show={show} className="container-fluid" onHide={handleClose}>
                    <Container className="m-2 p-2">
                        <UploadFiles onAction={handleAction}></UploadFiles>
                    </Container>

                </Modal>
            )

        }
    }//modales para modificar campos
    const handleAction = () => {
        setShow(false)
        window.location.reload(true);
    }
    const handleChange = e => {
        e.preventDefault()
        const setField = {
            data: e.target.data.value,
        }
        console.log(setField)
        fetch(`http://localhost:4000/users/${campo}/${info._id}`, {
            method: 'PATCH',
            body: JSON.stringify(setField),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
            .then(j => j.json())
            .then(d => {
                console.log(d)
                console.log('HOla')
                setShow(false)
                window.location.reload(true);
                // navigate('/user/page')
            })
    } //modificar un campo

    const handleShow1 = () => {
        setShow(true)
        setCampo('name')
    }
    const handleShow2 = () => {
        setShow(true)
        setCampo('username')
    }
    const handleShow3 = () => {
        setCampo('img')
        setShow(true)
        console.log('prueba')

    }
    const handleShow4 = () => {
        setShow(true)
        setCampo('age')
    }
    const [infoPosts, updateInfoPosts] = useState()
    useEffect(() => { // Aqui se obtiene el ID de la coleccion de publicaciones para subir la publicación al sitio adecuado
        fetch('http://localhost:4000/users/posts', {
            method: 'GET',
            headers: { 'Authorization': `Bearer ${token}` }
        })
            .then(j => j.json())
            .then(data => {
                console.log(data)
                updateInfoPosts(data)
            })
    }, [])

    const [showPost, setShowPost] = useState(false);
    const handleClosePost = () => setShowPost(false);
    const modalPost = () => {
        return (
            <Modal centered show={showPost} onHide={handleClosePost}>
                <Modal.Header closeButton>
                    <Modal.Title>Cree su nuevo post</Modal.Title>
                    <NewPost userId={info._id} posts={info.posts}></NewPost>
                </Modal.Header>

            </Modal>
        )
    }
    const handlePost = () => {
        setShowPost(true) 
    }


    return (
        info ?
            <React.Fragment >
                <Header></Header>
                <h1>ESTO ES LA PAGINA DEL PERFIL DEL USUARIO</h1>
                <Container className="d-flex flex-row">
                    {modal()}
                    {modalPost()}
                    <Col md={4}>
                        <Card id='card__container'>
                            <Container className={`decoration__container bg-${theme.primary}`}></Container>
                            {info?info.img!==''?<Card.Img as={() => <Image roundedCircle src={`http://localhost:4000/static/${info.img}`} className='avatar__image'></Image>} />:<Card.Img as={() => <Image roundedCircle src={avatar} className='avatar__image'></Image>} />:'cargando'}
                            <Card.Body className='mt-3 d-flex flex-column justify-content-center align-items-center'>
                                <Button className="py-0" onClick={handleShow3}>Editar imagen</Button>
                                {info ? <Card.Title>{info.name}</Card.Title> : ''}
                                <Card.Text>
                                    Breve descripción del usuario.Breve descripción del usuario.Breve descripción del usuario.
                                </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <Container fluid className="d-flex flex-row align-items-center gap-3 my-1">
                                    <h6 className="m-0">Nombre:</h6><p className="m-0">{info.name}</p><Button className="py-0" onClick={handleShow1}>Editar</Button>
                                </Container>
                                <Container fluid className="d-flex flex-row align-items-center gap-3 my-1">
                                    <h6 className="m-0">Nombre de usuario:</h6><p className="m-0">{info.username}</p><Button className="py-0" onClick={handleShow2}>Editar</Button>
                                </Container>
                                <Container fluid className="d-flex flex-row align-items-center gap-3 my-1">
                                    <h6 className="m-0">Email:</h6><p className="m-0">{info.email}</p>
                                </Container>
                                <Container fluid className="d-flex flex-row align-items-center gap-3 my-1">
                                    <h6 className="m-0">Edad:</h6><p className="m-0">{info.age}</p><Button className="py-0" onClick={handleShow4}>Editar</Button>
                                </Container>
                            </ListGroup>
                            <Card.Body className='d-flex flex-row'>
                                <Button className="mx-2" onClick={handleDelete}>Eliminar usuario</Button>
                                <Button className="mx-2" onClick={handleCloseSesion}>Cerrar sesión</Button>
                            </Card.Body>
                        </Card>
                    </Col >
                    <Container className="col-md-8">
                        <Button className="mx-2" onClick={handlePost}>Nueva publicación</Button>
                        {infoPosts?
                            infoPosts.posts.map((a,i)=>
                                // console.log(a.title,a.text,a.img)
                                <Post key={i} title={a.title} text={a.text} img={a.img}></Post>
                            )                        
                        :'cargando'}
                    </Container>
                </Container >
            </React.Fragment>
            : 'cargando'
    )//el return de la página
}

export default UserPage;