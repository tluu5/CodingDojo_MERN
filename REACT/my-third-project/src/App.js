import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <h1><marquee>Hey it's me!</marquee></h1>
      <Counter text="hey I'm the component here!"/>

      <Counter text="clickth you button!"/>

      <Counter text="another component!"/>
    </div>
  );
}

export default App;
