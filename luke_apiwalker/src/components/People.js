import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import Homeworld from './Homeworld';

const People = (props) => {
    const [people, setPeople] = useState("");
    const {id} = useParams();
    const history = useHistory();
    useEffect(() => {
        console.log("page loaded, useEffect running");
        axios.get("https://swapi.dev/api/people/" + id + "/")
            .then(response => {
                console.log(response);
                setPeople(response.data.sprites.front_default);
            })
            .catch(() => history.push("/error"));
    },[id]);
    if(people == null){
        return "Loading..."
    }
    return (
        <div>
            <h1>Name: {people.name}</h1>
            <Homeworld url={people.homeworld}/>
            <p>Height: {people.height}</p>
            <p>Hair Color: {people.hair_color}</p>
            <p>Eye Color: {people.eye_color}</p>
            <p>Skin Color: {people.skin_color}</p>
        </div>
    );
}

export default People;