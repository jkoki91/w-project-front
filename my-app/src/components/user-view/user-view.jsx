import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/esm/Button';
import { useContext } from 'react';
import { themeContext } from '../../context/theme-context';
import { useEffect } from 'react';

function UserViewCard(props) {
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
    const handlerClick = () => {
        // console.log(info.follow)
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
        <Card className='d-flex flex-row mt-2' style={{ width: '28rem' }}>
            <Card.Img style={{ width: '40%' }} variant="top" src={props.img} />
            <Card.Body style={{ width: '60%' }}>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>
                    {props.username}
                </Card.Text>
                <Button onClick={handlerClick} variant="primary">Follow</Button>
            </Card.Body>
        </Card>
    )
}

export default UserViewCard;