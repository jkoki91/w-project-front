import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './style.css';
import { useTranslation } from "react-i18next";
import React, { useContext, useState } from 'react';
import { themeContext } from '../../context/theme-context';
// import { Outlet } from 'react-router-dom';



function Edit() {
    const [t, i18n] = useTranslation('global');
    let [theme, updateTheme, changeTheme] = useContext(themeContext);
    let token = localStorage.getItem('access_token')
    let [userData, updateUserData] = useState([])
    let [info, updateInfo] = useState({})
    console.log(token);
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
    const handlerOnSubmit = e => {
        // e.preventDefault()
        const user = {
            name: e.target.name.value,
            username: e.target.username.value,
            email: e.target.email.value,
            password: e.target.password.value,
            age: 25
        }
        // console.log(user)
        fetch('http://localhost:4000/users/crud', {
            method: 'PATCH',
            body: JSON.stringify(user),
            headers: {  'Authorization': `Bearer ${token}`  }
        })
            .then(c => c.json())
            .then((r) => {
                updateUserData(...userData, user)
                console.log(r)
            })
    }
    return (
        <React.Fragment>

            <button onClick={changeTheme}>Change</button>
            <div className="register__container">
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

                    <Button variant={theme.primary} className="all__input">{t("register.login")}</Button>
                    <Button type="submit" variant={theme.primary} className="all__input">{t("register.register")}</Button>{' '}
                    {/* <Outlet></Outlet> */}
                </Form>
            </div>
        </React.Fragment>
    )
}

export default Edit;