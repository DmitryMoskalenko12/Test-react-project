import './styles/App.scss';
import {BrowserRouter as Router} from 'react-router-dom';
import Navbar from './components/UI/Navbar/Navbar';
import AppRouter from './components/AppRouter';
import { AuthContext } from './context';
import { useState } from 'react';
function App() {
const [isAuth, setIsAuth] = useState(false)
  return (
    <AuthContext.Provider value={{
      isAuth,
      setIsAuth
    }}>
       <Router>
      <Navbar/>
     <AppRouter/>
    </Router>
    </AuthContext.Provider>
   
  )
}

export default App;
