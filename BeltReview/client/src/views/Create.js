import React, { useState } from 'react';
import axios from "axios";
import { useHistory, Link } from "react-router-dom";

const Create = (props) => {
    const [form,setForm] = useState({
        title: "",
        company: "",
        salary: null,
        remote: false,
        color: "",
        numJobs: null
    })

    const [error,setError] = useState({});
    const history = useHistory();
    const onChangeHandler = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.type === "checkbox" ? event.target.checked : event.target.value
        })
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        axios.post("http://localhost:2009/api/jobs/create", form)
            .then(res=>{
                console.log(res);
                history.push("/");
            })
            .catch(err=>{
                // console.log(err.response.data.err.error);
                setError(err.response.data.err.errors);
            })
    }

    return(
        <div>
            <h1>Add a new job!</h1>
            <form className='w-75 mx-auto' onSubmit={onSubmitHandler}>
                <div className='form-group'>
                    <label htmlFor="title">Title</label>
                    <input onChange={onChangeHandler} type="text" name='title' className='form-control'/>
                    <span className='alert-danger'>{error.title && error.title.message}</span>
                </div>

                <div className='form-group'>
                    <label htmlFor="company">Company</label>
                    <input onChange={onChangeHandler} type="text" name='company' className='form-control'/>
                    <span className='alert-danger'>{error.company && error.company.message}</span>
                </div>

                <div className='form-group'>
                    <label htmlFor="salary">Salary</label>
                    <input onChange={onChangeHandler} type="number" name='salary' className='form-control'/>
                </div>

                <div className='form-check w-25 m-3 d-block mx-auto'>
                    <input onChange={onChangeHandler} type="checkbox" name='remote' className='form-check-input'/>
                    <label className='form-check-label' htmlFor="remote">Remote?</label>
                </div>

                <div className='form-group'>
                    <label htmlFor="color">Color</label>
                    <input onChange={onChangeHandler} type="color" name='color' className='form-control form-control-color d-block mx-auto'/>
                </div>

                <div className='form-group'>
                    <label htmlFor="numJobs">How many positions?</label>
                    <input onChange={onChangeHandler} type="number" name='numJobs' className='form-control'/>
                    <span className='alert-danger'>{error.numJobs && error.numJobs.message}</span>
                </div>

                <input type="submit" className='btn btn-success btn-lg d-block mx-auto my-3' />
                <Link className="btn btn-primary btn-lg m-3" to={"/"}>Cancel</Link>
            </form>
        </div>
    )
}

export default Create;