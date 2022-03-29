import React, { useEffect, useState } from 'react';
import { useParams, Link, useHistory } from "react-router-dom";
import axios from 'axios';

const SingleProduct = (props) => {

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
        <div className='w-75 mx-auto p-5'>
            <h1>{product.title}</h1>
            <h2>Price: {product.price}</h2>
            <h2>Description: {product.description}</h2>
            <Link className="btn btn-info btn-lg m-3" to={`/products/${_id}/edit`}>Edit</Link>
            <button onClick={onDeleteHandler} className="btn btn-danger btn-lg m-3">Delete</button>
            <Link className="btn btn-primary btn-lg m-3" to={"/"}>Back</Link>
        </div>
    )
}

export default SingleProduct;