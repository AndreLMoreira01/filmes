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
        <Card.Title>Coraline
        </Card.Title>
        <Card.Text>
        Henry Selick,
        2009 
        </Card.Text>
        <Button variant="warning">Avaliar</Button>
      </Card.Body>
    </Card>
  </Col>

    <Col>
    <Card>
      <Card.Img variant="top" src="https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/90/93/20/20120876.jpg" />
      <Card.Body>
        <Card.Title>The Godfather</Card.Title>
        <Card.Text>
        Coppola, 1972
        </Card.Text>
        <Button variant="warning">Avaliar</Button>
      </Card.Body>
    </Card>
  </Col>

  <Col>
  <Card>
      <Card.Img variant="top" src="https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/87/84/28/19962110.jpg" />
      <Card.Body>
        <Card.Title>O Rei Leão</Card.Title>
        <Card.Text>
          Rob Minkoff, 1994
        </Card.Text>
        <Button variant="warning">Avaliar</Button>
      </Card.Body>
    </Card>
  </Col>

  <Col>
  <Card>
      <Card.Img variant="top" src="https://br.web.img2.acsta.net/c_310_420/pictures/21/05/07/10/59/3500748.jpg" />
      <Card.Body>
        <Card.Title>Luca</Card.Title>
        <Card.Text>
        Enrico Casarosa, 2021
        </Card.Text>
        <Button variant="warning">Avaliar</Button>
      </Card.Body>
    </Card>
  </Col>

  <Col>
  <Card>
      <Card.Img variant="top" src="https://br.web.img2.acsta.net/c_310_420/pictures/22/03/02/19/26/3666027.jpg" />
      <Card.Body>
        <Card.Title>Batman</Card.Title>
        <Card.Text>
        Matt Reeves, 2022
        </Card.Text>
        <Button variant="warning">Avaliar</Button>
      </Card.Body>
    </Card>
  </Col>

  <Col>
  <Card>
      <Card.Img variant="top" src="https://br.web.img3.acsta.net/c_310_420/pictures/14/06/26/18/10/332319.jpg" />
      <Card.Body>
        <Card.Title>Superman</Card.Title>
        <Card.Text>
        Richard Donner, 1978
        </Card.Text>
        <Button variant="warning">Avaliar</Button>
      </Card.Body>
    </Card>
  </Col>
</Row>
<br>
</br>

<Row>
  <Col>
  <Card>
      <Card.Img variant="top" src="https://br.web.img2.acsta.net/c_310_420/medias/nmedia/18/87/29/07/19873973.jpg" />
      <Card.Body>
        <Card.Title>Gladiador</Card.Title>
        <Card.Text>
        Ridley Scott, 2000
        </Card.Text>
        <Button variant="warning">Avaliar</Button>
      </Card.Body>
    </Card>
  </Col>

    <Col>
    <Card>
      <Card.Img variant="top" src="https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/91/54/04/20150812.jpg" />
      <Card.Body>
        <Card.Title>Shrek</Card.Title>
        <Card.Text>
        Vicky Jenson, 2001
        </Card.Text>
        <Button variant="warning">Avaliar</Button>
      </Card.Body>
    </Card>
  </Col>

  <Col>
  <Card>
      <Card.Img variant="top" src="https://br.web.img2.acsta.net/c_310_420/medias/nmedia/18/87/87/63/19962446.jpg" />
      <Card.Body>
        <Card.Title>A Vida É Bela</Card.Title>
        <Card.Text>
        Roberto Benigni, 1997
        </Card.Text>
        <Button variant="warning">Avaliar</Button>
      </Card.Body>
    </Card>
  </Col>

  <Col>
  <Card>
      <Card.Img variant="top" src="https://br.web.img3.acsta.net/c_310_420/pictures/15/05/14/14/20/365361.jpg" />
      <Card.Body>
        <Card.Title>Divertida Mente</Card.Title>
        <Card.Text>
        Pete Docter, 2016
        </Card.Text>
        <Button variant="warning">Avaliar</Button>
      </Card.Body>
    </Card>
  </Col>

  <Col>
  <Card>
      <Card.Img variant="top" src="https://br.web.img2.acsta.net/c_310_420/pictures/16/01/28/19/55/412201.jpg" />
      <Card.Body>
        <Card.Title>Deadpool</Card.Title>
        <Card.Text>
        Tim Miller, 2016
        </Card.Text>
        <Button variant="warning">Avaliar</Button>
      </Card.Body>
    </Card>
  </Col>

  <Col>
  <Card>
      <Card.Img variant="top" src="https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/89/56/94/20055685.jpg" />
      <Card.Body>
        <Card.Title>Titanic</Card.Title>
        <Card.Text>
          James Cameron, 1998
        </Card.Text>
        <Button variant="warning">Avaliar</Button>
      </Card.Body>
    </Card>
  </Col>
</Row>
</Container>



      


      
      
  );
}

export default BasicExample;