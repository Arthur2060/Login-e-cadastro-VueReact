import './App.css'
import { useState, useEffect } from 'react'

export default function ReactApp() {
  const [formState, setFormState] = useState({
    email: "",
    senha: ""
  })

  const [user, setUser] = useState({
    nome: "",
    email: "",
    senha: "",
    nascimento: ""
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

    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    const usuario = usuarios.find(
      (user) => user.email === formState.email && user.senha === formState.senha
    )

    if (usuario) {
      alert(JSON.stringify(usuario))
    } else {
      alert("Usuario não encontrado")
    }

    setUser({
      nome: usuario.nome,
      email: usuario.email,
      senha: usuario.senha,
      nascimento: usuario.nascimento
    })

    handleClean()
  }

  return (
    <>
    <div>
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

      <table>
        <thead>
          <td>Nome</td>
          <td>E-mail</td>
          <td>Senha</td>
          <td>Nascimento</td>
        </thead>
        <td>
          <tr>
            {user.nome}
          </tr>
        </td>
        <td>
          <tr>
            {user.email}
          </tr>
        </td>
        <td>
          <tr>
            {user.senha}
          </tr>
        </td>
        <td>
          <tr>
            {user.nascimento}
          </tr>
        </td>
      </table>
    </div>
    </>
  )
}
