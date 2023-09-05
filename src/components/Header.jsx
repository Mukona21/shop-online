import Logo from '../assets/favicon-32x32.png'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

const Header = () => {
  const logoStyles = {
    fontWeight: 'bold',
    color: '#2ca1ef',
    fontSize: '1.3rem',
    border: 'solid 1px #2ca1ef',
    padding: '0.2rem',
    borderRadius: '5px',
    cursor: 'pointer',
    width: '10rem',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  }

  const signupStyles = {
    backgroundColor: '#ee4360',
    color: '#fff',
    fontWeight: '600',
    borderRadius: '0.25rem',
    width: '5rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
  return (
    <Navbar
      collapseOnSelect
      expand='lg'
      bg='#fff'
      variant='light'
      fixed='top'
      style={{ backgroundColor: '#fff', height: '3.5rem' }}
    >
      <Container>
        <Navbar.Brand href='#home' style={logoStyles}>
          <img src={Logo} alt='company-logo' style={{ width: '1.5rem' }} />{' '}
          ShopOnline
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link href='#features'>Home</Nav.Link>
            <Nav.Link href='#pricing'>About</Nav.Link>
            <Nav.Link href='#pricing'>Products</Nav.Link>
            <Nav.Link href='#pricing'>Contacts</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href='#deets'>Login</Nav.Link>
            <Nav.Link eventKey={2} href='#memes' style={signupStyles}>
              Sign up
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
