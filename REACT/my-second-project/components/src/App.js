import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Box from './components/Box';

function App() {
  return (
    <div className="App">
      <button className="btn btn-primary">Click me!</button>
      <Box text="hey it's you!" number={42} dark={true}/>
      <Box text="hey it's me!" number={15} dark={false}/>
      <Box text="hey it's I!"/>
      <Box text="whereis the hidden h1?" number={-14} dark={true}>
        <h1>hidden h1!</h1>
      </Box>
    </div>
  );
}

export default App;
