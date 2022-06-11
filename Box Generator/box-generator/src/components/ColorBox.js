import React, {useState} from 'react'

const ColorBox = (props) => {
    const [colorInput, setColorInput]=useState("");
    const handleColor=(e)=>{
        e.preventDefault();
        props.thisColor(colorInput);
        clearState();
        }
    const clearState=()=>{
        setColorInput("");
    }
    return (
        <>
            <form onSubmit={handleColor}>
                <label>Color: </label>
                <input type="text" onChange={(e)=>setColorInput(e.target.value)} value={colorInput}></input>
                <input type="submit" value="add"/>
            </form>
        </>
    )
}

export default ColorBox