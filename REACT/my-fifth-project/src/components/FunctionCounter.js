import React, {useState} from 'react';

const FunctionCounter = (props) => {
    const {text} = props;
    const [state,setState] = useState(0);
    const [hover, setHover] = useState(false);
    const increaseCounter = () => {
        setState(state + 1);
    }
    const onHover = () => {
        setHover(!hover);
    }
    const hoverStyle = {
        backgroundColor: "black",
        color: "white"
    }
    return(
        <div onMouseEnter={onHover} onMouseLeave={onHover} style={hover ? hoverStyle : {}} className='border border-dark w-25 mx-auto my-2'>
            <h1>Count: {state}</h1>
            <button onClick={increaseCounter} className='btn btn-primary btn-1g'>click me!</button>
            <p><em>this is a functional component</em></p>
            <h3>{text}</h3>
        </div>
    )
}
export default FunctionCounter;