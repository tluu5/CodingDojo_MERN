import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useHistory, useParams, Link } from "react-router-dom";

const Update = (props) => {
    const [product, setProduct] = useState({});

    const {_id} = useParams();

    const history = useHistory();

    useEffect(()=>{
        axios.get("http://localhost:2010/api/products/" + _id)
            .then(res=>{
                // console.log(res);
                setProduct(res.data);
            })
            .catch(err=>{
                console.log(err.response);
            })
    },[_id])

    const [form,setForm] = useState({
        title: "",
        price: null,
        description: ""
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
        axios.patch("http://localhost:2010/api/products/" + _id + "/edit", form)
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
        if(window.confirm("Are you sure you want to remove this product?")){
            axios.delete(`http://localhost:2010/api/products/${_id}`)
                .then(res=>{
                    // console.log(res);
                    history.push("/");
                })
                .catch(err=>console.log(err.response))
        }
    }

    return(
        <div>
            <h1>Update product!</h1>
            <form className='w-75 mx-auto' onSubmit={onSubmitHandler}>

                <div className='form-group'>
                    <label htmlFor="title">Title</label>
                    <input onChange={onChangeHandler} type="text" name='title' className='form-control' placeholder={product.title}/>
                    <span className='alert-danger'>{error.title && error.title.message}</span>
                </div>

                <div className='form-group'>
                    <label htmlFor="price">Price</label>
                    <input onChange={onChangeHandler} type="number" name='price' className='form-control' placeholder={product.price}/>
                    <span className='alert-danger'>{error.price && error.price.message}</span>
                </div>

                <div className='form-group'>
                    <label htmlFor="description">Description</label>
                    <input onChange={onChangeHandler} type="text" name='description' className='form-control' placeholder={product.description}/>
                    <span className='alert-danger'>{error.description && error.description.message}</span>
                </div>

                <input type="submit" className='btn btn-success btn-lg d-block mx-auto my-3' />

                <button onClick={onDeleteHandler} className="btn btn-danger btn-lg m-3">Delete</button>

                <Link className="btn btn-primary btn-lg m-3" to={"/"}>Cancel</Link>
            </form>
        </div>
    )
}

export default Update;