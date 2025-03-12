import { useEffect, useState } from 'react';
import useRepos from '@/services/repositories.service';
import { RepositoriesList } from '@/components/RepositoriesList/RepositoriesList';
import { ToolsBar, DisplayType } from '@/components/ToolsBar/ToolsBar';

function Home() {
  const {allRepos, getRepositories} = useRepos();
  const [display, setDisplay] = useState("list" as DisplayType);

  useEffect(() => {
    getRepositories();
  }, []);

  return (
    <>
      <h1>App GitHub</h1>
      <ToolsBar onDisplay={(v) => setDisplay(v)}></ToolsBar>
      <p>Repositories: {allRepos.length}</p>
      <RepositoriesList repos={allRepos} display={display}/>
    </>
  )
}

export default Home;