import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/esm/Button';
import {Col} from 'react-bootstrap'

function Post(props) {
    let posts = ['post1', 'post2', 'post3', 'post4', 'post5', 'post6']
    return (
        <>
            {/* {posts.map((a,i) => */}
                <Col md={12}>
                    <Card className='m-0'>
                        <Card.Header as="h5">{props.name}</Card.Header>
                        <Card.Img variant="top" src={`http://localhost:4000/static/${props.img}`} />
                        <Card.Body>
                            <Card.Title>{props.title}</Card.Title>
                            <Card.Text>
                                {props.text}
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
            {/* )} */}
        </>
    )
}

export default Post;