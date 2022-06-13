import React from 'react'
import {useParams} from 'react-router'

const Word = (props) => {
    const {anyWord}=useParams();
    return (
    <div>The Word Is: {anyWord}</div>
    )
}

export default Word