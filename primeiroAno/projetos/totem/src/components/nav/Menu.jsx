import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../img/logo.png';
import './Menu.css';
import ModalLogin from '../modal/Modal';

function Menu() {
  return (
    <>
      <Navbar className='bg-ra' data-bs-theme='light'>
        <Container>
          <Navbar.Brand href='/' className='text-white'>
            <img
              src={logo}
              width='30'
              height='30'
              className='d-inline-block align-top '
              alt='React Bootstrap logo'
            />{' '}
            REDE ANCORA
          </Navbar.Brand>
          <Nav className='ms-auto'>
            <a className='cart__button' href='#pricing'>
              <ModalLogin />
            </a>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Menu;
