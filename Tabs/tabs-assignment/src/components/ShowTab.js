import React, {useState} from 'react'

const ShowTab = (props) => {
    return (
    <>
        <textarea value={props.tabToShow===""?"":"This is content of "+props.tabToShow}></textarea>
    </>
    )
}

export default ShowTab