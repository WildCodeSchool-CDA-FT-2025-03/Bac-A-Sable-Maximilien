import './App.css';
import { Outlet } from 'react-router';

function App() {
  // const allRepos = repos.GetAll();

  return (
    <>
      <Outlet></Outlet>
    </>
  )
}

export default App;
