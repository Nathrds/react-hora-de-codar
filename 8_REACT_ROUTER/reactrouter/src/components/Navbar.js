import './Navbar.css';
// 2 - links com React Router
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
        {/* faz o rediricionamento trocando componente - não da o reloading e sim troca o componente*/}
        {/* <Link to="/">Home</Link> 
        <Link to="/about">Sobre</Link> */}
        {/* navlink deixa o link ativo para o link que estiver no nomento - cores / className outro modo */}
        <NavLink to="/" /* className={({isActive}) => (isActive ? "esta-ativo" : "nao-ativo")} tem que repetir em todos os navlinks*/>
          Home
        </NavLink>
        <NavLink to="/about">Sobre</NavLink>
    </nav>
  )
};

export default Navbar;