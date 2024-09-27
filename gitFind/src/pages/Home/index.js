import "./style.css"

import { Header } from "../../components/Header";
import background from "../../assets/background.png";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="conteudo">
        <img src={background} alt="imagem de fundo" className="background" />
        <div className="informacoes">
            <div>
              <input name="Usuario" placeholder="@username"/>
              <button>Buscar</button>
            </div>
            <div className="perfil">
                <img src="https://cdn-icons-png.flaticon.com/512/3736/3736502.png" alt="Profile Image" className="profile"/>
                <div>
                  <h3>Cauã Gabriel</h3>
                  <span>Descrição:</span>
                  <p>Descrição GitHub</p>
                </div>
            </div>
            <hr />
            <div>
              <h4>Repositórios</h4>
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
