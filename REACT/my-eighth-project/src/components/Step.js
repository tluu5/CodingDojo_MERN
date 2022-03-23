import React from 'react';

const Step = (props) => {
    return(
        <div className='step d-flex justify-contant-around my-3'>
            {
                props.direction === "right"
                    ? <span className='direction'>➡️</span>
                    : props.direction === "left"
                    ? <span className='direction'>⬅️</span>
                    : <span className='direction'>⬆️</span>
            }
            <h1>{props.instructions}</h1>
            <h2>{props.distance} miles</h2>
        </div>
    )
}

export default Step;