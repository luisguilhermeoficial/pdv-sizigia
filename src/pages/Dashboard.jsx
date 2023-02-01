import { Link } from "react-router-dom"

const Dashboard = () => {
  return (
    <div>
<h1>BEM-VINDO AO SIZIGIA PDV!</h1>
<p>Projeto gratuito criado por: <a href="https://www.github.com/xYORY" target="_blank">YORY</a></p>
<Link to="/login">
    <button>ENTRAR</button>
    </Link>
        </div>
  )
}

export default Dashboard