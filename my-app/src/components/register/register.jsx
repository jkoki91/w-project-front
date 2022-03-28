import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './style.css';
import { useTranslation } from "react-i18next";
import React, { useContext, useState } from 'react';
import { themeContext } from '../../context/theme-context';
// import { Outlet } from 'react-router-dom';



function Register({onAction}) {
    const [t, i18n] = useTranslation('global');
    let [theme, updateTheme, changeTheme] = useContext(themeContext);
    // let [userData, updateUserData] = useState([])
    const handlerOnSubmit = e => {
        e.preventDefault()
        const user = {
            name: e.target.name.value,
            username: e.target.username.value,
            email: e.target.email.value,
            password: e.target.password.value,
            age: 25,
            img:'',
            follow:[],
            followers:[]
        }
        console.log(user)
        fetch('http://localhost:4000/auth/register', {
            method: 'POST',
            body: JSON.stringify(user),
            headers: { 'Content-Type': 'application/json' }
        })
            .then(c => c.json())
            .then((r) => {
                // updateUserData(...userData, user)
                console.log(r)
            })
    }
    return (
        <React.Fragment>
            <Form onSubmit={handlerOnSubmit}>
                <FloatingLabel controlId="floatingName" label={t("register.name")} className="all__input">
                    <Form.Control type="text" placeholder="name" name='name' />
                </FloatingLabel>

                <FloatingLabel controlId="floatingUserName" label={t("register.userName")} className="all__input">
                    <Form.Control type="text" placeholder="user name" name='username' />
                </FloatingLabel>

                <FloatingLabel
                    controlId="floatingInput" label={t("register.email")} className="all__input" >
                    <Form.Control type="email" placeholder="name@example.com" name='email' />
                </FloatingLabel>

                <FloatingLabel controlId="floatingPassword" label={t("register.password")} className="all__input">
                    <Form.Control type="password" placeholder="Password" name='password' />
                </FloatingLabel>
                <Button type="submit" onClick={onAction} variant={theme.primary} className="all__input">{t("register.register")}</Button>{' '}
                {/* <Outlet></Outlet> */}
            </Form>
        </React.Fragment>
    )
}

export default Register;