import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.css'
import { Navbar } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';


function BasicExample() {
  return (

    
<Container>
<br></br>

<div>
  <h3 className='filmesFavoritos'>
    Filmes Favoritos
  </h3>
</div>

<Button variant="dark" className='botaofilme'>
  Adicionar Filmes
</Button>

  <Row>
  <Col>
  <Card>
      <Card.Img variant="top" src="https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/87/79/16/19961587.jpg" />
      <Card.Body>
        <Card.Title>Coraline</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  </Col>

    <Col>
    <Card>
      <Card.Img variant="top" src="https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/90/93/20/20120876.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  </Col>

  <Col>
  <Card>
      <Card.Img variant="top" src="https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/87/84/28/19962110.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  </Col>

  <Col>
  <Card>
      <Card.Img variant="top" src="https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/90/16/48/20083748.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  </Col>

  <Col>
  <Card>
      <Card.Img variant="top" src="https://br.web.img3.acsta.net/c_310_420/pictures/19/04/10/19/44/2904073.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  </Col>

  <Col>
  <Card>
      <Card.Img variant="top" src="https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/87/30/21/19874092.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  </Col>
</Row>
<br>
</br>

<Row>
  <Col>
  <Card>
      <Card.Img variant="top" src="https://br.web.img2.acsta.net/c_310_420/medias/nmedia/18/87/87/75/19962458.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  </Col>

    <Col>
    <Card>
      <Card.Img variant="top" src="https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/91/54/04/20150812.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  </Col>

  <Col>
  <Card>
      <Card.Img variant="top" src="https://br.web.img2.acsta.net/c_310_420/medias/nmedia/18/87/87/63/19962446.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  </Col>

  <Col>
  <Card>
      <Card.Img variant="top" src="https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/86/98/32/19870786.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  </Col>

  <Col>
  <Card>
      <Card.Img variant="top" src="https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/91/66/66/20156966.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  </Col>

  <Col>
  <Card>
      <Card.Img variant="top" src="https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/92/91/47/20224867.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  </Col>
</Row>
</Container>



      


      
      
  );
}

export default BasicExample;