import Button from "react-bootstrap/esm/Button";
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

function UserPage() {
    const navigate = useNavigate();
    // const handlerReg = () => navigate('register');
    let [info, updateInfo] = useState({})
    let token = localStorage.getItem('access_token')
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
    const handleDelete = () => {
        fetch('http://localhost:4000/users/crud', {
            method: 'DELETE',
            headers: { 'Authorization': `Bearer ${token}` }
        })
            .then(j => j.json())
            .then(d => {
                console.log(d)
                localStorage.removeItem('access_token')
                navigate('/')
            })
    }
    const handleClose = () =>{ 
        localStorage.removeItem('access_token')
        navigate('/')
    }

    const handleEdit = () =>{ 
        navigate('/edit')
    }
    return (
        <>
            {info ?
                <>
                    <h1>ESTO ES LA PAGINA DEL PERFIL DEL USUARIO</h1>
                    <p>Nombre: {info.name}</p>
                    <p>Nombre de usuario: {info.username}</p>
                    <p>Email: {info.email}</p>
                    <p>Edad: {info.age}</p>
                    <Button onClick={handleDelete}>Eliminar usuario</Button>
                    <Button onClick={handleClose}>Cerrar sesión</Button>
                    <Button onClick={handleEdit}>Editar información</Button>
                </>
                : 'cargando'}
        </>
    )
}

export default UserPage;