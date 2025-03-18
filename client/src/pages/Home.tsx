import { useEffect } from 'react';
import useRepos from '@/services/repositories.service';
import { RepositoriesList } from '@/components/RepositoriesList/RepositoriesList';
import { ToolsBar } from '@/components/ToolsBar/ToolsBar';
import useUser from "@/contexts/userContext";
import SearchBar from '@/components/SearchBar/SearchBar';

function Home() {
  const {allRepos, getRepositories} = useRepos();
  const {paging, languagesFilter} = useUser();

  useEffect(() => {
    getRepositories(paging, languagesFilter);
  }, [paging, languagesFilter]);

  return (
    <>
      <ToolsBar githubUsers={[]}></ToolsBar>
      <SearchBar datas={[allRepos]}/>
      <RepositoriesList repos={allRepos.repositories}/>
    </>
  )
}

export default Home;