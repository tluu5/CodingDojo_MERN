import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import dancingbaby from "./imgs/dancingbaby.gif";
import banana from "./imgs/banana.gif";
import Step from "./components/Step";
import { useState } from 'react';

function App() {
  const [steps, setSteps] = useState([
    // { direction: "right", instructions: "turn right at Fullerton Ave.", distance: 3.2 },
    // { direction: "forward", instructions: "continue at North Ave.", distance: 0.9 },
    // { direction: "left", instructions: "turn left at Momo Ave.", distance: 1.2 },
    // { direction: "forward", instructions: "drive down at Bark Ave.", distance: 4.0 },
    // { direction: "right", instructions: "drive into Lake.", distance: 3.7 }
  ])
  const [form,setform] = useState({
    direction: "left",
    instructions: "",
    direction: 0
  })
  const onChangeHandler = (event) => {
    setform({
      ...form,
      [event.target.name]: event.target.value
    })
  }
  const onSubmitHandler = (event) => {
    event.preventDefault();
    setSteps([
      ...steps,
      form
    ]);
  }
  return (
    <div className="App">
      <div className="nav w-100 d-flex justify-content evenly">
        <img src={dancingbaby} alt="baby" />
        <h1 className='w-50'><marquee>MAP QUEST</marquee></h1>
        <img src={banana} alt="banana" />
      </div>
      <form onSubmit={onSubmitHandler} className='w-75 mx-auto my-4'>
        <div className="row g-3 align-items-center">
          <div className="col-auto">
            <select onChange={onChangeHandler} name='direction' className='form-select'>
              <option>left</option>
              <option>right</option>
              <option>forward</option>
            </select>
          </div>
          <div className="col-auto">
            <input onChange={onChangeHandler} name='instructions' placeholder='where are you going?' type="text" className="form-control"/>
          </div>
          <div className="col-auto">
            <input onChange={onChangeHandler} step="0.1" name='distance' placeholder='How far?' type="number" className="form-control"/>
          </div>
          <div className='col-auto'>
            <input type="submit" className="form-control btn btn-success"/>
          </div>
        </div>
      </form>
      <div className='w-75 mx-auto'>
        {/* <Step direction="right" instructions="turn right at Fullerton Ave." distance={3.2}/> */}
        {
          steps.map((item, i) => {
            return <Step key={i} direction={item.direction} instructions={item.instructions} distance={item.distance} />
          })
        }
      </div>
    </div>
  );
}

export default App;
