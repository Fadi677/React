import React from 'react'
import {useParams} from 'react-router'
const NumberRoute = (props) => {
    const {number}=useParams();
    
    return (
    <div>The Number Is: {number}</div>
    )
}

export default NumberRoute