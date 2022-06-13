import React from 'react'
import {useParams} from 'react-router'
const NumberRoute = (props) => {
    const {number}=useParams();
    const {color}=useParams();
    const {bgColor}=useParams();
    if(isNaN(number)){
        return (
            <div style={{color:color, background: bgColor}}>The Word Is: {number}</div>
        )
    }
    else{
        return (
            <div>The Number Is: {number}</div>
            )
    }
    
}

export default NumberRoute