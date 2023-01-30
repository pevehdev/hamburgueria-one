
import { Link } from "react-router-dom";
import './Navbar.css';
import logo from "../../../imagens/logo.png";

export default function Navbar() {
  return(
    <nav>
        <Link to="/">
         <img src={logo} className="logo"/>
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
