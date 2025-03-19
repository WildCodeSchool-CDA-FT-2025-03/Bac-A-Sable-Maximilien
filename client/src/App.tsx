import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import './App.css';
import { Outlet } from 'react-router';
import { UserProvider } from './contexts/userContext';
import TopBar from './components/TopBar/TopBar';

const queryClient = new QueryClient()

function App() {

  return (
    <>
    <QueryClientProvider client={queryClient}>
      <TopBar></TopBar>
      <div className='body-core'>
        <div>
          <UserProvider>
            <Outlet></Outlet>
          </UserProvider>
        </div>
      </div>
    </QueryClientProvider>
    </>
  )
}

export default App;
