import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';  // Add this in `App.jsx` or `main.jsx`

const AppNavbar = () => {
    return (
        <Navbar bg="primary" variant="dark" expand="lg" className="w-100">
            <Container fluid>
                <Navbar.Brand href="/">WhatsApp Clone</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/chat">Chat</Nav.Link>
                        <Nav.Link href="/settings">Settings</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default AppNavbar;
