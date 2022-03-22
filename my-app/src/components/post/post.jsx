import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/esm/Button';


function Post() {
    let posts = ['post1','post2','post3','post4','post5','post6']
    return (
        <>
        {posts.map(a=> 
            <Card style={{ width: '18rem' }}>
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
        )}
        </>
    )
}

export default Post;