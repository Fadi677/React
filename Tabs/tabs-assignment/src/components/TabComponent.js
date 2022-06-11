import React, {useState} from 'react'

const TabComponent = (props) => {
    const arrayOfContent=["Tab1", "Tab2", "Tab3"];
    const tabHandler=(e, item)=>{
        console.log(item);
        props.tabName(item);
    }
    return (
        <>
            {arrayOfContent.map((item, i)=>
                <label id="labelId" class="btn btn-dark" key={i} onClick={(e)=>{tabHandler(e, item)}}>{item} </label>
            )}
        </>
        
    )
}

export default TabComponent