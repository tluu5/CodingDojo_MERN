import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import PokeCard from './components/PokeCard';

function App() {
  return (
    <div className="App">
      <h1>hey it's me!</h1>
      <PokeCard pokemon="pikachu"/>
    </div>
  );
}

export default App;
