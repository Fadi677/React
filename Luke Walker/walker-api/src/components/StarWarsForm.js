import React, {useState} from 'react'
import { useHistory } from "react-router-dom";

const searchBy=['people', 'planets', 'starships'];

const StarWarsForm = () => {
    const [selectedType, setSelectedType]=useState(searchBy[0]);
    const [objectId, setObjectId]=useState("");
    const history = useHistory();
    const handleSearch=(e)=>{
        e.preventDefault();
        const Search={selectedType, objectId};
        console.log(Search.selectedType);
        console.log(Search.objectId);
        history.push("/"+selectedType+"/"+objectId);
    };
    
    return (
        <form onSubmit={ handleSearch }>
        <div>
            <label>Search For: </label> 
            <select value={selectedType} onChange={e => setSelectedType(e.target.value)}>
                {searchBy.map( (sType, idx) => 
                    <option key={idx} value={sType}>{sType}</option>
                )}
            </select>
        </div>
        <div>
            <label>ID: </label>
            <input type="number" onChange={ (e) => setObjectId(e.target.value) } />
        </div>
        <input type="submit" value="Search"/>
    </form>
    )
}

export default StarWarsForm