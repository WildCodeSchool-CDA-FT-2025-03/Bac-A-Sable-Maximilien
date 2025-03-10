import './App.css'
import repos from './services/repositories.service'
import { RepoCard } from './components/RepoCard/RepoCard';

function App() {
  const allRepos = repos.GetAll();

  return (
    <>
      <h1>App GitHub</h1>
      <h2>Repositories: {allRepos.data.length}</h2>
      {allRepos.data.map(r => <RepoCard repo={r}/>)}
    </>
  )
}

export default App
