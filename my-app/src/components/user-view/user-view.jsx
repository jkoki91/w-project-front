import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/esm/Button';
import { useContext, useState } from 'react';
import { themeContext } from '../../context/theme-context';
import { useEffect } from 'react';
import { Image } from "react-bootstrap";
import avatar from '../../assets/pictures/blank-profile.webp';

function UserViewCard(props) {
    let [theme, updateTheme, changeTheme, token, updateToken, info, updateInfo] = useContext(themeContext);
    let [disp,setDisp]=useState()
    let [disp2,setDisp2]=useState('none')

    useEffect(() => {
        fetch('http://localhost:4000/users', {
        // fetch('https://mysterious-retreat-85632.herokuapp.com/users', {
            method: 'GET',
            headers: { 'Authorization': `Bearer ${token}` }
        })
            .then(j => j.json())
            .then(data => {
                console.log(data)
                updateInfo(data)
            })
    }, [])
    const handlerClick = () => {
        // console.log(info.follow)
        setDisp('none')
        setDisp2()
        const idFollow = props.id
        // console.log(idFollow) 
        info.follow.push(idFollow)
        const followArr = info.follow
        console.log(followArr)
        const setField = {
            data: followArr,
        }
        console.log(setField)
        fetch(`http://localhost:4000/users/follow/${info._id}`, {
        // fetch(`https://mysterious-retreat-85632.herokuapp.com/users/follow/${info._id}`, {    
            method: 'PATCH',
            body: JSON.stringify(setField),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
            .then(j => j.json())
            .then(d => {
                console.log(d)
            })

        const followersArr = props.followers
        followersArr.push(info.id)
        const setField2 = {
                data: followersArr,
            }
            
        fetch(`http://localhost:4000/users/followers/${props.id}`, {
        // fetch(`https://mysterious-retreat-85632.herokuapp.com/users/followers/${props.id}`, {
            method: 'PATCH',
            body: JSON.stringify(setField2),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
            .then(j => j.json())
            .then(d => {
                console.log(d)
            }) 
    }
    return (
        <Card className='d-flex flex-row mt-2 mb-3 p-2' style={{ width: '28rem' }}>
            {props.img?
            // <Card.Img style={{ width: '35%' }} variant="top" src={`https://mysterious-retreat-85632.herokuapp.com/static/${props.img}`}/>:
            <Card.Img style={{ width: '35%' }} variant="top" src={`http://localhost:4000/static/${props.img}`}/>:
            <Card.Img style={{ width: '35%' }} variant="top" src={avatar}/>}
            <Card.Body className='ms-5' style={{ width: '60%' }}>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>
                    {props.username}
                </Card.Text>
                <Button onClick={handlerClick} className={`d-${disp}`} variant="primary">Follow</Button>
                <Button onClick={()=>{}} className={`d-${disp2}`} variant="primary">UnFollow</Button>
            </Card.Body>
        </Card>
    )
}

export default UserViewCard;