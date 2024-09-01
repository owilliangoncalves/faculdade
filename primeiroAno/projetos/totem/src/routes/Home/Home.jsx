import { Link } from "react-router-dom";
import Footer from "../../components/footer/footer";

import Logo from '../../img/logo.png';
import Brands from '../../img/brands.png'

import "./Home.css";
import Header from "../../components/header/Header";

export default function Home() {
  return (
    <>
      <div className="container__home">
        <Header img={Logo}/>
        <main>
            <img className="main__img" src={Logo} alt="" />
            <Link to='/shop'><button>COMEÇAR</button></Link>
        </main>
        <Footer img={Brands} display={{display:'none'}}/>
      </div>
    </>
  );
}
