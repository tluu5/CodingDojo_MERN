import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch, useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

const Starships = (props) => {
    const [starships, setStarships] = useState("");
    const {id} = useParams();
    const history = useHistory();
    useEffect(() => {
        console.log("page loaded, useEffect running");
        axios.get("https://swapi.dev/api/starships/" + id + "/")
            .then(response => {
                console.log(response);
                setStarships(response.data.sprites.front_default);
            })
            .catch(() => history.push("/error"));
    },[id]);
    if(starships == null){
        return "Loading..."
    }
    return (
        <div>
            <h1>Name: {starships.name}</h1>
            <p>Model: {starships.model}</p>
            <p>Manufacturer: {starships.manufacturer}</p>
            <p>Cost in Credits: {starships.cost_in_credits}</p>
            <p>Length: {starships.length}</p>
        </div>
    );
}

export default Starships;