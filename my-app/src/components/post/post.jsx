import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/esm/Button';
import {Col} from 'react-bootstrap'

function Post() {
    let posts = ['post1', 'post2', 'post3', 'post4', 'post5', 'post6']
    return (
        <>
            {posts.map((a,i) =>
                <Col key={i} md={12}>
                    <Card className='m-0'>
                        <Card.Header as="h5">Featured</Card.Header>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>{a}</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
            )}
        </>
    )
}

export default Post;