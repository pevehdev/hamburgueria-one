
import { Link } from "react-router-dom";
import Estilo from './Navbar.css'

export default function Navbar() {
  return(
    <nav>
         
      <div> 
        <h2 >
        Hamburgueria <span>One</span>
      </h2>
      </div>
      
      <ul>
        <Link to="/produtos"><li>
          Produtos
        </li></Link>
        
        
        <Link to="/sobre"><li>
          Sobre Nós
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
