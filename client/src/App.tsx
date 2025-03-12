import './App.css';
import { Outlet } from 'react-router';
import { UserProvider } from './contexts/userContext';



function App() {

  return (
    <>
    <UserProvider>
      <Outlet></Outlet>
    </UserProvider>
    </>
  )
}

export default App;
