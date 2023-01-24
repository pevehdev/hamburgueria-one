import React from 'react';
import { useState, useEffect } from 'react'
import Styles from '../styles/Product.css'
import Imagem from '../../assets/Hamburguer/burguer1.jpg'
import axios from 'axios'

export default function Produtos() {
  //Realizando Consumo da API e utilzando o GET
  const [hamburguers, setHamburguers] = useState(null);
  useEffect(() => {
    axios.get('https://produtos.onrender.com/Hamburguers')
      .then(response => setHamburguers(response.data))
      .catch(error => console.error(error))
  }, [])

  return (
    <>
    <h2>Hamburguers</h2>
      <div >
        {hamburguers ? (
          
          <div className='content'>
            
            {hamburguers.map(hamburguer => (
              <div className="product-card" key={hamburguer.id}>
                <div className="card-img">
                  <img src={Imagem} alt="My Image" />
                </div>
                <div>
                <h3>{hamburguer.nome}</h3>
                <p>{hamburguer.descricao}</p>
                <p>R${hamburguer.preco}</p>
              </div>
              </div>
            ))}
          </div>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </>
  )
}