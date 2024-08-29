import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function FormExample() {
  return (
    <Navbar expand="lg" className='titulo'>
      <Container>
      <Navbar.Brand >OpinaFilmes</Navbar.Brand>     
        <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Buscar Filmes"
              className="me-2"
              aria-label="Busca"
            />
            <Button variant="outline-dark">Buscar</Button>
          </Form> 
      </Container>
  </Navbar>
  
  );
}

export default FormExample;