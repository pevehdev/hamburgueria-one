
import { Link } from "react-router-dom";
import './Navbar.css'

export default function Navbar() {
  return(
    <nav>
        <Link to="/">
         <img src="../imagens/logo.png" className="logo"></img>
        </Link>
      <ul>
        <Link to="/produtos"><li>
          Produtos
        </li></Link>
        
        
        <Link to="/sobre"><li>
          Sobre nós
        </li>
        </Link>
        
        
        
        <Link to="/Login">
        <li>
          Login
        </li>
        </Link>
       
        
      </ul>
      
    </nav>
  );
}
