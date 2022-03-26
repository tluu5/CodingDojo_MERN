import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import Homeworld from './Homeworld';

const People = (props) => {
    const [peopleState, setPeopleState] = useState("");
    const {id} = useParams();
    const history = useHistory();
    useEffect(() => {
        axios.get("https://swapi.dev/api/people/" + id + "/")
            .then(res => {
                console.log(res);
                setPeopleState(res.data.sprites.front_default);
            })
            .catch(() => history.push("/error"));
    },[id]);
    if(peopleState == null){
        return "Loading..."
    }
    return (
        <div>
            <h1>Name: {peopleState.name}</h1>
            <Homeworld url={peopleState.homeworld}/>
            <p>Height: {peopleState.height}</p>
            <p>Hair Color: {peopleState.hair_color}</p>
            <p>Eye Color: {peopleState.eye_color}</p>
            <p>Skin Color: {peopleState.skin_color}</p>
        </div>
    );
}

export default People;