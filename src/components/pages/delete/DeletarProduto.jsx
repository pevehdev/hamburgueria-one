import React from 'react';
import { useState, useEffect } from 'react'
import Styles from '../../styles/Product.css'

import axios from 'axios'

export default function DeletarProduto() {


  


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

  //DELETAR O HAMBURGUER PASSANDO ID COMO PARAMENTRO

  const deleteHamburguer = async (id) => {

    await axios.delete(`https://produtos.onrender.com/Hamburguers/${id}`)
    .catch((err)=> console.log(`nome do erro: ${err}`))
    setHamburguers(hamburguers.filter(hamburguers => hamburguers.id !== id))
    
  }
  const deleteBebidas = async (id) => {

    await axios.delete(`https://produtos.onrender.com/Bebidas/${id}`)
    .catch((err)=> console.log(`nome do erro: ${err}`))
    setBebidas(bebidas.filter(bebidas => bebidas.id !== id))
    
  }

  const deleteAcompanhamento = async (id) => {

    await axios.delete(`https://produtos.onrender.com/Acompanhamentos/${id}`)
    .catch((err)=> console.log(`nome do erro: ${err}`))
    setAcompanhamentos(acompanhamentos.filter(acompanhamentos => acompanhamentos.id !== id))
    
  }

  const deleteCombos = async (id) => {

    await axios.delete(`https://produtos.onrender.com/Combos/${id}`)
    .catch((err)=> console.log(`nome do erro: ${err}`))
    setCombos(combos.filter(combos => combos.id !== id))
    
  }

  return (

    <div>
      <h2 className="tituloProduto">Hamburguers</h2>
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
                  <i class="fa-solid fa-trash" onClick={()=> deleteHamburguer(hamburguer.id)}></i>
                  <i class="fas fa-shopping-cart"></i>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div>Loading...</div>
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
                  <i class="fa-solid fa-trash" onClick={()=> deleteBebidas(bebida.id)}></i>
                  <i class="fas fa-shopping-cart"></i>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div>Loading...</div>
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
                  <p>{acompanhamento.volume}</p>
                  <p>R${acompanhamento.preco}</p>
                </div>
                <div class="card-icons">
                  <i class="fa-solid fa-trash" onClick={()=> deleteAcompanhamento(acompanhamento.id)}></i>
                  <i class="fas fa-shopping-cart"></i>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div>Loading...</div>
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
                  <p>{combo.volume}</p>
                  <p>R${combo.preco}</p>
                </div>
                <div class="card-icons">
                  <i class="fa-solid fa-trash" onClick={()=> deleteCombos(combo.id)}></i>
                  <i class="fas fa-shopping-cart"></i>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div>Loading...</div>
        )}
      </div>

    </div>
  )
}