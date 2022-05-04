import React, { useState } from 'react';
import { useContext } from "react";
import { themeContext } from "../../context/theme-context";



function UploadFiles({ onAction }) {
    let [theme, updateTheme, changeTheme, token, updateToken, info, updateInfo] = useContext(themeContext);
    const [uploadedFile, setUploadedFile] = useState('');
    const [fileTitle, setFileTitle] = useState('');
    const [fileName, setFileName] = useState('');

    function handleFormSubmittion(e) {
        e.preventDefault();
        const token = localStorage.getItem('access_token')
        const formData = new FormData(e.target);
        // const fullPath = e.target.file.value;
        // if (fullPath) {
        //     const startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
        //     setFileName(fullPath.substring(startIndex));
        //     if (fileName !== '') {
        //         if (fileName.indexOf('\\') === 0 || fileName.indexOf('/') === 0) {
        //             setFileName(fileName.substring(1));
        //         }
        //         alert(fileName);
        //     }
        // }
        // console.log(e.target.file.value)
        // do something
        console.log("Form submitted")
        // new line added
        fetch(`http://localhost:4000/users/upload/${info._id}`, {
        // fetch(`https://mysterious-retreat-85632.herokuapp.com/users/upload/${info._id}`, {
            method: 'PATCH',
            body: formData,
            headers: {
                // 'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${token}`
            }
        })
            .then(r => {
                r.ok ? console.log('todo ok') : console.log('KO')
                console.log(formData)

            })
    }

    function handleFileTitle(e) {
        setFileTitle(e.target.value);
    }

    function handleUploadedFile(e) {
        setUploadedFile(e.target.value);
    }

    return (
        <React.Fragment>
            <h1>File upload</h1>
            <hr></hr>
            <form
                encType="multipart/form-data"
                onSubmit={handleFormSubmittion}
                id="form"
            >
                <input
                    type="file"
                    name="file"
                    value={uploadedFile}
                    onChange={handleUploadedFile}
                    required
                />
                <br />
                <br />

                <label>File title:</label><br />
                <input
                    type="text"
                    placeholder="Enter file title"
                    name="fileTitle"
                    value={fileTitle}
                    onChange={handleFileTitle}
                    required
                />
                <br />
                <br />

                <button onClick={onAction} type="submit">Submit Form</button>
            </form>
        </React.Fragment>
    );
}

export default UploadFiles;