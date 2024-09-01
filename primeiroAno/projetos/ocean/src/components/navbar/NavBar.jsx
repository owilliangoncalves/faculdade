import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import FiapLogo from "/img/fiapLogo.svg";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <Navbar shouldHideOnScroll className="bg-transparent">
      <NavbarBrand>
        <Link to={"/"}>
          <img src={FiapLogo} alt="" />
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link to="https://youtu.be/TmAkQvUTOwk " target="_blank">
            <a className="text-verdeSecundario p-2 hover:bg-verdePrimario transition duration-300 active:bg-verdePrimario uppercase">
              Vídeo Pitch
            </a>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            to="/desafio"
            className="text-verdeSecundario p-2 hover:bg-verdePrimario transition duration-300 uppercase"
          >
            Desafio
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            to="/problema"
            className="text-verdeSecundario p-2 hover:bg-verdePrimario transition duration-300 uppercase"
          >
            Problema
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            to="/estudos"
            className="text-verdeSecundario p-2 hover:bg-verdePrimario transition duration-300 uppercase "
          >
            Estudos
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Link
            to="/solucao"
            className="text-verdeSecundario p-2 hover:bg-verdePrimario transition duration-300 uppercase"
          >
            Solução
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
