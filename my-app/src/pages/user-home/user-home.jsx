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
import { useTranslation } from "react-i18next";
import "./style.css"

function UserHome() {
    const navigate = useNavigate();
    const [t, i18n] = useTranslation('global');
    // let [info, updateInfo] = useState([]);
    let [theme, updateTheme, changeTheme, token, updateToken, info, updateInfo] = useContext(themeContext);
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

    const [infoPosts, updateInfoPosts] = useState([])
    useEffect(() => {
        if (info) {
            //     console.log(info.follow)
            info.follow.map((a, i) => {
                setTimeout(() => {
                    // fetch(`http://localhost:4000/users/users/info/${a}`, {
                    fetch(`https://mysterious-retreat-85632.herokuapp.com/users/users/info/${a}`, {    
                        method: 'GET',
                        headers: { 'Authorization': `Bearer ${token}` }
                    })
                        .then(j => j.json())
                        .then(datas => {
                            // console.log(datas[0].username)
                            // console.log(datas[0].posts)
                            if (datas[0].posts) {
                                // fetch(`http://localhost:4000/post/follow/${datas[0].posts}`, {
                                fetch(`https://mysterious-retreat-85632.herokuapp.com/post/follow/${datas[0].posts}`, {    
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
        <Container fluid className={`p-0 gap-4 bg-${theme.background}`} id="main">
            <Header></Header>
            <Container fluid className="d-flex justify-content-end pe-5">
                <h3 bg={`${theme.header}`} className={`text-${theme.leters} ms-5 mt-4 `}>{t('home.hello')} {info?info.name:''} {t('home.posts')}</h3>
            </Container>
            <Container fluid className={`d-flex gap-4 p-4 flex-row bg-${theme.background}`}>
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
        </Container >
    )
}

export default UserHome;