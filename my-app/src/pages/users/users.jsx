import React from "react"
import Header from "../../components/header/header"
import UserViewCard from "../../components/user-view/user-view";
import InputGroup from 'react-bootstrap/InputGroup'
import Button from "react-bootstrap/esm/Button";
import FormControl from 'react-bootstrap/FormControl'
import { useState } from "react";
import Form from 'react-bootstrap/Form'


function Users() {
    const token = localStorage.getItem('access_token')
    const [users, updateUsers] = useState([])
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
            <h1>Esto es la pagina del listado de usuarios</h1>
            <InputGroup className="mb-3">
                <Form onSubmit={handleSubmit} className="d-flex flex-row">
                    <FormControl
                        name='search'
                        placeholder="Recipient's username"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                    />
                    <Button type="submit" variant="outline-secondary" id="button-addon2">
                        Search
                    </Button>
                </Form>
            </InputGroup>
            {users.length !== 0 ?
                users.map((a, i) => { return (<UserViewCard key={i} id={a._id} followers= {a.followers} name={a.name} img={a.img} username={a.username}></UserViewCard>) })
                :
                <h1>Busque un usuario</h1>
            }
        </React.Fragment>
    )
}

export default Users;