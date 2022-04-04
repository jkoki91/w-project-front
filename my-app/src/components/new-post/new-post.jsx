import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
// import './style.css';
import { useTranslation } from "react-i18next";
import React, { useContext, useState, useEffect } from 'react';
import { themeContext } from '../../context/theme-context';


function NewPost(props) {
    // const [t, i18n] = useTranslation('global');
    let [theme, updateTheme, changeTheme] = useContext(themeContext);

    const token = localStorage.getItem('access_token')
    const [info, updateInfo] = useState()
    const [uploadedFile, setUploadedFile] = useState('');

    useEffect(() => { // Aqui se obtiene el ID de la coleccion de publicaciones para subir la publicación al sitio adecuado
        fetch('https://immense-ridge-09331.herokuapp.com/users/posts', {
            method: 'GET',
            headers: { 'Authorization': `Bearer ${token}` }
        })
            .then(j => j.json())
            .then(data => {
                console.log(data)
                updateInfo(data)
            })
    }, [])
    info ? console.log(info._id) : console.log('cargando')
    const handlerOnSubmit = e => {
        e.preventDefault()

        const token = localStorage.getItem('access_token')
        const formData = new FormData(e.target);
        console.log("Form submitted")
        fetch(`https://immense-ridge-09331.herokuapp.com/post/posts/${info._id}`, { //aqui se añade un post al array de publicaciones, hay que modificarlo para que traiga el array y le haces un push
            method: 'PATCH',
            body: formData,
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then(r => {
                r.ok ? console.log('todo ok') : console.log('KO')
                console.log(formData)
            })
            //aqui era donde se añadía la id de la coleccion de posts, pero esto ha que hacerlo al crear el usuario
        // console.log(props.posts)
        // const setField = {
        //     data: props.posts,
        // }
        // console.log(setField)
        // fetch(`https://immense-ridge-09331.herokuapp.com/users/posts/${props.userId}`, {
        //     method: 'PATCH',
        //     body: JSON.stringify(setField),
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'Authorization': `Bearer ${token}`
        //     }
        // })
        //     .then(j => j.json())
        //     .then(d => {
        //         console.log(d)
        //         console.log('HOla')
        //     })
    }

    function handleUploadedFile(e) {
        setUploadedFile(e.target.value);
    }
    return (
        <React.Fragment>
            <Form onSubmit={handlerOnSubmit} encType="multipart/form-data" id="form">
                <FloatingLabel controlId="floatingName" label="title" className="all__input">
                    <Form.Control type="text" placeholder="Title" name='title' />
                </FloatingLabel>
                <FloatingLabel controlId="floatingUserName" label="text" className="all__input">
                    <Form.Control type="text" placeholder="text" name='text' />
                </FloatingLabel>

                <input
                    type="file"
                    name="file"
                    value={uploadedFile}
                    onChange={handleUploadedFile}
                    required
                />
                <Button type="submit" onClick={()=>{}} variant={theme.primary} className="all__input">POST</Button>{' '}
                {/* <Outlet></Outlet> */}
            </Form>
        </React.Fragment>
    )

}

export default NewPost;