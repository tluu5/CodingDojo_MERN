import React from 'react';

const SundaeBox = (props) => {
    return(
        <div className='sundaeBox'>
            <h2>{props.sundae.name}</h2>
            <h4>Flavor: {props.sundae.flavor}</h4>
            <h4>Scoops: {props.sundae.numScoops}</h4>
            <h4>Toppings: {props.sundae.toppings.join(", ")}</h4>
            <h4>Whipped Cream? {props.sundae.whipped ? "heck yeah!" : "boo this sundae sucks!"}</h4>
        </div>
    )
}

export default SundaeBox;