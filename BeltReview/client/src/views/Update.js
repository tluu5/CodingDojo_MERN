import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useHistory, useParams, Link } from "react-router-dom";

const Update = (props) => {
    const [job, setJob] = useState({});
    const {_id} = useParams();
    const history = useHistory();
    useEffect(()=>{
        axios.get("http://localhost:2009/api/jobs/" + _id)
            .then(res=>{
                // console.log(res);
                setJob(res.data);
            })
            .catch(err=>{
                console.log(err.response);
            })
    },[_id])

    const [form,setForm] = useState({
        title: "",
        company: "",
        salary: null,
        remote: false,
        color: "",
        numJobs: null
    })
    const [error,setError] = useState({});
    const onChangeHandler = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.type === "checkbox" ? event.target.checked : event.target.value
        })
    }
    const onSubmitHandler = (event) => {
        event.preventDefault();
        axios.patch("http://localhost:2009/api/jobs/" + _id + "/edit", form)
            .then(res=>{
                console.log(res);
                history.push("/");
            })
            .catch(err=>{
                // console.log(err.response.data.err.error);
                setError(err.response.data.err.errors);
            })
    }

    const onDeleteHandler = () => {
        if(window.confirm("Are you sure you want to remove this job?")){
            axios.delete(`http://localhost:2009/api/jobs/${_id}`)
                .then(res=>{
                    // console.log(res);
                    history.push("/");
                })
                .catch(err=>console.log(err.response))
        }
    }

    return(
        <div>
            <h1>Update job!</h1>
            <form className='w-75 mx-auto' style={{backgroundColor: job.color}} onSubmit={onSubmitHandler}>
                <div className='form-group'>
                    <label htmlFor="title">Title</label>
                    <input onChange={onChangeHandler} type="text" name='title' className='form-control' placeholder={job.title}/>
                    <span className='alert-danger'>{error.title && error.title.message}</span>
                </div>

                <div className='form-group'>
                    <label htmlFor="company">Company</label>
                    <input onChange={onChangeHandler} type="text" name='company' className='form-control' placeholder={job.company}/>
                    <span className='alert-danger'>{error.company && error.company.message}</span>
                </div>

                <div className='form-group'>
                    <label htmlFor="salary">Salary</label>
                    <input onChange={onChangeHandler} type="number" name='salary' className='form-control' placeholder={job.salary}/>
                </div>

                <div className='form-check w-25 m-3 d-block mx-auto'>
                    <input onChange={onChangeHandler} type="checkbox" name='remote' className='form-check-input' placeholder={job.remote ? "yes" : "no"}/>
                    <label className='form-check-label' htmlFor="remote">Remote?</label>
                </div>

                <div className='form-group'>
                    <label htmlFor="color">Color</label>
                    <input onChange={onChangeHandler} type="color" name='color' className='form-control form-control-color d-block mx-auto'/>
                </div>

                <div className='form-group'>
                    <label htmlFor="numJobs">How many positions?</label>
                    <input onChange={onChangeHandler} type="number" name='numJobs' className='form-control' placeholder={job.numJobs}/>
                    <span className='alert-danger'>{error.numJobs && error.numJobs.message}</span>
                </div>

                <input type="submit" className='btn btn-success btn-lg d-block mx-auto my-3' />
                <button onClick={onDeleteHandler} className="btn btn-danger btn-lg m-3">Delete</button>
                <Link className="btn btn-primary btn-lg m-3" to={"/"}>Cancel</Link>
            </form>
        </div>
    )
}

export default Update;