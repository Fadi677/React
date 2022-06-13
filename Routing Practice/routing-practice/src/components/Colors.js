import React from 'react'
import {useParams} from 'react-router'
const Colors = (props) => {
    const {color}=useParams();
    const {bgColor}=useParams();
    return (
    <div style={{color:color, background: bgColor}}>The Word Is Hello</div>
    )
}

export default Colors