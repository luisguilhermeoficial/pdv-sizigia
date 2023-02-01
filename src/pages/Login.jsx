import { useState } from "react";

const Login = () => {
const [user, setUser] = useState('');
const [password, setPassword] = useState('');

const handleClick = () => {
  console.log(user)
}

  return (
    <div>
      <h1>Insira suas credenciais!</h1>
      <form>
      <input 
      type="text" 
      name="user" 
      id="user" 
      placeholder="Usúario"
      value={user}
      onChange={(event) => setUser(event.target.value)}
      />
      <br />
      <input 
      type="password" 
      name="password" 
      id="password" 
      placeholder="Senha"
      value={password}
      onChange={(event) => setPassword(event.target.value)}
      />
      <br />
      <button type="submit" onClick={handleClick}>Entrar</button>
      </form>
      <p>Olá, {user}!</p>
    </div>
  )
}

export default Login