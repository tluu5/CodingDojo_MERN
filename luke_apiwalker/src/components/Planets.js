import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

const Planets = (props) => {
    const [planets, setPlanets] = useState("");
    const {id} = useParams();
    const history = useHistory();
    useEffect(() => {
        axios.get("https://swapi.dev/api/planets/" + id + "/")
            .then(response => {
                console.log(response);
                setPlanets(response.data.sprites.front_default);
            })
            .catch(() => history.push("/error"));
    },[id]);
    if(planets == null){
        return "Loading..."
    }
    return (
        <div>
            <h1>Name: {planets.name}</h1>
            <p>Climate: {planets.climate}</p>
            <p>Terrain: {planets.terrain}</p>
            <p>Surface Water: {planets.surface_water}</p>
            <p>Population: {planets.population}</p>
        </div>
    );
}

export default Planets;