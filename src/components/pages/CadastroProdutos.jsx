import React from 'react';
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import '../styles/CadastroProdutos.css'




export default function CadastroProdutos() {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const addPost = data => console.log(data);



    return (

        <>
            <main>

                <div className="card-post" >

                    <h1>Criar postagem</h1>
                    <div className="line-post" ></div>

                    <div className="card-body-post" >

                        <form onSubmit={handleSubmit(addPost)} >

                            <div className="fields" >
                                <label>Título</label>
                                <input type="text" name="title" {...register("title")} />
                                <p className="error-message">{errors.title?.message}</p>
                            </div>

                            <div className="fields" >
                                <label>Descrição</label>
                                <input type="text" name="description" {...register("description")} />
                                <p className="error-message">{errors.description?.message}</p>
                            </div>

                            <div className="fields" >
                                <label>Conteúdo</label>
                                <textarea type="text" name="content" {...register("content")} ></textarea>
                                <p className="error-message">{errors.content?.message}</p>
                            </div>

                            <div className="btn-post" >
                                <button type="submit" >Enviar</button>
                            </div>

                        </form>

                    </div>

                </div>

            </main>
        </>

    )
}