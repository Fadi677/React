import React, {useState} from 'react';

const PersonCard = props =>{
    
    const[state, setState]=useState({
        firstName: props.firstName,
        lastName: props.lastName,
        hairColor: props.hairColor,
        age: props.age
    });


    const increaseAge=()=>{
        setState({age: state.age+=1});
    }
        return(
            <div>
                <h2>{props.lastName}, {props.firstName}</h2>
                <p>Age: {state.age}</p>
                <p>Hair Color: {props.hairColor}</p>
                <button className="buttonss" onClick={increaseAge}>Birthday Button for {props.firstName} {props.lastName}</button>
            </div>
        );
    }
export default PersonCard;