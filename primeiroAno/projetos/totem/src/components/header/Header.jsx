import "./Header.css";
import Logo from '../../img/logo.png'

import { Link } from "react-router-dom";

import { Container } from "react-bootstrap";

export default function Header() {

  return (
    <header>
      <Container className="d-flex justify-content-between align-items-center">
        <div className="header__container">
          <Link to="/" className="d-flex">
            <img className="nav__logo" src={Logo} alt="" />
            <h1>REDE ANCORA</h1>
          </Link>
        </div>
        <nav>
          <ul className="d-flex gap-3">
            <li>
              <Link to='https://youtu.be/7uqeUXpKYls' target='_blank' >VIDEO PITCH</Link>
            </li>
            <li>
              <Link to='/about'>SOBRE O PROJETO</Link>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
}
