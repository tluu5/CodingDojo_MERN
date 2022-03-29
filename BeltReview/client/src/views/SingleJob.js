import React, { useEffect, useState } from 'react';
import { useParams, Link, useHistory } from "react-router-dom";
import axios from 'axios';

const SingleJob = (props) => {
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
        <div className='w-75 mx-auto p-5' style={{backgroundColor: job.color}}>
            <h1>{job.title} at {job.company}</h1>
            <h2>Salary: {job.salary}</h2>
            <h2>Remote? {job.remote ? "yes" : "no"}</h2>
            <h2>Active? {job.remote ? "yes" : "no"}</h2>
            <Link className="btn btn-info btn-lg m-3" to={`/jobs/${_id}/edit`}>Edit</Link>
            <button onClick={onDeleteHandler} className="btn btn-danger btn-lg m-3">Delete</button>
            <Link className="btn btn-primary btn-lg m-3" to={"/"}>Back</Link>
        </div>
    )
}

export default SingleJob;