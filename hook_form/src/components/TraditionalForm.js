import React, { useState } from 'react';

const TraditionalForm = (props) => {
    const [first_name, setfirst_name] = useState("");
    const [first_nameError, setfirst_nameError] = useState("");
    const [last_name, setlast_name] = useState("");
    const [last_nameError, setlast_nameError] = useState("");
    const [email, setemail] = useState("");
    const [emailError, setemailError] = useState("");
    const [password, setpassword] = useState("");
    const [passwordError, setpasswordError] = useState("");
    const [confirm_password, setconfirm_password] = useState("");
    const [confirm_passwordError, setconfirm_passwordError] = useState("");
    const onSubmitHandler = (event) => {
        event.preventDefault();
        const submitMe = {first_name,last_name,email,password,confirm_password};
        if(first_name.length < 2){
            setfirst_nameError("First Name must be at least 2 characters");
        }
        else{
            setfirst_nameError("");
        }
        if(last_name.length < 2){
            setlast_nameError("Last Name must be at least 2 characters");
        }
        else{
            setlast_nameError("");
        }
        if(email.length < 2){
            setemailError("Email must be at least 2 characters");
        }
        else{
            setemailError("");
        }
        if(password.length < 8){
            setpasswordError("Password must be at least 8 characters");
        }
        else{
            setpasswordError("");
        }
        if(confirm_password != password){
            setconfirm_passwordError("Password must match");
        }
        else{
            setconfirm_passwordError("");
        }
    }
    return(
        <div className='w-25 p-3 border border-dark mx-auto my-3'>
            <form onSubmit={onSubmitHandler}>
                <div className='form-group'>
                    <label className='form-label'>First Name</label>
                    <input type="text" className='form-control' onChange={(event) => {setfirst_name(event.target.value)}}/>
                    <span className='alert-danager'>{first_nameError}</span>
                </div>
                <div className='form-group'>
                    <label className='form-label'>Last Name</label>
                    <input type="text" className='form-control' onChange={(event) => {setlast_name(event.target.value)}}/>
                    <span className='alert-danager'>{last_nameError}</span>
                </div>
                <div className='form-group'>
                    <label className='form-label'>Email</label>
                    <input type="text" className='form-control' onChange={(event) => {setemail(event.target.value)}}/>
                    <span className='alert-danager'>{emailError}</span>
                </div>
                <div className='form-group'>
                    <label className='form-label'>Password</label>
                    <input type="password" className='form-control' onChange={(event) => {setpassword(event.target.value)}}/>
                    <span className='alert-danager'>{passwordError}</span>
                </div>
                <div className='form-group'>
                    <label className='form-label'>Confirm Password</label>
                    <input type="password" className='form-control' onChange={(event) => {setconfirm_password(event.target.value)}}/>
                    <span className='alert-danager'>{confirm_passwordError}</span>
                </div>
                <input type="submit" className="btn btn-primary btn-lg"/>
            </form>
        </div>
    )
}
export default TraditionalForm;