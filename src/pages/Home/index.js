import Header from "../../components/Header";
import background from '../../assets/background.png'
import './styles.css'

function App() {
  return (
    <div className="App">
      <Header />
      <div className="conteudo">
        <img src={background} className="background" alt="background app" />
        <div className="info">
          <input name="usuario" placeholder="@username" />
          <button>Buscar</button>
          <div className="perfil">
            <img src="https://avatars.githubusercontent.com/u/11823640?v=4" className="profile" alt="Imagem de perfil"></img>
            <div>
              <h3>Clayton Eduard</h3>
              <span>descricao</span>
              <p>descricao</p>
            </div>
          </div>
          <hr></hr>
        </div>
      </div>
    </div>
  );
}

export default App;
