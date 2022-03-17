import React, {Component} from 'react';

class Counter extends Component{
    constructor(props){
        super(props);
        this.state = {
            counter: 0
        }
    }
    increaseCounter = () => {
        // console.log("clicked!!");
        this.setState({
            counter: this.state.counter + 1
        })
    }
    render(){
        const {text} = this.props;
        return(
            <div className='box'>
                {text}
                <h1>{this.state.counter}</h1>
                <button onClick={this.increaseCounter}>click me!!</button>
            </div>
        )
    }
}
export default Counter;