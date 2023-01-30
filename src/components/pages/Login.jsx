import { Link } from "react-router-dom";
import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import "../styles/Login.css"; 

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    // Verifique se o email e senha correspondem aos valores esperados
    if (email === 'admin@exemplo.com' && password === 'admin') {
      // Autenticação bem-sucedida, redirecionar o usuário para a página protegida
      window.location.href = '/Cadastro';
    } else {
      // Exibir mensagem de erro
      alert('Email ou senha inválido');
    }
  }

  return (
    <div id="container">
    <form className="formulario" onSubmit={handleSubmit}>
      <h1 className="card-title"> Login</h1>
      <label className="card-label">
        Email:
        <br /> <input className='camposLogin'
          type="email"
          value={email}
          onChange={event => setEmail(event.target.value)}
        /> 
      </label >
      <br />
      <label className="card-label">
        Senha:
        <br />
        <input className='camposLogin'
          type="password"
          value={password}
          onChange={event => setPassword(event.target.value)}
        />
      </label>
      <br />
      <Link to="/cadastroprodutos">
      <button className="botaoLogin" type="submit">Entrar</button>
      </Link>
      
    </form>
    </div>
  );
}

export default LoginForm;
