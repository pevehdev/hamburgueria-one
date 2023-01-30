import "../footer.jsx/Footer.css";
import img3 from '../../../imagens/github.png'

function Footer() {

    return (
        <div className="total">
            <div>
                <img src={img3} className="icone"></img>
                <div className="links">
                    <ul>
                        <li> <a href="https://github.com/EdileneTrajano">Edilene Trajano</a> </li>
                        <li> <a href="https://github.com/pevehdev">Paulo Victor</a></li>
                        <li> <a href="https://github.com/SamaraCSSLima">Samara Lima</a></li>
                        <li> <a href="https://github.com/Vic-Carvalho">Victória Carvalho</a></li>
                    </ul>


                    <p id="texto-footer"> Copyright ©2020 One burguer <br />  Rua Ewbank da Camara, 91 - Rio de Janeiro </p>

                </div>
            </div>
        </div>)

}

export default Footer 
