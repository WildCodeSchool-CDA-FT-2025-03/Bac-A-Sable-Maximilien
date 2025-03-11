import './App.css';
import { Outlet } from 'react-router-dom';

function App() {
  // const allRepos = repos.GetAll();

  return (
    <>
      <Outlet></Outlet>
    </>
  )
}

export default App;
