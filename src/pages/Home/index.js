import { useState } from 'react';
import Header from "../../components/Header";
import background from '../../assets/background.png'
import './styles.css'
import ItemList from "../../components/ItemList";

export default function App() {
  const [user, setUser] = useState('');
  const [currentUser, setCurrentUser] = useState(null);
  const [repos, setRepos] = useState(null);

  const handleGetData = async () => {
    const userData = await fetch(`https://api.github.com/users/${user}`);
    const newUser = await userData.json();

    if (newUser.name) {
      const { avatar_url, name, bio, login } = newUser;
      setCurrentUser({ avatar_url, name, bio, login });
      const reposData = await fetch(`https://api.github.com/users/${user}/repos`);
      const newRepos = await reposData.json();

      if (newRepos.length) {
        setRepos(newRepos);
      }
    } else {
      alert('Nome de usuário não encontrado')
    }
  }

  return (
    <div className="App">
      <Header />
      <div className="conteudo">
        <img src={background} className="background" alt="background app" />
        <div className="info">
          <input type='text'
            name="usuario"
            value={user}
            onChange={event => setUser(event.target.value)}
            placeholder="@username"
          />
          {currentUser?.name ? (<>

            <div className="perfil">
              <img src={currentUser.avatar_url} className="profile" alt="Imagem de perfil"></img>
              <div>
                <h3>{currentUser.name}</h3>
                <span>@{currentUser.login}</span>
                <p>{currentUser.bio}</p>
              </div>
            </div>
            <hr />

          </>
          ) : null}
          <button onClick={handleGetData}>Buscar</button>

          {repos?.length ? (
            <div>
              <h4 className="repositorio">Repositórios</h4>
              {repos.map(repo => (
                (
                  <ItemList title={repo.name} description={repo.description} />
                )
              ))}

            </div>

          ) : null}

        </div>
      </div>
    </div>
  );
}