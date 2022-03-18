import React, {Component} from 'react';
class Pixel extends Component{
    constructor(props){
        super(props);
        this.state = {
            filled: false
        }
    }
    onClickHandler = () => {
        this.setState({
            filled: !this.state.filled
        })
    }
    render(){
        return(
            <div onMouseOver={this.onClickHandler} className={this.state.filled ? "pixel filled" : "pixel"}></div>
        )
    }
}
export default Pixel;