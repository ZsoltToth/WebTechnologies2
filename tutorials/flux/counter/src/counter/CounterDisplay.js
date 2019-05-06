import React from 'react';
import CounterStore from "./CounterStore";

class CounterDisplay extends React.Component{

    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this)
        this.state = {
            counter: CounterStore._counter
        };
    }

    onChange(){
        this.setState({counter : CounterStore._counter});
    }

    componentDidMount(){
        CounterStore.addChangeListener(this.onChange);
    }

    componentWillUnmount(){
        CounterStore.removeChangeListener(this.onChange);
    }

    render(){
        return(<div>{this.state.counter}</div>)
    }

}

export default CounterDisplay;