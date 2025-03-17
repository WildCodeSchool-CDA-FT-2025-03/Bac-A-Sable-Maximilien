import './App.css';
import { Outlet } from 'react-router';
import { UserProvider } from './contexts/userContext';
import TopBar from './components/TopBar/TopBar';


function App() {

  return (
    <>
    <TopBar></TopBar>
    <div className='body-core'>
      <div>
        <UserProvider>
          <Outlet></Outlet>
        </UserProvider>
      </div>
    </div>
    </>
  )
}

export default App;
