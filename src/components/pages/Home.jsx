import "../styles/Home.css";
import img from "../../../imagens/bburguer.jpg"
import img2 from "../../../imagens/FazerPedido.jpeg"
import { Link } from "react-router-dom";

export default function Home() {
    return (

        <div className="container-home">
            <div className="content-home">
                <div className="bloco1">
                    <img src={img} alt="" srcset="" />
                </div>

                <div className="bloco2">
                    <div>
                        <p className="texto1"> One Burguer </p>
                    </div>
                    <div className="teste">
                        <div className="bloco3">
                            <div>
                                
                                <p className="texto2"> O melhor e mais suculento hamburguer </p>
                               
                                
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="bloco4">
                <Link to="/produtos">
                <img src={img2} alt="" srcset="" />
                </Link>


            </div>
        </div>

    );
}
