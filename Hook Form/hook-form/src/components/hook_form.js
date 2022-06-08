import React, {useState} from 'react';

const HookForm = (props) => {
    const[firstName, setFirstName]=useState("");
    const[lastName, setLastName]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[confirmPassword, setConfirmPassword]=useState("");

    const createUser = (e) => {
        e.preventDefault();
        const newUser = {firstName, lastName, email, password, confirmPassword};
        console.log(newUser);
        clearState();
    };
    const clearState = () => {
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
    };
    return(
        <>
        <form onSubmit={createUser}>
            <div>
                <label>First Name: </label> 
                <input type="text" value={firstName} onChange={ (e) => setFirstName(e.target.value) } />
            </div>
            <div>
                <label>Last Name: </label> 
                <input type="text" value={lastName} onChange={ (e) => setLastName(e.target.value) } />
            </div>
            <div>
                <label>Email: </label> 
                <input type="text" value={email} onChange={ (e) => setEmail(e.target.value) } />
            </div>
            <div>
                <label>Password: </label> 
                <input type="password" value={password} onChange={ (e) => setPassword(e.target.value) } />
            </div>
            <div>
                <label>Confirm Password: </label> 
                <input type="password" value={confirmPassword} onChange={ (e) => setConfirmPassword(e.target.value) } />
            </div>
            <input type="submit" onClick={createUser} value="Create User" />
        </form>
        <div>
        <label>First Name: {firstName}</label>
        </div>
        <div>
        <label>Last Name: {lastName}</label>
        </div>
        <div>
        <label>Email: {email}</label>
        </div>
        <div>
        <label>Password: {password}</label>
        </div>
        <label>Confirm Password: {confirmPassword}</label>
        </>
    )
}

export default HookForm