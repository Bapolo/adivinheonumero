import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './componentes/Home'
import TelaDoJogo from './componentes/TelaDoJogo';

function App() {
  return (
    <div className="App">
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
