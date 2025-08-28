import React from 'react'; 
import { Navbar, Nav, Container } from 'react-bootstrap'; 
import { Link } from 'react-router-dom'; 
 
const AppNavbar = () => { 
    return ( 
        <Navbar bg="dark" variant="dark" expand="lg" className="mb-4"> 
            <Container> 
                <Navbar.Brand as={Link} to="/">ELMS Portal</Navbar.Brand> 
                <Navbar.Toggle aria-controls="basic-navbar-nav" /> 
                <Navbar.Collapse id="basic-navbar-nav"> 
                    <Nav className="ms-auto"> 
                        <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link> 
                        <Nav.Link>Logout</Nav.Link> 
                    </Nav> 
                </Navbar.Collapse> 
            </Container> 
        </Navbar> 
    ); 
}; 
export default AppNavbar; 