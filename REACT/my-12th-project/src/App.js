import 'bootstrap/dist/css/bootstrap.min.css';
import { createContext, useState } from 'react';
import './App.css';
import Form from './components/Form';
import WordContext from './contexts/WordContext';

function App() {
  const [form, setForm] = useState("");
  return (
    <div className="App">
      <WordContext.Provider value={{form,setForm}}>
        <h1>hey it's me!</h1>
        <Form/>
        {form}
      </WordContext.Provider>
    </div>
  );
}

export default App;
