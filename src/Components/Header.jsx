import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <div className='header p-2 px-5'>
         <Navbar expand="lg" className="bg-none">
      <Container>
        <Navbar.Brand> <h3 className='text-warning' ><i className="fa-solid fa-graduation-cap fa-beat fa-lg me-3" style={{color: "E4A11B"}}></i><b>Education</b></h3>
</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className='text-warning' >Services</Nav.Link>
            <Nav.Link className='text-warning'>About Us</Nav.Link>
            <Nav.Link className='text-warning' ><button className='p-1 px-3 rounded text-white btn  bg-warning'  >Login</button></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      </div>
  )
}

export default Header