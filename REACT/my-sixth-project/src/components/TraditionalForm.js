import React, { useState } from 'react';

const TraditionalForm = (props) => {
    const [flavor, setFlavor] = useState("");
    const [sauce, setSauce] = useState("");
    const [topping, setTopping] = useState("");
    const [whipped, setWhipped] = useState(false);
    return(
        <div className='w-25 p-3 border border-dark mx-auto my-3'>
            <form>
                <div className='form-group'>
                    <label className='form-label'>Flavor</label>
                    <input type="text" className='form-control' onChange={(event) => {setFlavor(event.target.value)}}/>
                </div>
                <div className='form-group'>
                    <label className='form-label'>Sauce</label>
                    <input type="text" className='form-control' onChange={(event) => {setSauce(event.target.value)}}/>
                </div>
                <div className='form-group'>
                    <label className='form-label'>Topping</label>
                    <select className='form-select' onChange={(event) => {setTopping(event.target.value)}}>
                        <option>Pecans</option>
                        <option>Peanut</option>
                        <option>Cookie</option>
                        <option>Brownies</option>
                        <option>Waffle</option>
                        <option>Red Bean</option>
                        <option>Milk</option>
                    </select>
                </div>
                <div className='form-check my-3'>
                    <label className='form-check-label'>Whipped Cream?</label>
                    <input type="checkbox" className='form-check-input' onChange={(event) => {setWhipped(event.target.checked)}}/>
                    <marquee><input type="submit" className="btn btn-primary btn-lg"/></marquee>
                </div>
            </form>
        </div>
    )
}
export default TraditionalForm;