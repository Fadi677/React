import React, {useState} from 'react'

const ShowBoxes = (props) => {
    const colorsArray=props.colorToShowColorArray;
    console.log(colorsArray);
    return (
        <>
        <div style={{display: 'flex'}}>
            {props.colorToShowColorArray.map( (item, i) => 
            <div key={i} style={{width: 200, height: 200, backgroundColor:item.colorInput, margin: 10}}></div>
            )}
        </div>
        </>
    )
}

export default ShowBoxes