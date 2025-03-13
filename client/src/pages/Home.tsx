import { useEffect } from 'react';
import useRepos from '@/services/repositories.service';
import { RepositoriesList } from '@/components/RepositoriesList/RepositoriesList';
import { ToolsBar } from '@/components/ToolsBar/ToolsBar';
import useUser from "@/contexts/userContext";
import SearchBar from '@/components/SearchBar/SearchBar';

function Home() {
  const {allRepos, getRepositories} = useRepos();
  // const {languages, setLanguages} = useUser();
  const {paging} = useUser();

  useEffect(() => {
    getRepositories(paging);
  }, [paging]);

  return (
    <>
      <ToolsBar></ToolsBar>
      <SearchBar repos={allRepos}/>
      <RepositoriesList repos={allRepos}/>
    </>
  )
}

export default Home;