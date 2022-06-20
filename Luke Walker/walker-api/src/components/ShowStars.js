import React,{useEffect, useState} from 'react'
import { useHistory, useParams } from "react-router-dom";
import axios from'axios';

const ShowStars = (props) => {
    const {selectedType1, objectId1}=useParams();
    const [displayData, setDisplayData]=useState({});
    let arrayOfKeys = Object.keys(displayData).slice(0,5);
    useEffect(
        ()=>{
            axios.get(`http://swapi.dev/api/${selectedType1}/${objectId1}`)
            .then(res=>{
                console.log(res.data)
                setDisplayData(res.data)
            })
            .catch(reject => setDisplayData({error: "These aren't the droids you are looking for"}))
        },[selectedType1, objectId1]
    )
    console.log("--------"+selectedType1);
    return (
        <div>
            <div>ShowStars</div>
            <h1>{displayData.name}</h1>
            {
                arrayOfKeys.map((key, index)=>
                <p>{key} : {displayData[key]}</p>
                )
            }
        </div>
    )
}

export default ShowStars