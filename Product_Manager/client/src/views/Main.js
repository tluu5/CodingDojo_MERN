import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";

const Main = (props) => {
    const [products,setProducts] = useState([]);
    useEffect(()=>{
        axios.get("http://localhost:2010/api/products/findAll")
            .then(res=>{
                // console.log(res);
                setProducts(res.data);
            })
            .catch(err=>{
                console.log(err.response);
            })
    },[])
    const onDeleteHandler = (_id, arrIndex) => {
        // console.log("deleteing" + arrIndex);
        axios.delete(`http://localhost:2010/api/products/${_id}`)
            .then(res=>{
                // console.log(res);
                const copyState = [...products];
                copyState.splice(arrIndex,1);
                setProducts(copyState);
            })
            .catch(err=>console.log(err.response))
    }
    return (
        <div className='w-75 mx-auto'>
            <Link to="/products/create">Create a new product!</Link>
            <h1>Here are your products</h1>
            <table className='table table-dark table-striped table-hover'>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((item, i) => {
                            return <tr key={i}>
                                <td><Link to={`/products/${item._id}`}>{item.title}</Link></td>
                                <td>{item.price}</td>
                                <td>{item.description}</td>
                                <td><Link to={`/products/${item._id}/edit`}>Edit</Link> | <button onClick={() => onDeleteHandler(item._id, i)} className='btn btn-danger btn-sm'>Delete</button></td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Main;