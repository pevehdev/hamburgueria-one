import React from 'react';
import { useState, useEffect } from 'react'
import Styles from '../styles/Product.css'

import axios from 'axios'

export default function Produtos() {
  //Realizando Consumo da API e utilzando o GET
  const [hamburguers, setHamburguers] = useState(null);
  useEffect(() => {
    axios.get('https://produtos.onrender.com/Hamburguers')
      .then(response => setHamburguers(response.data))
      .catch(error => console.error(error))
  }, [])

  const [bebidas, setBebidas] = useState(null);
  useEffect(() => {
    axios.get('https://produtos.onrender.com/Bebidas')
      .then(response => setBebidas(response.data))
      .catch(error => console.error(error))
  }, [])

  const [acompanhamentos, setAcompanhamentos] = useState(null);
  useEffect(() => {
    axios.get('https://produtos.onrender.com/Acompanhamentos')
      .then(response => setAcompanhamentos(response.data))
      .catch(error => console.error(error))
  }, [])

  const [combos, setCombos] = useState(null);
  useEffect(() => {
    axios.get('https://produtos.onrender.com/Combos')
      .then(response => setCombos(response.data))
      .catch(error => console.error(error))
  }, [])

  return (

    <div>
      <h2 className="tituloProduto">Hambúrgueres</h2>
      <div >

        {hamburguers ? (

          <div className='content product-grid'>
            {hamburguers.map(hamburguer => (
              <div className="product-card" key={hamburguer.id}>
                <div className="card-img">
                  <img src={hamburguer.imagem} alt="My Image" />
                </div>
                <div>
                  <h3>{hamburguer.nome}</h3>
                  <p>{hamburguer.descricao}</p>
                  <p>R${hamburguer.preco}</p>
                </div>
                <div class="card-icons">
                  <i class="fas fa-shopping-cart"></i>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <img src='../imagens/Loading.gif' className='load'></img>
        )}
      </div>

      <br />
      <br />
      <hr />
      <br />
      <br />

      <h2 className="tituloProduto">Bebidas</h2>
      <div >
          
        {bebidas ? (

          <div className='content product-grid'>

            {bebidas.map(bebida => (
              <div className="product-card" key={bebida.id}>
                <div className="card-img">
                  <img src={bebida.imagem} alt="My Image" />
                </div>
                <div>
                  <h3>{bebida.nome}</h3>
                  <p>{bebida.volume}</p>
                  <p>R${bebida.preco}</p>
                </div>
                <div class="card-icons">
                  <i class="fas fa-shopping-cart"></i>
                </div>
              </div>
            ))}
          </div>
        ) : (
         <img src='../imagens/Loadingrefri.gif' className='load'></img>
        )}
      </div>

      <br />
      <hr />
      <br />
      <br />


      <h2 className="tituloProduto ">Acompanhamentos</h2>
      <div >

        {acompanhamentos ? (

          <div className='content product-grid'>
            {acompanhamentos.map(acompanhamento => (
              <div className="product-card" key={acompanhamento.id}>
                <div className="card-img">
                  <img src={acompanhamento.imagem} alt="My Image" />
                </div>
                <div>
                  <h3>{acompanhamento.nome}</h3>
                  <p>{acompanhamento.descricao}</p>
                  <p>R${acompanhamento.preco}</p>
                </div>
                <div class="card-icons">
                  <i class="fas fa-shopping-cart"></i>
                </div>
              </div>
            ))}
          </div>
        ) : (
           <img src='../imagens/Loadingbatata.gif' className='load'></img>
        )}
      </div>

      <br />
      <hr />
      <br />
      <br />

      <h2 className="tituloProduto">Combos</h2>
      <div >

        {combos ? (

          <div className='content product-grid'>

            {combos.map(combo => (
              <div className="product-card" key={combo.id}>
                <div className="card-img">
                  <img src={combo.imagem} alt="My Image" />
                </div>
                <div>
                  <h3>{combo.nome}</h3>
                  <p>{combo.descricao}</p>
                  <p>R${combo.preco}</p>
                </div>
                <div class="card-icons">
                  <i class="fas fa-shopping-cart"></i>
                </div>
              </div>
            ))}
          </div>
        ) : (
        <img src='../imagens/Loadingcombo.gif' className='load'></img>
        )}
      </div>

    </div>
  )
}
