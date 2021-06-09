import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const MainMenu = () => (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">
          <img
            alt=""
            src="img/F1-logo.png"
            width="128"
            height="32"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/noticias">Noticias</Nav.Link>
            <Nav.Link href="/calendario">Calendario</Nav.Link>
            <Nav.Link href="/teams">Equipos</Nav.Link>
            <Nav.Link href="/pilotos">Pilotos</Nav.Link>
            <Nav.Link href="/resultados">Resultados</Nav.Link>
            <Nav.Link href="/estadisticas">Estadísticas</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </>
  )

export default MainMenu