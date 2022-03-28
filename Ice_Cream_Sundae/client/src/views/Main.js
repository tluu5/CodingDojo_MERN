import React, {useState, useEffect} from 'react';
import axios from 'axios';
import SundaeBox from '../components/SundaeBox';

const Main = (props) => {
    const [sundaes, setSundaes] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:2005/api/sundaes/findAll")
            .then(res => {
                console.log(res);
                setSundaes(res.data);
            })
            .catch(err => console.log(err))
    }, [])
    return (
        <div className="App">
            {
                sundaes.map((item, i) => {
                    return <SundaeBox sundae={item} key={i}/>
                })
            }
        </div>
    );
}

export default Main;