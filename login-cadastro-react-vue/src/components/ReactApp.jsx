import './App.css'
import { useState, useEffect } from 'react'

export default function ReactApp() {
  const [formState, setFormState] = useState({
    email: "",
    senha: ""
  })

  const handleChange = (e) => {
    const {name, value} = e.target

    setFormState({
      ...formState,
      [name]: value
    })
  }

  const handleClean = () => {
    setFormState({
      email: "",
      senha: ""
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const usuarios = JSON.parse(localStorage.getItem("usuario"));

    usuarios.array.forEach(element => {
      if (element.email == formState.email && element.senha == formState.senha) {
        alert(element)
      } else {
        alert("E-mail ou senha incorretos!")
      }
    });

    handleClean()
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="campo">
          <label htmlFor="email">E-mail</label>
          <input type="email" name="email" id="email" value={formState.email} onChange={handleChange}/>
        </div>

        <div className="campo">
          <label htmlFor="senha">Senha</label>
          <input type="password" name="senha" id="senha" value={formState.senha} onChange={handleChange}/>
        </div>

        <button type="submit">Login</button>
      </form>
    </>
  )
}
