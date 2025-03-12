import './App.css';
import { Outlet } from 'react-router';
import { UserProvider } from './contexts/userContext';



function App() {

  return (
    <>
    <h1>Repositories GitHub</h1>
    <UserProvider>
      <Outlet></Outlet>
    </UserProvider>
    </>
  )
}

export default App;
