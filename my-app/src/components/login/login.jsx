import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './style.css';
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import { Outlet } from 'react-router-dom';
import Container from 'react-bootstrap/esm/Container';

function Login() {
    const [t,i18n] = useTranslation('global');
    const navigate = useNavigate()
    const handlerReg = ()=> navigate('/register');
    const handleOnSubmit = e => {
        e.preventDefault()
        const user = {   
            email: e.target.email.value,
            password: e.target.password.value,
        }
        fetch('http://localhost:4000/auth/login', {
            method: 'POST',
            body: JSON.stringify(user),
            headers: { 'Content-Type': 'application/json' }
        })
            .then(d => d.json())
            .then((data) => {
                fetch('http://localhost:4000/users', {
                    method: 'GET',
                    headers: { 'Authorization': `Bearer ${data.access_token}` }
                })
                .then(r=>r.json())
                .then(info=>{
                    navigate('/user')
                }) 
                // console.log(data)
                localStorage.setItem('access_token', data.access_token);
                
            })
            
    }
    return (
        <Form onSubmit={handleOnSubmit} className='login__container'>
            <FloatingLabel controlId="floatingInput" label={t('login.email')} className="mb-3">
                <Form.Control type="email" placeholder="name@example.com" name="email"/>
            </FloatingLabel>
            <FloatingLabel controlId="floatingPassword" label={t('login.password')}>
                <Form.Control type="password" placeholder="Password" name="password"/>
            </FloatingLabel>
            <Button type="submit" variant="primary" className='button'>{t('login.login')}</Button>{' '}
            <Container className='d-flex justify-content-center'><Link to="">{t('login.pass')}</Link></Container>
            <Button onClick={handlerReg} variant="secondary" className='button'>{t('login.register')}</Button>{' '}
            {/* <Outlet></Outlet> */}
        </Form>
    )
}
export default Login;

