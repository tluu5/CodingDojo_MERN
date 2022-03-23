import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import dancingbaby from "./imgs/dancingbaby.gif";
import banana  from "./imgs/banana.gif";
import Step from "./components/Step";

function App() {
  return (
    <div className="App">
      <div className="nav w-100 d-flex justify-content evenly">
        <img src={dancingbaby} alt="baby" />
        <h1 className='w-50'><marquee>MAP QUEST</marquee></h1>
        <img src={banana} alt="banana" />
      </div>
      <div className='w-75 mx-auto'>
        <Step direction="right" instructions="turn right at Fullerton Ave." distance={3.2}/>
      </div>
    </div>
  );
}

export default App;
