import '../styles/Sobre.css';
import foto from '../../../imagens/Hamburguer.jpg';

// import Login from "../styles/Login.css";

export default function Sobre() {
  return (
    <div>
      <div className="bloco1">
        {" "}
        <p className="P1">
          {" "}
          A one Burguer foi inaugurada no ano de 2020, na cidade do Rio de
          Janeiro afim de inovar e oferecer o melhor produto para os nosos
          clientes.{" "}
        </p>
        <div className="imagem1">
          <img src={foto} className="imagem1"></img>
        </div>
      </div>

      <div>
        {" "}
        <p className="P2">
          {" "}
          Nossos hambúrgueres além de suculentos são feitos com ingredientes
          selecionados feitos diretamente na chapa fora variedade combos,
          porções e bebidas.
        </p>
      </div>
    </div>
  );
}
