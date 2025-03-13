import { useEffect } from 'react';
import useRepos from '@/services/repositories.service';
import { RepositoriesList } from '@/components/RepositoriesList/RepositoriesList';
import { ToolsBar } from '@/components/ToolsBar/ToolsBar';
import useUser from "@/contexts/userContext";

function Home() {
  const {allRepos, getRepositories} = useRepos();
  const {paging} = useUser();

  useEffect(() => {
    getRepositories(paging);
  }, [paging]);

  return (
    <>
      <ToolsBar></ToolsBar>
      <p>Repositories: {allRepos.length}</p>
      <RepositoriesList repos={allRepos}/>
    </>
  )
}

export default Home;