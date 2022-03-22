import 'bootstrap/dist/css/bootstrap.min.css';
import Place from './components/Place';
import './App.css';
import {useState} from 'react';

function App() {
  const [places, setPlaces] = useState([
    "Mason's Creamery",
    "Mitchell's Ice Cream",
    "Margie's Candies"
  ]);
  const [form, setform] = useState("");
  const onSubmitHandler = (event) => {
    event.preventDefault();
    const newState = [...places, form];
    setPlaces(newState);
    setform("");
  }
  return (
    <div className="App">
      <h1>Favorite Ice Cream Places</h1>
      {/* {
        for(let i =0; i < places.length; i++){
          <p>{places[i]}</p>
        }
      } */}
      <form onSubmit={onSubmitHandler}>
        <input value={form} onChange={(event) => {setform(event.target.value)}} type="text" className="w-50 mx-auto form-control" placeholder="what's your favorite ice cream place?"/>
        <input type="submit" className='btn btn-primary btn-lg d block mx-auto my-2'/>
      </form>
      <ol>
      {
        places.map((item, i) =>{
          return <Place key={i} name={item}/>
        })
      }
      </ol>
    </div>
  );
}

export default App;
