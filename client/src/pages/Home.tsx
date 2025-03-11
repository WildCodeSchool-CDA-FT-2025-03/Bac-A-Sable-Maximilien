// import './App.css';
// import repos from '@/services/repositories.service';
import { useEffect } from 'react';
import useRepos from '@/services/repositories.service';
import { RepositoriesList } from '@/components/RepositoriesList/RepositoriesList';

function Home() {
  const {allRepos, getRepositories} = useRepos();

  useEffect(() => {
    getRepositories();
  }, []);

  return (
    <>
      <h1>App GitHub</h1>
      <h2>Repositories: {allRepos.length}</h2>
      <RepositoriesList repos={allRepos}/>
    </>
  )
}

export default Home;