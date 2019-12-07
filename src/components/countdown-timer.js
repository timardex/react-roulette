import React, {Component} from 'react';

class CountdownTimer extends Component {
    constructor(props){
        super(props)
        this.tick = this.tick.bind(this)
        this.state = {seconds: 10}
    }
  
    componentDidMount(){
        this.timer = setInterval(this.tick, 1000);
    }

    tick(){
        if (this.state.seconds < 2) {
            this.setState({seconds: null})
            clearInterval(this.timer);
        } else {
            this.setState({seconds: this.state.seconds - 1})
        }
    }
    render(){
        return (
            <span>{this.state.seconds}</span>
        )
    }
}

export default CountdownTimer;