import { Outlet, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";
import MainUserCard from "../../components/main-user-card/main-user-card";
import Header from "../../components/header/header";
import Post from "../../components/post/post";
import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/esm/Container";
// import { Navigate } from "react-router-dom";

function UserHome() {
    const navigate = useNavigate();
    // const handlerReg = () => navigate('register');
    let [info, updateInfo] = useState([]);

    // useEffect(() => {
    //     fetch('http://localhost:4000/users')
    //         .then(j => j.json())
    //         .then(r => {
    //             console.log(r)
    //             updateInfo(r)
    //         })
    // }, [])
    return (
        <React.Fragment >
            <Header></Header>
            <h1>ESTO ES LA PAGINA DE USUARIO</h1>
            {/* <Button onClick={handlerReg} variant="secondary" className='button'>hola</Button>{' '} */}
            {/* <Outlet></Outlet> */}
            <Container className="d-flex flex-row">
                <MainUserCard></MainUserCard>
                <Container>
                    <Post></Post>
                </Container>
            </Container>

        </React.Fragment>
    )
}

export default UserHome;