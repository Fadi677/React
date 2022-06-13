import React, {useState} from 'react'

const PokemonAPI = () => {
    const [pokemons, setPokemons]=useState([]);
    const clickHandler=()=>{
        fetch('https://pokeapi.co/api/v2/pokemon?limit=807&offset=0')
        .then(response=>response.json())
        .then(response=>setPokemons(response.results))
        console.log("pokemon api is fetched");
    };
        
    
    return (
        <>
                <button onClick={clickHandler}>Fetch Pokemon</button>
            <div>
                {pokemons.length > 0 && pokemons.map((pokemon, index)=>{
                    return (<div key={index}>{index+1}. {pokemon.name}</div>)
            })}
            </div>
        </>
    )
}

export default PokemonAPI