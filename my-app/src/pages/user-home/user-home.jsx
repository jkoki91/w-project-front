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
    let [info, updateInfo] = useState([]);

    return (
        <React.Fragment >
            <Header></Header>
            <h1>ESTO ES LA PAGINA DE USUARIO</h1>
            <Container className="d-flex flex-row">
                <MainUserCard></MainUserCard>
                <Container className="col-md-8">
                    <Post></Post>
                </Container>
            </Container>

        </React.Fragment>
    )
}

export default UserHome;