import React, {useState} from 'react';

const HookForm = (props) => {
    const[firstName, setFirstName]=useState("");
    const[firstNameError, setFirstNameError]=useState("");
    const[lastName, setLastName]=useState("");
    const[lastNameError, setLastNameError]=useState("");
    const[email, setEmail]=useState("");
    const[emailError, setEmailError]=useState("");
    const[password, setPassword]=useState("");
    const[passwordError, setPasswordError]=useState("");
    const[confirmPassword, setConfirmPassword]=useState("");
    const[confirmPasswordError, setConfirmPasswordError]=useState("");
    
    const handleFirstName=(e)=>{
        setFirstName(e.target.value);
        if(e.target.value.length<2){
            setFirstNameError("first name must be at least 2 characters")
        }
    }
    const handleLastName=(e)=>{
        setLastName(e.target.value);
        if(e.target.value.length<2){
            setLastNameError("last name must be at least 2 characters")
        }
    }
    const handleEmail=(e)=>{
        setEmail(e.target.value);
        if(e.target.value.length<5){
            setEmailError("email must be at least 5 characters")
        }
    }
    const handlePassword=(e)=>{
        setPassword(e.target.value);
        if(e.target.value.length<8){
            setPasswordError("password must be at least 8 characters")
        }
    }
    const handleConfirmPassword=(e)=>{
        setConfirmPassword(e.target.value);
        if(e.target.value.length<8 && {password}!==e.target.value){
            setConfirmPasswordError("passwords must match ")
        }
    }
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
                <input type="text" value={firstName} onChange={handleFirstName} />
                {
                    firstNameError ?
                    <p style={{color:'red'}}>{firstNameError}</p> :
                    ''
                }
            </div>
            <div>
                <label>Last Name: </label> 
                <input type="text" value={lastName} onChange={handleLastName} />
                {
                    lastNameError ?
                    <p style={{color:'red'}}>{lastNameError}</p> :
                    ''
                }
            </div>
            <div>
                <label>Email: </label> 
                <input type="text" value={email} onChange={handleEmail} />
                {
                    emailError ?
                    <p style={{color:'red'}}>{emailError}</p> :
                    ''
                }
            </div>
            <div>
                <label>Password: </label> 
                <input type="password" value={password} onChange={handlePassword} />
                {
                    passwordError ?
                    <p style={{color:'red'}}>{passwordError}</p> :
                    ''
                }
            </div>
            <div>
                <label>Confirm Password: </label> 
                <input type="password" value={confirmPassword} onChange={handleConfirmPassword} />
                {
                    confirmPasswordError ?
                    <p style={{color:'red'}}>{confirmPasswordError}</p> :
                    ''
                }
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