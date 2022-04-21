import { Outlet, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";
import MainUserCard from "../../components/main-user-card/main-user-card";
import Header from "../../components/header/header";
import Post from "../../components/post/post";
import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/esm/Container";
// import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { themeContext } from "../../context/theme-context";

function UserHome() {
    const navigate = useNavigate();
    // let [info, updateInfo] = useState([]);
    let [theme, updateTheme, changeTheme, token, updateToken, info, updateInfo] = useContext(themeContext);
    useEffect(() => {
        fetch('http://localhost:4000/users', {
            method: 'GET',
            headers: { 'Authorization': `Bearer ${token}` }
        })
            .then(j => j.json())
            .then(data => {
                // console.log(data)
                updateInfo(data)
            })
    }, [])

    const [infoPosts, updateInfoPosts] = useState([])
    useEffect(() => {
        if (info) {
            //     console.log(info.follow)
            info.follow.map((a, i) => {
                setTimeout(() => {
                    fetch(`http://localhost:4000/users/users/info/${a}`, {
                        method: 'GET',
                        headers: { 'Authorization': `Bearer ${token}` }
                    })
                        .then(j => j.json())
                        .then(datas => {
                            // console.log(datas[0].username)
                            // console.log(datas[0].posts)
                            if (datas[0].posts) {
                                fetch(`http://localhost:4000/post/follow/${datas[0].posts}`, {
                                    method: 'GET',
                                    headers: { 'Authorization': `Bearer ${token}` }
                                })
                                    .then(j => j.json())
                                    .then(data => {
                                        console.log(data)
                                        console.log(data.posts)
                                        data.posts.forEach(e => {
                                            let obj = {
                                                title: e.title,
                                                text: e.text,
                                                name: data.name,
                                                img: e.img
                                            }
                                            updateInfoPosts((infoPosts) => [...infoPosts, obj])
                                        });
                                        
                                    })
                            }
                        })
                }, i * 700)
            })
        } else (console.log('todavia no'))
    }, [info])


    return (
        <React.Fragment >
            <Header></Header>
            <h1>ESTO ES LA PAGINA DE USUARIO</h1>
            <Container className="d-flex flex-row">
                <MainUserCard></MainUserCard>
                <Container className="col-md-8">
                    {infoPosts ?
                        // console.log(infoPosts)
                        infoPosts.map((a,i)=>
                            // console.log(a.title,a.text,a.img)
                            <Post key={i} title={a.title} text={a.text} img={a.img} name={a.name}></Post>
                        )                        
                        : 'cargando'}
                </Container>
            </Container>
        </React.Fragment>
    )
}

export default UserHome;