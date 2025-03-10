import './App.css'
import repos from './services/repositories.service'

function App() {
  const allRepos = repos.GetAll();

  return (
    <>
      <h1>App GitHub</h1>
      <h2>{allRepos.data.length}</h2>
      {allRepos.data.map(r => <h3>{r.url}</h3>)}
    </>
  )
}

export default App
