import './App.css';
import { HashRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './componentes/Home.js'
import TelaDoJogo from './componentes/TelaDoJogo.js';

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path = '/' element = { <Home /> } />
          <Route path = '/jogar' element = { <TelaDoJogo /> } />
        </Routes>
      </Router>      
    </div>
  );
}

export default App;
