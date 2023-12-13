// 2 - links com React Router
import './Navbar.css';

import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
        {/* faz o rediricionamento trocando componente - não da o reloading e sim troca o componente*/}
        <Link to="/">Home</Link> 
        <Link to="/about">Sobre</Link>
    </nav>
  )
};

export default Navbar;