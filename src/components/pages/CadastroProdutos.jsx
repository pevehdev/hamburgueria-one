import React from 'react';
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import '../styles/CadastroProdutos.css'
import { Link } from "react-router-dom";




export default function CadastroProdutos() {





    return (

        <div>
            <h1 className='tituloProdutos'>Cadastramento de Produtos</h1>

            <main>
                <div className="cardProdutos" >
                    <h1 className="cardTitulo">Hamburguer</h1>
                    <div className="card-line-post" ></div>
                    <div className="card-body-post" >
                        <div className="btn-post" >
                            <Link to="/cadastrohamburguer">
                                <button className="botao-produto" type="submit" >Cadastrar item</button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="cardProdutos" >
                    <h1 className="cardTitulo">Bebidas</h1>
                    <div className="card-line-post" ></div>
                    <div className="card-body-post" >
                        <div className="btn-post" >
                            <Link to="/cadastrobebidas">
                                <button className="botao-produto" type="submit" >Cadastrar item</button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="cardProdutos" >
                    <h1 className="cardTitulo">Acompanhamentos</h1>
                    <div className="card-line-post" ></div>
                    <div className="card-body-post" >
                        <div className="btn-post" >
                            <Link to="/cadastroacompanhamentos">
                                <button className="botao-produto" type="submit" >Cadastrar item</button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="cardProdutos" >
                    <h1 className="cardTitulo">Combos</h1>
                    <div className="card-line-post" ></div>
                    <div className="card-body-post" >
                        <div className="btn-post" >
                            <Link to="/cadastrocombos">
                                <button className="botao-produto" type="submit" >Cadastrar item</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
        </div>

    )
}