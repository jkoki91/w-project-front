import React from "react"
import Header from "../../components/header/header"
import UserViewCard from "../../components/user-view/user-view";
import InputGroup from 'react-bootstrap/InputGroup'
import Button from "react-bootstrap/esm/Button";
import FormControl from 'react-bootstrap/FormControl'
import { useState } from "react";
import Form from 'react-bootstrap/Form'
import { Container } from "react-bootstrap";
import { useContext } from "react";
import { themeContext } from "../../context/theme-context";
import { useTranslation } from "react-i18next";
import "./style.css"


function Users() {
    const token = localStorage.getItem('access_token')
    const [users, updateUsers] = useState([])
    const [t, i18n] = useTranslation('global');
    let [theme, updateTheme, changeTheme] = useContext(themeContext);
    const handleSubmit = e => {
        e.preventDefault()
        const search = e.target.search.value
        console.log(search)

        fetch(`http://localhost:4000/users/users/${search}`, {
            method: 'GET',
            headers: { 'Authorization': `Bearer ${token}` }
        })
            .then(j => j.json())
            .then(data => {
                console.log(data)
                updateUsers(data)
            })
    }

    return (
        <React.Fragment>

            <Header></Header>
            <Container fluid className={`d-flex flex-row px-5 pt-5 bg-${theme.background}`} id="page_container">
                <Container className="ms-5">
                    <h1>Sigue a las personas que más te interesen</h1>
                    <InputGroup className="mb-3">
                        <Form onSubmit={handleSubmit} className="d-flex flex-row pt-3 ">
                            <FormControl
                                name='search'
                                placeholder="Recipient's username"
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                            />
                            <Button type="submit" variant="outline-secondary" id="button-addon2" className="ms-2">
                                Search
                            </Button>
                        </Form>
                    </InputGroup>
                </Container>
                <Container>
                    {users.length !== 0 ?
                        users.map((a, i) => { return (<UserViewCard  key={i} id={a._id} followers={a.followers} name={a.name} img={a.img} username={a.username}></UserViewCard>) })
                        :
                        <h1>¿Aún no sigues a nadie?</h1>
                    }
                </Container>
            </Container>
        </React.Fragment>
    )
}

export default Users;