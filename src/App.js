import './styles/App.scss';
import {BrowserRouter as Router} from 'react-router-dom';
import Navbar from './components/UI/Navbar/Navbar';
import AppRouter from './components/AppRouter';

function App() {

  return (
    <Router>
      <Navbar/>
     <AppRouter/>
    </Router>
  )
}

export default App;
