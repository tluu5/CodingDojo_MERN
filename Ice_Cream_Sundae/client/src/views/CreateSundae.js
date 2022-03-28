import React, {useState} from "react";
import axios from "axios";
import {useHistory} from "react-router-dom";

const CreateSundae = (props) => {
    const [form, setForm] = useState({
        name: "",
        flavor: "",
        whipped: false,
        numScoops: null
    })
    const [error, setError] = useState({});
    const history = useHistory();
    const onChangeHandler = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.type === "checkbox" ? event.target.checked : event.target.value
        })
    }
    const onSubmitHandler = (event) => {
        event.preventDefault();
        axios.post("http://localhost:2005/api/sundaes/create", form)
            .then(res=>{
                console.log(res);
                history.push("/");
            })
            .catch(err=>{
                console.log(err.response.data.err.errors);
                setError(err.response.data.err.errors);
            })
    }
    return(
        <div className="w-75 mx-auto my-4">
            <h1>Create a Sundae</h1>
            <form className="w-50 mx-auto" onSubmit={onSubmitHandler}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" className="form-control" onChange={onChangeHandler}/>
                    <span className="alert-danger">{error.name && error.name.message}</span>
                </div>
                <div className="form-group">
                    <label htmlFor="flavor">Flavor:</label>
                    <input type="text" name="flavor" className="form-control" onChange={onChangeHandler}/>
                    <span className="alert-danger">{error.flavor && error.flavor.message}</span>
                </div>
                <div className="form-check m-3">
                    <label className="form-check-label" htmlFor="whipped">Whipped cream?:</label>
                    <input type="checkbox" name="whipped" className="form-check-input" onChange={onChangeHandler}/>
                    <span className="alert-danger">{error.whipped && error.whipped.message}</span>
                </div>
                <div className="form-group">
                    <label htmlFor="numScoops">How many scoops?:</label>
                    <input type="number" name="numScoops" className="form-control" onChange={onChangeHandler}/>
                    <span className="alert-danger">{error.numScoops && error.numScoops.message}</span>
                </div>
                <input type="submit" className="btn btn-info btn-lg mt-3" />
            </form>
        </div>
    )
}

export default CreateSundae;