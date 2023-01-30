import React from 'react';
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import "./CadastroAcompanhamentos.css"
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object().shape({
  nome: yup.string().required("O nome é obrigatório").max(40, "Máximo de 40 caracteres"),
  descricao: yup.string().required("A descrição é obrigatória").max(150, "Máximo de 150 caracteres"),
  preco: yup.string().required("O preço é obrigatório").max(7, "Máximo de 7 caracteres"),
  imagem: yup.string().required("O preço é obrigatório").max(2083, "Máximo de 2083 caracteres")
})

const AcompanhamentosForm = () => {
  const [formData, setFormData] = useState({ nome: '', descricao: '', preco: '',imagem: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
      setFormData({
          ...formData,
          [event.target.name]: event.target.value
          
      });console.log(formData)
  }

  const handleSubmit = (event) => {
      event.preventDefault();
      setIsSubmitting(true);
      schema.validate(formData, { abortEarly: false })
          .then(() => {
              axios.post('https://produtos.onrender.com/Acompanhamentos', formData)
              .then(response => {
                  console.log(response);
                  setIsSubmitting(false);
                  
              })
              .catch(error => {
                  console.log(error);
                  setIsSubmitting(false);
              });
          })
          .catch(error => {
              const validationErrors = {};
              error.inner.forEach(err => {
                  validationErrors[err.path] = err.message;
              });
              setErrors(validationErrors);
              setIsSubmitting(false);
          });
  }
  return (
      <main>
      <form className='formularioCadastroAcompanhamentos' onSubmit={handleSubmit}>
      <h1> Cadastro de Acompanhamentos </h1>
          <div>
              <label className='label-color'>Nome:</label>
              <input className='camposCadastroAcompanhamentos' type="text" name="nome" onChange={handleChange} value={formData.nome} />
              {errors.nome && <p>{errors.nome}</p>}
          </div>

          <div>
              <label className='label-color'>Descrição:</label>
              <input className='camposCadastroAcompanhamentos' name="descricao" onChange={handleChange} value={formData.descricao} />
              {errors.descricao && <p>{errors.descricao}</p>}
          </div>

          <div>
              <label className='label-color'>Preco:</label>
              <input className='camposCadastroAcompanhamentos' type="number" name="preco" onChange={handleChange} value={formData.preco} />
              {errors.preco && <p>{errors.preco}</p>}
          </div>
          <div>
                <label className='label-color'>Link de alguma imagem URL:</label>
                <input className='camposCadastroBurguer' type="text" name="imagem" onChange={handleChange} value={formData.imagem} />
                {errors.imagem && <p>{errors.imagem}</p>}
            </div>
          <button className='botaoCadastroAcompanhamentos' disabled={isSubmitting}>Cadastrar</button>
      </form>
      </main>
  );
}

export default AcompanhamentosForm;