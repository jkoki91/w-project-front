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
                console.log(data)
                updateInfo(data)
            })
    }, [])
    // info?console.log(info.follow):console.log('cargando')
    const [infoPosts, updateInfoPosts] = useState()
    useEffect(() => { 
        // if(info){
        //     console.log(info.follow)
        //     info.follow.map(a=>{

        //     })

        // }else(console.log('todavia no'))
        fetch(`http://localhost:4000/users/users/info/623f52d9e09e39b4005f93e7`, {
            method: 'GET',
            headers: { 'Authorization': `Bearer ${token}` }
        })
            .then(j => j.json())
            .then(datas => {
                console.log(datas[0])
                // updateInfoPosts(data) 
            })


        fetch(`http://localhost:4000/post/follow/6241b21c2ac91d113f312c38`, {
            method: 'GET',
            headers: { 'Authorization': `Bearer ${token}` }
        })
            .then(j => j.json())
            .then(data => {
                console.log(data)
                updateInfoPosts(data) 
            })
    }, [info])
    const [infoPosts2, updateInfoPosts2] = useState()
    // useEffect(() => { 
    //     fetch(`http://localhost:4000/post/follow/62430f9efaf2780c1af908a1`, {
    //         method: 'GET',
    //         headers: { 'Authorization': `Bearer ${token}` }
    //     })
    //         .then(j => j.json())
    //         .then(data => {
    //             // console.log(data)
    //             updateInfoPosts2(data) 
    //         })
    // }, [])

    const [infoPosts3, updateInfoPosts3] = useState()
    // useEffect(() => { 
    //     fetch(`http://localhost:4000/post/follow/62430fccfaf2780c1af908a2`, {
    //         method: 'GET',
    //         headers: { 'Authorization': `Bearer ${token}` }
    //     })
    //         .then(j => j.json())
    //         .then(data => {
    //             // console.log(data)
    //             updateInfoPosts3(data) 
    //         })
    // }, [])

    return (
        <React.Fragment >
            <Header></Header>
            <h1>ESTO ES LA PAGINA DE USUARIO</h1>
            <Container className="d-flex flex-row">
                <MainUserCard></MainUserCard>
                <Container className="col-md-8">
                    {/* {infoPosts?console.log(infoPosts.posts):console.log('cargando')} */}
                    {infoPosts?
                            infoPosts.posts.map((a,i)=>
                                // console.log(a.title,a.text,a.img)
                                <Post key={i} title={a.title} text={a.text} img={a.img}></Post>
                            )                        
                        :'cargando'}
                    {/* {infoPosts2?
                            infoPosts2.posts.map((a,i)=>
                                // console.log(a.title,a.text,a.img)
                                <Post key={i} title={a.title} text={a.text} img={a.img}></Post>
                            )                        
                        :'cargando'}
                        k
                    {infoPosts3?
                            infoPosts3.posts.map((a,i)=>
                                // console.log(a.title,a.text,a.img)
                                <Post key={i} title={a.title} text={a.text} img={a.img}></Post>
                            )                        
                        :'cargando'} */}
                    {/* <Post></Post> */}
                </Container>
            </Container>

        </React.Fragment>
    )
}

export default UserHome;