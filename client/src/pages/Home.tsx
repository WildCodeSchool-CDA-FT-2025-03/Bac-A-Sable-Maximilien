import { useEffect } from 'react';
import useRepos from '@/services/repositories.service';
import { RepositoriesList } from '@/components/RepositoriesList/RepositoriesList';
import { ToolsBar } from '@/components/ToolsBar/ToolsBar';

function Home() {
  const {allRepos, getRepositories} = useRepos();

  useEffect(() => {
    getRepositories();
  }, []);

  return (
    <>
      <h1>App GitHub</h1>
      <ToolsBar></ToolsBar>
      <p>Repositories: {allRepos.length}</p>
      <RepositoriesList repos={allRepos}/>
    </>
  )
}

export default Home;