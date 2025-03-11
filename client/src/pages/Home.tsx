// import './App.css';
import repos from '../services/repositories.service';
import { RepositoriesList } from '../components/RepositoriesList/RepositoriesList';

function Home() {
const allRepos = repos.GetAll();

  return (
    <>
      <h1>App GitHub</h1>
      <h2>Repositories: {allRepos.data.length}</h2>
      <RepositoriesList repos={allRepos.data}/>
    </>
  )
}

export default Home;