import React, {useState} from 'react'
import axios from 'axios';

const PokemonAxiosAPI = () => {
    const [pokemonsAXIOS, setPokemonsAxios]=useState([]);
    const clickHandler=()=>{
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=807&offset=0')
        .then(pokemonsAXIOS=>{setPokemonsAxios(pokemonsAXIOS.data.results)})
        console.log("pokemon AXIOS api is fetched");
    };
    return (
        <>
        <button onClick={clickHandler}>Fetch AXIOS Pokemon API</button>
    <div>
        {pokemonsAXIOS.length > 0 && pokemonsAXIOS.map((pokemon, index)=>{
            return (<div key={index}>{index+1}. {pokemon.name}</div>)
    })}
    </div>
</>
    )
}

export default PokemonAxiosAPI